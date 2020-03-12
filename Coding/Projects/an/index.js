var h1 = document.getElementById('h1');
var head = document.getElementById('head');
var imgs = document.getElementsByTagName('img')
var bod = document.body;

h1.style.backgroundColor = "orange";
head.style.backgroundColor = "pink";
bod.style.backgroundColor = "pink";
imgs.forEach(function(img) {
  img.style.border = "2px solid red";
})
