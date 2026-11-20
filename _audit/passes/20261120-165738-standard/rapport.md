# Rapport d’audit

Projet : `villa-mageroy-maquette` · 20/11/2026 18:20:11 · 23 min · 7 page(s) · audit standard

## Résumé

- Statut : **1 échec(s)**
- Passe : `20261120-165738-standard` · version ?v=1
- Échecs : **1**
- À regarder : **19**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (7), mesures (77), balayage (6), films d’ouverture (12), films de transition (12), bords de l’écran (7), intro accélérable et passable (7), menu (1), clavier (7), liens et boutons (7), liens profonds (16), liens vers la page en cours (6), changements de hauteur (6), tient dans l’écran (5), films des épinglages (1), fluidité (12), défilement selon l’appareil (5), mouvement (12), effets du plan (6), souris immobile (3), vitesse (6), captures (1)

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

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-161308-standard | standard | toutes | toutes | 34 | 38 | 1 | échecs |
| 20261120-163835-standard-cible-partiel | standard | /,/agenda,/contact,/le-site,/visiter,/ecoles | fichiers, mesures | 5 | 14 | 0 | échecs |
| 20261120-164113-standard-cible-partiel | standard | /,/agenda,/contact,/ecoles,/visiter | fichiers, mesures | 2 | 14 | 0 | échecs |
| 20261120-164324-standard-cible-partiel | standard | /,/agenda | fichiers, mesures | 0 | 7 | 0 | complet |
| 20261120-164422-complet-partiel | complet | toutes | mesures, ecran | 5 | 11 | 0 | échecs |
| 20261120-165237-complet-cible-partiel | complet | /,/404,/agenda | fichiers, mesures | 1 | 8 | 0 | échecs |
| 20261120-165526-complet-cible-partiel | complet | /,/agenda | fichiers, mesures | 0 | 8 | 0 | complet |
| **20261120-165738-standard** (celle-ci) | standard | toutes | toutes | 1 | 19 | 1 | échecs |

## Échecs

### lien profond (1)

- **lien profond** — `/agenda → /contact?sujet=Saint-Nicolas+%C3%A0+la+villa&evenement=saint-nicolas&date=2026-12-05T14%3A00#formulaire` — choix « sujet=Saint-Nicolas à la villa » non prérempli (valeur : ) _(1366×768 lien profond)_

## À regarder

### « à compléter » visible (4)

- **« à compléter » visible** — `agenda.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `ecoles.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `visiter.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### section sans visuel (10)

- **section sans visuel** — `/` — section#rendez-vous « AGENDA Le prochain rendez-vous 5 DÉC. Saint-Nicola » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/` — section#siecles « Quatre siècles de vie, quarante ans de fouilles I  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(844×390 normal)_
- **section sans visuel** — `/agenda` — section#lettre « RESTER INFORMÉ Recevoir le programme La lettre d'i » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/contact` — section#formulaire « ÉCRIRE Votre demande Bureau : du lundi au vendredi » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/contact` — section#soutenir « SOUTENIR Devenir membre d'ARC-HAB Bénévole Rejoind » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/ecoles` — section#travaux « Pendant les travaux du pavillon Les ateliers en in » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/ecoles` — section#reserver « RÉSERVER Demander une réservation Réservation obli » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/visiter` — section#formules « FORMULES ET TARIFS Quatre façons de découvrir la v » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/visiter` — section#calcul « CALCULER Combien coûte votre visite guidée ? Un fo » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/visiter` — section#reserver « RÉSERVER Demander une visite guidée Les visites on » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

### transition : changement brusque (2)

- **transition : changement brusque** — `/visiter → /ecoles` — à 700 ms (différence 29 %) (films/transition-visiter-vers-ecoles-1366.png) _(1366×768 film)_
- **transition : changement brusque** — `/visiter → /ecoles` — à 700 ms (différence 32 %) (films/transition-visiter-vers-ecoles-390.png) _(390×844 film)_

### retour arrière : changement brusque (1)

- **retour arrière : changement brusque** — `/` — à 80 ms (différence 46 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

### retour avant : changement brusque (1)

- **retour avant : changement brusque** — `/visiter` — à 76 ms (différence 41 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### rechargement au milieu de la page (1)

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

- Numéro de version des fichiers : ?v=1
- Journal v1 : 3 étape(s) notée(s), 36 min de travail pour 70 min de budget, 12 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /agenda, /contact, /ecoles, /le-site, /visiter.
- Grille wouahou : point « 1. L’effet signature se manipule » dispensé (config.json) : v11 : objet à manipuler non obligatoire ; le calculateur de visite et les filtres d'ateliers servent le visiteur.
- Grille wouahou : point « 4. Quelque chose relie les sections et les pages » dispensé (config.json) : v11 : pas de fil imposé ; le carroyage (photos, voile, surtitres) relie le site.
- Grille wouahou : point « 5. Un titre fait l’événement sur chaque page » dispensé (config.json) : v11 : conseil seulement.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Ouverture / (1366×768) : 2892 ms depuis le premier octet
- Ouverture /agenda (1366×768) : 2733 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2694 ms depuis le premier octet
- Ouverture /ecoles (1366×768) : 2728 ms depuis le premier octet
- Ouverture /le-site (1366×768) : 2761 ms depuis le premier octet
- film de l'ouverture /le-site 1366×768 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /visiter (1366×768) : 2796 ms depuis le premier octet
- Ouverture / (390×844) : 2863 ms depuis le premier octet
- Ouverture /agenda (390×844) : 2720 ms depuis le premier octet
- Ouverture /contact (390×844) : 2697 ms depuis le premier octet
- Ouverture /ecoles (390×844) : 2781 ms depuis le premier octet
- Ouverture /le-site (390×844) : 2743 ms depuis le premier octet
- Ouverture /visiter (390×844) : 2761 ms depuis le premier octet
- bords de l’écran / 1366×768 : réussi à la tentative 3 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 651 images d’intro, 275 de voile et 244 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran /agenda : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /ecoles : aucune section épinglée ou plein écran.
- Tient dans l'écran /le-site : aucune section épinglée ou plein écran.
- Tient dans l'écran /visiter : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 484, tâche la plus longue 0 ms
- Fluidité /agenda 1366×768 (molette) : 0 % d'images lentes sur 182, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 227, tâche la plus longue 0 ms
- Fluidité /ecoles 1366×768 (molette) : 0 % d'images lentes sur 328, tâche la plus longue 0 ms
- Fluidité /le-site 1366×768 (molette) : 0 % d'images lentes sur 381, tâche la plus longue 0 ms
- Fluidité /visiter 1366×768 (molette) : 0 % d'images lentes sur 326, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1388, tâche la plus longue 0 ms
- Fluidité /agenda 390×844 (doigt) : 0 % d'images lentes sur 1407, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1336, tâche la plus longue 0 ms
- Fluidité /ecoles 390×844 (doigt) : 0 % d'images lentes sur 1351, tâche la plus longue 0 ms
- Fluidité /le-site 390×844 (doigt) : 0 % d'images lentes sur 1360, tâche la plus longue 0 ms
- Fluidité /visiter 390×844 (doigt) : 0 % d'images lentes sur 1346, tâche la plus longue 0 ms
- Vitesse / : 0.45 s de calcul au chargement (téléphone ralenti).
- Vitesse /agenda : 0.20 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.27 s de calcul au chargement (téléphone ralenti).
- Vitesse /ecoles : 0.38 s de calcul au chargement (téléphone ralenti).
- Vitesse /le-site : 0.28 s de calcul au chargement (téléphone ralenti).
- Vitesse /visiter : 0.29 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --seulement=fichiers,parcours
```
