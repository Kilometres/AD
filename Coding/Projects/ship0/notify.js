var div = document.getElementsByClassName('form')[0]
var boxAmount = 3

for (i = 0; i < boxAmount; i++) {
  div.innerHTML += `<input type="text" class="inp" id="${i}inp" value="${i+1}"></span>
  <input type="submit" class="cop" id="${i}cop" value="Copy">`;

}

for (i = 0; i < boxAmount; i++) {
  let boxs = document.getElementsByClassName('inp')
  let btns = document.getElementsByClassName('cop')

  btns[i].addEventListener('click', () => {
    box[i].select();
    document.execCommand("Copy");
  })
}
