import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, phone, service, eventDate, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Configure Mailgun SMTP
    const transporter = nodemailer.createTransport({
      host: "smtp.mailgun.org",
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAILGUN_SMTP_USER,
        pass: process.env.MAILGUN_SMTP_PASS,
      },
    });

    // Email details
    const info = await transporter.sendMail({
      from: `"${name}" <${process.env.MAILGUN_SMTP_USER}>`,
      to: process.env.RECEIVING_EMAIL,
      subject: `📩 New Contact Form - ${service || "General"}`,
      html: `
        <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <style>
              body {
                font-family: Arial, sans-serif;
                margin: 20px;
                padding: 0;
                background-color: transparent;
                color: #333; /* Default text color for light mode */
              }

              h2 {
                text-align: center;
                color: inherit;
              }

              .contact-table {
                width: 100%;
                max-width: 600px;
                margin: 20px auto;
                border-collapse: collapse;
                background-color: transparent;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
              }

              .contact-table td {
                padding: 12px;
                vertical-align: top;
                border-bottom: 1px solid #ddd; /* Default border for light mode */
              }

              .contact-table .label {
                width: 30%;
                font-weight: bold;
                color: inherit;
                border-right: 1px solid #ddd; /* Light mode column divider */
              }

              .contact-table .value {
                width: 70%;
                color: inherit;
                word-wrap: break-word;
              }

              .contact-table tr:last-child td {
                border-bottom: none;
              }

              .contact-table td strong {
                color: inherit;
              }

              /* Dark mode styles */
              @media (prefers-color-scheme: dark) {
                body {
                  color: white;
                  background-color: #1e1e1e; /* Dark background for dark mode */
                }

                .contact-table td {
                  border-bottom: 1px solid #444;
                }

                .contact-table .label {
                  color: #ccc;
                  border-right: 1px solid #444;
                }

                .contact-table .value {
                  color: #fff;
                }

                .contact-table td strong {
                  color: #fff;
                }
              }

              /* Light mode styles */
              @media (prefers-color-scheme: light) {
                body {
                  color: #333;
                  background-color: transparent;
                }

                .contact-table td {
                  border-bottom: 1px solid #ddd;
                }

                .contact-table .label {
                  color: #555;
                  border-right: 1px solid #ddd;
                }

                .contact-table .value {
                  color: #333;
                }

                .contact-table td strong {
                  color: #333;
                }
              }
            </style>
          </head>
          <body>
            <h2>New Contact Form Submission</h2>

            <table class="contact-table">
              <tr>
                <td class="label"><strong>Name:</strong></td>
                <td class="value">${name}</td>
              </tr>
              <tr>
                <td class="label"><strong>Email:</strong></td>
                <td class="value">${email}</td>
              </tr>
              <tr>
                <td class="label"><strong>Phone:</strong></td>
                <td class="value">${phone || "N/A"}</td>
              </tr>
              <tr>
                <td class="label"><strong>Service:</strong></td>
                <td class="value">${service}</td>
              </tr>
              <tr>
                <td class="label"><strong>Event Date:</strong></td>
                <td class="value">${eventDate || "N/A"}</td>
              </tr>
              <tr>
                <td class="label"><strong>Message:</strong></td>
                <td class="value">${message}</td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    return res.status(200).json({ success: true, id: info.messageId });
  } catch (err) {
    console.error("❌ Email send error:", err);
    return res.status(500).json({ success: false, error: "Failed to send email" });
  }
}
