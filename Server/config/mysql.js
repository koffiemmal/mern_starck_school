
const mysql = require("mysql2")

const database = mysql.createConnection(

{
user:"root",
host:"localhost",
database:"mern-school",
password:""


}
)
database.connect((error)=>{
    if(error)throw error
    console.log("database connected successfully")
})
module.exports = database;