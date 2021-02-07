var user1 = {"name" : "徐行知","id" : 1,"age" : 8};
var user3 = {"name" : "马义晨","id" : 2,"age" : 10};
var user2 = {"name" : "商浩轩","id" : 3,"age" : 10};

var users = [user1,user2,user3]

for (var i = 0;i<=(users.length-1);i++){
    var user = users[i];
    console.log(user.id);
}