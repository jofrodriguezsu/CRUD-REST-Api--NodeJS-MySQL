const user = require ("../models/userModel.js")

exports.createUser = async (req, res) => {
  const {name, email} = req.body
  const id = await user.createUser(name, email)

  res.status(200).json({message: `User created successfully`, data: {id, name, email}})
}

exports.getAllUsers = async (req, res) => {
  const users = await user.getAllUsers()
  res.status(200).json(users)
}

exports.updateUser = async(req, res) => {
  const {id} = req.params
  const {name, email} = req.body
  await user.updateUser(id, name, email)

  res.status(200).json({message: "User updated successfully", data: {id, name, email}})
}

exports.deleteUser = async(req, res) =>{
  const {id} = req.params
  await user.deleteUser(id)
  res.status(200).json({message: "User deleted successfully"})
}
