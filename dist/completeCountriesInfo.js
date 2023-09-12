import countries_data from "./countries_data.mjs";
// console.log(countries);
let inpSearch = document.querySelector(".searchArea");
let btnName = document.querySelector(".btnName");
let btnCapital = document.querySelector(".btnCapital");
let btnPopulation = document.querySelector(".btnPopulation");
let btnStat = document.querySelector(".btnStat");
let divCountriesArea = document.querySelector(".countriesArea");
let txtCountResult = document.querySelector(".countResult");

let oneCountry = (country) => {
  return `<div
    class="oneCountry p-3 mx-auto w-4/5 bg-white flex flex-col justify-center align-middle text-center md:mt-0 md:w-64 md:mx-0">
    <img class="" src="${country.flag}" alt="" srcset="">
        <p class="countryName text-orange-400 text-2xl font-semibold md:text-xl lg:text-2xl">${country.name}</p>
        <p class="text-left text-lg font-semibold md:text-base">Capital: <span
                class="font-normal capitalAns">${country.capital}</span></p>
        <p class="text-left text-lg font-semibold md:text-base">Languages: <span
                class="font-normal languagesAns capitalAns">${country.languages}</span></p>
        <p class="text-left text-lg font-semibold md:text-base">Populations: <span
                class="font-normal populationAns capitalAns">${country.population}</span></p>
</div>`;
};

inpSearch.addEventListener("input", (e) => {
  let count = 0;
  let firstCharOfInpVal = e.target.value.charAt(0).toUpperCase();
  let inpVal = e.target.value.slice(1);
  let searchString = firstCharOfInpVal + inpVal;
  divCountriesArea.textContent = "";

  countries_data.forEach((country) => {
    // if (country.name.includes(searchString)) {
    //   console.log(country);
    // }
    country.languages.forEach((lang) => lang);
    if (
      country.name.includes(searchString) ||
      (country.capital && country.capital.includes(searchString)) ||
      country.languages.find((lang) => lang.includes(searchString))
    ) {
      divCountriesArea.innerHTML += oneCountry(country);
      count++;
    }
});
txtCountResult.style.display = "flex";
txtCountResult.textContent = count;
});
