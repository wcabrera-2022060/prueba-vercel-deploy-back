import User from './model.js'

export const create = async (req, res) => {
  try {
    const user = new User(req.body)
    await user.save()
    res.status(201).send({message: 'User created', user})
  } catch (error) {
    res.status(500).send({ message: error.message })
  }
}

export const test = (req, res) => {
  res.send({ message: 'Hello World' })
}