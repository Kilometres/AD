var p = [
  {
    'id' : '0',
    'title' : 'Book Exploit',
    'pic' : 'https://i.imgur.com/DhTA5rL.png',
    'desc' : 'Test Test',
    'link' : './OtherPages/dlbook/index.html'
  },
  {
    'id' : '1',
    'title' : 'Example Project',
    'pic' : 'https://i.kym-cdn.com/entries/icons/original/000/028/315/cover.jpg',
    'desc' : 'This is a test, using objects in JavaScript to produce projects rather than manually typing out the HTML and CSS.',
    'link' : '#'
  },
  {
    'id' : '3',
    'title' : 'Outlook School Profile Picture Grabber',
    'pic' : 'https://i.imgur.com/UBsyaOj.png',
    'desc' : 'This is solely for experimenting this has no use to anyone, it is able to grab the profile picture of emails under a preset domain.',
    'link' : './OtherPages/emailgrab/index.html'
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
