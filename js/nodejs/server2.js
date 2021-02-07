var fs = require("fs");

// fs.readFile('input.txt',function (err,data) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("异步读取：" + data.toString());
// });
// console.log("执行完成 1");

var data = fs.readFileSync('type2.html');
console.log("同步读取：" + data.toString());
console.log("执行完成 2");