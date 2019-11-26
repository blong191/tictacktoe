let grid = [['', '', ''], ['', '', ''], ['', '', '']];
let turn = 0
let players = ["X", "O"]

document.getElementById("c1-1").addEventListener("click", () => {

  if (turn == 0){
    document.getElementById("c1-1").innerHTML = players[0]
    grid[0][0] = players[0]
  }
});

if (turn== 1){
  turn=0
}
if (turn==0){
  turn=1
}
console.log(grid[0])
