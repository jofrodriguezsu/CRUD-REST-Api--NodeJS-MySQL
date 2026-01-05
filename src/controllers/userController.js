const user = require ("../models/userModel.js")

exports.createUser = async (req, res) => {
  const {name, email} = req.body

  if(!name || !email){
    return res.status(400).json({message: "Missing fields!"})
  }

  try{
  const id = await user.createUser(name, email)

  res.status(201).json({message: `User created successfully`, data: {id, name, email}})
  }
  catch(err){
    console.error(err)
    res.status(500).json({message: "Server error"})
  }
}

exports.getAllUsers = async (req, res) => {

  try{
  const users = await user.getAllUsers()
  res.status(200).json(users)
  }
  catch(err){
    console.error(err)
    res.status(500).json({message: "Server error"})
  }
}

exports.updateUser = async(req, res) => {
  const {id} = req.params
  const {name, email} = req.body

  if(!name || !email){
    return res.status(400).json({message: "Missing field(s)!"})
  }

  try{
    
    const updatedRows = await user.updateUser(id, name, email)

    if(updatedRows === 0){
      return res.status(404).json({message: "User not found"})
    }

    res.status(200).json({message: "User updated successfully", data: {id, name, email}})

  }
  catch(err){
    console.error(err)
    res.status(500).json({message: "Server error"})
  }
}

exports.deleteUser = async(req, res) =>{
  const {id} = req.params

  if(!id){
    return res.status(400).json({message: "Id not provided"})
  }
  
  try{
    const rowDeleted = await user.deleteUser(id)

    if(rowDeleted === 0){
      return res.status(404).json({message: "User not found"})
    }

    res.status(200).json({message: "User deleted successfully"})
  }
  catch(err){
    console.error(err)
    res.status(500).json({message: "Server error"})
  }
}
