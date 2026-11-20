# Rapport d’audit

Projet : `villa-mageroy-maquette` · 20/11/2026 17:08:40 · 6 min · 1 page(s) · audit RAPIDE : ne vaut pas pour une livraison ciblé sur /,/visiter,/ecoles,/le-site,/agenda,/contact,/404

## Résumé

- Statut : **58 échec(s)**
- Passe : `20261120-160300-rapide-cible`
- Échecs : **58**
- À regarder : **17**
- Non lancé : **2**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (6), mesures (6), films d’ouverture (2), films de transition (2), bords de l’écran (1), intro accélérable et passable (7), menu (1), clavier (1), liens et boutons (1), liens profonds (13), liens vers la page en cours (1), changements de hauteur (1), tient dans l’écran (2), films des épinglages (1), fluidité (2), défilement selon l’appareil (5), mouvement (2), effets du plan (3), souris immobile (2), vitesse (1), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | — dispensé | v11 : objet à manipuler non obligatoire ; le calculateur de visite et les filtres d'ateliers servent le visiteur |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 1 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en carroyage |
| 4. Quelque chose relie les sections et les pages | — dispensé | v11 : pas de fil imposé ; le carroyage (photos, voile, surtitres) relie le site |
| 5. Un titre fait l’événement sur chaque page | — dispensé | v11 : conseil seulement |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✗ absent | sur aucune page |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Échecs

### image de partage (6)

- **image de partage** — `agenda.html` — fichier introuvable : /assets/partage/agenda-fr.jpg
- **image de partage** — `contact.html` — fichier introuvable : /assets/partage/contact-fr.jpg
- **image de partage** — `ecoles.html` — fichier introuvable : /assets/partage/ecoles-fr.jpg
- **image de partage** — `index.html` — fichier introuvable : /assets/partage/accueil-fr.jpg
- **image de partage** — `le-site.html` — fichier introuvable : /assets/partage/le-site-fr.jpg
- **image de partage** — `visiter.html` — fichier introuvable : /assets/partage/visiter-fr.jpg

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/` — section#debut > div.hero-texte:nth-of-type(1) > p.hero-actions:nth-of-type(3) > a.bouton « Préparer ma visite » _(844×390 normal, 320×568 sansJs)_

### premier écran : information clé hors de l’écran (1)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.hero-texte:nth-of-type(1) > p.hero-actions:nth-of-type(3) > span.info-cle « Accessible maintenant · entrée libre » _(844×390 normal, 320×568 sansJs)_

### textes qui se chevauchent (3)

- **textes qui se chevauchent** — `/` — div.terre-grille:nth-of-type(2) > div.tresor.sur-charbon:nth-of-type(1) > div.tresor-texte > span.tresor-compte:nth-of-type(1) « 0 » — avec div.terre-grille:nth-of-type(2) > div.tresor.sur-charbon:nth-of-type(1) > div.tresor-texte > h3 « 105 antoniniens d'argent » _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 844×390 normal)_
- **textes qui se chevauchent** — `/` — div.rdv-grille:nth-of-type(2) > article.ticket > div.ticket-date:nth-of-type(1) > span.ticket-jour:nth-of-type(1) « 5 » — avec div.rdv-grille:nth-of-type(2) > article.ticket > div.ticket-date:nth-of-type(1) > span.ticket-mois:nth-of-type(2) « DÉC. » _(1366×768 normal)_
- **textes qui se chevauchent** — `/` — div.terre-grille:nth-of-type(2) > div.tresor.sur-charbon:nth-of-type(1) > div.tresor-texte > span.tresor-compte:nth-of-type(1) « 105 » — avec div.terre-grille:nth-of-type(2) > div.tresor.sur-charbon:nth-of-type(1) > div.tresor-texte > h3 « 105 antoniniens d'argent » _(390×844 sansJs, 320×568 sansJs)_

### zone tactile sous 44 px (1)

- **zone tactile sous 44 px** — `/` — section#debut > div.hero-texte:nth-of-type(1) > p.hero-prochain:nth-of-type(4) > a « samedi 5 décembre » — 148 × 25 px _(390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 320×568 sansJs)_

### élément recouvert (8)

- **élément recouvert** — `/` — ul.cartes.fx-fini > li.carte-faire:nth-of-type(1) > div.carte-corps > h3 « Visite libre » — par ul.cartes.fx-fini > li.carte-faire:nth-of-type(1) > div.carte-corps > a.lien-fleche.carte-lien « Voir : Visite libre » _(1366×768 normal, 390×844 normal)_
- **élément recouvert** — `/` — ul.cartes.fx-fini > li.carte-faire:nth-of-type(1) > div.carte-corps > p.carte-prix:nth-of-type(1) « Gratuit » — par ul.cartes.fx-fini > li.carte-faire:nth-of-type(1) > div.carte-corps > a.lien-fleche.carte-lien « Voir : Visite libre » _(1366×768 normal, 390×844 normal)_
- **élément recouvert** — `/` — ul.cartes.fx-fini > li.carte-faire:nth-of-type(2) > div.carte-corps > h3 « Visite guidée » — par ul.cartes.fx-fini > li.carte-faire:nth-of-type(2) > div.carte-corps > a.lien-fleche.carte-lien « Voir : Visite guidée » _(1366×768 normal, 390×844 normal)_
- **élément recouvert** — `/` — ul.cartes.fx-fini > li.carte-faire:nth-of-type(2) > div.carte-corps > p.carte-prix:nth-of-type(1) « 40 € jusqu'à 10 personnes » — par ul.cartes.fx-fini > li.carte-faire:nth-of-type(2) > div.carte-corps > a.lien-fleche.carte-lien « Voir : Visite guidée » _(1366×768 normal, 390×844 normal)_
- **élément recouvert** — `/` — ul.cartes.fx-fini > li.carte-faire:nth-of-type(3) > div.carte-corps > h3 « Écoles » — par ul.cartes.fx-fini > li.carte-faire:nth-of-type(3) > div.carte-corps > a.lien-fleche.carte-lien « Voir : Écoles » _(1366×768 normal, 390×844 normal)_
- **élément recouvert** — `/` — ul.cartes.fx-fini > li.carte-faire:nth-of-type(3) > div.carte-corps > p.carte-prix:nth-of-type(1) « Dès 3 € par élève » — par ul.cartes.fx-fini > li.carte-faire:nth-of-type(3) > div.carte-corps > a.lien-fleche.carte-lien « Voir : Écoles » _(1366×768 normal, 390×844 normal)_
- **élément recouvert** — `/` — ul.cartes.fx-fini > li.carte-faire:nth-of-type(4) > div.carte-corps > h3 « Événements » — par ul.cartes.fx-fini > li.carte-faire:nth-of-type(4) > div.carte-corps > a.lien-fleche.carte-lien « Voir : Événements » _(1366×768 normal, 390×844 normal)_
- **élément recouvert** — `/` — ul.cartes.fx-fini > li.carte-faire:nth-of-type(4) > div.carte-corps > p.carte-prix:nth-of-type(1) « Toute l'année » — par ul.cartes.fx-fini > li.carte-faire:nth-of-type(4) > div.carte-corps > a.lien-fleche.carte-lien « Voir : Événements » _(1366×768 normal, 390×844 normal)_

### accessibilité (axe) : color-contrast (1)

- **accessibilité (axe) : color-contrast** — `/` — .etape:nth-child(2) > .etape-quand ; .etape:nth-child(2) > h3 ; .etape:nth-child(2) > p — Elements must meet minimum color contrast ratio thresholds _(390×844 normal)_

### ne tient pas dans l’écran (34)

- **ne tient pas dans l’écran** — `/` — div.frise-scene > div.frise-tete > div > p.surtitre « CHRONOLOGIE » — caché sous l'en-tête de 9 px (à 4 % de la scène) _(1000×560 épinglé)_
- **ne tient pas dans l’écran** — `/` — div.pin-spacer > div.frise-scene > ol.frise-piste > li.etape:nth-of-type(1) « I MILIEU DU IER SIÈCLE Les premières traces Des ob » — coupé en bas de 66 px (à 4 % de la scène) _(1000×560 épinglé)_
- **ne tient pas dans l’écran** — `/` — div.pin-spacer > div.frise-scene > ol.frise-piste > li.etape:nth-of-type(2) « II DÉBUT DU IIE SIÈCLE Une maison de pierre Le cor » — coupé en bas de 66 px (à 4 % de la scène) _(1000×560 épinglé)_
- **ne tient pas dans l’écran** — `/` — div.pin-spacer > div.frise-scene > ol.frise-piste > li.etape.etape--image:nth-of-type(3) « II MILIEU DU IIE SIÈCLE L'apogée La villa se tourn » — coupé en bas de 66 px (à 4 % de la scène) _(1000×560 épinglé)_
- **ne tient pas dans l’écran** — `/` — li.etape.etape--image:nth-of-type(3) > figure.media > picture > img « Évocation d'une villa gallo-romaine à son apogée,  » — coupé en bas de 66 px (à 4 % de la scène) _(1000×560 épinglé)_
- **ne tient pas dans l’écran** — `/` — ol.frise-piste > li.etape.etape--image:nth-of-type(3) > figure.media > figcaption.mention-ia « Illustration générée » — coupé en bas de 58 px (à 4 % de la scène) _(1000×560 épinglé)_
- **ne tient pas dans l’écran** — `/` — div.frise-scene > div.frise-tete > div > p.surtitre « CHRONOLOGIE » — caché sous l'en-tête de 9 px (à 50 % de la scène) _(1000×560 épinglé)_
- **ne tient pas dans l’écran** — `/` — div.pin-spacer > div.frise-scene > ol.frise-piste > li.etape.etape--image:nth-of-type(3) « II MILIEU DU IIE SIÈCLE L'apogée La villa se tourn » — coupé en bas de 66 px (à 50 % de la scène) _(1000×560 épinglé)_
- **ne tient pas dans l’écran** — `/` — li.etape.etape--image:nth-of-type(3) > figure.media > picture > img « Évocation d'une villa gallo-romaine à son apogée,  » — coupé en bas de 66 px (à 50 % de la scène) _(1000×560 épinglé)_
- **ne tient pas dans l’écran** — `/` — ol.frise-piste > li.etape.etape--image:nth-of-type(3) > figure.media > figcaption.mention-ia « Illustration générée » — coupé en bas de 58 px (à 50 % de la scène) _(1000×560 épinglé)_
- **ne tient pas dans l’écran** — `/` — div.pin-spacer > div.frise-scene > ol.frise-piste > li.etape:nth-of-type(4) « III IIIE SIÈCLE Le domaine s'agrandit Nouvelles pi » — coupé en bas de 66 px (à 50 % de la scène) _(1000×560 épinglé)_
- **ne tient pas dans l’écran** — `/` — div.pin-spacer > div.frise-scene > ol.frise-piste > li.etape:nth-of-type(5) « III FIN DU IIIE SIÈCLE Le feu Les raids germanique » — coupé en bas de 66 px (à 50 % de la scène) _(1000×560 épinglé)_
- **ne tient pas dans l’écran** — `/` — div.frise-scene > div.frise-tete > div > p.surtitre « CHRONOLOGIE » — caché sous l'en-tête de 9 px (à 96 % de la scène) _(1000×560 épinglé)_
- **ne tient pas dans l’écran** — `/` — div.pin-spacer > div.frise-scene > ol.frise-piste > li.etape:nth-of-type(6) « IV JUSQU'À LA FIN DU IVE SIÈCLE Les ruines fortifi » — coupé en bas de 66 px (à 96 % de la scène) _(1000×560 épinglé)_
- **ne tient pas dans l’écran** — `/` — div.pin-spacer > div.frise-scene > ol.frise-piste > li.etape:nth-of-type(7) « XVII XVIIE SIÈCLE Les pierres s'en vont Les dernie » — coupé en bas de 66 px (à 96 % de la scène) _(1000×560 épinglé)_
- **ne tient pas dans l’écran** — `/` — div.pin-spacer > div.frise-scene > ol.frise-piste > li.etape:nth-of-type(8) « 1984 DEPUIS 1984 Les fouilles Le groupe d'archéolo » — coupé en bas de 66 px (à 96 % de la scène) _(1000×560 épinglé)_
- **ne tient pas dans l’écran** — `/` — div.pin-spacer > div.frise-scene > ol.frise-piste > li.frise-fin:nth-of-type(9) « Toute l'histoire du site » — coupé en bas de 66 px (à 96 % de la scène) _(1000×560 épinglé)_
- **ne tient pas dans l’écran** — `/` — div.pin-spacer > div.frise-scene > ol.frise-piste > li.etape:nth-of-type(1) « I MILIEU DU IER SIÈCLE Les premières traces Des ob » — coupé en bas de 24 px (à 4 % de la scène) _(1366×768 épinglé)_
- **ne tient pas dans l’écran** — `/` — div.pin-spacer > div.frise-scene > ol.frise-piste > li.etape:nth-of-type(2) « II DÉBUT DU IIE SIÈCLE Une maison de pierre Le cor » — coupé en bas de 24 px (à 4 % de la scène) _(1366×768 épinglé)_
- **ne tient pas dans l’écran** — `/` — div.pin-spacer > div.frise-scene > ol.frise-piste > li.etape.etape--image:nth-of-type(3) « II MILIEU DU IIE SIÈCLE L'apogée La villa se tourn » — coupé en bas de 24 px (à 4 % de la scène) _(1366×768 épinglé)_
- **ne tient pas dans l’écran** — `/` — li.etape.etape--image:nth-of-type(3) > figure.media > picture > img « Évocation d'une villa gallo-romaine à son apogée,  » — coupé en bas de 24 px (à 4 % de la scène) _(1366×768 épinglé)_
- **ne tient pas dans l’écran** — `/` — ol.frise-piste > li.etape.etape--image:nth-of-type(3) > figure.media > figcaption.mention-ia « Illustration générée » — coupé en bas de 16 px (à 4 % de la scène) _(1366×768 épinglé)_
- **ne tient pas dans l’écran** — `/` — div.pin-spacer > div.frise-scene > ol.frise-piste > li.etape:nth-of-type(4) « III IIIE SIÈCLE Le domaine s'agrandit Nouvelles pi » — coupé en bas de 24 px (à 4 % de la scène) _(1366×768 épinglé)_
- **ne tient pas dans l’écran** — `/` — div.pin-spacer > div.frise-scene > ol.frise-piste > li.etape.etape--image:nth-of-type(3) « II MILIEU DU IIE SIÈCLE L'apogée La villa se tourn » — coupé en bas de 24 px (à 50 % de la scène) _(1366×768 épinglé)_
- **ne tient pas dans l’écran** — `/` — li.etape.etape--image:nth-of-type(3) > figure.media > picture > img « Évocation d'une villa gallo-romaine à son apogée,  » — coupé en bas de 24 px (à 50 % de la scène) _(1366×768 épinglé)_
- **ne tient pas dans l’écran** — `/` — ol.frise-piste > li.etape.etape--image:nth-of-type(3) > figure.media > figcaption.mention-ia « Illustration générée » — coupé en bas de 16 px (à 50 % de la scène) _(1366×768 épinglé)_
- **ne tient pas dans l’écran** — `/` — div.pin-spacer > div.frise-scene > ol.frise-piste > li.etape:nth-of-type(4) « III IIIE SIÈCLE Le domaine s'agrandit Nouvelles pi » — coupé en bas de 24 px (à 50 % de la scène) _(1366×768 épinglé)_
- **ne tient pas dans l’écran** — `/` — div.pin-spacer > div.frise-scene > ol.frise-piste > li.etape:nth-of-type(5) « III FIN DU IIIE SIÈCLE Le feu Les raids germanique » — coupé en bas de 24 px (à 50 % de la scène) _(1366×768 épinglé)_
- **ne tient pas dans l’écran** — `/` — div.pin-spacer > div.frise-scene > ol.frise-piste > li.etape:nth-of-type(6) « IV JUSQU'À LA FIN DU IVE SIÈCLE Les ruines fortifi » — coupé en bas de 24 px (à 50 % de la scène) _(1366×768 épinglé)_
- **ne tient pas dans l’écran** — `/` — div.pin-spacer > div.frise-scene > ol.frise-piste > li.etape:nth-of-type(5) « III FIN DU IIIE SIÈCLE Le feu Les raids germanique » — coupé en bas de 24 px (à 96 % de la scène) _(1366×768 épinglé)_
- **ne tient pas dans l’écran** — `/` — div.pin-spacer > div.frise-scene > ol.frise-piste > li.etape:nth-of-type(6) « IV JUSQU'À LA FIN DU IVE SIÈCLE Les ruines fortifi » — coupé en bas de 24 px (à 96 % de la scène) _(1366×768 épinglé)_
- **ne tient pas dans l’écran** — `/` — div.pin-spacer > div.frise-scene > ol.frise-piste > li.etape:nth-of-type(7) « XVII XVIIE SIÈCLE Les pierres s'en vont Les dernie » — coupé en bas de 24 px (à 96 % de la scène) _(1366×768 épinglé)_
- **ne tient pas dans l’écran** — `/` — div.pin-spacer > div.frise-scene > ol.frise-piste > li.etape:nth-of-type(8) « 1984 DEPUIS 1984 Les fouilles Le groupe d'archéolo » — coupé en bas de 24 px (à 96 % de la scène) _(1366×768 épinglé)_
- **ne tient pas dans l’écran** — `/` — div.pin-spacer > div.frise-scene > ol.frise-piste > li.frise-fin:nth-of-type(9) « Toute l'histoire du site » — coupé en bas de 24 px (à 96 % de la scène) _(1366×768 épinglé)_

### effet du plan absent (3)

- **effet du plan absent** — « bandeau » : aucun élément data-effet="bandeau"
- **effet du plan absent** — « prix-geant » : aucun élément data-effet="prix-geant"
- **effet du plan absent** — « chrono » : aucun élément data-effet="chrono"

## À regarder

### « à compléter » visible (4)

- **« à compléter » visible** — `agenda.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `ecoles.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `visiter.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### grille : action principale sans retour physique (point 7) (1)

- **grille : action principale sans retour physique (point 7)** — ajout au panier, réservation, envoi ou filtre : quelque chose de l’objet part, se pose ou se transforme (module envol-vers-le-panier, tampon « reçu »), marqué data-grille="retour"

### texte de contenu sous 13 px (ordinateur) (8)

- **texte de contenu sous 13 px (ordinateur)** — `/` — div.frise-scene > ol.frise-piste > li.etape:nth-of-type(1) > span.etape-quand:nth-of-type(2) « MILIEU DU IER SIÈCLE » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.frise-scene > ol.frise-piste > li.etape:nth-of-type(2) > span.etape-quand:nth-of-type(2) « DÉBUT DU IIE SIÈCLE » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.frise-scene > ol.frise-piste > li.etape.etape--image:nth-of-type(3) > span.etape-quand:nth-of-type(2) « MILIEU DU IIE SIÈCLE » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — ol.frise-piste > li.etape.etape--image:nth-of-type(3) > figure.media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.frise-scene > ol.frise-piste > li.etape:nth-of-type(5) > span.etape-quand:nth-of-type(2) « FIN DU IIIE SIÈCLE » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.frise-scene > ol.frise-piste > li.etape:nth-of-type(6) > span.etape-quand:nth-of-type(2) « JUSQU'À LA FIN DU IVE SIÈCLE » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — div.frise-scene > ol.frise-piste > li.etape:nth-of-type(7) > span.etape-quand:nth-of-type(2) « XVIIE SIÈCLE » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_
- **texte de contenu sous 13 px (ordinateur)** — `/` — section#fin > figure.media > figcaption.mention-ia « Illustration générée » — 12.0 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal)_

### section sans visuel (1)

- **section sans visuel** — `/` — section#rendez-vous « AGENDA Le prochain rendez-vous 5 DÉC. Saint-Nicola » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(1366×768 normal, 390×844 normal, 390×844 sansWebgl, 390×844 sansJs, 844×390 normal, 320×568 sansJs)_

### typographie française (1)

- **typographie française** — `/` — footer#pied > div.conteneur.pied-bas:nth-of-type(2) > p:nth-of-type(2) « Mentions légales : à compléter · Politique de conf » — espace insécable manquante avant ou après « : » _(1366×768 normal)_

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 78 ms (différence 46 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

### retour avant : changement brusque (1)

- **retour avant : changement brusque** — `/visiter` — à 75 ms (différence 42 %) (films/retour-avant-390.png) _(390×844 retour avant)_

## Non lancé

- **fichiers** : ELOOP: too many symbolic links encountered, stat '/home/claude/villa-mageroy-maquette/_biblio/node_modules/playwright/playwright/playwright/playwright/playwright/playwright/playwright/playwright/playwright/playwright/playwright/playwright/playwright/playwright'
- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Audit rapide : étapes lourdes sur /.
- Grille wouahou : point « 1. L’effet signature se manipule » dispensé (config.json) : v11 : objet à manipuler non obligatoire ; le calculateur de visite et les filtres d'ateliers servent le visiteur.
- Grille wouahou : point « 4. Quelque chose relie les sections et les pages » dispensé (config.json) : v11 : pas de fil imposé ; le carroyage (photos, voile, surtitres) relie le site.
- Grille wouahou : point « 5. Un titre fait l’événement sur chaque page » dispensé (config.json) : v11 : conseil seulement.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Balayage des largeurs : non fait en audit rapide.
- Ouverture / (1366×768) : 2896 ms depuis le premier octet
- Ouverture / (390×844) : 2888 ms depuis le premier octet
- film de l'ouverture / 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 110 images d’intro, 42 de voile et 35 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 483, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1410, tâche la plus longue 0 ms
- Vitesse / : 0.52 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --rapide --seulement=fichiers,mesures,ecran,mouvement
```
