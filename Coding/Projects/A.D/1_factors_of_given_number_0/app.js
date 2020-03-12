var factors = [];

function fact(num) {
  factors = number => Array.from(Array(num + 1), (_, i) => i).filter(i => num % i === 0);
}

var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout

});

rl.question("~Number to fin factors of:\n", function(answer) {
  console.log(fact(parseInt(answer)))
});
