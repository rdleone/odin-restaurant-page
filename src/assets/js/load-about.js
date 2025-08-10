import '../css/about.css';

function loadAbout(parent) {

    // About Title
    const titleContent = document.createElement('div');
    titleContent.classList = 'title-content';
    parent.appendChild(titleContent);

    // Title
    const title = document.createElement('h1');
    title.classList = 'title';
    title.textContent = 'Contact Us';
    titleContent.appendChild(title);

    // About Content
    const aboutContent = document.createElement('div');
    aboutContent.classList = 'about-content';
    parent.appendChild(aboutContent);

    const contacts = document.createElement('div');
    contacts.classList = 'contacts';
    aboutContent.appendChild(contacts);

    displayContacts(contacts);
}

function displayContacts(parent) {

    const ownerName = document.createElement('h4');
    ownerName.classList = 'contact-name';
    ownerName.textContent = 'Bartholomew Brugrug Br.';
    parent.appendChild(ownerName);

    const ownerEmail = document.createElement('p');
    ownerEmail.classList = 'contact-email';
    ownerEmail.textContent = 'brugbart@yippee.com'
    parent.appendChild(ownerEmail);

    const ownerPhone = document.createElement('p');
    ownerPhone.classList = 'contact-phone';
    ownerPhone.textContent = '555-555-5555';
    parent.appendChild(ownerPhone);
}

export default loadAbout;