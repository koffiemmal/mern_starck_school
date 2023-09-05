const database = require("../config/mysql")



exports.addfiliere=(req,res)=>{

    let insertfilliere="INSERT INTO filiere (nom_filiere,description_filiere) VALUES(?,?)"
    database.query(insertfilliere,[req.body.nom_filiere,req.body.description_filiere],(error,result)=>{

        console.log(req.body)
        res.status(201).json({message:result})

    })
}
exports.getFilliere=(req,res)=>{

    let selectFiliere = "select * from filiere;"
    database.query(selectFiliere,(error,result)=>{
        res.status(201).json(result)
    })
}