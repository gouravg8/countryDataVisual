import countries from "./countryName.mjs";
// console.log(countries);
let txtTotalNoOfCons = document.querySelector("#totalNoOfCons");
let txtCountryContaining = document.querySelector("#countryContaining");
let txtStartLetter = document.querySelector("#startLetter");
let txtCountCountry = document.querySelector("#countCountry");
let btnSearchByInitial = document.querySelector("#searchByInitial");
let btnSearchByWord = document.querySelector("#searchByWord");
let btnSortIt = document.querySelector("#sortIt");
let inpSearchCountry = document.querySelector("#searchCountry");
let cardCountryCards = document.querySelector(".countryCards");
// let cardOne = `<p class="allCountryCard">${country}</p>`;

txtTotalNoOfCons.textContent += countries.length;

let outCard = (country) => {
  let cardOne = `
  <div class="flex flex-col justify-center align-middle w-64 h-fit relative">
    <img
      class="brightness-50 rounded -z-10 w-full "
      src="../src/map_image.jpg"
      alt=""
      srcset=""
    />
    <p class="w-full text-center text-white z-10 absolute uppercase text-2xl">
    ${country}
    </p>
  </div>
  `;
  cardCountryCards.innerHTML += cardOne;
};

inpSearchCountry.addEventListener("input", (e) => {
  let inpValue = "";
  if (btnSearchByInitial.checked) {
    inpValue = e.target.value.charAt(0).toUpperCase();
    cardCountryCards.innerHTML = "";
    let con = countries.filter((country) => country.startsWith(inpValue));
    // * Displaying the country text : countries length
    txtCountryContaining.style.display = "block";
    txtStartLetter.textContent = inpValue;
    txtCountCountry.textContent = con.length;

    con.forEach((country) => {
      outCard(country);
    });
  } else if (btnSearchByWord.checked) {
    inpValue = e.target.value.toLowerCase();
    cardCountryCards.innerHTML = "";
    let con = countries.filter((country) =>
      country.toLowerCase().includes(inpValue)
    );

    // * Displaying the country text : countries length
    txtCountryContaining.style.display = "block";
    txtStartLetter.textContent = inpValue;
    txtCountCountry.textContent = con.length;

    con.forEach((country) => {
      country = country.toLowerCase();
      outCard(country);
    });
  } else {
    cardCountryCards.innerHTML = "";
    countries.forEach((country) => {
      outCard(country);
    });
  }
});

cardCountryCards.innerHTML = "";
countries.forEach((country) => {
  outCard(country);
});
