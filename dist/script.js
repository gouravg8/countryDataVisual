import countries_data from "./countries_data.mjs";

let countries = countries_data;
let population = document.querySelector("#population");
let languages = document.querySelector("#languages");
let totalPop = countries_data.reduce((acc, curr) => acc + curr.population, 0);
let tenMost = document.querySelector(".tenMost");
let inpInputNumber = document.querySelector("#inputNumber");


let frameOfBars = (country) => {
  let divOfCountry = document.createElement("div");
  divOfCountry.classList.add("grid", "grid-cols-8", "my-2");
  let lang = document.createElement("p");
  let newName = "";
  if (country.name.length > 12) {
    let nameOfCon = country.name.split(" ");
    nameOfCon.forEach((name) => (newName += name.charAt(0)));
    lang.textContent = newName;
  } else {
    lang.textContent = country.name;
  }
  lang.style.width = "30%";
  lang.classList.add("text-center", "col-span-2");
  // console.log(halfName);

  let percentageOfBar = (country.population / totalPop) * 100;
  let bar = document.createElement("p");
  bar.style.width = `${percentageOfBar * 2}%`;
  bar.classList.add("bar", "bg-orange-400", "col-span-4", "text-center");

  let pops = document.createElement("p");
  pops.textContent = country.population;
  pops.style.width = "20%";
  pops.classList.add("text-center", "nums", "col-span-2");
  // console.log(percentageOfBar, bar.style.width);

  divOfCountry.appendChild(lang);
  divOfCountry.appendChild(bar);
  divOfCountry.appendChild(pops);
  return divOfCountry;
};
population.addEventListener("click", (e) => {
  e.preventDefault();
  tenMost.textContent = "";
  let totalOutput = document.querySelector(".totalOutput");
  totalOutput.innerHTML = "";
  // console.log(totalPop);
  let world = `<div class="grid grid-cols-8 my-2">
    <p class="text-center col-span-2 w-1/3">World</p>
    <p class="bar col-span-4 bg-orange-400"></p>
    <p class="text-center nums col-span-2 w-1/5">${totalPop}</p>
    </div>`;
  totalOutput.innerHTML = world;
  // console.log(typeof +inpInputNumber.value);
  if (
    inpInputNumber.value >= 0 &&
    inpInputNumber.value != "" &&
    inpInputNumber.value <= countries_data.length
  ) {
    // console.log(inpInputNumber.value);
    let sorted = countries_data
      .sort((a, b) => b.population - a.population)
      .slice(0, inpInputNumber.value);
    sorted.forEach((country) => {
      let divOfCountry = frameOfBars(country);
      totalOutput.appendChild(divOfCountry);
    });
  } else {
    alert("Value is null or out of range");
    console.log("range is", countries_data.length);
  }

  tenMost.textContent = inpInputNumber.value + " Most populated countries in the world";
});

// ! Below is for language perpose
let frameOfBarsForLangs = (langs, mostSpokenLang) => {
  let divOfLangs = document.createElement("div");
  divOfLangs.classList.add("grid", "grid-cols-8", "my-2");
  let lang = document.createElement("p");
  let newName = "";
  if (langs.length > 12) {
    let nameOfCon = langs.split(" ");
    nameOfCon.forEach((name) => (newName += name.charAt(0)));
    lang.textContent = newName;
  } else {
    lang.textContent = langs[0];
  }
  lang.style.width = "30%";
  lang.classList.add("text-center", "col-span-2");

  let percentageOfBar = Math.floor((langs[1] / mostSpokenLang) * 100);
  let bar = document.createElement("p");
  bar.style.width = `${percentageOfBar}%`;
  bar.classList.add("bar", "bg-orange-400", "col-span-4", "text-center");

  let speakers = document.createElement("p");
  speakers.textContent = langs[1];
  speakers.style.width = "30%";
  speakers.classList.add("text-right", "nums", "col-span-2");
  // console.log(percentageOfBar, bar.style.width);

  divOfLangs.appendChild(lang);
  divOfLangs.appendChild(bar);
  divOfLangs.appendChild(speakers);
  return divOfLangs;
};

languages.addEventListener("click", (e) => {
  e.preventDefault();
  tenMost.textContent = "";
  let totalOutput = document.querySelector(".totalOutput");
  totalOutput.innerHTML = "";

  let allLangs = {};
  countries_data.forEach((country) => {
    country.languages.forEach((lang) => {
      if (allLangs[lang]) {
        allLangs[lang]++;
      } else {
        allLangs[lang] = 1;
      }
    });
  });
  // console.log(allLangs);
  let entries = Object.entries(allLangs);

  if (
    inpInputNumber.value >= 0 &&
    inpInputNumber.value != "" &&
    inpInputNumber.value <= countries_data.length
  ) {
    let sortEntries = entries
      .sort((a, b) => b[1] - a[1])
      .slice(0, inpInputNumber.value);

    sortEntries.forEach((langs) => {
      let mostSpokenLang = sortEntries[0][1];
      let divOfLangs = frameOfBarsForLangs(langs, mostSpokenLang);
      totalOutput.appendChild(divOfLangs);
    });
  } else {
    alert("Value is null or out of range");
    console.log("range is", countries_data.length);
  }

  tenMost.textContent = inpInputNumber.value + " Most spoken languages in the world";
});
