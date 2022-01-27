const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// ask user for the anme input
rl.question(`What's your name? `, (name) => {

    // ask for nationality
    rl.question(`What are you from? `, (country) => {

        rl.question(`How old are you? `, (age) => {

            // log user details
            var str = `${name} is from ${country} and he(she) is ${age} years old`;

            console.log(str);

            // close the stream
            rl.close();
        });

    });

});