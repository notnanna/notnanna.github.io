// const myHeading = document.querySelector("hp");
// console.log(myHeading);
// console.log(myHeading.textContent);
// console.log(myHeading.innerHTML);
// myHeading.computedStyleMap.backgroundColor = "limegreen";
// myHeading.textContent = "This is a new para";

const allMyPara = document.querySelectorAll("p");
console.log(allMyPara);

// for(let i=0; i<3; i++)
// {
//     allMyPara[i].style.backgroundColor="lightblue";
// }

// allMyPara.forEach(changeColor);
// function changeColor(item) {
//   console.log(item.classList);
//   item.classList.add("coral-box");
//   item.classList.remove("inner");
//   // item.style.backgroundColor = "hotpink";
// }

const myImage = document.querySelector("#my-image");
console.log(myImage);
const myButton = document.querySelector("#my-button");
console.log(myButton);
myButton.addEventListener("click", toggleImage);

function toggleImage() {
  const myImage = document.querySelector("#my-image");
  console.log(myImage.dataset.catname);
  const myPara = document.querySelector("#greet");
  myPara.textContent = "Hi I am" + myImage.dataset.catname;
  //console.log(myImage);
  myImage.classList.toggle("round");
}
// function changeShape() {
//   myImage.classList.add("round");
// }

function fillerTopic() {
  const myPara = document.querySelectorAll("p");
  myPara.forEach(displayTopic);
  function displayTopic(item) {
    if (item.dataset.topic === "web") {
      item.style.backgroundColor = "limegreen";
    } else if (item.dataset.topic === "sound") {
      item.style.backgroundColor = "coral";
    }
  }
}
