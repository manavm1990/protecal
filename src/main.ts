const proteinSpan = document.querySelector("#protein-count") as HTMLSpanElement;
const caloriesSpan = document.querySelector(
  "#calories-count"
) as HTMLSpanElement;

let nutrient = "protein";

document.querySelectorAll("input").forEach((input) => {
  input.addEventListener("click", () => {
    nutrient = input.id;
  });
});

document.querySelectorAll("button").forEach((button) => {
  button.addEventListener("click", (e) => {
    const amt = (e.target as HTMLButtonElement).innerText.slice(1);

    switch (nutrient) {
      case "calories": {
        const count = caloriesSpan.textContent;
        caloriesSpan.textContent = (Number(count) + Number(amt)).toString();
        break;
      }

      default: {
        const count = proteinSpan.textContent;
        proteinSpan.textContent = (Number(count) + Number(amt)).toString();
      }
    }
  });
});
