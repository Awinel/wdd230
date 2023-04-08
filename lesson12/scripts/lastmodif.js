let objectDate = new Date();

let lastModif = new Date(document.lastModified)

let lmDay = lastModif.getDate();

let lmMonth = lastModif.getMonth() + 1;

let lmYear = lastModif.getFullYear();

let lmHour = lastModif.getHours();

let lmMinutes = lastModif.getMinutes();

let mlSeconds = lastModif.getSeconds();

lastModif = `${lmDay}/${lmMonth}/${lmYear} ${lmHour}:${lmMinutes}:${mlSeconds}`;

const update = document.querySelector(".lastModif");

update.textContent = "Last Updated : " + lastModif;