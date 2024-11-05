
document.addEventListener("DOMContentLoaded", function () {
  // Initialisation de la carte, centrée sur un point spécifique
  let map = L.map("map").setView([48.85904, 2.23224], 16);  // Centre sur Entrée

  // Ajout de la couche de tuiles (carte)
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  // Fonction pour créer une icône personnalisée avec un label
  function createLabelIcon(label, iconUrl) {
    return L.divIcon({
      html: `<div class="icon-label-container">
                <img src="${iconUrl}" style="width: 30px; height: 30px;">
                <div class="icon-label-text">${label}</div>
             </div>`,
      className: "", // Pas de classe CSS spéciale
    });
  }

  // Définition des catégories avec leurs icônes
  let icons = {
    Entrée: "https://img.icons8.com/color/48/login-rounded-right.png",
    Billetterie: "https://img.icons8.com/color/48/ticket.png",
    Informations: "https://img.icons8.com/color/48/information.png",
    Scènes: "https://img.icons8.com/fluency/48/music-festival.png",
    Secours: "https://img.icons8.com/color/48/doctors-bag.png",
    Toilettes: "https://img.icons8.com/color/48/toilet.png",
    Snacks: "https://img.icons8.com/color/48/french-fries.png",
    Restaurant: "https://img.icons8.com/color/48/restaurant.png",
    Buvettes: "https://img.icons8.com/color/48/bar-counter.png",
    "Stands souvenirs": "https://img.icons8.com/color/48/gift.png",
    Camping: "https://img.icons8.com/color/48/campsite.png",
  };

  // Création des groupes de couches pour chaque catégorie
  let categories = {};
  Object.keys(icons).forEach(function (category) {
    categories[category] = L.layerGroup(); // Chaque catégorie est un groupe de marqueurs
  });

  // Chargement du fichier JSON pour les lieux
  fetch('../../data/lieux.json') // On récupère le fichier JSON
    .then(response => response.json()) // On transforme la réponse en objet JavaScript
    .then(data => {
      // Pour chaque lieu dans le fichier JSON
      data.forEach(lieu => {
        // On vérifie que la catégorie existe bien dans "icons"
        if (icons[lieu.categorie]) {
          // On crée un marqueur avec ses coordonnées (lat, lng)
          L.marker([lieu.lat, lieu.lng], {
            icon: createLabelIcon(lieu.nom, lieu.iconUrl || icons[lieu.categorie]), // On utilise l'icône du JSON ou celle de la catégorie
          })
          .bindPopup(lieu.description) // Quand on clique sur le marqueur, on affiche la description
          .addTo(categories[lieu.categorie]); // On ajoute le marqueur dans la catégorie appropriée
        } else {
          console.error(`Catégorie non trouvée pour : ${lieu.nom}`);
        }
      });

      // Ajouter toutes les catégories à la carte
      Object.keys(categories).forEach(function (category) {
        categories[category].addTo(map);
      });
    })
    .catch(error => console.log('Erreur lors du chargement des lieux :', error)); // En cas d'erreur, on l'affiche

  // Fonction pour recentrer la carte sur une catégorie spécifique
  function recenterMapOnCategory(category) {
    let bounds = L.latLngBounds([]);
    categories[category].eachLayer(function (layer) {
      bounds.extend(layer.getLatLng());
    });
    if (bounds.isValid()) {
      map.fitBounds(bounds);
    }
  }

  // Logique de filtrage des catégories
  document.getElementById("categoryFilter").addEventListener("change", function () {
    let selectedCategory = this.value;
    if (selectedCategory === "geolocalisation") {
      map.locate({ setView: true, maxZoom: 16 });
    } else {
      Object.keys(categories).forEach(function (category) {
        if (selectedCategory === "all" || category === selectedCategory) {
          map.addLayer(categories[category]); // Ajoute la catégorie sélectionnée
          if (selectedCategory !== "all") {
            recenterMapOnCategory(selectedCategory); // Recentrage
          }
        } else {
          map.removeLayer(categories[category]); // Retirer les autres catégories
        }
      });
    }
  });

  // Gestion de la localisation de l'utilisateur
  map.on("locationfound", function (e) {
    let radius = e.accuracy / 2;
    L.marker(e.latlng)
      .addTo(map)
      .bindPopup("Vous êtes dans un rayon de " + radius + " mètres de ce point")
      .openPopup();
    L.circle(e.latlng, radius).addTo(map);
  });

  // Gestion des erreurs de localisation
  map.on("locationerror", function () {
    alert("La localisation a échoué.");
  });

  // Plein écran pour la carte
  document.getElementById("map").addEventListener("click", function () {
    this.classList.toggle("fullscreen-map");
    setTimeout(function () {
      map.invalidateSize();
    }, 300); // Petit délai pour recalculer la taille
  });
});
