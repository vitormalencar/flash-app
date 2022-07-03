function fetchCard() {
  const id = Math.floor(Math.random() * 29);
  const URL = `https://my-json-server.typicode.com/vitormalencar/flash-app/terms/${id}`;

  fetch(URL)
    .then((response) => response.json())
    .then((data) => renderCard(data));
}

function renderCard(card) {
  const cardContainer = document.querySelector("#card-container");

  cardContainer.innerHTML = "";

  const cardDiv = document.createElement("div");

  cardDiv.classList.add("card", "animate__animated", "animate__backInRight");

  cardDiv.innerHTML = `
    <div class="card-image"></div>
    <div class="card-content">
      <div class="card-title">${card.title}</div>
      <p class="card-description">${card.description}</p>
    </div>
  `;

  cardContainer.appendChild(cardDiv);
}

window.addEventListener("load", fetchCard);
