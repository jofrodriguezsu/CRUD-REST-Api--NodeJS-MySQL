const express = require ("express")
const router = require("./routes/userRoutes.js")
const errorMiddleware = require("./middleware/errorMiddleware.js")

const app = express()

app.use(express.json())
app.use("/api", router)

app.use(errorMiddleware)

module.exports = app