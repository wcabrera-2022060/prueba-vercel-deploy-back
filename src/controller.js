import User from './model.js'

export const create = async (req, res) => {
  try {
    const user = new User(req.body)
    await user.save()
    res.status(201).send({ message: 'User created', user })
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}

export const test = (req, res) => {
  res.send({ message: 'Hello World' })
}

export const list = async (req, res) => {
  const htmlResponse =
    `<html>
      <head>
        <title>NodeJs y Express en Vercel</title>
      </head>
      <body>
        <h1>Soy un proyecto back end
          en vercel</h1>
      </body>
    </html>`

    res.send(htmlResponse)
}