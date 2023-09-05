const express = require("express")
const FiliereCtrl = require("../Controller/filiereController")
const router = express.Router()

router.post("/AddNewFiliere",FiliereCtrl.addfiliere)
router.get("/getFiliere",FiliereCtrl.getFilliere)

module.exports = router