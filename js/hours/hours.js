// Fonction pour charger les données JSON et afficher les groupes pour un jour spécifique
function loadSchedule(day = 'friday') {
  fetch('../../data/hours.json')
      .then(response => response.json())
      .then(data => {
          showCards(day, data); // Affiche les groupes pour le jour sélectionné
          localStorage.setItem('lastSelectedDay', day); // Enregistre le jour sélectionné
      })
      .catch(error => console.error('Erreur lors du chargement des données:', error));
}

// Fonction pour afficher les cartes des groupes dans trois accordéons distincts
function showCards(day, data) {
  const dayData = data[day];
  const container1 = document.getElementById('accordionFlushExample1');
  const container2 = document.getElementById('accordionFlushExample2');
  const container3 = document.getElementById('accordionFlushExample3');

  container1.innerHTML = '';
  container2.innerHTML = '';
  container3.innerHTML = '';

  const createAccordionContent = (accordionData, container, accordionIndex) => {
      accordionData.forEach((event, index) => {
          let card = `
              <div class="accordion-item">
                  <h2 class="accordion-header">
                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                      data-bs-target="#flush-collapse-${accordionIndex}-${index}" aria-expanded="false" aria-controls="flush-collapse-${accordionIndex}-${index}">
                          ${event.time}
                      </button>
                  </h2>
                  <div id="flush-collapse-${accordionIndex}-${index}" class="accordion-collapse collapse">
                      <div class="accordion-body">
          `;

          event.groups.forEach(group => {
              card += `
                  <div class="col-12 mt-4">
                      <div class="card" style="margin-bottom: 20px;">
                          <a href="${group.link}">
                              <img src="${group.image}" alt="${group.name}" class="card-img-top">
                          </a>
                          <div class="card-body text-center">
                              <h3 class="h3 card-title">${group.name.replace(" ", "<br>")}</h3>
                              <hr>
                              <p><img width="28" height="28" src="https://img.icons8.com/color/48/music-festival.png" alt="music-festival"/> ${group.stage}</p>
                          </div>
                      </div>
                  </div>`;
          });

          card += `
                      </div>
                  </div>
              </div>`;
          container.innerHTML += card;
      });
  };

  // Remplir chaque conteneur d'accordéon avec les données respectives
  createAccordionContent(dayData.accordion1, container1, '1');
  createAccordionContent(dayData.accordion2, container2, '2');
  createAccordionContent(dayData.accordion3, container3, '3');

  // Ajouter un écouteur pour fermer les autres accordéons lorsque l'un est ouvert
  document.querySelectorAll('.accordion-collapse').forEach(accordion => {
      accordion.addEventListener('show.bs.collapse', function () {
          // Fermer tous les autres accordéons
          document.querySelectorAll('.accordion-collapse').forEach(otherAccordion => {
              if (otherAccordion !== this) {
                  new bootstrap.Collapse(otherAccordion, {
                      toggle: false
                  }).hide();
              }
          });
      });
  });
}

// Fonction pour changer de jour lors du clic sur les boutons radio et sauvegarder le choix
function changeDay(day) {
  loadSchedule(day);          // Charge les données pour le jour
  localStorage.setItem('lastSelectedDay', day);  // Enregistre le jour sélectionné
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function () {
  // Récupère le jour sauvegardé ou utilise le jour par défaut
  const lastSelectedDay = localStorage.getItem('lastSelectedDay') || 'friday';
  loadSchedule(lastSelectedDay);

  // Sélectionne le bouton radio correspondant
  if (lastSelectedDay === 'friday') {
      document.getElementById('btnradio1').checked = true;
  } else if (lastSelectedDay === 'saturday') {
      document.getElementById('btnradio2').checked = true;
  } else if (lastSelectedDay === 'sunday') {
      document.getElementById('btnradio3').checked = true;
  }
});

// Assignation des événements de clic pour les boutons
document.getElementById('btnradio1').addEventListener('click', () => changeDay('friday'));
document.getElementById('btnradio2').addEventListener('click', () => changeDay('saturday'));
document.getElementById('btnradio3').addEventListener('click', () => changeDay('sunday'));
