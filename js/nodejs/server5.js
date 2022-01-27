var fs = require("fs");

// 异步读取
console.log("装备打开")
fs.stat('input.txt', "w", function (err, stats) {
    if (err) {
        return console.error(err);
    }
    console.log(stats);
    console.log("文件打开成功");

    console.log("isFile?" + stats.isFile());
    console.log("isDirectory?" + stats.isDirectory());
    console.log("isBlockDevice?" + stats.isBlockDevice());
});