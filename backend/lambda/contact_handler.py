import base64
import json
import os
from typing import Any, Dict

import boto3

ses = boto3.client("ses", region_name=os.getenv("AWS_REGION", "ap-south-1"))

ALLOWED_ORIGIN = os.getenv("ALLOWED_ORIGIN", "*")
TO_EMAIL = os.getenv("TO_EMAIL", "")
FROM_EMAIL = os.getenv("FROM_EMAIL", "")
SUBJECT_PREFIX = os.getenv("SUBJECT_PREFIX", "[Website Contact]")


def _response(status_code: int, payload: Dict[str, Any]) -> Dict[str, Any]:
    return {
        "statusCode": status_code,
        "headers": {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": ALLOWED_ORIGIN,
            "Access-Control-Allow-Headers": "Content-Type,Authorization",
            "Access-Control-Allow-Methods": "OPTIONS,POST",
        },
        "body": json.dumps(payload),
    }


def _parse_event_body(event: Dict[str, Any]) -> Dict[str, Any]:
    raw_body = event.get("body") or "{}"
    if event.get("isBase64Encoded"):
        raw_body = base64.b64decode(raw_body).decode("utf-8")
    if isinstance(raw_body, str):
        return json.loads(raw_body)
    return raw_body


def _sanitize(value: Any) -> str:
    return str(value).strip() if value is not None else ""


def lambda_handler(event: Dict[str, Any], _context: Any) -> Dict[str, Any]:
    method = (event.get("requestContext", {}) or {}).get("http", {}).get("method")
    if not method:
        method = event.get("httpMethod")

    if method == "OPTIONS":
        return _response(200, {"ok": True})

    if method != "POST":
        return _response(405, {"message": "Method not allowed"})

    if not TO_EMAIL or not FROM_EMAIL:
        return _response(500, {"message": "Email configuration missing in Lambda environment"})

    try:
        body = _parse_event_body(event)
    except Exception:
        return _response(400, {"message": "Invalid JSON payload"})

    name = _sanitize(body.get("name"))
    email = _sanitize(body.get("email"))
    company = _sanitize(body.get("company"))
    phone = _sanitize(body.get("phone"))
    subject = _sanitize(body.get("subject"))
    message = _sanitize(body.get("message"))

    missing = [
        field
        for field, value in {
            "name": name,
            "email": email,
            "subject": subject,
            "message": message,
        }.items()
        if not value
    ]
    if missing:
        return _response(400, {"message": f"Missing required fields: {', '.join(missing)}"})

    email_subject = f"{SUBJECT_PREFIX} {subject}".strip()
    text_body = (
        "New contact form submission\n\n"
        f"Name: {name}\n"
        f"Email: {email}\n"
        f"Company: {company or 'N/A'}\n"
        f"Phone: {phone or 'N/A'}\n"
        f"Subject: {subject}\n\n"
        "Message:\n"
        f"{message}\n"
    )

    html_body = f"""
    <html>
      <body style=\"font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;\">
        <h2 style=\"margin-bottom: 12px;\">New Contact Form Submission</h2>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Company:</strong> {company or 'N/A'}</p>
        <p><strong>Phone:</strong> {phone or 'N/A'}</p>
        <p><strong>Subject:</strong> {subject}</p>
        <hr style=\"margin: 16px 0;\" />
        <p><strong>Message:</strong></p>
        <p>{message.replace(chr(10), '<br/>')}</p>
      </body>
    </html>
    """

    try:
        ses.send_email(
            Source=FROM_EMAIL,
            Destination={"ToAddresses": [TO_EMAIL]},
            ReplyToAddresses=[email],
            Message={
                "Subject": {"Data": email_subject, "Charset": "UTF-8"},
                "Body": {
                    "Text": {"Data": text_body, "Charset": "UTF-8"},
                    "Html": {"Data": html_body, "Charset": "UTF-8"},
                },
            },
        )
    except Exception:
        return _response(500, {"message": "Failed to send email"})

    return _response(200, {"ok": True, "message": "Email sent"})
