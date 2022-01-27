let obj1 = { x1: 1, y1: 1 };
let x1 = obj1.x1;
let y1 = obj1.y1;

console.log(x1, y1);

let obj2 = { x2: 2, y2: 2, z2: 2 };
let { x2, y2 } = obj2;
console.log(x2, y2);

let obj3_1 = { x3: 3, y3: 3 };
let obj3_2 = { ...obj3_1 };
console.log(obj3_2.x3, obj3_2.y3);

let obj4_1 = { x4: 3, y4: 3 };
let obj4_2 = { ...obj4_1, x4: 4, y4: 4, z4: 4 };
console.log(obj4_2.x4, obj4_2.y4, obj4_2.z4);