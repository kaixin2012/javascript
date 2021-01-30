function isPrime(n){

    for(var i=2;i<n;i++){
        var x = n % i;
        if(x==0){
            return false;
        }
    }

    return true;

};
var n = 97;
var isOk = isPrime(n);
if(isOk){
    console.log(n+"是质数");
}else{
    console.log(n+"不是质数");
}