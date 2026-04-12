# Backend & Frontend Integration Contracts

## Overview
This document outlines the API contracts and integration plan for Parimal Srivastav's portfolio website.

## Current Frontend Implementation

### Components
1. **Navbar.jsx** - Sticky navigation with glassmorphism
2. **Hero.jsx** - Hero section with personal info and CTAs
3. **Projects.jsx** - Project showcase with images grouped by domain
4. **Contact.jsx** - Contact form (currently mocked)
5. **Footer.jsx** - Footer with links

### Mock Data (`/app/frontend/src/data/mock.js`)
- `projectsData` - All 12 projects with images, descriptions, tech stacks
- `personalInfo` - Name, email, phone, location, resume URL
- `skills` - Tech skills array

### Currently Mocked
- **Contact Form Submission** - Shows success message but doesn't send email

## Backend Requirements

### 1. Contact Form Email Endpoint

**Endpoint:** `POST /api/contact`

**Request Body:**
```json
{
  "name": "string",
  "email": "string",
  "message": "string"
}
```

**Response Success (200):**
```json
{
  "success": true,
  "message": "Email sent successfully"
}
```

**Response Error (400/500):**
```json
{
  "success": false,
  "error": "Error message"
}
```

**Email Configuration:**
- SMTP Host: smtp.gmail.com
- SMTP Port: 587
- From Email: parimaldhruv7@gmail.com
- To Email: parimaldhruv7@gmail.com
- Password: (stored in .env as EMAIL_PASSWORD)

**Email Template:**
```
Subject: New Portfolio Contact Message

From: [name]
Email: [email]

Message:
[message]

---
Sent from Parimal Srivastav's Portfolio
```

## Frontend Integration

### Contact.jsx Changes
1. Replace mock setTimeout with actual API call
2. Add proper error handling
3. Show success/error messages based on API response

**Before (Mocked):**
```javascript
setTimeout(() => {
  console.log('Form submitted:', formData);
  setIsSubmitting(false);
  setSubmitSuccess(true);
  ...
}, 1500);
```

**After (Integrated):**
```javascript
try {
  const response = await axios.post(`${API}/contact`, formData);
  if (response.data.success) {
    setSubmitSuccess(true);
    setFormData({ name: '', email: '', message: '' });
  }
} catch (error) {
  setSubmitError(error.response?.data?.error || 'Failed to send message');
} finally {
  setIsSubmitting(false);
}
```

## Backend Implementation Plan

### 1. Install Dependencies
```bash
cd /app/backend
pip install nodemailer-python aiosmtplib python-email
```

### 2. Create Email Service (`/app/backend/services/email_service.py`)
- SMTP connection setup
- Email sending function
- Error handling

### 3. Create Contact Endpoint (`/app/backend/routes/contact.py`)
- Request validation
- Call email service
- Return appropriate response

### 4. Update Environment Variables (`/app/backend/.env`)
```
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=parimaldhruv7@gmail.com
EMAIL_PASSWORD=swia hhxz xild beim
```

### 5. Register Route in `server.py`
```python
from routes.contact import contact_router
app.include_router(contact_router)
```

## Security Considerations
- Validate email format on backend
- Rate limit contact form submissions
- Sanitize input to prevent injection
- Use environment variables for sensitive data

## Testing Checklist
- [ ] Contact form submits successfully
- [ ] Email received at parimaldhruv7@gmail.com
- [ ] Error handling works for invalid inputs
- [ ] Loading states display correctly
- [ ] Success message shows after submission
- [ ] Form resets after successful submission
- [ ] SMTP credentials work correctly

## Notes
- All project data remains static (no database needed)
- Only contact form requires backend integration
- Resume download links directly to hosted PDF
- Project images hosted on external CDN
