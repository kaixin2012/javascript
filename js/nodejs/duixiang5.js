let dog1 = {
    weight: 8888,
    say: function () {
        console.log("wang...wang...          ", "my name is", this.dogName);
    },
    dogName: "duixiang1"
}

dog1.say();

//---------------------------------------------------------

let dog2 = {
    weight: 8888,
    say() {
        console.log("wang...wang...          ", "my name", this.dogName);
    },
    dogName: "duixiang2"
}

dog2.say();