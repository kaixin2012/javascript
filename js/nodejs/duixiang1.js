let p1 = { x: 1, y: 2 };
console.log(typeof (p1));
let p2 = {
    x: 1,
    y: 3,
    "main title": "hello",

    author: {
        name1: "Alex",
        age: 9,
    },
};

console.log(p2["main title"], p2.author.name1);

function Book() {
    this.name2 = "kaixin";
};

let book = new Book();
console.log(book.name2);