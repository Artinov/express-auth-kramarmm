var express = require("express");
var app = express();

var path = require('path');
var users = require('./users.json');
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', express.static(path.join(__dirname, 'public')))

app.get('/about', function(req, res) {
    res.send("This is about page !");
});

app.post('/login', function(req, res) {
    console.log(req.body);
    users.forEach( (user) => {
        if (user.login === req.body.login && user.password === req.body.password){
            res.end("200 OK" + " " + user.name);
        } else {
            res.end("401 Unauthorized");
        }
    });
});

app.listen(3000, function() {
    console.log("Server is working on http://localhost:3000/");
});