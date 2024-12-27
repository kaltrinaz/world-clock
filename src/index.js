function updateTime() {
    // New York

let newYorkElement = document.querySelector("#new-york");
let newYorkDateElement = newYorkElement.querySelector(".date");
let newYorkTimeElement = newYorkElement.querySelector(".time");
let newYorkTime = moment.tz("America/New_York");

newYorkDateElement.innerHTML = newYorkTime.format("D MMMM,  Y");
newYorkTimeElement.innerHTML = `${newYorkTime.format("h:mm:ss")} <small>${newYorkTime.format("A")}</small>`;

// London

let londonElement = document.querySelector("#london");
let londonDateElement = londonElement.querySelector(".date");
let londonTimeElement = londonElement.querySelector(".time");
let londonTime = moment.tz("Europe/London");

londonDateElement.innerHTML = londonTime.format("D MMMM,  Y");
londonTimeElement.innerHTML = `${londonTime.format("h:mm:ss")} <small>${londonTime.format("A")}</small>`;


}

updateTime();
setInterval(updateTime, 1);




