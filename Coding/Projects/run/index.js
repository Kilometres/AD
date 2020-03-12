var run = document.getElementById('run')
var out = document.getElementById('out')
var in = document.getElementById('in')

run.addEventListener('click', () => {
  out.InnerHTML = in.innerHTML;
})
