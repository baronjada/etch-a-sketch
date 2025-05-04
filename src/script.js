const createGridButton = document.querySelector("#create-grid-button");

createGridButton.addEventListener("click", createGrid);

function createGrid() {
  const container = document.querySelector(".container");
  container.innerHTML = "";

  let userNumInput = parseInt(
    prompt(
      "Please select a number between 1 and 100 to determine how big the grid will be:"
    )
  );

  if (isNaN(userNumInput) || userNumInput < 1 || userNumInput > 100) {
    alert("Please enter a valid number between 1 and 100");
    return;
  }

  const containerSize = 600;
  const squareSize = containerSize / userNumInput;

  container.style.display = "flex";
  container.style.width = `${containerSize}px`;
  container.style.height = `${containerSize}px`;
  container.style.flexWrap = "wrap";
  container.style.margin = "0 auto";

  let gridDimensions = Math.pow(userNumInput, 2);

  for (let i = 0; i < gridDimensions; i++) {
    const gridSquare = document.createElement("div");

    gridSquare.style.height = `${squareSize}px`;
    gridSquare.style.width = `${squareSize}px`;
    gridSquare.style.border = "1px solid black";

    gridSquare.addEventListener("mouseover", (event) => {
      gridSquare.classList.toggle("grid-square-hover-state");
    });

    container.append(gridSquare);
  }
}
