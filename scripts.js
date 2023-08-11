const cards = document.querySelectorAll(".card");

cards.forEach((element) =>
  element.addEventListener("click", (e) => {
    if (!e.target.matches(".expand-button")) return;

    if (e.target.innerText === "Expand") {
      e.target.innerText = "Collapse";
    } else {
      e.target.innerText = "Expand";
    }
  })
);
