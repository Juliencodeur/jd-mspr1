// Fonction pour charger les données JSON
function loadJSON() {
    return fetch('../../data/groups-lieux.json')
      .then(response => {
        if (!response.ok) throw new Error("Erreur lors de la récupération du fichier JSON");
        return response.json();
      })
      .catch(error => console.error("Erreur lors du chargement du JSON:", error));
  }
  
  // Fonction pour afficher les cartes de groupes pour un jour et une scène donnés
  function renderCards(containerId, data, day) {
    const container = document.getElementById(containerId);
    container.innerHTML = ''; // Réinitialise le conteneur
  
    if (data[day]) {
      data[day].forEach(group => {
        const card = `
          <div class="col-12 col-md-6 col-lg-2 mt-2 mb-3 ${day}">
            <div class="card">
              <a href="${group.link}">
                <img src="${group.image}" alt="image ${group.name}" class="card-img-top">
              </a>
              <div class="card-body text-center">
                <h3 class="h3 card-title">${group.name.replace(" ", "<br>")}</h3>
                <hr>
                <p><img width="28" height="28" src="https://img.icons8.com/color/48/every-three-hours.png" alt="horloge" /> ${group.time}</p>
              </div>
            </div>
          </div>
        `;
        container.insertAdjacentHTML('beforeend', card);
      });
    } else {
      container.innerHTML = `<p class="text-center">Aucun groupe disponible pour ${day}</p>`;
    }
  }
  
  // Fonction pour changer de jour et mettre à jour les cartes pour chaque scène
  function showDay(day) {
    loadJSON().then(data => {
      // Met à jour les cartes pour chaque scène
      if (data["Starlight Stage"]) {
        renderCards('starlight-stage-container', data["Starlight Stage"], day);
      }
      if (data["Sunset Pavilion"]) {
        renderCards('sunset-pavilion-container', data["Sunset Pavilion"], day);
      }
      if (data["Texane Sunset"]) {
        renderCards('texane-sunset-container', data["Texane Sunset"], day);
      }
      if (data["Harmony Plaza"]) {
        renderCards('harmony-plaza-container', data["Harmony Plaza"], day);
      }
      if (data["Moonlit Arena"]) {
        renderCards('moonlit-arena-container', data["Moonlit Arena"], day);
      }
    });
  }
  
  // Initialisation de l'affichage par défaut au chargement
  document.addEventListener('DOMContentLoaded', function () {
    showDay('friday'); // Affiche par défaut les groupes de vendredi
  });
  
  // Gestion des boutons pour changer de jour
  document.getElementById('btnradio1').addEventListener('click', () => showDay('friday'));
  document.getElementById('btnradio2').addEventListener('click', () => showDay('saturday'));
  document.getElementById('btnradio3').addEventListener('click', () => showDay('sunday'));
