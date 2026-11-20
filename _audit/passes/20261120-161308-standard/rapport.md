# Rapport d’audit

Projet : `villa-mageroy-maquette` · 20/11/2026 17:35:35 · 22 min · 7 page(s) · audit standard

## Résumé

- Statut : **34 échec(s)**
- Passe : `20261120-161308-standard` · version ?v=1
- Échecs : **34**
- À regarder : **38**
- Non lancé : **1**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), grille wouahou (7), mesures (77), balayage (6), films d’ouverture (12), films de transition (12), bords de l’écran (7), intro accélérable et passable (7), menu (1), clavier (7), liens et boutons (7), liens profonds (15), liens vers la page en cours (6), changements de hauteur (6), tient dans l’écran (5), films des épinglages (1), fluidité (12), défilement selon l’appareil (5), mouvement (12), effets du plan (6), souris immobile (3), vitesse (6), captures (1)

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

### texte coupé (7)

- **texte coupé** — `/` — div.frise-scene > ol.frise-piste > li.etape:nth-of-type(2) > p « Le corps de logis est bâti en pierre, plein sud :  » — coupé par section#siecles « CHRONOLOGIE Quatre siècles de vie, quarante ans de » _(390×844 normal, 390×844 sansWebgl)_
- **texte coupé** — `/` — div.frise-scene > ol.frise-piste > li.etape.etape--image:nth-of-type(3) > p « La villa se tourne vers le nord, s'ouvre sur une c » — coupé par section#siecles « CHRONOLOGIE Quatre siècles de vie, quarante ans de » _(390×844 normal, 320×568 normal, 390×844 sansWebgl)_
- **texte coupé** — `/` — div.frise-scene > ol.frise-piste > li.etape:nth-of-type(5) > p « Les raids germaniques troublent la région. Un trés » — coupé par section#siecles « CHRONOLOGIE Quatre siècles de vie, quarante ans de » _(390×844 normal, 390×844 sansWebgl)_
- **texte coupé** — `/` — div.frise-scene > ol.frise-piste > li.etape:nth-of-type(6) > p « Un groupe organisé réoccupe et fortifie les ruines » — coupé par section#siecles « CHRONOLOGIE Quatre siècles de vie, quarante ans de » _(390×844 normal, 320×568 normal, 390×844 sansWebgl)_
- **texte coupé** — `/` — div.frise-scene > ol.frise-piste > li.etape:nth-of-type(8) > p « Le groupe d'archéologie de Habay, devenu l'asbl AR » — coupé par section#siecles « CHRONOLOGIE Quatre siècles de vie, quarante ans de » _(390×844 normal, 390×844 sansWebgl)_
- **texte coupé** — `/` — div.frise-scene > ol.frise-piste > li.etape:nth-of-type(4) > h3 « Le domaine s'agrandit » — coupé par section#siecles « CHRONOLOGIE Quatre siècles de vie, quarante ans de » _(1366×768 sansJs)_
- **texte coupé** — `/` — div.frise-scene > ol.frise-piste > li.etape:nth-of-type(4) > p « Nouvelles pièces, porche d'entrée, peut-être un at » — coupé par section#siecles « CHRONOLOGIE Quatre siècles de vie, quarante ans de » _(1366×768 sansJs)_

### premier écran : bouton principal hors de l’écran (3)

- **premier écran : bouton principal hors de l’écran** — `/agenda` — div:nth-of-type(1) > div.tete-anime > p.tete-actions:nth-of-type(5) > a.bouton « Réserver ma place » _(320×568 normal, 844×390 normal, 1366×768 sansJs, 320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/contact` — div.conteneur.tete-contact-texte:nth-of-type(1) > div.joindre.tete-anime:nth-of-type(2) > p.tete-actions:nth-of-type(2) > a.bouton « Écrire à l'équipe » _(320×568 normal, 320×568 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/visiter` — div.tete-plein-contenu > div > p.tete-actions.tete-anime:nth-of-type(3) > a.bouton « Réserver une visite guidée » _(320×568 normal, 390×844 normal, 390×844 sansJs, 390×844 sansWebgl, 1366×768 sansJs, 320×568 sansJs)_

### premier écran : information clé hors de l’écran (3)

- **premier écran : information clé hors de l’écran** — `/agenda` — div:nth-of-type(1) > div.tete-anime > p.tete-actions:nth-of-type(5) > span.info-cle « Réservation obligatoire, places limitées » _(320×568 normal, 844×390 normal, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/contact` — section#debut > div.conteneur.tete-contact-texte:nth-of-type(1) > div.joindre.tete-anime:nth-of-type(2) > p.statut-bureau:nth-of-type(1) « Bureau : du lundi au vendredi, de 9 h à 17 h » _(320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/visiter` — div.tete-plein-contenu > div > p.tete-actions.tete-anime:nth-of-type(3) > span.info-cle « Accessible maintenant · entrée libre » _(320×568 normal, 390×844 normal, 390×844 sansJs, 390×844 sansWebgl, 1366×768 sansJs, 320×568 sansJs)_

### textes qui se chevauchent (10)

- **textes qui se chevauchent** — `/agenda` — div:nth-of-type(1) > div.tete-anime > p.date-geante:nth-of-type(2) > b « 5 » — avec section#debut > div:nth-of-type(1) > div.tete-anime > p.prochain-titre:nth-of-type(3) « Saint-Nicolas à la villa » _(390×844 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **textes qui se chevauchent** — `/agenda` — div:nth-of-type(1) > div.tete-anime > p:nth-of-type(1) > strong « Prochain rendez-vous » — avec div:nth-of-type(1) > div.tete-anime > p.date-geante:nth-of-type(2) > b « 5 » _(768×1024 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/agenda` — section#debut > div:nth-of-type(1) > div.tete-anime > p:nth-of-type(1) « Prochain rendez-vous · dans 15 jours » — avec div:nth-of-type(1) > div.tete-anime > p.date-geante:nth-of-type(2) > b « 5 » _(768×1024 normal, 1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/agenda` — div:nth-of-type(1) > div.tete-anime > p.date-geante:nth-of-type(2) > span « déc. » — avec section#debut > div:nth-of-type(1) > div.tete-anime > p.prochain-titre:nth-of-type(3) « Saint-Nicolas à la villa » _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **textes qui se chevauchent** — `/agenda` — section#debut > div:nth-of-type(1) > div.tete-anime > p:nth-of-type(1) « Prochain rendez-vous · » — avec div:nth-of-type(1) > div.tete-anime > p.date-geante:nth-of-type(2) > b « 5 » _(1366×768 sansJs)_
- **textes qui se chevauchent** — `/contact` — div:nth-of-type(1) > h1.titre-page > span.ligne > span « Une question, une visite, une classe ? » — avec section#debut > div.conteneur.tete-contact-texte:nth-of-type(1) > div:nth-of-type(1) > p.tete-intro.tete-anime:nth-of-type(2) « L'équipe de l'asbl ARC-HAB répond par téléphone au » _(1920×1080 normal)_
- **textes qui se chevauchent** — `/le-site` — ol.chrono > li:nth-of-type(3) > figure.media > figcaption.media-legende:nth-of-type(2) « Évocation d'une villa gallo-romaine à son apogée,  » — avec div.conteneur > ol.chrono > li:nth-of-type(4) > span.chrono-siecle:nth-of-type(1) « III » _(320×568 normal, 390×844 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **textes qui se chevauchent** — `/le-site` — ol.chrono > li:nth-of-type(3) > figure.media > figcaption.media-legende:nth-of-type(2) « Évocation d'une villa gallo-romaine à son apogée,  » — avec div.conteneur > ol.chrono > li:nth-of-type(4) > span.etape-quand:nth-of-type(2) « IIIE SIÈCLE » _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_
- **textes qui se chevauchent** — `/le-site` — ol.chrono > li:nth-of-type(3) > figure.media > figcaption.media-legende:nth-of-type(2) « Évocation d'une villa gallo-romaine à son apogée,  » — avec div.conteneur > ol.chrono > li:nth-of-type(4) > h3 « Le domaine s'agrandit » _(320×568 normal, 390×844 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **textes qui se chevauchent** — `/visiter` — section#debut > div.tete-plein-contenu > p.prix-geant.tete-anime > strong « 0 € » — avec section#debut > div.tete-plein-contenu > p.prix-geant.tete-anime > span « la visite libre, tous les jours, 24 h/24, toute l' » _(1920×1080 normal)_

### photo faible affichée en grand (3)

- **photo faible affichée en grand** — `/agenda` — div.apercu.tete-date-media:nth-of-type(2) > figure.media > picture > img « Des reconstitueurs en tunique devant une table de  » — agenda-fete-romaine (4/5, faible, 60 % de l'écran) : en vignette, ou une meilleure image _(390×844 normal)_
- **photo faible affichée en grand** — `/agenda` — div.apercu.tete-date-media:nth-of-type(2) > figure.media > picture > img « Des reconstitueurs en tunique devant une table de  » — agenda-fete-romaine (4/5, faible, 38 % de l'écran) : en vignette, ou une meilleure image _(1366×768 normal)_
- **photo faible affichée en grand** — `/agenda` — div.apercu.tete-date-media:nth-of-type(2) > figure.media > picture > img « Des reconstitueurs en tunique devant une table de  » — agenda-fete-romaine (4/5, faible, 29 % de l'écran) : en vignette, ou une meilleure image _(1920×1080 normal)_

### zone tactile sous 44 px (2)

- **zone tactile sous 44 px** — `/contact` — section#debut > div.conteneur.tete-contact-texte:nth-of-type(1) > div.joindre.tete-anime:nth-of-type(2) > a:nth-of-type(1) « 063 75 85 44 » — 358 × 34 px _(390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, 320×568 sansJs)_
- **zone tactile sous 44 px** — `/contact` — section#debut > div.conteneur.tete-contact-texte:nth-of-type(1) > div.joindre.tete-anime:nth-of-type(2) > a.joindre-mail:nth-of-type(2) « villa.mageroy@gmail.com » — 358 × 20 px _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 390×844 sansWebgl, +1)_

### contraste insuffisant (2)

- **contraste insuffisant** — `/le-site` — div > figure.cotes > svg > text:nth-of-type(1) — 3.64:1 (minimum 4.5:1) _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **contraste insuffisant** — `/le-site` — div > figure.cotes > svg > text:nth-of-type(2) — 3.64:1 (minimum 4.5:1) _(320×568 normal, 390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

### accessibilité (axe) : color-contrast (1)

- **accessibilité (axe) : color-contrast** — `/le-site` — text[x="0"] — Elements must meet minimum color contrast ratio thresholds _(390×844 normal, 1366×768 normal)_

### premier écran : titre hors de l’écran (1)

- **premier écran : titre hors de l’écran** — `/visiter` — section#debut > div.tete-plein-contenu > div > h1.titre-page « Entrée libre, jour et nuit » — haut 455 px, bas 548 px, zone 65–490 px _(320×568 normal, 320×568 sansJs)_

### contraste sur image (1)

- **contraste sur image** — `/visiter` — section#debut > div.tete-plein-contenu > div > p.surtitre.tete-anime:nth-of-type(1) « VISITER » — 4.43:1 sur les 10 % de la photo les moins favorables (minimum 4.5:1) _(1366×768 normal)_

### débordement horizontal (1)

- **débordement horizontal** — `/ecoles` — page large de 458 px — largeurs : 320, 360, 400, 440 px _(balayage 320–1920 normal)_

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
- **section sans visuel** — `/visiter` — section#formules « FORMULES ET TARIFS Quatre façons de découvrir la v » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/visiter` — section#calcul « CALCULER Combien coûte votre visite guidée ? Un fo » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/visiter` — section#reserver « RÉSERVER Demander une visite guidée Les visites on » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 768×1024 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

### texte de contenu sous 13 px (ordinateur) (12)

- **texte de contenu sous 13 px (ordinateur)** — `/agenda` — section#dates > div.conteneur > div.agd__outils:nth-of-type(2) > p.agd__compte « 1 date à venir » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/agenda` — section#dates > div.conteneur > div.agenda-liste:nth-of-type(3) > h3.agd__groupe-titre.agd__mois-premier « DÉCEMBRE 2026 » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/ecoles` — li#atelier-ceramique > div.atelier-corps > span.etiquette « Aussi en classe » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/ecoles` — li#atelier-mosaique > div.atelier-corps > span.etiquette « Aussi en classe » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/ecoles` — li#atelier-alimentation > div.atelier-corps > span.etiquette.etiquette--suspendu « Suspendu pendant les travaux du pavillon » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/ecoles` — li#atelier-enfance > div.atelier-corps > span.etiquette « Aussi en classe » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/ecoles` — li#atelier-stratification > div.atelier-corps > span.etiquette « Aussi en classe » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/ecoles` — li#atelier-fouille > div.atelier-corps > span.etiquette « Pendant la campagne de fouille » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/ecoles` — li#atelier-sport > div.atelier-corps > span.etiquette « Aussi en classe » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/ecoles` — li#atelier-objets > div.atelier-corps > span.etiquette « Aussi en classe » — 12.5 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansJs, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/visiter` — div.conteneur > ul.formules.fx-fini > li.formule.formule--suspendue:nth-of-type(4) > span.formule-statut « Suspendu pendant les travaux du pavillon » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 normal, 1920×1080 normal, 1366×768 sansWebgl)_
- **texte de contenu sous 13 px (ordinateur)** — `/visiter` — div.conteneur > ul.formules > li.formule.formule--suspendue:nth-of-type(4) > span.formule-statut « Suspendu pendant les travaux du pavillon » — 12.8 px : surtitres et légendes à 13 px au moins, textes de cartes à 15 px _(1366×768 sansJs)_

### typographie française (1)

- **typographie française** — `/agenda` — section#dates > div.conteneur > div.agd__tete.section-tete:nth-of-type(1) > p.agd__prochaine:nth-of-type(2) « Prochaine date : Saint-Nicolas à la villa, dans 14 » — espace insécable manquante avant ou après « : » _(1366×768 normal)_

### transition : changement brusque (7)

- **transition : changement brusque** — `/ → /visiter` — à 667 ms (différence 63 %) (films/transition-vers-visiter-1366.png) _(1366×768 film)_
- **transition : changement brusque** — `/agenda → /visiter` — à 667 ms (différence 67 %) (films/transition-agenda-vers-visiter-1366.png) _(1366×768 film)_
- **transition : changement brusque** — `/ → /visiter` — à 726 ms (différence 75 %) (films/transition-vers-visiter-390.png) _(390×844 film)_
- **transition : changement brusque** — `/agenda → /visiter` — à 700 ms (différence 68 %) (films/transition-agenda-vers-visiter-390.png) _(390×844 film)_
- **transition : changement brusque** — `/contact → /visiter` — à 683 ms (différence 63 %) (films/transition-contact-vers-visiter-390.png) _(390×844 film)_
- **transition : changement brusque** — `/ecoles → /visiter` — à 650 ms (différence 65 %) (films/transition-ecoles-vers-visiter-390.png) _(390×844 film)_
- **transition : changement brusque** — `/visiter → /ecoles` — à 683 ms (différence 31 %) (films/transition-visiter-vers-ecoles-390.png) _(390×844 film)_

### retour arrière : changement brusque (2)

- **retour arrière : changement brusque** — `/` — à 80 ms (différence 39 %) (films/retour-arrière-1366.png) _(1366×768 retour arrière)_
- **retour arrière : changement brusque** — `/` — à 70 ms (différence 47 %) (films/retour-arrière-390.png) _(390×844 retour arrière)_

### retour avant : changement brusque (1)

- **retour avant : changement brusque** — `/visiter` — à 59 ms (différence 48 %) (films/retour-avant-390.png) _(390×844 retour avant)_

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/ecoles` — écran différent à la même position après rechargement (5.0 %), voir comparaisons/rechargement-ecoles-*.png _(1366×768)_

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
- Ouverture / (1366×768) : 2874 ms depuis le premier octet
- Ouverture /agenda (1366×768) : 2755 ms depuis le premier octet
- Ouverture /contact (1366×768) : 2680 ms depuis le premier octet
- Ouverture /ecoles (1366×768) : 2768 ms depuis le premier octet
- film de l'ouverture /ecoles 1366×768 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /le-site (1366×768) : 2718 ms depuis le premier octet
- Ouverture /visiter (1366×768) : 2761 ms depuis le premier octet
- Ouverture / (390×844) : 2887 ms depuis le premier octet
- film de l'ouverture / 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /agenda (390×844) : 2704 ms depuis le premier octet
- Ouverture /contact (390×844) : 2695 ms depuis le premier octet
- Ouverture /ecoles (390×844) : 2750 ms depuis le premier octet
- Ouverture /le-site (390×844) : 2680 ms depuis le premier octet
- film de l'ouverture /le-site 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Ouverture /visiter (390×844) : 2760 ms depuis le premier octet
- film de l'ouverture /visiter 390×844 : réussi à la tentative 2 (avant : cdpSession.send: Protocol error (Page.startScreencast): Not attached to an active page)
- Bords de l’écran : 637 images d’intro, 260 de voile et 238 de menu jugées (panneau immobile couvrant tout l’écran), barre de défilement classique de 15 px.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.
- Tient dans l'écran /agenda : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /ecoles : aucune section épinglée ou plein écran.
- Tient dans l'écran /le-site : aucune section épinglée ou plein écran.
- Tient dans l'écran /visiter : aucune section épinglée ou plein écran.
- Fluidité / 1366×768 (molette) : 0 % d'images lentes sur 481, tâche la plus longue 0 ms
- Fluidité /agenda 1366×768 (molette) : 0 % d'images lentes sur 183, tâche la plus longue 0 ms
- Fluidité /contact 1366×768 (molette) : 0 % d'images lentes sur 224, tâche la plus longue 0 ms
- Fluidité /ecoles 1366×768 (molette) : 0 % d'images lentes sur 331, tâche la plus longue 0 ms
- Fluidité /le-site 1366×768 (molette) : 0 % d'images lentes sur 388, tâche la plus longue 0 ms
- Fluidité /visiter 1366×768 (molette) : 0 % d'images lentes sur 336, tâche la plus longue 0 ms
- Fluidité / 390×844 (doigt) : 0 % d'images lentes sur 1407, tâche la plus longue 0 ms
- Fluidité /agenda 390×844 (doigt) : 0 % d'images lentes sur 1346, tâche la plus longue 0 ms
- Fluidité /contact 390×844 (doigt) : 0 % d'images lentes sur 1341, tâche la plus longue 0 ms
- Fluidité /ecoles 390×844 (doigt) : 0 % d'images lentes sur 1340, tâche la plus longue 0 ms
- Fluidité /le-site 390×844 (doigt) : 0 % d'images lentes sur 1394, tâche la plus longue 0 ms
- Fluidité /visiter 390×844 (doigt) : 0 % d'images lentes sur 1367, tâche la plus longue 63 ms
- Vitesse / : 0.39 s de calcul au chargement (téléphone ralenti).
- Vitesse /agenda : 0.22 s de calcul au chargement (téléphone ralenti).
- Vitesse /contact : 0.25 s de calcul au chargement (téléphone ralenti).
- Vitesse /ecoles : 0.40 s de calcul au chargement (téléphone ralenti).
- Vitesse /le-site : 0.26 s de calcul au chargement (téléphone ralenti).
- Vitesse /visiter : 0.26 s de calcul au chargement (téléphone ralenti).

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/agenda,/contact,/le-site,/visiter,/ecoles --seulement=fichiers,mesures
```
