class Kaixin{

    log(message){
        console.log(message);
    }

    sheepCount(count){

        console.log(count);
    
        var sheepCounted = 1;
        var start = "I have counted ";
        var end = " sheep!"
        while (sheepCounted <=count) {
            console.log( start + sheepCounted + end );
            sheepCounted++;
        }
        console.log("Zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz");
    }
}

var kaixin = new Kaixin();
kaixin.log("hello world!!!");
kaixin.sheepCount(10);