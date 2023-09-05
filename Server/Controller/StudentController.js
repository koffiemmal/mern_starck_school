const database = require("../config/mysql")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
exports.login=(req,res)=>{
  /*   console.log(req.body)
    res.status(201).json({message:"bien recu"}) */

let searchStudent = "SELECT * FROM etudiant WHERE email_etudiant=?"


database.query(searchStudent,[req.body.email],(error,result)=>{
    if(error){
        res.status(500).json(error)
    }
    if(result.length>0){
        bcrypt.compare(req.body.motdepasse,result[0].password_etudiant)
        .then((valid)=>{
            if(valid)
            {
                let accessToken = jwt.sign(
                    {id_etudiant:result[0].id_etudiant},
                    "12345678",
                    {expiresIn:"16h"}
                );
                res.status(200).json({accessToken})
            }
            else{
                res.status(404).json({error:"password incorrect"})
            }
            
        })
        .catch((error)=>{
            res.status(500).json(error)
        })
    }
    else{
        res.status(401).json({error: "user not found"})
    }

    /* console.log(req.body)
    res.status(201).json({message:result}) */
})










}
exports.signup=(req,res)=>{
/* console.log(req.body)
res.status(201).json("inscription")
/*  */
let insertStudent = "INSERT INTO etudiant (nom_etudiant,prenom_etudiant,email_etudiant,password_etudiant) VALUES(?,?,?,?)"

bcrypt.hash(req.body.motdepasse,5)
.then((hash)=>{
    database.query(insertStudent,[req.body.nom,req.body.prenom,req.body.email,hash],(error,result)=>{
    
    console.log(req.body)
    res.status(201).json({message:"l'inscription c'est bien deroulé",hash:hash})
    
    })
    
})
.catch((error)=>{console.log(error)})



 
}