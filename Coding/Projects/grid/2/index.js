var amt = document.getElementById('amt');
var num = document.getElementById('num');
var ran = document.getElementById('ran');
var n;
var rand;

ran.addEventListener('click', () => {
  n = parseInt(amt.value);
  rand = Math.floor(Math.random()*n) + 1;
  num.innerHTML = rand;
});
