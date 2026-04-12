import aiosmtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
import logging

logger = logging.getLogger(__name__)

async def send_contact_email(name: str, email: str, message: str) -> bool:
    """
    Send contact form email using Gmail SMTP
    
    Args:
        name: Sender's name
        email: Sender's email
        message: Message content
    
    Returns:
        bool: True if email sent successfully, False otherwise
    """
    try:
        # Email configuration
        smtp_host = os.getenv('EMAIL_HOST', 'smtp.gmail.com')
        smtp_port = int(os.getenv('EMAIL_PORT', '587'))
        smtp_user = os.getenv('EMAIL_USER')
        smtp_password = os.getenv('EMAIL_PASSWORD')
        
        if not smtp_user or not smtp_password:
            logger.error("Email credentials not configured")
            return False
        
        # Create message
        msg = MIMEMultipart('alternative')
        msg['Subject'] = f"New Portfolio Contact Message from {name}"
        msg['From'] = smtp_user
        msg['To'] = smtp_user
        msg['Reply-To'] = email
        
        # Email body
        text_content = f"""
New Contact Form Submission

From: {name}
Email: {email}

Message:
{message}

---
Sent from Parimal Srivastav's Portfolio Website
        """
        
        html_content = f"""
<!DOCTYPE html>
<html>
<head>
    <style>
        body {{ font-family: Arial, sans-serif; line-height: 1.6; color: #333; }}
        .container {{ max-width: 600px; margin: 0 auto; padding: 20px; }}
        .header {{ background: linear-gradient(135deg, #0a0e27 0%, #1a1a2e 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }}
        .content {{ background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }}
        .field {{ margin-bottom: 15px; }}
        .label {{ font-weight: bold; color: #0a0e27; }}
        .message-box {{ background: white; padding: 15px; border-left: 4px solid #06b6d4; margin-top: 10px; border-radius: 4px; }}
        .footer {{ text-align: center; margin-top: 20px; color: #666; font-size: 12px; }}
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h2 style="margin: 0;">New Contact Form Submission</h2>
        </div>
        <div class="content">
            <div class="field">
                <span class="label">From:</span> {name}
            </div>
            <div class="field">
                <span class="label">Email:</span> <a href="mailto:{email}">{email}</a>
            </div>
            <div class="field">
                <span class="label">Message:</span>
                <div class="message-box">
                    {message.replace(chr(10), '<br>')}
                </div>
            </div>
            <div class="footer">
                Sent from Parimal Srivastav's Portfolio Website
            </div>
        </div>
    </div>
</body>
</html>
        """
        
        # Attach both text and HTML versions
        part1 = MIMEText(text_content, 'plain')
        part2 = MIMEText(html_content, 'html')
        msg.attach(part1)
        msg.attach(part2)
        
        # Send email
        await aiosmtplib.send(
            msg,
            hostname=smtp_host,
            port=smtp_port,
            start_tls=True,
            username=smtp_user,
            password=smtp_password,
        )
        
        logger.info(f"Contact email sent successfully from {email}")
        return True
        
    except Exception as e:
        logger.error(f"Failed to send contact email: {str(e)}")
        return False
