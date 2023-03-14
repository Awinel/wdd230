const url = "https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json";


async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets);
}

getProphetData();

function displayProphets() {
    const displayProphets = (prophets) => {
        const cards = document.querySelector("div.cards"); // Select the output container element
        
        prophets.forEach((prophet) => {
            // Create elements to add the div.cards elements
            let card = document.createElement("section");
            let h2 = document.createElement("h2");
            let img = document.createElement("img");
        });
    }  
}