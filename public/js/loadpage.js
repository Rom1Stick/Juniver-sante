// Fonction pour charger et afficher un fichier Markdown
import CONFIG from './config.js';

function loadMarkdownPage(filePath, containerId = CONFIG.selectors.pageContainer) {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Erreur HTTP : ${response.status}`);
            }
            return response.text();
        })
        .then(markdown => {
            const html = marked(markdown);
            document.getElementById(containerId).innerHTML = html;
        })
        .catch(error => {
            console.error('Erreur lors du chargement de la page Markdown :', error);
            document.getElementById(containerId).innerHTML = "<p>Contenu introuvable.</p>";
        });
}

export default loadMarkdownPage;
