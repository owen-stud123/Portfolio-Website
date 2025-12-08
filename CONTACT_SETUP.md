# Contact Form Setup Guide

## Prerequisites
- Node.js installed
- Gmail account for sending emails

## Installation Steps

### 1. Install Dependencies
Already done! You've installed: `express`, `nodemailer`, `cors`

Now install one more package:
```bash
npm install dotenv
```

### 2. Set Up Gmail App Password

**Important:** You need a Gmail App Password (not your regular password)

1. Go to your Google Account settings
2. Enable 2-Step Verification (if not already enabled)
3. Go to: https://myaccount.google.com/apppasswords
4. Select "Mail" and "Windows Computer" (or Other)
5. Click "Generate"
6. Copy the 16-character password

### 3. Create Environment File

Create a file named `.env` in your project root:
```env
EMAIL_USER=ganzaowe23@gmail.com
EMAIL_PASS=your-16-character-app-password
PORT=5000
```

**Replace** `your-16-character-app-password` with the password from step 2.

### 4. Running the Application

You need to run **TWO** terminals:

**Terminal 1 - Frontend (Vite):**
```bash
npm run dev
```

**Terminal 2 - Backend (Express):**
```bash
npm run server
```

The frontend will run on `http://localhost:5173`
The backend will run on `http://localhost:5000`

### 5. Testing

1. Open your portfolio in the browser
2. Go to the contact section
3. Fill out the form
4. Submit
5. Check your email (ganzaowe23@gmail.com) for the message!

## Troubleshooting

### "Failed to send email"
- Check your Gmail app password is correct in `.env`
- Make sure 2-Step Verification is enabled
- Verify the backend server is running

### "CORS Error"
- Make sure both frontend and backend are running
- The backend includes CORS configuration

### "Cannot connect to server"
- Ensure the backend is running on port 5000
- Check if another application is using port 5000

## Security Notes

- **NEVER** commit the `.env` file to Git (it's already in `.gitignore`)
- Share only `.env.example` file with others
- Keep your Gmail App Password secret

## Deployment

When deploying to production (Vercel, Netlify, etc.):
- Deploy backend separately or use serverless functions
- Update the API URL in Contact.jsx from `localhost:5000` to your production URL
- Add environment variables in your hosting platform
