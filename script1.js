

// Buttons and Event Handlers
// - Reset Button
let resetButton = document.querySelector(".reset");
resetButton.addEventListener("click", resetSketch);

// - Change Grid Size Button
let gridButton = document.querySelector(".grid");
gridButton.addEventListener("click", gridChange);


// Functions
// - Resets the sketch window
function resetSketch () {
  let pixels = document.querySelectorAll(".pixel");
  for (let counter = 0; counter < pixels.length; counter++){
    pixels[counter].style.backgroundColor = "";
  };
};

// - Changes background color of targeted element
function colorChange (event) {
  event.target.style.backgroundColor = "black";
}

// - Prompts the user for an input to change grid size
function gridChange () {
  let newPixResX = Number(prompt("Enter a number between 2 and 100:"));
  if ((typeof newPixResX) !== 'number'  || isNaN(newPixResX)) {
    newPixResX = 4;
  }
  createGrid(newPixResX);
}

// - Creates pixels and adds event listeners.
function createGrid (gridSize) {
  let bodyDiv = document.querySelector(".body");
  let pixel1;
  let pixResX = gridSize;
  if (pixResX > 100) { // limit to 100
    pixResX = 100;
  }

  let pixRes = pixResX*pixResX;
  let pixWid = Math.round(400/pixResX);
  if (bodyDiv.hasChildNodes()) {
    while (bodyDiv.hasChildNodes()) {
      bodyDiv.removeChild(bodyDiv.firstChild);
    }
  }

  for (let counter = 0; counter < pixRes; counter++) {
    pixel1 = document.createElement("div");
    pixel1.setAttribute("class", "pixel");
    pixel1.style.width = `${pixWid}px`;
    pixel1.style.height = `${pixWid}px`;
    pixel1.addEventListener("mouseover", colorChange);
    bodyDiv.appendChild(pixel1);
    pixel1 = "reassigned";
  }
}


// Function Calls
createGrid(4);