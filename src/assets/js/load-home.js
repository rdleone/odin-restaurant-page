import '../css/home.css';

function loadHome(parent) {

    // Home Title
    const titleContent = document.createElement('div');
    titleContent.classList = 'title-content';
    parent.appendChild(titleContent);

    // Title
    const title = document.createElement('h1');
    title.classList = 'title';
    title.textContent = 'Welcome to Burbger Location';
    titleContent.appendChild(title);

    // Image
    const titleImg = document.createElement('img');
    titleImg.id = 'title-img';
    titleImg.src = 'https://ih1.redbubble.net/image.5346388069.8110/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.jpg';
    titleContent.appendChild(titleImg);

    // Tagline
    const tagline = document.createElement('h2');
    tagline.classList = 'subtitle';
    tagline.textContent = 'Come eat';
    titleContent.appendChild(tagline);

    // Home Content
    const homeContent = document.createElement('div');
    homeContent.classList = 'home-content';
    parent.appendChild(homeContent);

    const aboutUsHeader = document.createElement('h2');
    aboutUsHeader.classList = 'content-header';
    aboutUsHeader.textContent = 'About Us';
    homeContent.appendChild(aboutUsHeader);

    const aboutUsText = document.createElement('p');
    aboutUsText.textContent = 'We make brugrug since we started. We have number of location that make up location.';
    homeContent.appendChild(aboutUsText);
}

export default loadHome;