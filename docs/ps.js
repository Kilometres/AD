var p = [
  {
    'id' : '0',
    'title' : 'Book Exploit',
    'pic' : 'https://preview.redd.it/xwhaxojjg5t11.png?width=960&crop=smart&auto=webp&s=55705f9ac64020abb9c3488c1da54564c85f0f8c',
    'desc' : 'Test Test'
  }
];

function templ(id, title, pic, desc) {
  return `<br><span class="tag">#</span><p class="deftxt header1">${title}</p><br><br>
  <p class="deftxt">${desc}</p><br>
  <p class="deftxt">${id}</p><br><br><br>`
}

var wrap = document.getElementsByClassName('wrapper')[0];

wrap.innerHTML = templ(p[0].id, p[0].title, p[0].pic, p[0].desc)
