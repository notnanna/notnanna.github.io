const cards = ["ap", "ba", "ch", "gr", "or", "pi", "st", "wa"];

console.log(cards);

shuffle(cards);

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const random = Math.floor(Math.random() * (i + 1));

    [array[i], array[random]] = [array[random], array[i]];
  }
}

// const image = document.createElement(img);
// image.src = "fruits.jpg/ap.jpg";

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

// var shuf_items = items.sort(() => (Math.random() > 0.5 ? 2 : -1));
// for (var i = 0; i < items.length; i++) {
//   let box = document.createElement("div");
//   box.className = 'shuf';
//   box.innerHTML - shuf_items[i];
//   document.querySelector(".game").appendChild(box);
// }

// function shuffleArray() {
//   window.alert("the current array contains:" + items);

//   for (var i = 0; i < items.length; i++) {
//     var randomNum = Math.floor(Math.random() * items.length);
//     var tempItem = "";
//     var currentItem = items[i];
//     var randomitem = items[randomNum];
//     //swap items
//     tempItem = currentItem;
//     items[i] = randomNum;
//     items[randomNum] = tempItem;
//   }
//   window.alert("the shuffle array contains: + items");
// } - failed attempt at getting the cards to shuffle :'(
