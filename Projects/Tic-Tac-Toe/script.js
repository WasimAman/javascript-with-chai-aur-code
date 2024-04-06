/*
     Additional feature:-   
                            newGame btn
                            score table etc.
*/
const boxes = document.querySelectorAll(".box");
const msg = document.querySelector("#msg");
const gameContainer = document.querySelector(".container");
const resetBtn = document.querySelector("#reset-game");
const winningPattern = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let turnX = true;

const disabledBtn = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

const enabledBtn = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerHTML = "";
  });
};

const resetGame = () => {
  enabledBtn();
  msg.innerHTML = "";
  turnX = true;
};

boxes.forEach((box) => {
  box.addEventListener("click", function () {
    if (turnX) {
      box.innerHTML = "X";
      turnX = false;
    } else {
      box.innerHTML = "O";
      turnX = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const checkWinner = () => {
  for (let pattern of winningPattern) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 != "" && pos2 != "" && pos3 != "") {
      if(pos1 === pos2 && pos2 === pos3) {
        msg.innerHTML = `Player ${pos1} won the game`;
        disabledBtn();
      }
    }
  }
};
resetBtn.addEventListener("click", resetGame);
