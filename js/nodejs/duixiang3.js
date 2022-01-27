let a1 = { x: 10 };

let x1_a1 = a1.hasOwnProperty("x") ? a1.x : null;
console.log(x1_a1);

let x2_a1 = "x" in a1 ? a1.x : null;
console.log(x2_a1);

let x3_a1 = a1.x ? a1.x : null;
console.log(x3_a1 + "\n");

//-------------------------------------------------------------

let a2 = {};

let x1_a2 = a2.hasOwnProperty("x") ? a2.x : null;
console.log(x1_a2);

let x2_a2 = "x" in a2 ? a2.x : null;
console.log(x2_a2);

let x3_a2 = a2.x ? a2.x : null;
console.log(x3_a2);