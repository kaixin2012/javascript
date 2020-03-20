var fs = require("fs");

var files = fs.readdirSync('/home/xufangbo/kaixin/git/javascript/nodejs');

for(var i=0;i<files.length;i++){
    var file = files[i];
    console.log(file);
}