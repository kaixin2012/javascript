var http = require('http');

http.createServer(function (request, response) {

    //发送 HTTP 头部
    // HTTP 状态值: 200 : OK
    // 内容类型：text/HTML

    response.writeHead(200, { 'Content-Type': 'text/html' });

    // 发送响应数据 ”hello world"
    console.log("I get a request!!!!!!!!!!")

    response.end('<span style="color:red;font-size:30px"><b> hello world </b></span>');
}).listen(8000);

console.log('server running at http://127.0.0.1.8000');