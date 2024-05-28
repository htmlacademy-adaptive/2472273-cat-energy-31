const navMain = document.querySelector('.navigation__list');
const navToggle = document.querySelector('.navigation__toggle');

navMain.classList.remove('navigation__list--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('navigation__list--closed')) {
    navMain.classList.remove('navigation__list--closed');
    navMain.classList.add('navigation__list--open');
  } else {
    navMain.classList.add('navigation__list--closed');
    navMain.classList.remove('navigation__list--open');
  }
});
