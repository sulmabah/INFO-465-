// multiply.js
// Node.js script: prompts user for integers, echoes them, and checks multiplication condition

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const numbers = [];

function promptUser() {
  rl.question('Enter a whole number or "q" to quit: ', (input) => {
    const trimmed = input.trim();

    if (trimmed.toLowerCase() === 'q') {
      console.log('Numbers entered:', numbers.join(', '));
      checkCondition(numbers);
      rl.close();
      return;
    }

    if (!/^[-+]?\d+$/.test(trimmed)) {
      console.log('❌ Invalid input. Please enter a whole number or "q" to quit.');
      promptUser();
      return;
    }

    numbers.push(Number(trimmed));
    promptUser();
  });
}

function checkCondition(arr) {
  let found = false;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        const product = arr[i] * arr[j];
        if (arr.includes(product)) {
          console.log(`✅ Condition met: ${arr[i]} * ${arr[j]} = ${product}`);
          found = true;
          return;
        }
      }
    }
  }

  if (!found) {
    console.log('❌ No two numbers multiply to form another number in the list.');
  }
}

// Start the input loop
promptUser();
