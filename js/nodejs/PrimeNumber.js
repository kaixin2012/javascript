for (let n = 2; n <= 10000; n++) {
    let isPrn = isPrimeNumber(n);
    if (isPrn) {
        console.log(n);
    }
}

function isPrimeNumber(n) {

    for (let i = 2; i < n; i++) {

        let remainder = n % i;
        // console.log(n, i, remainder);

        if (remainder == 0) {
            return false;
        } else {
            continue;
        }

    }
    return true;
}

let c = isPrimeNumber();
console.log(c);