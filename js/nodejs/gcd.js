function gcd(a, b) {
    let min = a > b ? b : a;

    for (let i = min; i > 1; i--) {
        if (a % i == 0 && b % i == 0) {
            return i;
        }
    }

    return null;
}


// function gcd(a, b) {
//     var result = 1;
//     for (var i = 1; i <= a && i <= b; i++) {
//         if (a % i == 0 && b % i == 0) {
//             result = i;
//         }
//     }
//     console.log(result);
// }


console.log(gcd(12, 3));
console.log(gcd(200, 300));
console.log(gcd(55, 45));