import countries_data from "./countries_data.mjs";
// console.log(countries);
let inpSearch = document.querySelector(".searchArea");
let btnName = document.querySelector(".btnName");
let btnCapital = document.querySelector(".btnCapital");
let btnPopulation = document.querySelector(".btnPopulation");
let btnStat = document.querySelector(".btnStat");
let divCountriesArea = document.querySelector(".countriesArea");
let txtCountResult = document.querySelector(".countResult");
let divBars = document.querySelector(".barsOutput");

let oneCountry = (country) => {
  let out = `<div
    class="oneCountry p-3 mx-auto w-4/5 bg-white flex flex-col justify-center align-middle text-center md:mt-0 md:w-64 md:mx-0">
    <img class="" src="${country.flag}" alt="" srcset="">
        <p class="countryName text-orange-400 text-2xl font-semibold md:text-xl lg:text-2xl">${country.name}</p>
        <p class="text-left text-lg font-semibold md:text-base">Capital: <span
                class="font-normal capitalAns">${country.capital}</span></p>
        <p class="text-left text-lg font-semibold md:text-base">Languages: <span
                class="font-normal languagesAns">${country.languages}</span></p>
        <p class="text-left text-lg font-semibold md:text-base">Populations: <span
                class="font-normal populationAns">${country.population}</span></p>
</div>`;
  return out;
};

// crete country
let createCountry = (searchString) => {
  let count = 0;
  divCountriesArea.textContent = "";

  // orderChange(searchString);

  countries_data.forEach((country) => {
    if (
      searchString &&
      (country.name.includes(searchString) ||
        (country.capital && country.capital.includes(searchString)) ||
        country.languages.find((lang) => lang.includes(searchString)))
    ) {
      divCountriesArea.innerHTML += oneCountry(country);
      count++;
    }
    txtCountResult.textContent =
      count == 1 || count == 0
        ? count + " country satisfy search criteria"
        : count + " countries satisfy search criteria";
    txtCountResult.style.display = "block";
  });
};

let createBars = () => {
  const divs = Array.from(divCountriesArea.querySelectorAll(".oneCountry"));
  divs.sort((a, b) => {
    const nameA = a.querySelector(".populationAns").textContent;
    const nameB = b.querySelector(".populationAns").textContent;
    btnName.textContent = "Name " + "↑";
    return nameB.localeCompare(nameA);
  });

  divBars.innerHTML = "";
  divs.forEach((div) => {
    divBars.appendChild(div);
  });
};

//* Function to reverse the order of divs by name
let statusName = 0;
function reverseDivsByName() {
  const divs = Array.from(divCountriesArea.querySelectorAll(".oneCountry"));
  if (!statusName) {
    statusName = 1;
    divs.sort((a, b) => {
      const nameA = a.querySelector(".countryName").textContent;
      const nameB = b.querySelector(".countryName").textContent;
      btnName.textContent = "Name " + "↑";
      return nameB.localeCompare(nameA);
    });
  } else {
    statusName = 0;
    divs.sort((a, b) => {
      const nameA = a.querySelector(".countryName").textContent;
      const nameB = b.querySelector(".countryName").textContent;
      btnName.textContent = "Name " + "↓";
      return nameA.localeCompare(nameB);
    });
  }
  // Clear the divCountriesArea
  divCountriesArea.innerHTML = "";
  // Append the sorted divs back to the divCountriesArea
  divs.forEach((div) => {
    divCountriesArea.appendChild(div);
  });
}

//* Add a click event listener to the button
btnName.addEventListener("click", reverseDivsByName);

//* Function to reverse the order of divs by Capitals name
let statusCapital = 0;
function reverseDivsByCapitalName() {
  const divs = Array.from(divCountriesArea.querySelectorAll(".oneCountry"));
  if (statusCapital) {
    statusCapital = 0;
    divs.sort((a, b) => {
      const capA = a.querySelector(".capitalAns").textContent;
      const capB = b.querySelector(".capitalAns").textContent;
      btnCapital.textContent = "Capital " + "↑";
      return capB.localeCompare(capA);
    });
  } else {
    statusCapital = 1;
    divs.sort((a, b) => {
      const capA = a.querySelector(".capitalAns").textContent;
      const capB = b.querySelector(".capitalAns").textContent;
      btnCapital.textContent = "Capital " + "↓";
      return capA.localeCompare(capB);
    });
  }
  // Clear the divCountriesArea
  divCountriesArea.innerHTML = "";
  // Append the sorted divs back to the divCountriesArea
  divs.forEach((div) => {
    divCountriesArea.appendChild(div);
  });
}

//* Add a click event listener to the button
btnCapital.addEventListener("click", reverseDivsByCapitalName);

// Function to reverse the order of divs by Capitals name
let statusPopulation = 0;
function reverseDivsByPopu() {
  const divs = Array.from(divCountriesArea.querySelectorAll(".oneCountry"));
  if (statusPopulation) {
    statusPopulation = 0;
    divs.sort((a, b) => {
      const popA = +a.querySelector(".populationAns").textContent;
      const popB = +b.querySelector(".populationAns").textContent;
      btnPopulation.textContent = "Population " + "↑";
      return popB - popA;
    });
  } else {
    statusPopulation = 1;
    divs.sort((a, b) => {
      const popA = +a.querySelector(".populationAns").textContent;
      const popB = +b.querySelector(".populationAns").textContent;
      btnPopulation.textContent = "Population " + "↓";
      return popA - popB;
    });
  }
  // Clear the divCountriesArea
  divCountriesArea.innerHTML = "";
  // Append the sorted divs back to the divCountriesArea
  divs.forEach((div) => {
    divCountriesArea.appendChild(div);
  });
}

//* Add a click event listener to the button
btnPopulation.addEventListener("click", reverseDivsByPopu);

inpSearch.addEventListener("input", (e) => {
  let firstCharOfInpVal = e.target.value.charAt(0).toUpperCase();
  let inpVal = e.target.value.slice(1);
  let searchString = (firstCharOfInpVal + inpVal).trim();
  createCountry(searchString);
  createBars();
});
