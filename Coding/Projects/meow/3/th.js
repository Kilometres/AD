function rand() {
  return Math.floor(Math.random() * Math.floor(2));
}

function sort(x) {
  switch(x) {
    case 0:
      return "H"
      break
    case 1:
      return "T"
      break
  }
}

function ht() {
  return sort(rand())
}

var out = [];
var outstr = "";
var prev = "";
var streak = 1;
var hstreak = 0;
var s = [];
var h = [];
var sStr = "";
var hStr = "";

for (let i = 0; i < 10; i++) {
  out.push(ht())
  prev = out[i-1];
  curr = out[i]
  if (curr == prev) {
    streak += 1;
    if (streak > hstreak) {
      hstreak = streak
      h.push(streak);
    }
    s.push(streak);
  } else {
    streak = 1;
  }
}
out.forEach(function(x) {
  outstr += x;
})

s.forEach(function(x) {
  sStr += x+',';
})

h.forEach(function(x) {
  hStr += x+',';
})

console.log(`Output:          ${outstr}`);
console.log(`HighestStreak:   ${hstreak}`);
console.log(`HighStreaks:     ${hStr}`);
console.log(`Streaks:         ${sStr}`);
