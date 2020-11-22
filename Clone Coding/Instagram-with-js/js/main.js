const heart = document.querySelector('.heart-btn');
const bookmark = document.querySelector('.bookmark-btn');
const header = document.querySelector('#header');
const sidebox = document.querySelector('.side-box');
const delegation = document.querySelector('contents-box');
//const on = document.querySelector('.on');

// heart.addEventListener('click', function() {
//   heart.classList.toggle("on");
// })

function resizeFunc() {
  if (pageYOffset >= 10) {
    let calWidth = window.innerWidth * 0.5 + 166;
    sidebox.style.left = calWidth + "px";
  }
}

function scrollFunc() {
  if(pageYOffset >= 10) {
    resizeFunc();

    header.classList.add('scroll');
    sidebox.classList.add('scroll');
    
  }
  else {
    header.classList.remove('scroll');
    sidebox.classList.remove('scroll');
    sidebox.removeAttribute('style');
  }
}

setTimeout(function() {
  scrollTo(0, 0);

}, 100);

function delegationFunc(e) {
  let elem = e.target;


  if(elem.matches('[data-name="heartbeat"]')) {
    elem.classList.toggle("on");
  }
  else if(elem.matches('[data-name="bookmark-click"]')) {
    elem.parentElement.classList.toggle('on');
    if (elem.parentElement.className === 'bookmark-btn on') {
      elem.className = "fas fa-bookmark";     
    }
    else {
      elem.className = "far fa-bookmark";
    }
  }
  else if(elem.matches('[data-name="small-heartbeat"]')) {
    console.log(elem);
    elem.parentElement.classList.toggle('on');
  }
}
window.addEventListener('click', delegationFunc);
window.addEventListener('scroll', scrollFunc);