
const menuBtnActive = document.querySelector('.menu-container');
const menuScreenActive = document.querySelector('.menu-screen');

const moreIdeasBtnPressed = document.querySelector('.more-ideas-btn');


menuBtnActive.addEventListener('click', function() {
  menuBtnActive.classList.toggle('menu-btn-active');
  menuScreenActive.classList.toggle('menu-screen-active');
})

moreIdeasBtnPressed.addEventListener('click', function() {
  moreIdeasBtnPressed.classList.add('more-ideas-btn-pressed');
  moreIdeasBtnPressed.textContent= "Kommer snart!";
  setTimeout(function() {
    moreIdeasBtnPressed.classList.remove('more-ideas-btn-pressed');
    moreIdeasBtnPressed.textContent = "Fler ideer";
  }, 3000)

  
})

document.addEventListener("DOMContentLoaded", function() {
  ScrollReveal().reveal('.reveal-default', {
      delay: 200, 
      distance: "200px", 
      viewOffset: {bottom: 100}
  });

  ScrollReveal().reveal('.reveal-static', {
      scale: 3,
  });
})