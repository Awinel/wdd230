let objectDate = new Date();

let year = objectDate.getFullYear();

const currentYear = document.querySelector("#copyright");

currentYear.textContent =  year + " ";

let lastModif = new Date(document.lastModified);

let lmDay = lastModif.getDate();

let lmMonth = lastModif.getMonth() + 1;

let lmYear = lastModif.getFullYear();

let lmHour = lastModif.getHours();

let lmMinutes = lastModif.getMinutes();

let mlSeconds = lastModif.getSeconds();

lastModif = `${lmDay}/${lmMonth}/${lmYear} ${lmHour}:${lmMinutes}:${mlSeconds}`;

const update = document.querySelector("#lastmodif");

update.textContent = "Last Updated : " + lastModif;