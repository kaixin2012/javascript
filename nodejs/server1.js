var http = require('http');
var fs = require("fs");

http.createServer(function (request, response) {

    console.log("I get a request : " + request.url)
    var fileName = '.' + request.url;


    if (request.url == "/") {
        fileName = "./type2.html";
    }

    if (request.url == "/favicon.ico") {
        response.end(null);
        return;
    }

    if (request.url.endsWith(".mp3")) {
        fs.readFile(fileName, function (err, data) {
            if (err) {
                console.log(err);
            }
            response.writeHead(200, { 'Content-Type': 'audio/mpeg' });
            response.end(data);
        });
    } else {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        var data = fs.readFileSync(fileName);
        var content = data.toString();
        response.end(content);
    }
}).listen(8889);

console.log('server running at http://127.0.0.1.8889');
