const user = require ("../models/userModel.js")

exports.createUser = async (req, res, next) => {
  const {name, email} = req.body

  if(!name || !email){
    const err = new Error("missing field")
    err.statusCode = 400
    return next(err)
  }

  try{
  const id = await user.createUser(name, email)

  res.status(201).json({message: `User created successfully`, data: {id, name, email}})
  }
  catch(err){
    next(err)
  }
}

exports.getAllUsers = async (req, res, next) => {

  try{
  const users = await user.getAllUsers()
  res.status(200).json(users)
  }
  catch(err){
    next(err)
  }
}

exports.updateUser = async(req, res, next) => {
  const {id} = req.params
  const {name, email} = req.body

  if(!name || !email){
    const err = new Error("Missing field!")
    err.statusCode = 400
    return next(err)
  }

  try{
    
    const updatedRows = await user.updateUser(id, name, email)

    if(updatedRows === 0){
      const err = new Error ("User not found")
      err.statusCode = 404
      return next(err)
    }

    res.status(200).json({message: "User updated successfully", data: {id, name, email}})

  }
  catch(err){
    next(err)
  }
}

exports.deleteUser = async(req, res, next) =>{
  const {id} = req.params
  
  try{
    const rowDeleted = await user.deleteUser(id)

    if(rowDeleted === 0){
      const err = new Error ("User not found")
      err.statusCode = 404
      return next(err)
    }

    res.status(200).json({message: "User deleted successfully"})
  }
  catch(err){
    next(err)
  }
}
