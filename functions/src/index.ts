const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const admin = require('firebase-admin');
admin.initializeApp();

const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'theofficialwebsiteguys@gmail.com',
    pass: 'tshz rgqz yyhn tiwg'
  }
});

exports.sendEmail = functions.https.onCall(() => {
  
  const mailOptions = {
    from: 'The Website Guys <theofficialwebsiteguys@gmail.com>',
    to: 'jaredhfinn@gmail.com',
    subject: 'New Form Submission',
    text: `Name: Jared\nEmail: jaredhfinn@gmail.com\nMessage: Testing Email through firebase`,
    html: `<p><strong>Name:</strong> Jared</p>
           <p><strong>Email:</strong> jaredhfinn@gmail.com</p>
           <p><strong>Message:</strong> Testing Email through firebase</p>`,
  };

  return mailTransport.sendMail(mailOptions)
    .then(() => ({ success: true, message: 'Email sent successfully!' }))
    .catch((error:any) => ({ success: false, message: error.message }));
});
