import User from './model.js'

export const home = (req, res) => {
  res.send('Hello from API')
}

export const getApi = (req, res) => {
  const htmlResponse = `
<html>
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

export const createUser = async (req, res) => {
  try {
    const user = new User(req.body)
    await user.save()
    res.status(200).send({message: 'User created', user})
  } catch (error) {
    return res.status(500).send({message: 'error', error})
  }
} 