(function () {
  // Vérifie si l'URL contient un token d'invitation
  if (window.location.hash.includes("invite_token")) {
      // Redirige vers la page admin
      window.location.href = "/admin/";
  }
})();
