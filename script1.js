let bodyDiv = document.querySelector(".body");
let pixel1 = document.createElement("div");
pixel1.setAttribute("class", "pixel");
function colorChange(event){
  event.target.style.backgroundColor = "black";
}
pixel1.addEventListener("mouseover", colorChange);
bodyDiv.appendChild(pixel1);
pixel1 = "reassigned";