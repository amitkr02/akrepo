var exp = require('express');
var bodyParser = require('body-parser');

var app = exp();

app.get('/', function(req, res){
    res.send('Hi Node JS!');
});


var port = process.env.PORT || process.env.npm_package_config_port;
app.listen(port, function(){
	console.log('HTTP server is up on port '+port);
});