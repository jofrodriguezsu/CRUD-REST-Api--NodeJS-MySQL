const express = requier("express")
const router = express.Router()

router.get("/users")

router.post("/users")

router.put("/users/:id")

router.delete("/users/:id")


module.exports = router