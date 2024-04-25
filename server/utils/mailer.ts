import nodemailer from 'nodemailer'

export const helloTransporter = nodemailer.createTransport({
  host: 'example.com',
  port: 465,
  secure: true,
  auth: {
    user: 'hello@example.com',
    pass: 'password',
  },
})

// ... you can add more transporters here
