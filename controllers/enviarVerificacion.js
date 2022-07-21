const nodemailer = require('nodemailer')
const { google } = require("googleapis")
const OAuth2 = google.auth.OAuth2

const enviarVerificacion = async (email, string) => {

  const myOAuth2Client = new OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_SECRET_ID,
    "https://developers.google.com/oauthplayground"
  )

  myOAuth2Client.setCredentials({
    refresh_token: process.env.GOOGLE_CLIENT_REFRESH_TOKEN
  })

  const accessToken = myOAuth2Client.getAccessToken()

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "SomosBoxBonny@gmail.com",
      type: "OAuth2",
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_SECRET_ID,
      refreshToken: process.env.GOOGLE_CLIENT_REFRESH_TOKEN,
      accessToken: accessToken
    },
    tls: {
      rejectUnauthorized: false //para evitar que bloquee el antivirus
    }
  })

  let mailOptions = {
    from: process.env.USER_MAIL,
    to: email,
    subject: 'verificar cuenta',
    html: `
          <a href=${process.env.BACKEND_URL}api/verificar/${string}>CLICK!</a>
          <h3>para confirmar!</h3>`
  }

  await transporter.sendMail(mailOptions, function (error, response) {
    if (error) {
      console.log(error)
    } else {
      console.log(`checkea ${email} para confirmar tu cuenta`)
    }
  })
}

module.exports = enviarVerificacion