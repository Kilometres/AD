var order = 0;
var ksys = new Object()
ksys.users = [];
ksys.uamnt = ksys.users.length;
ksys.upd = ksysUpd;

box = document.getElementsByClassName(`box`)[0];
inpdname = document.getElementById('dname');
inpuname = document.getElementById('uname');
inppw = document.getElementById('pw');
inpauth = document.getElementById('auth');
btn = document.getElementsByClassName(`btn`)[0];

btn.addEventListener('click', function() {
  newUser();
})

function ksysUpd() {
  ksys.uamnt = ksys.users.length;
};

function ord() {
  order += 1;
  return order;
}

function logUser() {
  console.log(this);
}

function printUser() {
  return `Display Name: ${this.dname}<br>\nUsername: ${this.uname}<br>\nPassword: ${this.pw}<br>\nOrder: ${this.ord}<br>\nId: ${this.id}<br>\nAuth: ${this.auth}<hr>\n`
}

function updUsers() {
  box.innerHTML = `<hr>`
  ksys.users.forEach(function(el) {
    box.innerHTML += el.puser();
  })
}

function idMaker(username, ord) {
  let uname = username.toLowerCase()
  let a;
  if (ord < 100) {
    a = `0${ord}`;
    if (ord < 10) {
      a = `0${a}`;
    }
  } else {
    a = ord;
  }
  return `${uname}@${a}`
}

function User(displayname, username, password, auth) {
  this.dname = displayname
  this.uname = username;
  this.pw = password;
  this.ord = ord();
  this.id = idMaker(this.uname, this.ord);
  this.auth = auth;
  this.luser = logUser;
  this.puser = printUser;
  ksys.users.push(this)
  ksys.upd()
}

function newUser() {
  new User(`g`, `g`, `g`, 1)
}



new User(`CheeseBurger`, `cheeseyboi`, 'Incorrect', 30)
new User(`SpongeyKing`, `KingSponge`, 'sp0nge4lyfe', 15)
new User(`edvjfieg`, `gebiegbeigb`, 'fwehekfneg', 13)
updUsers()
