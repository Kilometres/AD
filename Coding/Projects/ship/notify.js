var inps = document.getElementsByClassName('inp')
var cops = document.getElementsByClassName('cop')
var inp1 = inps[0]
var inp2 = inps[1]
var inp3 = inps[2]
var inp4 = inps[3]
var inp5 = inps[4]
var inp6 = inps[5]
var cop1 = cops[0]
var cop2 = cops[1]
var cop3 = cops[2]
var cop4 = cops[3]
var cop5 = cops[4]
var cop6 = cops[5]


cop1.addEventListener('click', () => {
  inp1.select();
  document.execCommand("Copy");
})
cop2.addEventListener('click', () => {
  inp2.select();
  document.execCommand("Copy");
})
cop3.addEventListener('click', () => {
  inp3.select();
  document.execCommand("Copy");
})
cop4.addEventListener('click', () => {
  inp4.select();
  document.execCommand("Copy");
})
cop5.addEventListener('click', () => {
  inp5.select();
  document.execCommand("Copy");
})

cop6.addEventListener('click', () => {
  inp6.select();
  document.execCommand("Copy");
})
