const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let numbers = []; //array to store integers 
// Mean = sum of numbers / count
function calculateMean(arr) {
    const sum = arr.reduce((acc, val) => acc + val, 0);
    return sum / arr.length;
  }
  
  // Median = middle number (or average of middle two if even)
  function calculateMedian(arr) {
    const sorted = [...arr].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
  
    if (sorted.length % 2 === 0) {
      return (sorted[mid - 1] + sorted[mid]) / 2;
    } else {
      return sorted[mid];
    }
  }
  function askNumber() {
    rl.question('Enter a number (or q to quit): ', (input) => {
      if (input.toLowerCase() === 'q') {
        // Quit and show results
        if (numbers.length === 0) {
          console.log("No numbers entered. Goodbye!");
        } else {
          console.log(`Numbers entered: ${numbers}`);
          console.log(`Mean: ${calculateMean(numbers)}`);
          console.log(`Median: ${calculateMedian(numbers)}`);
        }
        rl.close();
        return;
      }
  
      const num = parseFloat(input);

if (!isNaN(num) && Number.isInteger(num)) {
  numbers.push(num);
  console.log(`➕ Added: ${num}`);
} else {
  console.log(" Invalid input. Please enter a whole number (e.g., 3, 42).");
}

      askNumber(); // Ask again
    });
  }
  // 🚀 Start the app
console.log(" Welcome to The Mean, Median & Mode Calculator");
askNumber();