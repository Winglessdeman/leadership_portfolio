fetch("assets/data/content.json")
  .then(response => response.json())
  .then(data => {
    document.getElementById("name").textContent = data.name;
    document.getElementById("title").textContent = data.title;
    document.getElementById("context").textContent = data.context;
    document.getElementById("philosophy").textContent = data.philosophy;
    document.getElementById("impact").textContent = data.impact;

    const container = document.getElementById("virtues");

    data.virtues.forEach(v => {
      const card = document.createElement("div");
      card.classList.add("card");

      card.innerHTML = `
        <h3>${v.title}</h3>
        <p>${v.description}</p>
      `;

      container.appendChild(card);
    });
  })
  .catch(err => console.error(err));