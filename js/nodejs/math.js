module.exports.add = function (add1, add2) {
    var add_rt = arguments[0] + arguments[1];

    console.log(`${add_rt} = ${arguments[0]} + ${arguments[1]}`);

    return add_rt;
};

module.exports.subtract = function (subtract1, subtract2) {
    var subtract_rt = arguments[0] - arguments[1];

    console.log(`${subtract_rt} = ${arguments[0]} - ${arguments[1]}`);

    return subtract_rt;
};

module.exports.multiply = function (multiply1, multiply2) {
    var multiply_rt = arguments[0] * arguments[1];

    console.log(`${multiply_rt} = ${arguments[0]} * ${arguments[1]}`);

    return multiply_rt;
};

module.exports.divide = function (divide1, divide2) {
    var divide_rt = arguments[0] / arguments[1];

    console.log(`${divide_rt} = ${arguments[0]} / ${arguments[1]}`);

    return divide_rt;
};

// module.exports.a = "hello world";