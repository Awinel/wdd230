const url = "json/data.json";

async function getDirectoryData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.directory);
}

getDirectoryData();