// Configuration globale
const CONFIG = {
  // Chemins vers les fichiers Markdown
  contentPaths: {
      defaultPage: '/content/pages/about.md', // Page d'accueil
      blogFiles: [
          '/content/blog/first-post.md',
          '/content/blog/second-post.md',
          '/content/blog/third-post.md' // Ajoute d'autres fichiers si nécessaire
      ]
  },

  // Sélecteurs d'éléments HTML
  selectors: {
      pageContainer: 'content',
      blogContainer: 'blog-list'
  },

  navigation: [
    { name: "Accueil", url: "index.html" },
    { name: "Blog", url: "blog.html" },
    { name: "À propos", url: "about.html" }
    ]
};

// Exportation pour utilisation dans d'autres scripts
export default CONFIG;
