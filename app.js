// jshint esversion:6

const express = require("express");
const bodyparser = require("body-parser");
const request = require("request");
const mysql = require("mysql");
const fs = require("fs");
var http = require("http");
var url = require("url");




  
// http.createServer(function(req,res){
//     var q = url.parse(req.url,true);
//     var filename = "."+q.pathname;
//     fs.readFile(filename,function(err,data){
//         if(err){
//             res.writeHead(404,{'Content-Type':'text/html'});
//             return res.end("page not found");
//         }
//         res.writeHead(200,{'Content-Type':'text/html'});
//         res.write(data);
//         return res.end();
//     });
// });
const app = express();

app.use(bodyparser.urlencoded({extended : false}))
app.use(express.static("public"));




app.get("/", function(req , res){
res.sendFile(__dirname + "/index.html");
});

app.get("/signup", function(req , res){
    res.sendFile(__dirname + "/signup.html");
});

app.get("/index.html", function(req , res){        
res.sendFile(__dirname + "/index.html");
});

app.get("/index2.html" , function(req,res){
    res.sendFile(__dirname + "/index2.html");
});

app.get("/booking.html" , function(req,res){
    res.sendFile(__dirname + "/booking.html");
});

var connection = mysql.createConnection({
    user: "sqluser",
    host: "localhost",
    password: "password",
    database: "treakeasy",
});

connection.connect(function(err){
    if (err) throw err;

    console.log("connected...");

});




app.post("/book" , function(req , res){


    var sql = "insert into booking values(null , '"+ req.body.name + "', '"+ req.body.email + "','"+ req.body.destination + "','"+ req.body.address+ "' )"
    connection.query(sql, function(err, rows, fields ){
        if (err) throw err;

        
    });
    
    
    res.sendFile(__dirname + "/success2.html");
});


app.post("/signup" , function(req , res){


    var sql = "insert into signup values(null , '"+ req.body.email + "', '"+ req.body.password + "' )"
    connection.query(sql, function(err, rows, fields ){
        if (err) throw err;

        
    });

    
    res.sendFile(__dirname + "/success2.html");
});

// app.post("/login" , encoder , function(req,res){
//     var user_email = req.body.email;
//     var user_password = req.body.password;

//     connection.query("select * from signup where email = ? and password = ?", [user_email,user_password],function(error,results,fields){
//         if (results.length > 0) {
//             res.redirect("/index2");
//         } else{

            
//             res.redirect("/success");
//         }
//         res.end();
//     });
// });


app.listen( 3000, function(){
    console.log("server is running at port 3000");
});

