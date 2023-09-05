const express =require("express")
const AcceuilCtrl = require ("../Controller/AcceuilController")
const verifyjwt = require("../middleware/verifyjwt")
const router = express.Router()

router.get("/etudiant",verifyjwt,AcceuilCtrl.getAll)
module.exports = router ;