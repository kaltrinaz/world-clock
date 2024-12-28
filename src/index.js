function updateTime() {
    // New York

let newYorkElement = document.querySelector("#new-york");
if (newYorkElement){
let newYorkDateElement = newYorkElement.querySelector(".date");
let newYorkTimeElement = newYorkElement.querySelector(".time");
let newYorkTime = moment.tz("America/New_York");

newYorkDateElement.innerHTML = newYorkTime.format("D MMMM,  Y");
newYorkTimeElement.innerHTML = `${newYorkTime.format("h:mm:ss")} <small>${newYorkTime.format("A")}</small>`;
}
// London

let londonElement = document.querySelector("#london");
if(londonElement){
let londonDateElement = londonElement.querySelector(".date");
let londonTimeElement = londonElement.querySelector(".time");
let londonTime = moment.tz("Europe/London");

londonDateElement.innerHTML = londonTime.format("D MMMM,  Y");
londonTimeElement.innerHTML = `${londonTime.format("h:mm:ss")} <small>${londonTime.format("A")}</small>`;
}

}

function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "location"){
        cityTimeZone = moment.tz.guess();
    }
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesSelectElement = document.querySelector("#cities");
    citiesSelectElement.innerHTML = `
    <div class="city">
    <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("D MMMM,  Y")}</div></div>
        <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format("A")}</small></div>
    </div>
    <a href="/"> ← Show all cities</a>`;


    
}

updateTime();
setInterval(updateTime, 1);


let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity);




