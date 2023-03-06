// // get the stored value of localstorage
// const visitDisplay = document.getElementById("visits");

const visitsDisplay = document.querySelector("#visits");

let numVisits = Number(window.localStorage.getItem("visits"));


if (numVisits == 0) {
	visitsDisplay.textContent = "Hello, this is your first visit!. Enjoy discovering and please come back soon";
} else {
	visitsDisplay.textContent = `Hello again, this is your ${numVisits} visiting us, have a great time!.`;
}

numVisits++;

localStorage.setItem("visits", numVisits);