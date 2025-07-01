// functions/send-email.js
const mailjet = require('node-mailjet');

// IMPORTANT: For production, these environment variables MUST be set on your Netlify/AWS/Google Cloud dashboard!
// For local testing of the serverless function, you might still use a .env file locally.
// (You'd typically use `npm install dotenv` for local testing only)
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const mailjetClient = mailjet.connect(
  process.env.MJ_APIKEY_PUBLIC,
  process.env.MJ_APIKEY_PRIVATE
);

// This is the standard structure for a serverless function handler
exports.handler = async (event, context) => {
  // 1. Ensure it's a POST request
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  // 2. Parse the request body (comes as a JSON string in event.body)
  let formData;
  try {
    formData = JSON.parse(event.body);
  } catch (error) {
    return { statusCode: 400, body: 'Invalid JSON body' };
  }

  const { senderName, senderEmail, message } = formData;

  if (!senderName || !senderEmail || !message) {
    return { statusCode: 400, body: 'All form fields are required.' };
  }

  // 3. Construct the Mailjet message
  try {
    const request = mailjetClient
      .post("send", { 'version': 'v3.1' })
      .request({
        "Messages": [
          {
            "From": {
              "Email": "your_verified_sender_email@yourdomain.com", // <<< IMPORTANT: Use your VERIFIED Mailjet sender email
              "Name": "Your Website Contact Form"
            },
            "To": [
              {
                "Email": "pauljeffreysdev@gmail.com", // <<< Your personal recipient email
                "Name": "Paul Jeffreys"
              }
            ],
            "Subject": `New Contact Form Submission from ${senderName}`,
            "TextPart": `Name: ${senderName}\nEmail: ${senderEmail}\nMessage: ${message}`,
            "HTMLPart": `<h3>New Contact Form Submission</h3>
                         <p><strong>Name:</strong> ${senderName}</p>
                         <p><strong>Email:</strong> ${senderEmail}</p>
                         <p><strong>Message:</strong><br>${message.replace(/\n/g, '<br>')}</p>`
          }
        ]
      });

    // 4. Send the email via Mailjet
    const result = await request;
    console.log('Mailjet response:', result.body);

    // 5. Return success response
    if (result.body.Messages[0].Status === 'success') {
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Email sent successfully!' }),
        headers: {
          'Content-Type': 'application/json',
          // CORS header - crucial if your React app is on a different domain/subdomain
          // For maximum compatibility, you can use '*' but restrict it for production
          'Access-Control-Allow-Origin': 'https://www.pjcdev.com', // Replace with your actual domain
          'Access-Control-Allow-Methods': 'POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Content-Type',
        }
      };
    } else {
      console.error('Mailjet API Error:', result.body);
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Failed to send email via Mailjet.', details: result.body }),
        headers: { 'Content-Type': 'application/json' }
      };
    }

  } catch (error) {
    console.error('Serverless Function Error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'An error occurred on the server while sending the email.' }),
      headers: { 'Content-Type': 'application/json' }
    };
  }
};