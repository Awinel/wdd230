const date = new Date().getFullYear();

const currentYear = document.querySelector("#copyright");

currentYear.textContent =  date;

alert(document.lastModified)

let lastModif = new Date(document.lastModified);

const update = document.querySelector("#lastmodif");

update.textContent = "Last Updated : " + lastModif;