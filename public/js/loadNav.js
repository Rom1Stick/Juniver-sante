import CONFIG from './config.js';

export default function loadNavigation(containerId) {
    const navContainer = document.getElementById(containerId);
    if (!navContainer) {
        console.error(`Élément avec l'id "${containerId}" introuvable.`);
        return;
    }

    const navList = document.createElement('ul');
    navList.style.listStyle = 'none';

    CONFIG.navigation.forEach(link => {
        const listItem = document.createElement('li');
        const anchor = document.createElement('a');
        anchor.href = link.url;
        anchor.textContent = link.name;
        anchor.style.textDecoration = 'none';
        anchor.style.marginRight = '15px';
        listItem.appendChild(anchor);
        navList.appendChild(listItem);
    });

    navContainer.appendChild(navList);
}
