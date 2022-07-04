function fetchCard() {
  fetch(
    `https://my-json-server.typicode.com/vitormalencar/flash-app/terms/${randomId()}`
  )
    .then((response) => response.json())
    .then((data) => renderCard(data));
}

function randomId() {
  return Math.floor(Math.random() * 29);
}

function toggleBlur() {
  const cardContent = document.querySelector(".card-content");
  cardContent.classList.toggle("blur");
}

function renderCard(card) {
  const cardContainer = document.querySelector("#card-container");

  cardContainer.innerHTML = "";

  const cardDiv = document.createElement("div");

  cardDiv.classList.add("card", "animate__animated", "animate__backInRight");

  cardDiv.innerHTML = `
    <div class="card-header content-center">
      <div class="card-title">o que é "${card.title}" ?</div>
    </div>
    <div class="card-content blur">
      <p class="card-description">${card.description}</p>
    </div>
  `;

  cardContainer.appendChild(cardDiv);
}

window.addEventListener("load", fetchCard);
