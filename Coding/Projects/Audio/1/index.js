var ad = document.getElementById('song');
var pb = document.getElementById('prog2');
var pbar = document.getElementById('prog');
var ppar = document.getElementById('pp');
var vpar = document.getElementById('vol');
var play = false
var mute = false

function pp() {
  if (play == true) {
    ad.pause()
    play = false
    ppar.setAttribute('class', 'fas fa-play')
  } else {
    ad.play()
    play = true
    ppar.setAttribute('class', 'fas fa-pause')
  }
}

function vol() {
  if (mute == true) {
    ad.volume = 1
    mute = false
    vpar.setAttribute('class', 'fas fa-volume-up')
  } else {
    ad.volume = 0
    mute = true
    vpar.setAttribute('class', 'fas fa-volume-mute')
  }
}

var progVar = setInterval(prog, 300);

function prog() {
  let durper = ad.currentTime / ad.duration
  let adpx = 340 * durper

  pb.style.width = adpx
}

var bgcolor = setInterval(bgcol, 3000);
 document.body.style.backgroundColor = "pink";

function bgcol() {
  let x = document.body;
  x.style.backgroundColor = x.style.backgroundColor == "yellow" ? "pink" : "yellow";
}
