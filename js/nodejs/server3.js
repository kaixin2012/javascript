var fs = require("fs");

// 异步读取
console.log("装备打开")
fs.open('input.txt', "w", function (err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("文件打开成功");
});