// const moves = document.getElementById("moves-count");
// const timeValue = document.getElementById("time");
// const startButton = document.getElementById("start");
// const stopButton = document.getElementById("stop");
// const gameContainer = document.querySelector(".game-container");
// const result = document.getElementById("result");
// const controls = document.querySelector(".controls-container");
// let cards;
// let interval;
// let firstCard = false;
// let secondCard = false;

// //items array
// const items = [
//   { name: "ap", image: "ap.jpg" },
//   { name: "ba", image: "ba.jpg" },
//   { name: "ch", image: "ch.jpg" },
//   { name: "gr", image: "gr.jpg" },
//   { name: "or", image: "or.jpg" },
//   { name: "pi", image: "pi.jpg" },
//   { name: "st", image: "st.jpg" },
//   { name: "wa", image: "wa.jpg" },
// ];

// //initial time
// let seconds = 0,
//   minutes = 0;
// //initial moves and win count
// let movesCount = 0,
//   winCount = 0;

// //for timer
// const timerGenerator = () => {
//   seconds += 1;
//   //minutes logic
//   if (seconds >= 60) {
//     minutes += 1;
//     seconds = 0;
//   }
//   //format time before displaying
//   let secondsValue = seconds < 10 ? "0${seconds}" : seconds;
//   let minutesValue = minutes < 10 ? "0${minutes}" : minutes;
//   timeValue.innerHTML = "<span>Time:</span>${minutesValue}:${secondsValue}";
// };

// //for calculating moves
// const movesCounter = () => {
//   movesCount += 1;
//   moves.innerHTML = "<span>Moves:</span.${movesCount}";
// };

// //pick random objects from the items array
// const generateRandom = (size = 4) => {
//   //temporary array
//   let tempArray = [...items];
//   //initialises cardValues array
//   let cardValues = [];
//   //size should be dounble (4*4 matrix)/2 since pairs of objects would exist
//   size = (size * size) / 2;
//   //random object selection
//   for (let i = 0; i < size; i++) {
//     const randomIndex = Math.floor(Math.random() * tempArray.length);
//     cardValues.push(tempArray[randomIndex]);
//     //once selected remove the object from temp array
//     tempArray.splice(randomIndex, 1);
//   }
//   return cardValues;
// };

// const matrixGenerator = (cardValues, size = 4) => {
//   gameContainer.innerHTML = "";
//   cardValues = [...cardValues, ...cardValues];
//   //simple shuffle
//   cardValues.sort(() => Math.random() - 0.5);
//   for (let i = 0; i < size * size; i++) {
//     /*
//     create cards
//     before => front side (constains question mark)
//     after => backside (contains actual image);
//     data-card-values is a custom attribute which stores the names of the cards to match later
//     */
//    gameContainer.innerHTML += '
//    <div class="card-container" data-card-value="${cardValues[i].name}">
//    <div class="card-before">?</div>
//    </div>
//    >div class="card-after">
//    <img src="${cardValues[i].image}"
//    class= "image"/></div>
//    </div>
//    ';
//   }
//   //grid

// };

// //initialise values and func calls
// const initializer = () => {
//   result.innerText = "";
//   winCount = 0;
//   let cardValues = generateRandom();
//   console.log(cardValues);
//   matrixGenerator(cardValues);
// };

// initializer();
