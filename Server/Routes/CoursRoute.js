const express = require("express")
const CoursCtrl = require ("../Controller/CoursController")
const router = express.Router()

router.get("/getAllcours",CoursCtrl.GetAllCours)
router.post("/addNewCours",CoursCtrl.AddCours)
router.post("/getspecify",CoursCtrl.GetspecifiyCours)
router.get("/select",CoursCtrl.GetOneCours)
router.post("/get",CoursCtrl.getContentCour)

module.exports = router