var persons = ["徐行知","王涵宇","猪","zhangyuchen"];

console.log("删除前元素："+persons);

var items = persons.splice(2,2);

console.log("删除了元素："+items);
console.log("还剩的元素："+persons);