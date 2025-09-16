import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required' },
        { status: 400 }
      );
    }

    // Create transporter (using custom cPanel SMTP)
    // You'll need to set up environment variables for email credentials
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST, // Your cPanel SMTP host (e.g., mail.yourdomain.com)
      port: parseInt(process.env.SMTP_PORT || '465'), // Usually 587 for TLS or 465 for SSL
      secure: process.env.SMTP_SECURE === 'true', // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER, // Your email address (e.g., contact@ultrapharma.co.ke)
        pass: process.env.EMAIL_PASS, // Your email password
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'j.k@ultrapharma.co.ke',
      subject: subject || `New Contact Form Submission from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #30d5c8;">New Contact Form Submission</h2>
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject || 'No subject provided'}</p>
          </div>
          <div style="background: white; padding: 20px; border-radius: 8px; border-left: 4px solid #30d5c8;">
            <h3>Message:</h3>
            <p style="line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #eee;">
          <p style="color: #666; font-size: 14px;">
            This email was sent from the Ultra Pharma website contact form.
          </p>
        </div>
      `,
      // Also include plain text version
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Subject: ${subject || 'No subject provided'}

Message:
${message}

---
This email was sent from the Ultra Pharma website contact form.
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
