let grid = [['', '', ''], ['', '', ''], ['', '', '']];
let turn = 0
let players = ["X", "O"]


document.body.querySelector('.large').addEventListener("click", event => {
  if (event.target.textContent == " "){
  event.target.textContent = players[turn]
if (turn == 0){
  turn=1
}
else turn=0
}
});
