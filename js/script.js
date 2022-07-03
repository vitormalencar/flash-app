// fetch cards from API and display them in the DOM localhost 3001
function renderCard({ title, description, image }) {
  const cardDiv = document.createElement("div");
  cardDiv.classList.add("card", "animate__animated", "animate__backInRight");
  cardDiv.innerHTML = `
    <div class="card-image"></div>
    <div class="card-wrapper">
      <div class="card-title">${title}</div>
      <p class="card-description">${description}</p>
    </div>
  `;
  return cardDiv;
}
function getCards() {
  fetch("http://localhost:3001/definitions")
    .then((response) => response.json())
    .then((cards) => {
      const index = Math.floor(Math.random() * cards.length);
      const card = cards[index];
      const cardContainer = document.querySelector(".cards");
      const cardDiv = renderCard(card);

      cardContainer.innerHTML = "";
      cardContainer.appendChild(cardDiv);
    });
}

window.addEventListener("load", getCards);
