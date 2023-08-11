const cards = document.querySelectorAll(".card");

cards.forEach((element) =>
  element.addEventListener("click", (e) => {
    if (!e.target.matches(".expand-button")) return;

    console.log("Click detected");
  })
);
