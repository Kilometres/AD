var p = [
  {
    'id' : '0',
    'title' : 'Book Exploit',
    'pic' : 'https://i.imgur.com/DhTA5rL.png',
    'desc' : 'Test Test',
    'link' : './OtherPages/dlbook/book.html'
  }
];

function templ(id) {
  let title = p[id].title;
  let pic = p[id].pic;
  let desc = p[id].desc;
  let link = p[id].link;

  return `<br><span class="tag">${id}</span><p class="deftxt header1"><a href="${link}">${title}</a></p><br><br>
  <a href="${link}"><img src="${pic}" alt="Photo of ${title}" width="100%"></img></a><br>
  <p class="deftxt">${desc}</p><br><br>`
}

var wrap = document.getElementsByClassName('wrapper')[0];
function buildP() {
  for (let i = 0; i < p.length; i++) {
    wrap.innerHTML += templ(i)
  }
}

buildP();
