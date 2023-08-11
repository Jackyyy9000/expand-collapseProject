const cards = document.querySelectorAll(".card");

cards.forEach((element) =>
  element.addEventListener("click", (e) => {
    let cardBody = e.target.parentElement.nextElementSibling;

    if (!e.target.matches(".expand-button")) return;

    if (e.target.innerText === "Collapse") {
      e.target.innerText = "Expand";
      cardBody.classList.remove("show");
    } else {
      e.target.innerText = "Collapse";
      cardBody.classList.add("show");
    }
  })
);
