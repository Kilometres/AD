function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var presets = {
  'off': '#263238',
  'on': '#408D32'
}

async function bin(str, str2) {
  let box = document.getElementById(str);
  let num1 = document.getElementById(str2+'q');
  let num2 = document.getElementById(str2+'r');
  let vl = box.innerHTML;

  if (vl == 0) {
    box.innerHTML = 1;
    box.style.background = presets.on;
  } else {
    box.innerHTML = 0;
    box.style.background = presets.off;
  };
  upd();
}

function upd() {
  let box = document.getElementById('ar');
  let a32 = document.getElementById('a32').innerHTML;
  let a16 = document.getElementById('a16').innerHTML;
  let a8 = document.getElementById('a8').innerHTML;
  let a4 = document.getElementById('a4').innerHTML;
  let a2 = document.getElementById('a2').innerHTML;
  let a1 = document.getElementById('a1').innerHTML;

  box.innerHTML = (a1*1) + (a2*2) + (a4*4) + (a8*8) + (a16*16) + (a32*32)
}

async function re(str) {
  let boxes = document.getElementsByClassName(str);

  for (let i = 0; i < boxes.length; i++) {
    boxes[i].innerHTML = 0;
    boxes[i].style.background = presets.on;
  }
  await sleep(1000);
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.background = presets.off;
    boxes[i].innerHTML = 0;
  }
  upd();
}

async function ran(str) {
  let btn = document.getElementById(str+'r');
  re(str);
  await sleep(1000);
  btn.innerHTML = rand(63);
}

function rand(num) {
  return Math.ceil(Math.random()*(num-1))+1;
}
