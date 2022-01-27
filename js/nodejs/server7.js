var fs = require("fs");

// fs.writeFile("input.txt", "bbd", function (err) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("读取写入的数据");

//     fs.readFile("input.txt", function (err, data) {
//         if (err) {
//             return console.error(err);
//         }

//         console.log(data.toString());
//     });
// });


fs.writeFileSync("input.txt", "hello");
var data = fs.readFileSync("input.txt");

console.log(data.toString());

