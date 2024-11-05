let eventsData = {}; // Stockage des données JSON

// Étape 1 : Fonction pour charger le JSON et vérifier le chargement dans la console
function loadJSON() {
  fetch('../../data/dates.json')
    .then(response => {
      if (!response.ok) throw new Error("Erreur lors de la récupération du fichier JSON");
      return response.json();
    })
    .then(data => {
      console.log("Données JSON chargées :", data); // Vérification du JSON chargé
      eventsData = data;
      renderCards(); // Passer à l'affichage des cartes après chargement
    })
    .catch(error => console.error("Erreur lors du chargement du JSON:", error));
}

// Étape 2 : Fonction pour afficher les cartes basées sur les données JSON
function renderCards() {
  let container = document.getElementById('cards-container');
  container.innerHTML = ''; // Réinitialiser le contenu existant du conteneur

  if (!eventsData.events) {
    console.error("Pas de données dans eventsData"); // Vérification que les données JSON sont correctes
    return;
  }

  // Affichage des cartes pour chaque jour et groupe dans le JSON
  eventsData.events.forEach(dayEvent => {
    dayEvent.groups.forEach(group => {
      let card = `
        <div class="col-12 col-md-6 col-lg-2 mt-2 mb-3 ${dayEvent.day}">
          <div class="card">
            <img src="${group.image}" alt="image ${group.name}" class="card-img-top">
            <div class="card-body text-center">
              <h3 class="h3 card-title">${group.name}</h3>
              <hr>
              <p><img width="28" height="28" src="https://img.icons8.com/color/48/music-festival.png" alt="music-festival" /> ${group.stage}</p>
              <p><img width="28" height="28" src="https://img.icons8.com/color/48/every-three-hours.png" alt="every-three-hours" /> ${group.time}</p>
              <a href="${group.link}" class="btn btn-primary">Bio</a>
            </div>
          </div>
        </div>
      `;
      container.insertAdjacentHTML('beforeend', card);
      console.log(`Carte ajoutée pour le groupe: ${group.name} sous le jour ${dayEvent.day}`); // Débogage pour chaque carte ajoutée
    });
  });

  showCards('friday'); // Affiche uniquement le jour par défaut (vendredi)
}

// Étape 3 : Fonction d'affichage pour montrer uniquement les cartes du jour sélectionné
function showCards(day) {
  let days = ['friday', 'saturday', 'sunday'];
  days.forEach(d => {
    let cards = document.querySelectorAll('.' + d);
    cards.forEach(card => {
      card.style.display = (d === day) ? 'block' : 'none';
    });
  });
}

// Appel de la fonction pour charger et afficher les données JSON
document.addEventListener('DOMContentLoaded', loadJSON);
