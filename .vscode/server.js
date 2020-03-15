var http = require('http');

function accept(request, response) {


    console.log("client ip is "+request.connection.remoteAddress);

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    // response.writeHead(200, {'Content-Type': 'text/plain'});
    response.writeHead(200, {'Content-Type': 'text/html;charset:utf-8'});

    // 发送响应数据 "Hello World"
    response.end('<html><body> Hello World <br/> kai xin is ok2222</body></html>');
}

var server = http.createServer(accept);
server.listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');