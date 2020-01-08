function prime(num){
    for(var i=2;i<num;i++){
        var y=num%i;
        if(y==0){
            return false;
        }
    }
    return true;
}

var h=2000;
var e33= prime(h);
console.log("prime is "+e33);
var max=30120;
var primes=[];
for(var i=2;i<=max;i++){
    var isok = prime(i);
    if(isok){
        primes.push(i);
    }
}
console.log(primes.length  +  primes.join(" "));