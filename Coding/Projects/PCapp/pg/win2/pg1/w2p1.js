var count = 0;

function func() {
  var sb = document.getElementById('sb1');
  if (sb.value == "R33") {
    spanSet("Username Recognised");
    count = 1;
  }
  else if (count == 1 && sb.value == "R44") {
    spanSet("Pasword Accepted");
    count = 0;
  }
}

function spanSet(str) {
  var span = document.getElementsByTagName('span')[0];
  spam.innerHTML = str;
}
