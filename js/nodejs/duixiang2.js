function B() { }
B.prototype = { x: 1, y: 2 };

let b1 = new B();
let b2 = Object.create(B.prototype);

console.log(b1.x, b2.y);

//---------------------------------------------

function foo(obj) {
    obj.value++;
    return obj;
}

let p1 = { value: 3 };
let p2 = foo(Object.create(p1));

console.log(p1.value, p2.value);
