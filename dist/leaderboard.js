const inpFname = document.querySelector("#fName");
const inpLname = document.querySelector("#lName");
const inpCountry = document.querySelector("#country");
const inpScore = document.querySelector("#score");
const btnSubmit = document.querySelector("#submit");
let divTasks = document.querySelector(".tasks");
let btnPlusFive = document.querySelector(".plusFive");
let btnMinusFive = document.querySelector(".minusFive");
const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let txtAllFieldsAreRequire = document.querySelector(".allFieldsAreRequire");

btnSubmit.addEventListener("click", () => {
  if (
    inpFname.value == "" ||
    inpLname.value == "" ||
    inpCountry.value == "" ||
    inpScore.value == ""
  ) {
    txtAllFieldsAreRequire.textContent = "All fields are required";
  } else {
    txtAllFieldsAreRequire.textContent = "";
    let time = new Date();
    let month = time.getMonth();
    let date = time.getDate();
    let year = time.getFullYear();
    let currTime = `${time.getHours()}:${time.getMinutes()}`;
    let formatedTime = `${months[time.getMonth()]
      .slice(0, 3)
      .toUpperCase()} ${date}, ${year} ${currTime}`;
    let newCart = `
    <div
      class="oneTask w-4/5 md:w-full mx-auto md:mx-0 bg-red-100 flex justify-between align-middle text-center h-1/2 my-auto p-2">
      <div class="nameAndDateTime flex flex-col align-middle justify-around w-1.5/5 md:w-1/4 h-1/2 my-auto">
      <p class="uppercase text-sm md:text-lg">${inpFname.value} ${
      inpLname.value
    }</p>
      
      <p class="text-gray-600 text-xs">${formatedTime}</p>
    </div>
      
    <div class="rightt flex justify-around align-middle my-auto w-3/5">
      <p class="w-1/5 uppercase text-sm md:text-lg text-left">${
        inpCountry.value.length > 8
          ? inpCountry.value.slice(0, 5)
          : inpCountry.value
      }</p>
        <p id="score" class="score w-1/3 text-sm md:text-lg text-center">${
          inpScore.value
        }</p>
        <div class="w-2/5 md:w-1/5 threeeBtns flex justify-around align-middle md:gap-6">
          <i
          class="text-xs md:text-base cursor-pointer ri-delete-bin-5-line bg-white rounded-full h-fit px-2 py-1 text-red-500" id="delete"></i>
          <p class="text-xs md:text-base cursor-pointer bg-white rounded-full h-fit px-2 py-1 plusFive" id="plusFive">+5</p>
          <p class="text-xs md:text-base cursor-pointer bg-white rounded-full h-fit px-2 py-1 minusFive" id="minusFive">-5</p>
          </div>
      </div>
    </div>`;
    divTasks.innerHTML += newCart;
    inpFname.value = "";
    inpLname.value = "";
    inpCountry.value = "";
    inpScore.value = "";
  }
  sortt();
});

divTasks.addEventListener("click", (e) => {
  if (e.target.closest("#delete")) {
    e.target.parentElement.parentElement.parentElement.remove();
  }

  if (e.target.id === "plusFive" || e.target.id === "minusFive") {
    // Get the parent container of the clicked button
    const oneTask = e.target.closest(".oneTask");

    // Find the score element within the parent container
    const scoreElement = oneTask.querySelector(".score");

    // Get the current score value and parse it as an integer
    let currentScore = parseInt(scoreElement.textContent);

    // Check which button was clicked and update the score accordingly
    if (e.target.id === "plusFive") {
      currentScore += 5;
    } else if (e.target.id === "minusFive") {
      currentScore -= 5;
    }

    // Update the score element with the new score value
    scoreElement.textContent = currentScore;
    sortt();
  }
});

let sortt = () => {
  let eachDivOfTask = Array.from(divTasks.querySelectorAll(".oneTask"));

  // sort the divsBasedOnTheirScore
  eachDivOfTask.sort((a, b) => {
    const scoreA = parseInt(a.querySelector(".score").textContent);
    const scoreB = parseInt(b.querySelector(".score").textContent);
    return scoreA - scoreB;
  });

  // clear div container
  divTasks.innerHTML = "";

  // append sorted eachDivOfTask back to div
  eachDivOfTask.forEach((taskDiv) => {
    divTasks.appendChild(taskDiv);
  });
};
