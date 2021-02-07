// express 实现的get方法
function get(path,callback){
  //.................

  var req = null;
  var res = null;

  callback(req,res);
}

// ================================
// 普通的函数声明
function listUsersFunction(req,res){
  console.log(req.url);
}

// 函数调用()
listUsersFunction(req,res);

//==========================
// 函数可以为一个变量
var a = 1;
var listUsersFunction = function(req,res){
  console.log(req.url);
}


// 函数可以作为一个参数
get("/listUsers",listUsersFunction);

// 匿名函数
get("/listUsers",function(req,res){
  console.log(req.url);
});