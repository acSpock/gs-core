let express = require('express');
let app = express();
let server = require('http').Server(app);

app.use(express.static(__dirname + '/public'));


// app.get('/*', function(req, res, next) {
// 	res.sendFile(__dirname + '/index.html');
// });

server.listen(8181, ()=>{
	console.log("Running 7070")
});