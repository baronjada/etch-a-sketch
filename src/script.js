const createGridButton = document.querySelector("#create-grid-button");
createGridButton.addEventListener("click", createGrid);

const clearGridButton = document.querySelector("#clear-grid-button");

const hexCharacters = [
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

function getHexChar(index) {
  return hexCharacters[index];
}

function generateNewColour() {
  let hexColorRep = "#";

  for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * hexCharacters.length);
    hexColorRep += getHexChar(randomIndex);
  }

  return hexColorRep;
}

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
      gridSquare.style.backgroundColor = generateNewColour();
    });

    container.append(gridSquare);

    clearGridButton.addEventListener("click", (event) => {
      gridSquare.style.backgroundColor = "";
    });
  }
}
