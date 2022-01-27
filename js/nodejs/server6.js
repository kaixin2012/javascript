var fs = require("fs");

// 异步读取
console.log("装备写入文件")
fs.writeFile('input.txt', "xxz", function (err) {
    if (err) {
        return console.error(err);
    }
    console.log("数据写入成功");
    console.log("------------------------");
    console.log("读取写入的数据")

    fs.readFile('input.txt', function (err, data) {
        if (err) {
            return console.error(err);
        }

        console.log(data.toString());

    });
});