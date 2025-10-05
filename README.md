# S2S Creations Website

A professional media studio website built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Elegant, royal design with smooth animations
- 📱 Fully responsive across all devices
- 📧 Contact form with SMTP email integration
- 🎬 Professional portfolio showcase
- ⚡ Fast loading with optimized performance
- 🎭 Beautiful loading screen animation

## Setup Instructions

### 1. Install Dependencies
```bash
npm install
```

### 2. Email Configuration (Optional)

To enable email functionality:

1. Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```

2. Update the `.env` file with your SMTP credentials:
```env
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_EMAIL=info@s2screations.com
```

3. For Gmail, you'll need to:
   - Enable 2-factor authentication
   - Generate an app password
   - Use the app password in `SMTP_PASS`

### 3. Run the Development Server
```bash
npm run dev
```

### 4. Run the Email Server (Optional)
If you want to test email functionality:

```bash
# Install server dependencies
npm install express nodemailer cors dotenv

# Run the email server
node server/emailServer.js
```

## Project Structure

```
src/
├── components/          # Reusable components
├── pages/              # Page components
├── styles/             # CSS files
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
└── App.tsx             # Main app component
```

## Email Integration

The contact form supports two modes:

1. **Demo Mode** (Default): Logs form data to console
2. **Production Mode**: Sends actual emails via SMTP

To switch to production mode, update the `sendEmailDemo` import in `Contact.tsx` to use `sendEmail` instead.

## Customization

- **Colors**: Update the color scheme in Tailwind classes
- **Content**: Modify text content in page components
- **Images**: Replace Pexels URLs with your own images
- **Animations**: Adjust Framer Motion animations as needed

## Deployment

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting provider
3. Set up the email server on your backend infrastructure

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- React Router
- Lucide React Icons
- Nodemailer (for email)