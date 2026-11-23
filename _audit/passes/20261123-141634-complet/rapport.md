# Rapport d’audit

Projet : `villa-mageroy-maquette` · 23/11/2026 15:45:30 · 29 min · 7 page(s) · audit complet

## Résumé

- Statut : **7 échec(s)**
- Passe : `20261123-141634-complet` · version ?v=2
- Échecs : **7**
- À regarder : **17**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (7), mesures (273), balayage (6), films d’ouverture (12), films de transition (12), bords de l’écran (7), intro accélérable et passable (7), menu (1), clavier (7), liens et boutons (7), liens profonds (16), liens vers la page en cours (6), changements de hauteur (6), tient dans l’écran (8), films des épinglages (1), fluidité (12), défilement selon l’appareil (5), mouvement (12), effets du plan (6), souris immobile (3), vitesse (6), captures (1)

## Grille wouahou

| Point | État | Détail |
|---|---|---|
| 1. L’effet signature se manipule | — dispensé | v11 : objet à manipuler non obligatoire ; le calculateur de visite et les filtres d'ateliers servent le visiteur |
| 2. L’intro devient la page | ✓ présent | objet d’ouverture sur 6 page(s), versObjet dans l’intro |
| 3. La transition reprend le motif | ✓ présent | voile en carroyage |
| 4. Quelque chose relie les sections et les pages | — dispensé | v11 : pas de fil imposé ; le carroyage (photos, voile, surtitres) relie le site |
| 5. Un titre fait l’événement sur chaque page | — dispensé | v11 : conseil seulement |
| 6. La scène est un geste du métier | · sans objet | aucune scène épinglée marquée ni galerie générique |
| 7. L’action principale a un retour physique | ✓ présent | sur /agenda |

Le script vérifie les marques (`data-grille`, `data-iris-centre`, forme du voile, `versObjet`) ; la force et la justesse de chaque point se jugent sur les captures et les films.

## Échecs

### photo faible affichée en grand (1)

- **photo faible affichée en grand** — `/agenda` — li.retour-carte:nth-of-type(3) > figure.media > picture > img « Un objet tout juste sorti de terre, montré pendant » — retour-portes (3/5, faible, 42 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_

### textes qui se chevauchent (2)

- **textes qui se chevauchent** — `/visiter` — div.conteneur > ul.formules.fx-fini > li.formule:nth-of-type(3) > h3 « Archéologie et gastronomie » — avec ul.formules.fx-fini > li.formule:nth-of-type(3) > p.formule-prix:nth-of-type(1) > strong « 14 € » _(1024×768 normal, 1000×560 normal, 1024×768 sansWebgl, 1000×560 sansWebgl)_
- **textes qui se chevauchent** — `/visiter` — div.conteneur > ul.formules > li.formule:nth-of-type(3) > h3 « Archéologie et gastronomie » — avec ul.formules > li.formule:nth-of-type(3) > p.formule-prix:nth-of-type(1) > strong « 14 € » _(1024×768 sansJs, 1000×560 sansJs)_

### élément recouvert (4)

- **élément recouvert** — `/visiter` — div.conteneur > ul.formules.fx-fini > li.formule:nth-of-type(1) > h3 « Visite libre » — par ul.formules.fx-fini > li.formule:nth-of-type(1) > p.formule-prix:nth-of-type(1) > strong « Gratuit » _(768×1024 normal, 1366×768 normal, 1920×1080 normal)_
- **élément recouvert** — `/visiter` — div.conteneur > ul.formules.fx-fini > li.formule:nth-of-type(2) > h3 « Visite guidée » — par ul.formules.fx-fini > li.formule:nth-of-type(2) > p.formule-prix:nth-of-type(1) > strong « 40 € » _(768×1024 normal, 1366×768 normal, 1920×1080 normal)_
- **élément recouvert** — `/visiter` — div.conteneur > ul.formules.fx-fini > li.formule:nth-of-type(3) > h3 « Archéologie et gastronomie » — par ul.formules.fx-fini > li.formule:nth-of-type(3) > p.formule-prix:nth-of-type(1) > strong « 14 € » _(768×1024 normal, 1366×768 normal, 1920×1080 normal)_
- **élément recouvert** — `/visiter` — div.conteneur > ul.formules.fx-fini > li.formule.formule--suspendue:nth-of-type(4) > h3 « Conférences » — par ul.formules.fx-fini > li.formule.formule--suspendue:nth-of-type(4) > p.formule-prix:nth-of-type(1) > strong « 2 € » _(768×1024 normal, 1366×768 normal, 1920×1080 normal)_

## À regarder

### « à compléter » visible (4)

- **« à compléter » visible** — `agenda.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `ecoles.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `visiter.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### journal du projet (1)

- **journal du projet** — aucune entrée pour la version 2 de donnees/site.json

### section sans visuel (10)

- **section sans visuel** — `/` — section#rendez-vous « AGENDA Le prochain rendez-vous 5 DÉC. Saint-Nicola » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/` — section#siecles « Quatre siècles de vie, quarante ans de fouilles I  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(844×390 normal, 844×390 sansJs, 844×390 sansWebgl)_
- **section sans visuel** — `/` — section#siecles « CHRONOLOGIE Quatre siècles de vie, quarante ans de » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(1000×560 normal, 1000×560 sansJs, 1000×560 sansWebgl)_
- **section sans visuel** — `/agenda` — section#lettre « RESTER INFORMÉ Recevoir le programme La lettre d'i » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/contact` — section#formulaire « ÉCRIRE Votre demande Bureau : du lundi au vendredi » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/contact` — section#soutenir « SOUTENIR Devenir membre d'ARC-HAB Bénévole Rejoind » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/ecoles` — section#travaux « Pendant les travaux du pavillon Les ateliers en in » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/ecoles` — section#reserver « RÉSERVER Demander une réservation Réservation obli » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/visiter` — section#calcul « CALCULER Combien coûte votre visite guidée ? Un fo » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 1024×768 normal, 768×1024 normal, +33)_
- **section sans visuel** — `/visiter` — section#reserver « RÉSERVER Demander une visite guidée Les visites on » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 1024×768 normal, 768×1024 normal, +33)_

### rechargement au milieu de la page (2)

- **rechargement au milieu de la page** — `/agenda` — écran différent à la même position après rechargement (9.7 %), voir comparaisons/rechargement-agenda-*.png _(1366×768)_
- **rechargement au milieu de la page** — `/ecoles` — écran différent à la même position après rechargement (4.6 %), voir comparaisons/rechargement-ecoles-*.png _(1366×768)_

## Non lancé

- **Safari (WebKit)** : WebKit ne peut pas s’installer ici : vérification à faire dans Safari sur le Mac (liste dans le rapport)

### À vérifier dans Safari sur le Mac (WebKit indisponible ici)

- Ouverture de chaque page : rien qui clignote, intro complète au premier chargement et au rechargement.
- Changement de page : le voile couvre l’écran, pas de page blanche ; retour arrière sans intro ni voile resté.
- Défilement : fluide (natif), en-tête qui se cache et revient sans clignoter, sections épinglées entières.
- Menu sur iPhone (mode Responsive de Safari) : ouverture, fermeture, page bloquée derrière.
- Polices, images, mention « Illustration générée », formulaires et barre fixe du bas.

## Repères

- Numéro de version des fichiers : ?v=2
- Grille wouahou : point « 1. L’effet signature se manipule » dispensé (config.json) : v11 : objet à manipuler non obligatoire ; le calculateur de visite et les filtres d'ateliers servent le visiteur.
- Grille wouahou : point « 4. Quelque chose relie les sections et les pages » dispensé (config.json) : v11 : pas de fil imposé ; le carroyage (photos, voile, surtitres) relie le site.
- Grille wouahou : point « 5. Un titre fait l’événement sur chaque page » dispensé (config.json) : v11 : conseil seulement.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2884 ms depuis le premier octet
- Ouverture /agenda (1366×768) : 2791 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2755 ms depuis le premier octet
- Ouverture /ecoles (1366×768) : 2879 ms depuis le premier octet
- Ouverture /le-site (1366×768) : 2761 ms depuis le premier octet
- Ouverture /visiter (1366×768) : 2895 ms depuis le premier octet
- Ouverture / (390×844) : 2898 ms depuis le premier octet
- Ouverture /agenda (390×844) : 2771 ms depuis le premier octet
- film de l'ouverture /agenda 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /contact (390×844) : 2775 ms depuis le premier octet
- Ouverture /ecoles (390×844) : 2788 ms depuis le premier octet
- Ouverture /le-site (390×844) : 2790 ms depuis le premier octet
- film de l'ouverture /le-site 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /visiter (390×844) : 2829 ms depuis le premier octet
- Bords de l’écran : 403 images d’intro, 170 de voile et 162 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran /agenda : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /ecoles : aucune section épinglée ou plein écran.
- Tient dans l'écran /le-site : aucune section épinglée ou plein écran.
- Tient dans l'écran /visiter : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 498, tâche la plus longue 0 ms
- Fluidité /agenda 1366×768 (molette) : 0 % d'images lentes sur 243, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 188, tâche la plus longue 0 ms
- Fluidité /ecoles 1366×768 (molette) : 1 % d'images lentes sur 339, tâche la plus longue 53 ms
- Fluidité /le-site 1366×768 (molette) : 0 % d'images lentes sur 411, tâche la plus longue 50 ms
- Fluidité /visiter 1366×768 (molette) : 0 % d'images lentes sur 389, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1422, tâche la plus longue 0 ms
- Fluidité /agenda 390×844 (doigt) : 0 % d'images lentes sur 1423, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1342, tâche la plus longue 0 ms
- Fluidité /ecoles 390×844 (doigt) : 0 % d'images lentes sur 1387, tâche la plus longue 0 ms
- Fluidité /le-site 390×844 (doigt) : 0 % d'images lentes sur 1418, tâche la plus longue 0 ms
- Fluidité /visiter 390×844 (doigt) : 0 % d'images lentes sur 1429, tâche la plus longue 0 ms
- Vitesse / : 0.66 s de calcul au chargement (téléphone ralenti).
- Vitesse /agenda : 0.36 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.46 s de calcul au chargement (téléphone ralenti).
- Vitesse /ecoles : 0.58 s de calcul au chargement (téléphone ralenti).
- Vitesse /le-site : 0.38 s de calcul au chargement (téléphone ralenti).
- Vitesse /visiter : 0.57 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/agenda,/visiter --seulement=fichiers,mesures
```
