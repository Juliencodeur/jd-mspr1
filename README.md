# Readme - Nation Sound

## Objectif

Le projet vise à :

Offrir une navigation fluide pour explorer les différentes sections du festival.
Mettre en avant la programmation musicale, la billetterie, et les informations pratiques.
Fournir une carte interactive et des options d'hébergement pour les festivaliers.
Technologies utilisées
HTML5 : Structure et contenu du site web.
CSS3 : Mise en page et design (avec Bootstrap pour le responsive design).
JavaScript : Comportement interactif du site, notamment pour la carte interactive et les animations.
Leaflet.js : Bibliothèque JavaScript pour la carte interactive.
Bootstrap : Framework CSS pour un design responsive.
Structure du projet

## Structure du projet

Le projet est structuré comme suit :

/assets
/img - Contient les images du site (logos, photos de groupes, etc.)
/videos - Contient les vidéos promotionnelles
/css
/bootstrap - Contient les fichiers CSS Bootstrap
/navbar, /carousel, /video, /countdown, etc. - Fichiers CSS pour chaque section
/js
/bootstrap - Fichiers JavaScript pour le Bootstrap
/row, /map, /countdown, etc. - Fichiers JavaScript pour les fonctionnalités spécifiques
/index.html - Page principale du site
/json/data.json - Données JSON regroupant les informations du festival

## Technologie utilisée

Le projet utilise une combinaison de technologies modernes pour offrir une expérience utilisateur optimale et réactive :

HTML5
Utilisé pour la structure et le contenu du site web, HTML5 permet de créer des pages web bien organisées avec une sémantique claire.

CSS3
Le design du site est assuré par des styles CSS3, intégrant des animations et des mises en page modernes. Le projet utilise Bootstrap pour le responsive design, permettant au site de s’adapter à différents types d’écrans (mobile, tablette, bureau).

Bootstrap
Bootstrap est un framework CSS populaire utilisé pour concevoir des sites web réactifs et modernes. Il fournit une grille de mise en page flexible, des composants interactifs prêts à l'emploi (comme les boutons, carrousels, et barres de navigation), et facilite le développement rapide de l'interface utilisateur.

JavaScript
Le JavaScript est utilisé pour ajouter de l'interactivité au site, comme les animations et les événements déclenchés par les actions des utilisateurs (ex. : ouverture de fenêtres modales, carrousel dynamique). Il joue également un rôle important dans l'intégration de la carte interactive et de la gestion des cookies.

Leaflet.js
La bibliothèque Leaflet.js est utilisée pour la carte interactive du festival. Elle permet de visualiser et d'explorer les lieux du festival (scènes, points de restauration, toilettes, etc.) via une carte personnalisée et interactive.

JSON
Les données des points d'accès sur la carte sont stockées dans un fichier JSON. Ce format léger permet de facilement charger et mettre à jour les informations.

## Fonctionnalités principales

- Programmation :
  Permet de visualiser la liste des artistes par jour avec les horaires et les scènes associées. L’utilisateur peut filtrer les événements selon ses préférences.

- Billetterie :
  Accédez aux différentes options de tickets (journaliers, pass complet) avec la possibilité de réserver directement via la plateforme.

- Carte interactive :
  Une carte interactive est intégrée grâce à Leaflet.js. Elle permet d'explorer les différents lieux du festival : scènes, zones de restauration, toilettes, entrées, etc. Des marqueurs dynamiques facilitent l’identification rapide des lieux importants.

- Informations pratiques :
  Les sections dédiées aux informations pratiques regroupent des détails sur le transport, les horaires, la sécurité, la restauration, et l’hébergement à proximité.

- Gestion des cookies :
  Le projet inclut un système de gestion des cookies conforme aux règlements en vigueur. Les utilisateurs peuvent accepter ou refuser les cookies selon leur préférence, et ajuster leurs paramètres à tout moment.

## Installation

Pour installer le projet localement :

- Cloner le projet :

git clone https://github.com/Juliencodeur/jd-mspr1-nation-sound.git

- Naviguer dans le dossier du projet :

cd nation-sound-festival

Ouvrir le fichier index.html dans votre navigateur : Double-cliquez sur le fichier index.html ou ouvrez-le via votre navigateur préféré pour explorer le site.
