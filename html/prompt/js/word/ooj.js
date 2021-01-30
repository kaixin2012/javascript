function change(x,y){
    console.log("{x :"+x+",y:"+y+"}");
    var z=x;
    x = y;
    y = z;

    console.log("{x :"+x+",y:"+y+"}");
}
change(2,3);