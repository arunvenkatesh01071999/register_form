const express = require('express');
const cors = require('cors');
const mycon = require('mysql');
const bodyparser = require('body-parser');
const fileupload = require('express-fileupload');

const app = express();
app.use(cors());
app.use(fileupload());
app.use(bodyparser.json());
app.use(express.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static('public'));

const c = mycon.createConnection({
    host : "localhost",
    user : "root",
    password : "arun9629",
    database : "dbms"
})

c.connect(function(error){
    if(error){
        console.log(error);
    }
    else{
        console.log('Database Connected');
    }
})

app.post('/Register',(req,res)=>{
    let name=req.body.name;
    let email =req.body.email;
    let password =req.body.password;
    let password2 =req.body.password2;
    let phone_no =req.body.phone_no;
    let sql = 'insert into register(name,email,password,password2,phone_no)values(?,?,?,?,?)';

    c.query(sql,[name,email,password,password2,phone_no],(error,result)=>{
        if(error){
            let s = {"status":"error"};
            res.send(s);
        }
        else{
            let s = {"status":"Inserted"};
            res.send(s);
        }
    })



})

app.listen(3004);
