function isPrime(num){

    for(var i=2;i<num;i++){
        var y = num % i;
        if(y==0){
            return false;
        }
    }
    return true;
}
function getPrime(){
    var count=0;
    for(var i=2;i<=300;i++){        
        var isOk=isPrime(i);
        if(isOk){
            count++;
        }
    }
    console.log(count);
}
getPrime();