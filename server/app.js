var express = require ('express');
var app = express();
var path = require('path');

app.set('port', (process.env.PORT || 5000));

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "./Public/views/index.html"));
});

app.listen(app.get('port'), function(){
    console.log("Hey! Listening on Port: " + app.get('port'));

});