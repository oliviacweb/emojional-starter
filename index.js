var happy = document.querySelector(".happy");
var response = document.querySelector("h2");
happy.addEventListener('click', happyResponse);
function happyResponse() {
  var happyArray = [`Well that's just peachy`, `Nice!`,
   `You deserve happiness!`,
   `how did you manage to find happiness in the anthropocene?`,
   `civilization might collapse soon, but live in the moment!`,
   `Just want to remind you that Trump is still president`];
   var happyResponse = Math.floor(Math.random() * happyArray.length);
  response.innerText = happyArray[happyResponse];
}

var silly = document.querySelector(".silly");
silly.addEventListener('click', sillyResponse);
function sillyResponse() {
  var sillyArray = [`You little goose!`, `ok`, `I feel you`, `you do you`,
    `you might need therapy`, `don't do psychedelics before class!`];
  var sillyResponse = Math.floor(Math.random() * sillyArray.length);
  response.innerText = sillyArray[sillyResponse];
}

var crying = document.querySelector(".crying");
crying.addEventListener('click', cryingResponse);
function cryingResponse() {
  var cryingArray = [`feel your feelings`, `sad sack`,
    `Are you going to cry on public transportation?`,
    `I'll give you something to cry about`,
    `I'm crying too`, `Everybody hurts... sometimes`];
  var cryingResponse = Math.floor(Math.random() * cryingArray.length);
  response.innerText = cryingArray[cryingResponse];
}
