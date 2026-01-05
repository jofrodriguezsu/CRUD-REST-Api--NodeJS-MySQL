require("dotenv").config()
const express = require ("express")
const app = express()
const router = require("./routes/userRoutes.js")

const PORT = process.env.PORT || 3001

app.use("/api", router)

app.listen(PORT, ()=>{
  console.log(`Server running on port ${PORT}`)
})