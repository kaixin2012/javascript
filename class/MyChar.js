
function MyChar(letter,x,y){

    this.letter = letter;
    this.x = x;
    this.y = y;

    console.log("constructor");

    this.show = function(){
        console.log(this.letter,this.x,this.y);

        return "hello";
    }
}

MyChar.prototype.a = "hello xxx";
MyChar.prototype.move = function(){
    console.log("move me......");
}

Object.prototype.remove = function(){
    console.log("remove me......");
}

var mychar = new MyChar("E",100,00);
mychar.show();

console.log(mychar.a);
mychar.move();
mychar.remove();


var a = "123";
a.remove();
a.move();
