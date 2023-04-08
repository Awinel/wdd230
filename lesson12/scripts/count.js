const form = document.querySelector("form");
const submit = document.querySelector(".submitBtn");
const drinksNum = localStorage.getItem("drinksNum")
const input = document.getElementById("fname");
let counter = drinksNum

form.addEventListener("submit", function (e) {
    e.preventDefault();
  });
submit.addEventListener("click", function () {
  if (input.value.trim().length === 0) {
    submit.removeEventListener("click")
  }

    counter++
    localStorage.setItem("drinksNum", counter)
    document.getElementById("number").value = counter;

    const fname = document.getElementById("fname").value;
    const lname = document.getElementById("lname").value;
    const phone = document.getElementById("phone").value;
    const email = document.getElementById("email").value;
    const objectDate= new Date();

    let day = objectDate.getDay();
    let month = objectDate.getDate();
    let year = objectDate.getFullYear();


    const fruit01 = document.getElementById("fruits01").value;
    const fruit02 = document.getElementById("fruits02").value;
    const fruit03 = document.getElementById("fruits03").value;

    const info = document.getElementById("extraInfo").value;

    const nInfo = `Name: ${fname} ${lname}`
    const pneInfo = `Phone: ${phone} | Email: ${email}`
    const fInfo = `Fruits Selection: ${fruit01} | ${fruit02} | ${fruit03}`
    const aInfo = `Aditional information: ${info}`
    const currentDate = `Orden date: ${month} - ${day} - ${year}`;

    const title = document.createElement("h2")
    const container = document.createElement("div");
    const fullName = document.createElement("h3");
    const contact = document.createElement("h3");
    const choice = document.createElement("h3");
    const detail = document.createElement("h3");
    const datenow = document.createElement("h3");

    container.setAttribute("class", "submission");
    container.setAttribute("width", "300px");
    container.setAttribute("height", "300px");
    title.setAttribute("id", "subTitle");
    datenow.setAttribute("id", "date");

    title.textContent = "We just recieved your order";
    fullName.textContent = nInfo;
    contact.textContent = pneInfo;
    choice.textContent = fInfo;
    detail.textContent = aInfo;
    datenow.textContent = currentDate
    
    form.appendChild(title);
    form.appendChild(container);
    container.appendChild(fullName);
    container.appendChild(contact);
    container.appendChild(choice);
    container.appendChild(detail);
    container.appendChild(datenow);
    
})