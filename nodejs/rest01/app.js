// ===================================
// express的路由机制，路由英文单词叫route
// 路由的是地址，本例子有连个地址/listUsers和/addUser,不同的路由对应不同的function
// list : 列表
// add : 添加
// user : 用户
// ===================================


//  var jsonObj = JSON.parse( jsonString ); 是把一个字符串给转化成javascript对象
//  var jsonString = JSON.stringify(jsonObject); 是把一个javascript对象转化成json格式的字符串

// ===================================


var express = require('express');
var app = express();
var fs = require("fs");

app.get('/listUsers', function (req, res) {
  fs.readFile(__dirname + "/users.txt", 'utf8', function (err, data) {
    console.log(data);
    res.end(data);
  });
})

//添加的新用户数据
var user = {
  "user4": {
    "name": "mohit",
    "password": "password4",
    "profession": "teacher",
    "id": 4
  }
}

app.get('/addUser', function (req, res) {
  // 读取已存在的数据
  fs.readFile(__dirname + "/" + "users.txt", 'utf8', function (err, jsonString) {
    var jsonObject = JSON.parse(jsonString);
    jsonObject["user4"] = user["user4"];
    console.log(jsonObject);
    res.end(JSON.stringify(jsonObject, null, 2));
  });
})

var server = app.listen(8081, function () {

  var host = server.address().address
  var port = server.address().port

  console.log("应用实例，访问地址为 http://%s:%s", host, port)

})


// ===================================


// var express = require('express');
// var app = express();
// var fs = require("fs");

// app.get('/listUsers', function (req, res) {
//    fs.readFile( __dirname + "/" + "users.json", 'utf8', function (err, data) {
//        console.log( data );
//        res.end( data );
//    });
// })

// var server = app.listen(8081, function () {

//   var host = server.address().address
//   var port = server.address().port

//   console.log("应用实例，访问地址为 http://%s:%s", host, port)

// })