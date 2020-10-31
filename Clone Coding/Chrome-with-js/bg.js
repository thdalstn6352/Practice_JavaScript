const body = document.querySelector("body");
const IMG_NUMBER = 3;

function handleImgLoad() {
  console.log("finished loading");
}
function printImage(imgNumber) {
  const image = new Image();
  image.src = `images/${imgNumber + 1}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
}

function getRandom() {
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}


function init() {
  const randomNumber = getRandom();
  printImage(randomNumber);
}

init();