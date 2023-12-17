
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors')

const app = express();
app.use(cors())

app.use(express.json());

app.post('/send-email', async (req, res) => {
  const { recipient, subject, content } = req.body;

  try {
    // Create a nodemailer transporter using your ESP's SMTP credentials
    const transporter = nodemailer.createTransport({
    
     service: 'gmail',

      auth: {
        user: 'ahmed1878414884@gmail.com',
        pass: 'egwvdvfzdoizslyd',
       
      },
    });

    // Define the email message
    const message = {
      from: 'ahmed1878414884@gmail.com',
      to: recipient,
      subject: subject,
      text: content,
    };

    // Send the email
    const info = await transporter.sendMail(message);

    console.log('Email sent:', info.messageId);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send email' });
  }
});

app.get("/api",(req,res)=>{
    res.json({"user":["user1","user2","user2","user2","user2"]})
})
app.get("/message", (req, res) => {
    res.json({ message: "Hello from server!" });
  });
app.listen(5000, () => {
  console.log('Server is running on port 5000');
});