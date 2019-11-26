let grid = [['', '', ''], ['', '', ''], ['', '', '']];
let turn = 0
let players = ["X", "O"]


document.body.addEventListener("click", event => {
  if (event.target.nodeName == 'div'){
  document.getElementById("test").textContent = players[turn]
}

});
