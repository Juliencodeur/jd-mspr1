let eventsData = {}; // Stockage des données JSON

// Fonction pour charger les données JSON et initialiser l'affichage
function loadJSON() {
  fetch('../../data/dates.json')
    .then(response => {
      if (!response.ok) throw new Error("Erreur lors de la récupération du fichier JSON");
      return response.json();
    })
    .then(data => {
      console.log("Données JSON chargées :", data); // Vérification du JSON chargé
      eventsData = data;
      renderCards(); // Affichage des cartes après le chargement
      loadSelectedDay(); // Charger le jour sauvegardé
    })
    .catch(error => console.error("Erreur lors du chargement du JSON:", error));
}

// Fonction pour afficher les cartes en fonction des données JSON
function renderCards() {
  let container = document.getElementById('cards-container');
  container.innerHTML = ''; // Réinitialiser le contenu du conteneur

  if (!eventsData.events) {
    console.error("Pas de données dans eventsData");
    return;
  }

  // Générer les cartes pour chaque jour et chaque groupe
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
    });
  });
}

// Fonction pour sauvegarder le jour sélectionné dans localStorage et afficher les cartes
function saveSelectedDay(day) {
  localStorage.setItem('selectedDay', day);
  showCards(day);
}

// Fonction pour afficher uniquement les cartes du jour sélectionné
function showCards(day) {
  const days = ['friday', 'saturday', 'sunday'];
  days.forEach(d => {
    const cards = document.querySelectorAll('.' + d);
    cards.forEach(card => {
      card.style.display = (d === day) ? 'block' : 'none';
    });
  });
}

// Fonction pour charger le jour sélectionné à partir de localStorage
function loadSelectedDay() {
  const savedDay = localStorage.getItem('selectedDay') || 'friday';
  showCards(savedDay);
}

// Initialiser l'affichage au chargement du DOM
document.addEventListener('DOMContentLoaded', loadJSON);
