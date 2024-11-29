(function () {
  // Si l'URL contient "invite_token" ou "confirmation_token", redirige vers /admin
  if (window.location.hash.includes("invite_token") || window.location.hash.includes("confirmation_token")) {
      window.location.href = "/admin/";
  }
})();
