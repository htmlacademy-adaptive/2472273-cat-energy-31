/* в этот файл добавляет скрипты*/
const nav = document.querySelector('.navigation');
const navButton = document.querySelector('.navigation__toggle');
const navList = document.querySelector('.navigation__list');
const map = document.querySelector('.contacts__map');

nav.classList.remove('navigation--nojs');
navButton.classList.remove('navigation__toggle--nojs');
navList.classList.remove('navigation__list--nojs');
map.classList.remove('contacts__map--nojs');
