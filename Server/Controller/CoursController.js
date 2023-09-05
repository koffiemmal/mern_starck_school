const database = require ("../config/mysql")

exports.AddCours = (req,res)=>{
 /*  console.log(req.body)
  res.status(201).json({message:"addcours"}) */
let insertCours = "INSERT INTO cours (nom_cours,description_cours,id_filiere) VALUES(?,?,?)"
  database.query(insertCours,[req.body.nom_cours,req.body.description_cours,req.body.id_filiere],(error,result)=>{
console.log(req.body)
res.status(201).json(result)
  }
  )

console.log(req.body)
}

exports.GetAllCours = (req,res)=>{

let GetAllcours="select * from cours;"

database.query(GetAllcours,(error,result)=>{
    console.log(req.body)
    res.status(201).json(result)
})

}
exports.GetspecifiyCours = (req,res)=>{

    let search="SELECT id_cours,nom_cours,description_cours,nom_filiere FROM filiere JOIN cours on filiere.id_filiere=cours.id_filiere WHERE filiere.id_filiere=?;"
    database.query(search,[req.body.id_filiere],(error,result)=>{
        console.log(result)
        res.status(201).json(result)
    })

   
}
exports.GetOneCours = (req,res)=>{
    /* console.log(req.params.id)
    res.status(201).json(res) */
    let selectCours = "SELECT * from cours where id_cours=?;"
  database.query(selectCours,[req.body.id_cours],(error,result)=>{
    console.log(result)
    res.status(201).json(result)
  })
}
exports.getContentCour = (req,res)=>{
    let selectCours = "SELECT id_cours,description_cours,nom_cours from cours where id_cours=? "
    database.query(selectCours,[req.body.id_cours],(error,result)=>{
      console.log(result)
      res.status(201).json(result)
    })

}