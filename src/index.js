import CreateNavbar from './navbar.js';
import CreateHomepage from './homepage.js';
import CreateMenu from './menupage.js';
import CreateContactPage from './contactpage.js';
import CreateFooter from './footer.js';

const content = document.querySelector('#content');
CreateNavbar();

function clearContent() {
  content.innerHTML = '';
}

function AddEventListeners() {
  const home = document.querySelector('#home');
  const menu = document.querySelector('#menu');
  const contact = document.querySelector('#contact');

  home.addEventListener('click', () => {
    clearContent();
    CreateNavbar();
    AddEventListeners();
    CreateHomepage();
    CreateFooter();
    const home = document.querySelector('#home');
    const menu = document.querySelector('#menu');
    const contact = document.querySelector('#contact');
    home.classList.add('underline');
    menu.classList.remove('underline');
    contact.classList.remove('underline');
  });

  menu.addEventListener('click', () => {
    clearContent();
    CreateNavbar();
    AddEventListeners();
    CreateMenu();
    CreateFooter();
    const home = document.querySelector('#home');
    const menu = document.querySelector('#menu');
    const contact = document.querySelector('#contact');
    menu.classList.add('underline');
    home.classList.remove('underline');
    contact.classList.remove('underline');
  });

  contact.addEventListener('click', () => {
    clearContent();
    CreateNavbar();
    AddEventListeners();
    CreateContactPage();
    CreateFooter();
    const home = document.querySelector('#home');
    const menu = document.querySelector('#menu');
    const contact = document.querySelector('#contact');
    contact.classList.add('underline');
    home.classList.remove('underline');
    menu.classList.remove('underline');
  });
}

AddEventListeners();
CreateHomepage();
CreateFooter();