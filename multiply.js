// multiply.js
// Node.js version: prompts user for integers, echoes them, and checks multiplication condition

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const inputs = [];

function askForInput() {
  rl.question("Enter an integer (or 'q' to quit): ", (answer) => {
    const trimmed = answer.trim();

    if (trimmed.toLowerCase() === 'q') {
      summarizeInputs();
      rl.close();
      return;
    }

    if (!/^[-+]?\d+$/.test(trimmed)) {
      console.log("❌ Error: Please enter a valid integer or 'q' to quit.");
      askForInput();
      return;
    }

    inputs.push(parseInt(trimmed));
    askForInput();
  });
}

function summarizeInputs() {
  if (inputs.length === 0) {
    console.log("No integers were entered.");
    return;
  }

  console.log("You entered:", inputs.join(", "));

  let conditionMet = false;

  for (let i = 0; i < inputs.length; i++) {
    for (let j = 0; j < inputs.length; j++) {
      if (i === j) continue;
      const product = inputs[i] * inputs[j];
      if (inputs.includes(product)) {
        console.log(`✅ Condition is met: ${inputs[i]} x ${inputs[j]} = ${product}`);
        conditionMet = true;
        return;
      }
    }
  }

  if (!conditionMet) {
    console.log("❌ Condition was not met.");
  }
}

// Start the input loop
askForInput();
