const express = require("express")
const StudentCtrl = require("../Controller/StudentController")
const router = express.Router()

router.post("/login",StudentCtrl.login)
router.post("/signup",StudentCtrl.signup)

module.exports= router;