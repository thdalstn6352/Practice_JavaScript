const canvas = document.getElementById("js-Canvas");
const ctx = canvas.getContext("2d");
const colors = document.getElementsByClassName("js-Color");
const styleSheets = document.styleSheets[0].cssRules;
const range = document.getElementById("js-Range");
const mode = document.getElementById("js-Mode");
const save = document.getElementById("js-Save");


const INITIAL_COLOR = "#2c2c2c"
const CANVAS_SIZE = 700;
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.strokeStyle = INITIAL_COLOR;
ctx.fillStyle = INITIAL_COLOR;
ctx.lineWidth = 2.5;

let painting = false;
let filling = false;

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
      ctx.fillStyle = ctx.strokeStyle;
    }
  }
}

function handleRangeChange(event) {
  ctx.lineWidth = event.target.value;
}

function handleModeClick() {
  if(filling === true) {
    filling = false;
    mode.textContent = "FILL";
  }
  else {
    filling = true;
    mode.textContent = "PAINT"; 
  }
}

function handleCanvasClick(){
  if(filling){
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}

function handleCM(event) {
  event.preventDefault();
}

function handleSaveClick(){
  const image = canvas.toDataURL("image/jpeg");
  const link = document.createElement("a");
  link.href = image;
  link.download = "PaintJS";
  link.click();
}


if(canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
  canvas.addEventListener("click", handleCanvasClick);
  canvas.addEventListener("contextmenu", handleCM);
}

Array.from(colors).forEach(color => color.addEventListener("click", handleColorClick));

if(range) {
  range.addEventListener("input", handleRangeChange)  
}

if(mode) {
  mode.addEventListener("click", handleModeClick);
}

if(save) {
  save.addEventListener("click", handleSaveClick);
}