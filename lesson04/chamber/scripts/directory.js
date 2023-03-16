const url = "json/data.json";

async function getDirectoryData() {
    const response = await fetch(url);
    const data = await response.json();
    displayDirectory(data.directory);
}

getDirectoryData();


const displayDirectory = (directory) => {
    const cards = document.querySelector('div.cards'); // select the output container element
    
    directory.forEach((directory) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let logo = document.createElement('img');
        let instalogo = document.createElement('img');
        let name = document.createElement("h2");
        let businessHour = document.createElement("h3");
        let instagram = document.createElement("a");
        let direction = document.createElement("h3");
        let phone = document.createElement("h3");
    
        name.textContent = `${directory.businessname}`;
        businessHour.textContent = `Business Hours: ${directory.businesshour}`;
        instagram.imageurl = "images/instagram_logo.png";
        direction.textContent = `Direcction: ${directory.direction}`;
        phone.textContent = `Phone: ${directory.phone}`;

    
        instagram.setAttribute('href', directory.instagram);
        instagram.setAttribute("width", "190");
        instalogo.setAttribute("src", "images/instagram_icon.png")
        logo.setAttribute("src", directory.imageurl)
        logo.setAttribute('alt', "Logo");
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '200');
        logo.setAttribute('height', '200');
    
    
      
        card.appendChild(logo);
        card.appendChild(name)
        card.appendChild(businessHour)
        card.appendChild(instagram)
        card.appendChild(direction)
        card.appendChild(phone)
        instagram.appendChild(instalogo)
    
        cards.appendChild(card);
    } 
    )};

