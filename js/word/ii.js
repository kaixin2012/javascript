class Sprite{
    constructor(){
        this.x=10;
        this.y=10;
        this.width=10;
        this.height=10;
        this.color=10;
    }
    move(){
        console.log("my x is : " + this.x);
    }
    paint(){
        var height=10
        console.log(height);
    }
}
var paint=new Sprite();

paint.move();
paint.x = 20;
paint.move();
paint.x += 4;
paint.move();