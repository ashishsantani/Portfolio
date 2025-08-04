# Portfolio Backend Server

This is the backend server for the portfolio contact form, built with Express.js and Nodemailer.

## Features

- ✅ Email sending via Nodemailer with Gmail SMTP
- ✅ Rate limiting to prevent spam
- ✅ CORS configuration for frontend communication
- ✅ Input validation and sanitization
- ✅ Beautiful HTML email templates
- ✅ Security headers with Helmet
- ✅ Environment-based configuration
- ✅ Graceful error handling

## Prerequisites

Before running this server, you need:

1. **Node.js** (v14 or higher)
2. **Gmail account** with App Password enabled
3. **Gmail App Password** (not your regular Gmail password)

## Gmail App Password Setup

1. Go to your [Google Account settings](https://myaccount.google.com/)
2. Navigate to "Security" → "2-Step Verification" (enable if not already enabled)
3. Scroll down to "App passwords"
4. Generate a new app password for "Mail"
5. Copy the 16-character password (this will be your `EMAIL_PASS`)

## Installation

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create your `.env` file:
   ```bash
   cp .env.example .env
   ```

4. Running the Server
   using nodemon server.js

