const nodemailer = require("nodemailer");
const { google } = require("googleapis");
const { OAuth2 } = google.auth;

const OAuth_link = "https://developer.google.com/oauthplayground";

const {
  MAILING_EMAIL,
  MAILING_PASSWORD,
  MAILING_ID,
  MAILING_SECRET,
  MAILING_ACCESS,
  MAILING_REFRESH,
} = process.env;

const auth = new OAuth2({
  MAILING_ID,
  MAILING_REFRESH,
  MAILING_SECRET,
  OAuth_link,
});

// exports.sendVerifyEmail = (email, fName, url) => {
//   auth.setCredentials({
//     refresh_token: MAILING_REFRESH,
//   });

//   const accessToken = auth.getAccessToken();

//   const stmp = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       type: "OAuth2",
//       user: MAILING_EMAIL,
//       clientId: MAILING_ID,
//       clientSecret: MAILING_SECRET,
//       refreshToken: MAILING_REFRESH,
//       accessToken,
//     },
//   });

//   const mailOptions = {
//     from: MAILING_EMAIL,
//     to: email,
//     subject: "Salam - Social Media App Verification.",
//     html: ``,
//   };

//   stmp.sendMail(mailOptions, (err, res) => {
//     if (err) return err;
//     return res;
//   });
// };

exports.sendVerifyEmail = (email, fName, url) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: MAILING_EMAIL,
      pass: MAILING_PASSWORD
    }
  })

  const mailOptions = {
    from: MAILING_EMAIL,
    to: email,
    subject: "Salam - Social Media Account Verification.",
    html: `
       <body style="margin: 0; padding: 0; font-family: Arial, sans-serif; background-color: #f4f4f4;"> <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);"> <div style="text-align: center; padding: 20px 0; border-bottom: 2px solid #e0e0e0;"> <h1 style="color: #333; margin: 0; font-size: 28px;">Salam</h1> <p style="color: #666; margin: 5px 0 0 0;">Social Media Platform</p> </div> <div style="padding: 30px 0;"> <h2 style="color: #333; margin-bottom: 20px;">Hi ${fName}!</h2> <p style="color: #555; line-height: 1.6; margin-bottom: 25px;">Welcome to Salam! We're excited to have you join our community.</p> <p style="color: #555; line-height: 1.6; margin-bottom: 30px;">To complete your registration and start connecting with friends, please verify your email address by clicking the button below:</p> <div style="text-align: center; margin: 30px 0;"> <a href="${url}" style="background-color: #007bff; color: white; padding: 12px 30px; text-decoration: none; border-radius: 5px; font-weight: bold; display: inline-block;">Verify My Account</a> </div> <p style="color: #777; font-size: 14px; line-height: 1.5;">If the button doesn't work, copy and paste this link into your browser:</p> <p style="color: #007bff; word-break: break-all; font-size: 14px;">${url}</p> </div> <div style="border-top: 2px solid #e0e0e0; padding-top: 20px; text-align: center;"> <p style="color: #999; font-size: 12px; margin: 0;">This verification link will expire in 24 hours.</p> <p style="color: #999; font-size: 12px; margin: 5px 0 0 0;">© 2024 Salam. All rights reserved.</p> </div> </div> </body>
    `,
  };

  transporter.sendMail(mailOptions, (err, res) => {
    if (err) return err;
    return res;
  });

}
