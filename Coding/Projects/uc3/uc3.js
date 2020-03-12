var sp = document.getElementById('span');
var inp = document.getElementById('inp');
var btn = document.getElementById('btn');
var btn2 = document.getElementById('btn2');
var ta = document.getElementById('ta');

btn.addEventListener('click', function() {
  sp.innerHTML = '&#'+inp.value;
})

function togSpan() {
  if (sp.style.display === "none") {
    sp.style.display = "block";
    ta.style.display = "none";
  } else {
    sp.style.display = "none";
    ta.style.display = "block";
  }
}
