let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let winBox = document.querySelector(".winBox");
let newBtn = document.querySelector("#newBtn");
let msg = document.querySelector("#winMsg");
let winImg = document.querySelector(".winImage");
let drawImg = document.querySelector(".drawImage");
let turnMsg = document.querySelector("#turn");

let turnO = true;
let count = 0;

const winPatterns = [
  [0, 1, 2],
  [0, 4, 8],
  [0, 3, 6],
  [3, 4, 5],
  [6, 7, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
];

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnMsg.innerText = "Turn for X";
      turnO = false;
    } else {
      box.innerText = "X";
      turnMsg.innerText = "Turn for O";
      turnO = true;
    }

    box.disabled = true;
    count++;

    let isWinner = checkWinner();

    if (count === 9 && !isWinner) {
      showDraw();
    }
  });
});

const checkWinner = () => {
  for (let pattern of winPatterns) {
    let pos1 = boxes[pattern[0]].innerText;
    let pos2 = boxes[pattern[1]].innerText;
    let pos3 = boxes[pattern[2]].innerText;

    if (pos1 !== "" && pos2 !== "" && pos3 !== "") {
      if (pos1 === pos2 && pos2 === pos3) {
        showWinner(pos1);
        disableBoxes();
        return true;
      }
    }
  }
  return false;
};

const showWinner = (winner) => {
  msg.innerText = `🎉 Congratulations! Winner is ${winner}`;
  winBox.classList.remove("hide");
  winImg.classList.remove("hide1");
  drawImg.classList.add("hide2");
};

const showDraw = () => {
  msg.innerText = ` It's a Draw`;
  winBox.classList.remove("hide");
  drawImg.classList.remove("hide2");
  winImg.classList.add("hide1");
};

const disableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = true;
  });
};

const enableBoxes = () => {
  boxes.forEach((box) => {
    box.disabled = false;
    box.innerText = "";
  });
  winBox.classList.add("hide");
  winImg.classList.add("hide1");
  drawImg.classList.add("hide2");
  turnMsg.innerText = "Turn for O";
  turnO = true;
  count = 0;
};

const resetGame = () => {
  enableBoxes();
};

reset.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);


