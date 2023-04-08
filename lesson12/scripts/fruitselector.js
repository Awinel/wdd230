const url = "https://brotherblazzard.github.io/canvas-content/fruit.json"

fetch(url)
  .then(response => response.json())
  .then(fruits => {
    const select = document.getElementById('fruits01');
    fruits.forEach(fruit => {
      const option = document.createElement('option');
      option.value = fruit.name;
      option.textContent = fruit.name;
      select.appendChild(option);
    });
  });

  fetch(url)
  .then(response => response.json())
  .then(fruits => {
    const select = document.getElementById('fruits02');
    fruits.forEach(fruit => {
      const option = document.createElement('option');
      option.value = fruit.name;
      option.textContent = fruit.name;
      select.appendChild(option);
    });
  });

  fetch(url)
  .then(response => response.json())
  .then(fruits => {
    const select = document.getElementById('fruits03');
    fruits.forEach(fruit => {
      const option = document.createElement('option');
      option.value = fruit.name;
      option.textContent = fruit.name;
      select.appendChild(option);
    });
  });