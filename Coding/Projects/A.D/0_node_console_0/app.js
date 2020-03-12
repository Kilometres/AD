var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout

});

rl.question("~Variable 1: Coefficient (x)?  ", function(answer) {
  var x = parseFloat(answer);
  console.log(x)
});
rl.question("~Operation 1: Sign (+/-)?  ", function(answer) {
  var sign = answer == '+' ? `+` : `-`
  console.log(sign)
});
rl.question("~Variable 2: Coefficient (y)?  ", function(answer) {
  var y = parseFloat(answer);
  console.log(y)
  rl.close()
});
