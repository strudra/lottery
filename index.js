const candidateNode = document.querySelector("#candidate");
const stopNode = document.querySelector("#stop");
const okNode = document.querySelector("#ok");
const inputNode = document.querySelector("#names");
const labela = document.querySelector("#labela");

function stopChanging(e) {
  clearInterval(intervalId);
}

function populateNames(e) {
  const val = inputNode.value;
  const names = val.split(",");

  okNode.remove();
  inputNode.remove();
  labela.remove();

  window.names = names;
}

okNode.addEventListener("click", populateNames);
stopNode.addEventListener("click", stopChanging);

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let intervalId;

intervalId = setInterval(() => {
  if (window.names && window.names.length > 0) {
    const numberOfPeople = window.names.length;
    const randomNmr = randomIntFromInterval(0, numberOfPeople - 1);

    candidateNode.innerHTML = window.names[randomNmr];
  }
}, 100);
