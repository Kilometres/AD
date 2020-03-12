function goTo() {
  window.location.href = sb.value;
}

function func2() {
  if (sb.value == "R33") {
    document.getElementById('out').innerHTML = "Welcome back, sir.";
  }
  else {
    document.getElementById('out').innerHTML = sb.value;
  }
};
