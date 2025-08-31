document.addEventListener("DOMContentLoaded", () => {
  const players = document.querySelectorAll(".player-card");
  const modal = document.createElement("div");
  modal.classList.add("player-modal");
  modal.innerHTML = `
    <div class="modal-content">
      <span class="close-btn">&times;</span>
      <img id="modal-img" src="" alt="">
      <h3 id="modal-name"></h3>
      <p id="modal-role"></p>
    </div>
  `;
  document.body.appendChild(modal);

  const modalImg = document.getElementById("modal-img");
  const modalName = document.getElementById("modal-name");
  const modalRole = document.getElementById("modal-role");
  const closeBtn = modal.querySelector(".close-btn");

  players.forEach(player => {
    player.addEventListener("click", () => {
      const imgSrc = player.querySelector("img").src;
      const name = player.querySelector("h3").textContent;
      const role = player.querySelector("p").textContent;

      modalImg.src = imgSrc;
      modalName.textContent = name;
      modalRole.textContent = role;
      modal.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
  });

  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });
});
