function addton(n){
    var sum=0;
    for (i = 1; i <=n; i++){
        sum = sum + i;   
    }
    return sum;
}
var n=20;
var sum = addton(n);

console.log(sum);