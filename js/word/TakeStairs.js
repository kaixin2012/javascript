function steps(n) {
    if (n == 1) {
        return 1;
    } else if (n == 2) {
        return 2;
    } else {
        return steps(n - 1) + steps(n - 2);
    }
}

let n = 50;
let TakeStairs = steps(n);

console.log(n, TakeStairs);