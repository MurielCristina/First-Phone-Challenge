let dateElement = document.querySelector("#add-date");
dateElement.innerHTML = moment().format("d/MM/YY");

let timeElement = document.querySelector("#add-time");
timeElement.innerHTML = moment().format("hh:mm a");

function moreButton() {
  document.querySelector("#screen-one").style.display = "none";
  document.querySelector("#screen-two").style.display = "block";
}

function homeButton() {
  document.querySelector("#screen-two").style.display = "none";
  document.querySelector("#screen-one").style.display = "block";
}

document.querySelector("#more-button").addEventListener("click", moreButton);
document.querySelector("#home-button").addEventListener("click", homeButton);
