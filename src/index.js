import './assets/css/nav.css';
import './assets/css/styles.css';
import loadHome from './assets/js/load-home.js'
import loadMenu from './assets/js/load-menu.js';
import loadAbout from './assets/js/load-about.js';

const content = document.querySelector('#content');

function setNav() {
    const nav = document.querySelector("nav");

    styleNav(nav);
    activateNav();
}

function styleNav(nav) {
    for(let i = 0; i < nav.children.length; i++) {
        switch(i) {
            case 0:
                nav.children[i].id = 'nav-home';
            break;
            case 1:
                nav.children[i].id = 'nav-menu';
            break;
            case 2:
                nav.children[i].id = 'nav-about';
            break;
            default:
                throw new Error("Unexpected number of elements in nav.");
        }
    }
}

function activateNav() {
    let activeTab = 'home';

    const homeBtn = document.querySelector('#nav-home');
    const menuBtn = document.querySelector('#nav-menu');
    const aboutBtn = document.querySelector('#nav-about');

    homeBtn.addEventListener('click', () => {
        if(activeTab != 'home') {
            clearPageContent();
            loadHome(content);
            activeTab = 'home';
        }
    });
    menuBtn.addEventListener('click', () => {
        if(activeTab != 'menu') {
            clearPageContent();
            loadMenu(content);
            activeTab = 'menu';
        }
    });
    aboutBtn.addEventListener('click', () => {
        if(activeTab != 'about') {
            clearPageContent();
            loadAbout(content);
            activeTab = 'about';
        }
    });
}

function clearPageContent() {
    while(content.firstChild) {
        content.removeChild(content.firstChild);
    }
}

setNav();
loadHome(content);