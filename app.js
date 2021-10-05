var express = require("express");
var app = express();
app.listen(8080, () => {
 console.log("Server running on port 8080");
});

app.get("/", (req, res) => {
 res.write("Hello! This is version v1.3 of devopskarl for NUS Fintech DevOps Project." + <br>); 
 res.write("This app is containerized with Docker and deployed to Google Cloud Run using GitHub actions.");
});


app.get("/fx-static", (req, res, next) => {
 res.json({"sell": "988.181", "timestamp": "2021-10-01 14:30:40", "buy": "688.1"});
});

app.get("/fx", (req, res, next) => {
 rand1 = Math.floor(Math.random() * 90) + 10;
 rand2 = Math.floor(Math.random() * 90) + 10;

 var today = new Date();
 var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
 var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
 var dateTime = date+' '+time;

 res.json({"sell": "1500." + rand1, "timestamp": dateTime, "buy": "2500." + rand2});
});

app.get("/random", (req, res, next) => {
 res.json([Math.floor(Math.random() * 90) + 10]);
});

app.get('*',function (req, res) {
        res.redirect('/');
    });

// node app.js
