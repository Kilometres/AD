function func() {
  document.getElementById('inFile').addEventListener('change', function() {
    var fr = new FileReader();
    fr.onload = function() {
      document.getElementById('fileCont').textContent = this.result;
    }
    fr.readAsText(this.files[0]);
  })
};

document.getElementById('inFile').addEventListener('change', func());
