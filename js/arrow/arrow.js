// Script pour les boutons de navigation
window.onscroll = function() { toggleButtons() };

// Fonction pour afficher/cacher les boutons en fonction de la position de défilement
function toggleButtons() {
  const scrollPosition = document.body.scrollTop > 20 || document.documentElement.scrollTop > 20;
  
  // Afficher les boutons si on a défilé plus de 20px, sinon les cacher
  document.getElementById("myBtn").style.display = scrollPosition ? "block" : "none";
  document.getElementById("backBtn").style.display = scrollPosition ? "block" : "none";
  document.getElementById("downBtn").style.display = scrollPosition ? "block" : "none";
}

// Fonction pour retourner en haut de la page
function topFunction() {
  document.body.scrollTop = 0; // Pour Safari
  document.documentElement.scrollTop = 0; // Pour Chrome, Firefox, IE et Opera
}

// Fonction pour défiler vers le bas de la page
function bottomFunction() {
  window.scrollTo({
    top: document.body.scrollHeight, // Défiler jusqu'à la fin du document
    behavior: "smooth" // Défilement fluide
  });
}

// Fonction pour revenir en arrière dans l'historique de navigation
function backFunction() {
  window.history.back();
}

// Export des fonctions pour les tests
module.exports = { toggleButtons, topFunction, bottomFunction, backFunction };
