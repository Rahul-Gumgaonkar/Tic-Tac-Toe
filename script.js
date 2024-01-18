const boxes = document.querySelectorAll(".box");
const resetBtn = document.querySelector(".reset-btn");
const newGameBtn = document.querySelector(".new-btn");
const msgContainer = document.querySelector(".msg-container");
const msg = document.querySelector("#msg");
const container = document.querySelector(".container");

let turnO = true;

const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
  container.classList.remove("hide");
  resetBtn.classList.remove("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO == true) {
      box.innerHTML = "X";
      turnO = false;
    } else {
      box.innerHTML = "O";
      turnO = true;
    }
    box.disabled = true;

    checkWinner();
  });
});

const disableBoxes = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerHTML = `Winner is ${winner}`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1Val = boxes[pattern[0]].innerHTML;
    let pos2Val = boxes[pattern[1]].innerHTML;
    let pos3Val = boxes[pattern[2]].innerHTML;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        container.classList.add("hide");
        resetBtn.classList.add("hide");
      }
    }
  }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
