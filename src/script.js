const createGridButton = document.querySelector("#create-grid-button");
console.log(createGridButton);

function createGrid() {
  for (let i = 0; i < 100; i++) {
    const container = document.querySelector(".container");
    const gridSquare = document.createElement("div");

    container.style.display = "flex";
    container.style.width = "1000px";
    container.style.flexWrap = "wrap";
    container.style.margin = "auto";

    gridSquare.style.display = "flex";
    gridSquare.style.height = "100px";
    gridSquare.style.width = "100px";
    gridSquare.style.border = "1px solid black";

    container.append(gridSquare);

    gridSquare.addEventListener("mouseover", (event) => {
      gridSquare.classList.toggle("grid-square-hover-state");
    });
  }
}

createGrid();
