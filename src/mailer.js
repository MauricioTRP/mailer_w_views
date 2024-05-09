const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
})

async function send(options) {
  const mail = await transporter.sendMail(options)

  console.log(mail.messageId)
}

module.exports = {
  send
}