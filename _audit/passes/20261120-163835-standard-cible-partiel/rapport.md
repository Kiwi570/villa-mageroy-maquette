# Rapport d’audit

Projet : `villa-mageroy-maquette` · 20/11/2026 17:40:59 · 2 min · 6 page(s) · audit standard ciblé sur /,/agenda,/contact,/le-site,/visiter,/ecoles (étapes : fichiers, mesures)

## Résumé

- Statut : **5 échec(s)**
- Passe : `20261120-163835-standard-cible-partiel` · version ?v=1
- Échecs : **5**
- À regarder : **14**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (66), balayage (6)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-161308-standard | standard | toutes | toutes | 34 | 38 | 1 | échecs |
| **20261120-163835-standard-cible-partiel** (celle-ci) | standard | /,/agenda,/contact,/le-site,/visiter,/ecoles | fichiers, mesures | 5 | 14 | 0 | échecs |

## Échecs

### premier écran : information clé hors de l’écran (3)

- **premier écran : information clé hors de l’écran** — `/agenda` — div:nth-of-type(1) > div.tete-anime > p.tete-actions:nth-of-type(4) > span.info-cle « Réservation obligatoire, places limitées » _(844×390 normal)_
- **premier écran : information clé hors de l’écran** — `/ecoles` — div.conteneur.tete-bandeau-texte:nth-of-type(1) > div.tete-cote:nth-of-type(2) > p.tete-actions.tete-anime:nth-of-type(2) > span.info-cle « Visite : 3 € par élève · accompagnants gratuits » _(320×568 normal, 320×568 sansJs)_
- **premier écran : information clé hors de l’écran** — `/visiter` — div.tete-plein-contenu > div > p.tete-actions.tete-anime:nth-of-type(3) > span.info-cle « Accessible maintenant · entrée libre » _(320×568 normal, 320×568 sansJs)_

### textes qui se chevauchent (1)

- **textes qui se chevauchent** — `/agenda` — div:nth-of-type(1) > div.tete-anime > p.date-geante:nth-of-type(1) > b « 5 » — avec section#debut > div:nth-of-type(1) > div.tete-anime > p.prochain-titre:nth-of-type(2) « Saint-Nicolas à la villa » _(390×844 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, 1920×1080 normal, +3)_

### premier écran : bouton principal hors de l’écran (1)

- **premier écran : bouton principal hors de l’écran** — `/contact` — div.conteneur.tete-contact-texte:nth-of-type(1) > div.joindre.tete-anime:nth-of-type(2) > p.tete-actions:nth-of-type(2) > a.bouton « Écrire à l'équipe » _(844×390 normal)_

## À regarder

### « à compléter » visible (4)

- **« à compléter » visible** — `agenda.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `ecoles.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `visiter.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### section sans visuel (10)

- **section sans visuel** — `/` — section#rendez-vous « AGENDA Le prochain rendez-vous 5 DÉC. Saint-Nicola » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/` — section#siecles « Quatre siècles de vie, quarante ans de fouilles I  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(844×390 normal)_
- **section sans visuel** — `/agenda` — section#lettre « RESTER INFORMÉ Recevoir le programme La lettre d'i » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/contact` — section#formulaire « ÉCRIRE Votre demande Bureau : du lundi au vendredi » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/contact` — section#soutenir « SOUTENIR Devenir membre d'ARC-HAB Bénévole Rejoind » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 320×568 normal, 768×1024 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/ecoles` — section#travaux « Pendant les travaux du pavillon Les ateliers en in » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/ecoles` — section#reserver « RÉSERVER Demander une réservation Réservation obli » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/visiter` — section#formules « FORMULES ET TARIFS Quatre façons de découvrir la v » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/visiter` — section#calcul « CALCULER Combien coûte votre visite guidée ? Un fo » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_
- **section sans visuel** — `/visiter` — section#reserver « RÉSERVER Demander une visite guidée Les visites on » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(768×1024 normal, 390×844 normal, 320×568 normal, 844×390 normal, 390×844 sansJs, 1366×768 normal, +5)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 3 étape(s) notée(s), 36 min de travail pour 70 min de budget, 12 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /agenda, /contact, /ecoles, /le-site, /visiter.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --pages=/,/agenda,/contact,/ecoles,/visiter --seulement=fichiers,mesures
```
