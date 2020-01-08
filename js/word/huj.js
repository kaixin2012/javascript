function prime(num){
    for(var i=2;i<num;i++){
        var y=num%i;
        if(y==0){
            return false;
        }
    }
    return true;
}

var h=1000;
var e33= prime(h);
console.log("prime is "+e33);