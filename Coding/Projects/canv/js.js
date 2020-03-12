var canv = document.querySelector('canvas');
canv.width = window.innerWidth - 4;
canv.height = window.innerHeight - 4;

var w = (window.innerWidth - 50) / 2;
var h = (window.innerHeight - 50) / 2;

window.addEventListener("resize", function(event) {
  canv.width = window.innerWidth - 4;
  canv.height = window.innerHeight - 4;
})

var c = canv.getContext('2d');

var x = w;
var y = h;
var rad = 30;
var dx = 0;
var dy = 5;
var vy = 0.7;

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  c.beginPath();
  c.arc(x, y, rad, 0, Math.PI * 2, false);
  c.strokeStyle = "#007fff";
  c.stroke();
  x += dx;

  if (x + rad > innerWidth || x - rad < 0) {
    dx = -dx;
  }


  if (y - rad < 0) {
    dy = -dy/2;
  }

  if (y + rad > innerHeight) {
    dy = -dy;
  }

  y += dy;
  dy += vy;
}

animate();
