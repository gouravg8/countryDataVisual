let outerDiv = document.querySelector(".outer");

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
const fontFamilies = [
  "Arial, sans-serif",
  "Helvetica, sans-serif",
  "Times New Roman, serif",
  "Georgia, serif",
  "Verdana, sans-serif",
  "Courier New, monospace",
  "Arial Black, sans-serif",
  "Impact, sans-serif",
  "Trebuchet MS, sans-serif",
  "Palatino Linotype, serif",
];

let sameFontForAll = () => {
  var same = setInterval(async () => {
    let myname = document.querySelector(".name");
    let heading = document.querySelector(".heading");
    heading.textContent = "";
    myname.textContent = "";
    let head2 = "30 days of javascript challenge 2023";
    let myname2 = "gourav soni";
    let randFontFamilies = Math.floor(Math.random() * fontFamilies.length);
    let randBg = Math.floor(Math.random() * backgroundColors.length);
    let headingAsArray = Array.from(head2.trim());
    let myname2AsArray = Array.from(myname2.trim());
    outerDiv.style.backgroundColor = backgroundColors[randBg];

    headingAsArray.forEach((char) => {
      // let randFontFamilies = Math.floor(Math.random() * fontFamilies.length);
      let randText = Math.floor(Math.random() * textColors.length);
      let sp = document.createElement("span");
      sp.textContent = char;
      sp.style.color = textColors[randText];
      sp.style.fontFamily = fontFamilies[randFontFamilies];
      heading.appendChild(sp);
    });

    myname2AsArray.forEach((char) => {
      // let randFontFamilies = Math.floor(Math.random() * fontFamilies.length);
      let randText = Math.floor(Math.random() * textColors.length);
      let sp = document.createElement("span");
      sp.textContent = char;
      sp.style.color = textColors[randText];
      sp.style.fontFamily = fontFamilies[randFontFamilies];
      myname.appendChild(sp);
    });
  }, 2000);
  clearInterval(diff);
};
let diffFontForAll = () => {
  var diff = setInterval(async () => {
    let myname = document.querySelector(".name");
    let heading = document.querySelector(".heading");
    heading.textContent = "";
    myname.textContent = "";
    let head2 = "30 days of javascript challenge 2023";
    let myname2 = "gourav soni";
    let randBg = Math.floor(Math.random() * backgroundColors.length);
    let headingAsArray = Array.from(head2.trim());
    let myname2AsArray = Array.from(myname2.trim());
    outerDiv.style.backgroundColor = backgroundColors[randBg];

    headingAsArray.forEach((char) => {
      let randFontFamilies = Math.floor(Math.random() * fontFamilies.length);
      let randText = Math.floor(Math.random() * textColors.length);
      let sp = document.createElement("span");
      sp.textContent = char;
      sp.style.color = textColors[randText];
      sp.style.fontFamily = fontFamilies[randFontFamilies];
      heading.appendChild(sp);
    });

    myname2AsArray.forEach((char) => {
      let randFontFamilies = Math.floor(Math.random() * fontFamilies.length);
      let randText = Math.floor(Math.random() * textColors.length);
      let sp = document.createElement("span");
      sp.textContent = char;
      sp.style.color = textColors[randText];
      sp.style.fontFamily = fontFamilies[randFontFamilies];
      myname.appendChild(sp);
    });
  }, 2000);
  clearInterval(same);
};
