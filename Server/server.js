
const express = require ("express")

const app =express()
const acceuilRoute = require("./Routes/AcceuilRoute")
const coursRoute = require("./Routes/CoursRoute")
const FiliereRoute = require("./Routes/filiereRoute")
const StudentRoute = require("./Routes/StudentRoute")
const cors = require("cors")

app.use(express.json())
app.use(cors())
app.use("/AddFiliere",FiliereRoute)
app.use("/addCours",coursRoute)
app.use("/student",StudentRoute)
app.use("/acceuil",acceuilRoute)
app.listen(4000 || process.env.PORT)