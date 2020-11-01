const canvas = document.getElementById("js-Canvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("js-Color");
const styleSheets = document.styleSheets[0].cssRules;
const range = document.getElementById("js-Range");

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "#black";
ctx.lineWidth = 2.5;

let painting = false;

function startPainting() {
  painting = true;
}

function stopPainting() {
  painting = false;
}

function onMouseMove(event) {
  const offsetX = event.offsetX;
  const offsetY = event.offsetY;

  if(!painting) {
    ctx.beginPath();
    ctx.moveTo(offsetX, offsetY);
  }
  else {
    ctx.lineTo(offsetX, offsetY);
    ctx.stroke();
  }
  
}

function handleColorClick(event) {
  const id = event.target.id;
  for(stylesheet of styleSheets) {
    if(stylesheet.selectorText === `#${id}`){
      ctx.strokeStyle = stylesheet.style.backgroundColor;
    }
  }
}

function handleRangeChange(event) {
  ctx.lineWidth = event.target.value;
}
if(canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}

Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));

if(range) {
  range.addEventListener("input", handleRangeChange)  
}