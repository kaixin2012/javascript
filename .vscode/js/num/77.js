var persons = ["徐行知","王涵宇","猪","zhangyuchen"];

findElement("猪");
findElement("牛");

function findElement(item){
    var index = persons.indexOf(item);
    if(index < 0){
        console.log("没找到："+item);
    }else{
        console.log("找到啦："+item);
    }
}