const playerXBox = document.getElementById("playerX");
const playerOBox = document.getElementById("playerO");
const cell = document.querySelectorAll(".cell");
const result = document.getElementById("result");
const winnerText = document.getElementById("winnerText");
const xTeam = document.getElementById("xTeam");
const oTeam = document.getElementById("oTeam");
const btn = document.getElementById("btn");

let board = ["", "", "", "", "", "", "", "", ""];
let winCon = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let currentPlayer = "X";
let x = 0;
let o = 0;

const indicator = () => {
  if (currentPlayer == "X") {
    playerXBox.classList.remove("border-transparent");
    playerOBox.classList.add("border-transparent");
  } else {
    playerOBox.classList.remove("border-transparent");
    playerXBox.classList.add("border-transparent");
  }
};
indicator();

const checkWinner = () => {
  for (const pattern of winCon) {
    const [a, b, c] = pattern;
    if (board[a] !== "" && board[a] == board[b] && board[a] == board[c]) {
      cell.forEach((item) => {
        item.disabled = true;
      });
      result.classList.remove("hidden");
      winnerText.textContent = `${currentPlayer} Won!`;
      if (currentPlayer == "X") {
        x++;
        xTeam.textContent = x;
      } else {
        o++;
        oTeam.textContent = o;
      }
      return;
    }
  }
  if (!board.includes("")) {
    result.classList.remove("hidden");
    winnerText.textContent = `Draw`;
  }
};

cell.forEach((item, index) => {
  item.addEventListener("click", () => {
    if (cell[index].textContent !== "") return;

    cell[index].textContent = currentPlayer;
    board[index] = currentPlayer;
    checkWinner();
    currentPlayer = currentPlayer == "X" ? "O" : "X";
    indicator();
  });
});

btn.addEventListener("click", () => {
  board = ["", "", "", "", "", "", "", "", ""];
  cell.forEach((item) => {
    item.textContent = "";
    item.disabled = false;
    result.classList.add("hidden");
  });
});
