const mysql=require('mysql2/promise')

const mysqlPool = mysql.createPool({
    host: 'localhost', 
    user:'root',
    password:'Abd@032003',   
    database:'employee_db',    
})


module.exports= mysqlPool