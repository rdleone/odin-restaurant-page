import '../css/menu.css';

import { createMenuItem } from './menu';

function loadMenu(parent) {

    // Menu Title
    const titleContent = document.createElement('div');
    titleContent.classList = 'title-content';
    parent.appendChild(titleContent);

    // Title
    const title = document.createElement('h1');
    title.classList = 'title';
    title.textContent = 'Our Menu';
    titleContent.appendChild(title);

    // Menu Content
    const menuContent = document.createElement('div');
    menuContent.classList = 'menu-content';
    parent.appendChild(menuContent);

    fillMenuItems(menuContent);
}

function fillMenuItems(parent) {
    const menuItems = [];

    const burbger = createMenuItem('The Burbger', 'It the burbger', "7.50");
    menuItems.push(burbger);

    const churbger = createMenuItem('The Churbger', 'It the burbger with cheese', "9.50");
    menuItems.push(churbger);

    for(let item of menuItems) {
        parent.appendChild(createMenuItemDisplay(item));
    }
}

function createMenuItemDisplay(menuItem) {
    const itemDisplay = document.createElement('div');
    itemDisplay.classList = 'menu-item';

    const itemTitle = document.createElement('div');
    itemTitle.classList = 'menu-item-title';
    itemDisplay.appendChild(itemTitle);

    const itemDetails = document.createElement('div');
    itemDetails.classList = 'menu-item-details';
    itemDisplay.appendChild(itemDetails);

    const name = document.createElement('h4');
    name.classList = 'menu-item-name';
    name.textContent = menuItem.getName();
    itemTitle.appendChild(name);

    const price = document.createElement('h4');
    price.classList = 'menu-item-price';
    price.textContent = menuItem.getPrice();
    itemTitle.appendChild(price);

    const description = document.createElement('p');
    description.textContent = menuItem.getDescription();
    itemDetails.appendChild(description);

    return itemDisplay;
}


export default loadMenu;