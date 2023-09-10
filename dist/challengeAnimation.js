let outerDiv = document.querySelector(".outer");
let heading = document.querySelector(".heading");
let name = document.querySelector(".name");

const backgroundColors = [
  "white",
  "lightgray",
  "lightblue",
  "lightgreen",
  "lightpink",
  "lavender",
  "lightcoral",
  "lightseagreen",
  "lightgoldenrodyellow",
  "lightcyan",
];
const textColors = [
  "black",
  "darkgray",
  "darkblue",
  "darkgreen",
  "darkred",
  "darkslategray",
  "darkorange",
  "darkturquoise",
  "darkolivegreen",
  "darkslateblue",
];

setInterval(() => {
  let randBg = Math.floor(Math.random() * backgroundColors.length);
  outerDiv.style.backgroundColor = backgroundColors[randBg];
}, 1000);

let totalLen = heading.innerText.trim()
console.log(totalLen, totalLen.length);