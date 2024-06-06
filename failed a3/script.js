var errors = 0;
var cardList = ["ap", "ba", "ch", "gr", "or", "pi", "st", "wa"];

var cardSet;
var board = [];
var rows = 4;
var columns = 4;

window.onload = function () {
  shuffleCards();
  startGame();
};

function shuffleCards() {
  cardSet = cardList.concat(cardList); //two of each card
  console.log(cardSet);
  //shuffle
  for (let i = 0; i < cardSet.length; i++) {
    let j = Math.floor(Math.random() * cardSet.length); //get random index
    //swap
    let temp = cardSet[i];
    cardSet[i] = cardSet[j];
    cardSet[j] = temp;
  }
  console.log(cardSet);
}

function startGame() {
  //arrange the board - 4x4
  for (let r = 0; r < rows; r++) {
    let row = [];
    for (let c = 0; c < columns; c++) {
      let cardImg = cardSet.pop();
      row.push(cardImg); // JS

      //<img id = "0-0" class = "card" src = cherry.png>
      let card = document.createElement("img");
      card.id = r.toString() + "-" + c.toString();
      card.src = cardImg + ".jpg";
      card.classList.add("card");
      document.getElementById("board").append(card);
    }
    board.push(row);
  }
  console.log(board);
}
