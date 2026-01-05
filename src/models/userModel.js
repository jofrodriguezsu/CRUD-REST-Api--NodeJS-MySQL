const db = require ("../config/db.js")

const createUser = async (name, email) => {
  const [result] = await db.execute(
    "INSERT INTO users (name, email) VALUES (?,?)",
    [name, email]
  )
  return result.insertId
}

const getAllUsers = async () => {
  const [rows] = await db.execute(
    "SELECT * FROM users"
  )
  return rows
}

const updateUser = async (id, name, email) => {
  const [result] = await db.execute(
    "UPDATE users SET name =?, email =? WHERE id =?",
    [name, email, id]
  )

  return result.affectedRows
}

const deleteUser = async (id) => {
  const [result] = await db.execute(
    "DELETE FROM users WHERE id =?", [id]
  )

  return result.affectedRows
}

module.exports = {
  createUser,
  getAllUsers,
  updateUser,
  deleteUser
}