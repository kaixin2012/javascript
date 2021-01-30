var foo = "123";
function print(){
    var foo = "456";
    this.foo = "789";
    console.log(foo);
}
print();
console.log(foo);

// var a = 5;
// function test(){
//     a = 0;

//     console.log(a);
//     console.log(this.a);
//     var a;
//     console.log(a);
// }
// test();