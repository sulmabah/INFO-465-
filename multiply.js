const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const numbers = [];

function checkCondition(arr) {
    let found = false;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (i !== j && arr.includes(arr[i] * arr[j])) {
                console.log(`Found: ${arr[i]} * ${arr[j]} = ${arr[i] * arr[j]}`);
                found = true;
            }
        }
    }
    if (!found) {
        console.log('No two numbers multiply to form another number in the list.');
    }
}

function promptUser() {
    rl.question('Enter a whole number or "q" to quit: ', (input) => {
        if (input.toLowerCase() === 'q') {
            console.log('Numbers entered:', numbers);
            checkCondition(numbers);
            rl.close();
        } else if (!/^[-+]?\d+$/.test(input)) {
            console.log('Invalid input. Please enter a whole number or "q" to quit.');
            promptUser();
        } else {
            numbers.push(Number(input));
            promptUser();
        }
    });
}

promptUser();
