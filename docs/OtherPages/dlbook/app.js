var box = document.getElementById('box');
var frame = document.getElementById('frame');
function func() {
  frame.src = `https://my.dynamic-learning.co.uk/Titles/Camb_Nat_L_1_2_Cert_in_IT_WET_9781510422889/Content/OEBPS/page${dig(box.value)}.xhtml`
}
function prev() {
  var prev = parseInt(box.value)-1;
  frame.src = `https://my.dynamic-learning.co.uk/Titles/Camb_Nat_L_1_2_Cert_in_IT_WET_9781510422889/Content/OEBPS/page${dig(prev)}.xhtml`;
  box.value = dig(prev);
}
function next() {
  var next = parseInt(box.value)+1;
  frame.src = `https://my.dynamic-learning.co.uk/Titles/Camb_Nat_L_1_2_Cert_in_IT_WET_9781510422889/Content/OEBPS/page${dig(next)}.xhtml`;
  box.value = dig(next);
}


function dig(num) {
  switch(num.toString().length) {
    case 1:
      num = '00' + num;
      break
    case 2:
      num = '0' + num
      break
    case 3:
      break
  }
  return num
}
