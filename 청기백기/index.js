const flagBlue = document.querySelector('.flag-blue');
const flagWhite = document.querySelector('.flag-white');

//up 클래스 제거
function reset() {
  document.querySelector('.up').classList.remove('up');
}


//eventHandler
function flagUp(e) {
  if(e.button === 0) {
    flagBlue.classList.add('up');  
  }
  else {
    flagWhite.classList.add('up');
  }

  setTimeout(reset, 500);
}

// 오른쪽 마우스 키 제한
document.addEventListener('contextmenu', function (event) {
  event.preventDefault('contextmenu');
});

document.addEventListener('mousedown', flagUp);