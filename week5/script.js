const body = document.querySelector("body");
function checkWeather() {
  let temperature = document.querySelector("#temperature");
  let temperature = tempt.value;
  if (temperature < 20 && temperature >= 10) {
    console.log("it feels cold");
    body.style.backgroundColor = "lightblue";
  } else if (temperature >= 20 && temperature < 30) {
    console.log("it feels warm and sunny");
  } else if (temperature > 30) {
    console.log("it is boiling");
  } else if (temperature < 10) {
    console.log("it is freezing");
  }
}
