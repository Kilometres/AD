function msg(text) {
  if (text=="js") {
    document.getElementById('PreviousAlerted').innerHTML += "<br>" + "<img src='https://www.javatpoint.com/images/javascript/javascript_logo.png' onclick="alert('JavaScipt');"></img>"
  }
  else {
    alert(text);
    document.getElementById('PreviousAlerted').innerHTML += "<br>" + text
  }
}
