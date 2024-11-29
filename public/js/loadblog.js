// Fonction pour charger une liste de fichiers Markdown et les afficher
import CONFIG from './config.js';

function loadBlogPosts(blogFiles = CONFIG.contentPaths.blogFiles, containerId = CONFIG.selectors.blogContainer) {
    const container = document.getElementById(containerId);
    container.innerHTML = ""; // Réinitialiser le contenu

    blogFiles.forEach(file => {
        fetch(file)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erreur HTTP : ${response.status}`);
                }
                return response.text();
            })
            .then(markdown => {
                const html = marked(markdown);
                const article = document.createElement('div');
                article.classList.add('blog-post');
                article.innerHTML = html;
                container.appendChild(article);
            })
            .catch(error => {
                console.error(`Erreur lors du chargement de l'article ${file} :`, error);
            });
    });
}

export default loadBlogPosts;
