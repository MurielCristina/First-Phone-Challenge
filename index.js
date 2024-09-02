let dateElement = document.querySelector("#add-date");
dateElement.innerHTML = moment().format("d/MM/YY");

let timeElement = document.querySelector("#add-time");
timeElement.innerHTML = moment().format("hh:mm a");
