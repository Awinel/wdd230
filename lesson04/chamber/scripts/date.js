const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
let objectDate = new Date();

let year = objectDate.getFullYear();

let day = weekday[objectDate.getDay()]

let currentMonth = month[objectDate.getMonth()];

const currentYear = document.querySelector("#year");

currentYear.textContent =  year + " ";

let lastModif = new Date(document.lastModified)

let lmDay = lastModif.getDate();

let lmMonth = lastModif.getMonth() + 1;

let lmYear = lastModif.getFullYear();

let lmHour = lastModif.getHours();

let lmMinutes = lastModif.getMinutes();

let mlSeconds = lastModif.getSeconds();

lastModif = `${lmDay}/${lmMonth}/${lmYear} ${lmHour}:${lmMinutes}:${mlSeconds}`;

const update = document.querySelector("#lastModif");

update.textContent = "Last Updated : " + lastModif;

const currentDate = `${day}, ${currentMonth} ${year}` 

const today = document.getElementById("date");
today.textContent = currentDate

const submit = document.getElementById("time");
