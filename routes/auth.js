var express = require('express')
var router = express()

const { signout,signup,signin } = require("../controllers/auth")


router.get("/signout",signout)

router.post("/signup",signup)

router.post("/signin",signin)

module.exports = router;