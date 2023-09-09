import asabenehChallenges2020 from "./author.mjs";
let author = asabenehChallenges2020;
let authorName = document.querySelector("#authorName");
let authorTitles = document.querySelector("#authorTitles");
let authorTitlesEmoji = document.querySelector("#authorTitlesEmoji");
let authorBio = document.querySelector("#authorBio");
let techs = document.querySelector("#technologies");
let challenges = document.querySelector("#challenges");
// name
authorName.textContent = author.author.firstName + author.author.lastName;

// titles and emoji
let titles = author.author.titles;
let ind = 0;
setInterval(() => {
  if (ind < titles.length) {
    authorTitles.textContent = titles[ind][1];
    authorTitlesEmoji.textContent = titles[ind][0];
    authorTitles.classList.add("authorTitlesSwapAnim");
    ind++;
  } else {
    ind = 0;
  }
}, 1500);

authorBio.textContent = `I am ${author.author.firstName} ${author.author.lastName}, I am ${author.author.titles[0][1]}, ${author.author.titles[1][1]}, ${author.author.titles[2][1]} and ${author.author.titles[3][1]}. I love educationg people and creating educartional materials. In January 2019, I also created a teaching material ${author.challenges[0].name}, in December 2019. I creaded ${author.challenges[1].name} and in January 2020 ${author.challenges[2].name} challenge`;

for (let el = 0; el < 3; el++) {
  let challes = `<p
    class="zoomText w-3/4 p-6 md:p-16 text-center uppercase font-light text-2xl text-black rounded md:w-1/4 hover:bg-orange-200 lg:w-1/4">
    ${author.challenges[el].name}</p>`;
  challenges.innerHTML += challes;
}

let colors = [
  "aqua",
  "black",
  "blue",
  "fuchsia",
  "gray",
  "green",
  "lime",
  "maroon",
  "navy",
  "olive",
  "purple",
  "red",
  "silver",
  "teal",
  "yellow",
];
let index = 0;
setInterval(() => {
  if (index < titles.length) {
    let randChallenge = Math.floor(Math.random() * author.challenges.length);
    let randTopic = Math.floor(
      Math.random() * author.challenges[randChallenge].topics.length
    );
    let randTech = author.challenges[randChallenge].topics[randTopic];
    techs.textContent = randTech;
    techs.classList.add("technologies");
    techs.style.color = colors[Math.floor(Math.random() * colors.length)];
    index++;
  } else {
    index = 0;
  }
}, 1500);
