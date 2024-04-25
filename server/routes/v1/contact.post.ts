import { helloTransporter } from '~/utils/mailer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  consola.info('Received a POST request:', body)
  await helloTransporter.sendMail({
    from: {
      name: 'My website Contact Form', // sender name
      address: 'hello@example.com', // sender address
    },
    to: 'admin@example.com', // list of receivers
    replyTo: body.email, // reply to
    subject: `Message from ${body.name}`, // Subject line
    text: body.message, // plain text body
    html: `<b>${body.message}</b>`, // html body
  })
  return {
    statusCode: 200,
    body: 'email sent successfully!',
  }
})
