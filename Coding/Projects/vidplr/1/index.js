var x = document.getElementsByClassName('checkmark')

var music = new Audio('sound.mp3');
music.volume = 0.5;

for (let i = 0; i < x.length; i++) {
  x[i].addEventListener('click', () => {
    music.play();
  })
}
