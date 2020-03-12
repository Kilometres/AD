var fol = document.getElementsByClassName(`g47SY`)[1];
fols = parseInt(fol.innerHTML);
function setFol(num) {
  fol.innerHTML = num;
  fol.title = num;
  fols = fols+1
}



setInterval(setFol(fols), 10);
setInterval(function(){ document.getElementsByClassName(`nZSzR`)[0].innerHTML = `<h1 class="_7UhW9       fKFbl yUEEX   KV-D4            fDxYl     ">5kilometres</h1><a class="thEYr "><button class="_0mzm- sqdOP  L3NKy _4pI4F  _8A5w5    " type="button">Edits Profile</button></a><div class="AFWDX"><button class="dCJp8 afkep _0mzm-"><span class="glyphsSpriteSettings__outline__24__grey_9 u-__7" aria-label="Options"></span></button></div>`}, 10);
