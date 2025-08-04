const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security middleware
app.use(helmet());
app.use(express.json());

// CORS options
const corsOptions = {
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: false,
};

// Rate limiting - limit to 5 requests per 15 minutes per IP
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: {
    error: 'Too many contact form submissions, please try again later.'
  }
});

// Handle preflight for contact endpoint
app.options('/api/contact', cors(corsOptions));

// Nodemailer transporter configuration
const createTransporter = () =>
  nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

// Validate required env vars
const validateEnvVars = () => {
  const required = ['EMAIL_USER', 'EMAIL_PASS', 'RECIPIENT_EMAIL'];
  const missing = required.filter((key) => !process.env[key]);

  if (missing.length > 0) {
    console.error(`Missing required environment variables: ${missing.join(', ')}`);
    process.exit(1);
  }
};

// Email template
const createEmailTemplate = ({ name, email, subject, message }) => ({
  from: {
    name: 'Portfolio Contact Form',
    address: process.env.EMAIL_USER,
  },
  to: process.env.RECIPIENT_EMAIL,
  replyTo: email,
  subject: `Portfolio Contact: ${subject}`,
  html: `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; border-radius: 8px 8px 0 0; }
        .content { background: #f9f9f9; padding: 20px; border-radius: 0 0 8px 8px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #555; }
        .value { margin-top: 5px; padding: 10px; background: white; border-left: 4px solid #667eea; }
        .message-box { background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #667eea; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h2>📩 New Contact Form Submission</h2>
          <p>You've received a new message from your portfolio website!</p>
        </div>
        <div class="content">
          <div class="field">
            <div class="label">👤 Name:</div>
            <div class="value">${name}</div>
          </div>
          <div class="field">
            <div class="label">📧 Email:</div>
            <div class="value">${email}</div>
          </div>
          <div class="field">
            <div class="label">📋 Subject:</div>
            <div class="value">${subject}</div>
          </div>
          <div class="field">
            <div class="label">💬 Message:</div>
            <div class="message-box">${message.replace(/\n/g, '<br>')}</div>
          </div>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #ddd;">
          <p style="color: #666; font-size: 12px;">
            📅 Received: ${new Date().toLocaleString()}<br>
            🌐 Source: Portfolio Contact Form
          </p>
        </div>
      </div>
    </body>
    </html>
  `,
  text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject}

Message:
${message}

Received: ${new Date().toLocaleString()}
Source: Portfolio Contact Form
  `
});

// Contact form data validation
const validateContactData = (req, res, next) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, error: 'All fields are required' });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ success: false, error: 'Please provide a valid email address' });
  }

  if (name.length > 100 || subject.length > 200 || message.length > 2000) {
    return res.status(400).json({ success: false, error: 'One or more fields exceed maximum length' });
  }

  next();
};

// Contact endpoint with CORS and rate limit
app.post('/api/contact', cors(corsOptions), limiter, validateContactData, async (req, res) => {
  try {
    const transporter = createTransporter();
    await transporter.verify();
    const mailOptions = createEmailTemplate(req.body);
    const info = await transporter.sendMail(mailOptions);

    res.status(200).json({
      success: true,
      message: "Message sent successfully! I'll get back to you soon.",
      messageId: info.messageId,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    const errorMessage =
      error.code === 'EAUTH'
        ? 'Email authentication failed. Please check server configuration.'
        : error.code === 'ECONNREFUSED'
        ? 'Unable to connect to email server. Please try again later.'
        : 'Failed to send message. Please try again later.';

    res.status(500).json({ success: false, error: errorMessage });
  }
});

// 404 fallback
app.use('*', (req, res) => {
  res.status(404).json({ success: false, error: 'Endpoint not found' });
});

// Global error handler
app.use((error, req, res, next) => {
  console.error('Unhandled error:', error);
  res.status(500).json({ success: false, error: 'Internal server error' });
});

// Start server
const startServer = () => {
  validateEnvVars();
  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
};

// Graceful shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received, shutting down gracefully');
  process.exit(0);
});

process.on('SIGINT', () => {
  console.log('SIGINT received, shutting down gracefully');
  process.exit(0);
});

startServer();
