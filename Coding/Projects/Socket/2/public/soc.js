var socket = io.connect('localhost:4000');

var btn = document.getElementById('btn');
var out = document.getElementById('output');
var data = document.getElementById('out');
var un = document.getElementById('tb1');
var tok = document.getElementById('tb2');
var box = document.getElementById('box');
var adm = document.getElementById('adm');
var ref = document.getElementById('ref');

btn.addEventListener('click', function() {
  socket.emit('btnclick');
})

 accArr = [
   {
     un: 'Kilo',
     tok: 'test',
     auth: 4,
     id: 'kilo@0'
   },
   {
     un: 'UserAcc',
     tok: 'test',
     auth: 2,
     id: 'useracc@0'
   },
   {
     un: 'admin',
     tok: 'root',
     auth: 5,
     id: 'admin@0'
   }
 ]


socket.on('btnclick', function() {
  btn.style.background = 'green';
  setTimeout(function() {
    btn.style.background = 'none';
  }, 400)

  var unmatch = accArr.filter(user => user.un == un.value)
  var tokmatch = unmatch.filter(user => user.tok == tok.value)
  var acc = tokmatch[0]
  var log = false;

  if (tokmatch.length == 1) {
    log = true;
  }

  if (log == false) {
    adm.style.background = 'red';
  }  else if (log == true && acc.auth >= 5) {
    adm.style.background = 'green';
  } else if (log == true) {
    adm.style.background = 'orange';
  }

  adm.addEventListener('click', function() {
    let prevCol = adm.style.background;
    adm.style.background = '#007fff';
    setTimeout(function() {
      adm.style.background = prevCol;
    }, 400)

    let count = 0;

    if(acc.auth >= 5) {
      count = 1;

      let inps = `<input type="text" id="tb3" placeholder="Enter a Username"><br>
      <input type="password" id="tb4" placeholder="Enter a Token"><br>
      <button id="btn2">Submit</button>`

      out.innerHTML = inps;
      var un2 = document.getElementById('tb3');
      var tok2 = document.getElementById('tb4');
      var btn2 = document.getElementById('btn2');
      var blankUser = {
        un: '',
        tok: '',
        auth: 0,
        id: ''
      }
      btn2.addEventListener('click', function() {
        let newUser = Object.create(blankUser);
        newUser.un = tb3.value;
        newUser.tok = tb4.value;
        newUser.auth = 2;
        accArr.push(newUser);
      })

      ref.addEventListener('click', function() {
        out.innerHTML = '';
        ref.style.background = 'green';
        setTimeout(function() {
          ref.style.background = 'none';
        }, 400)
      })
    }
  })
});
