// Fonctions pour accepter et refuser les cookies
function acceptCookies() {
    document.getElementById('cookieConsent').classList.add('hidden');
    setTimeout(() => {
        document.getElementById('cookieConsent').style.display = 'none';
    }, 500);
}

function refuseCookies() {
    document.getElementById('cookieConsent').classList.add('hidden');
    setTimeout(() => {
        document.getElementById('cookieConsent').style.display = 'none';
    }, 500);
}

// Fonction pour ouvrir le modal de gestion des cookies
function manageCookies() {
    var consentModal = new bootstrap.Modal(document.getElementById('cookieManagementModal'));
    consentModal.show();
}

// Attacher des listeners aux boutons toggle pour les cookies de performance et publicité
document.addEventListener('DOMContentLoaded', function() {
    const toggleButtons = document.querySelectorAll('.toggle-button');
    toggleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const isActive = this.textContent === 'Activé';
            this.textContent = isActive ? 'Désactivé' : 'Activé';
            this.classList.toggle('btn-success', !isActive);
            this.classList.toggle('btn-danger', isActive);
        });
    });
});

// Fonction pour sauvegarder les préférences des cookies
function saveCookieSettings() {
    const performanceActive = document.getElementById('performanceCookies').textContent === 'Activé';
    const advertisingActive = document.getElementById('advertisingCookies').textContent === 'Activé';
    
    // Enregistrer les préférences dans le localStorage
    const preferences = {
        necessary: true,
        performance: performanceActive,
        advertising: advertisingActive
    };
    localStorage.setItem('cookiePreferences', JSON.stringify(preferences));

    // Utiliser l'API de Bootstrap pour fermer le modal
    var cookieModal = bootstrap.Modal.getInstance(document.getElementById('cookieManagementModal'));
    cookieModal.hide();
}

// Exporter les fonctions pour les tests
module.exports = { acceptCookies, refuseCookies, manageCookies, saveCookieSettings };
