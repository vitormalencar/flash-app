const URL =
  "https://my-json-server.typicode.com/vitormalencar/flash-app/definitions";

function fetchCards() {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => renderCard(data));
}

function renderCard(cards) {
  const index = Math.floor(Math.random() * cards.length);
  const card = cards[index];
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

window.addEventListener("load", fetchCards);
