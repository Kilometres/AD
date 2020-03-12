var amt = document.getElementById('amt');
var loc1 = document.getElementById('loc1');
var cl1 = document.getElementById('customLoc1');
var loc2 = document.getElementById('loc2');
var cl2 = document.getElementById('customLoc2');
var u = document.getElementById('user');
var re = document.getElementById('reason');
var cr = document.getElementById('customReason');
var time = document.getElementById('time');
var btn = document.getElementById('btn');
var out = document.getElementById('out');
var cop = document.getElementById('copy');
var template;
var r;
var l1;
var l2;

loc1.addEventListener('change', () => {
  if (loc1.value == "nil") {
    cl1.style.display = "grid";
  } else {
    cl1.style.display = "none";
  }
})

loc2.addEventListener('change', () => {
  if (loc2.value == "nil") {
    cl2.style.display = "grid";
  } else {
    cl2.style.display = "none";
  }
})

re.addEventListener('change', () => {
  if (re.value == "nil") {
    cr.style.display = "grid";
  } else {
    cr.style.display = "none";
  }
})



btn.addEventListener('click', () => {
  if (re.value == "nil") {
    r = cr.value;
  } else {
    r = re.value;
  }
  if (loc1.value == "nil") {
    l1 = cl1.value;
  } else {
    l1 = loc1.value;
  }
  if (loc2.value == "nil") {
    l2 = cl2.value;
  } else {
    l2 = loc2.value;
  }

  template = `Transporting x${amt.value}, user(s) ${u.value}, from ${l1} to ${l2}, ${r}, ${time.value} minutes.`

  out.value = template;
})

cop.addEventListener('click', () => {
  out.select();
  document.execCommand("Copy");
})
