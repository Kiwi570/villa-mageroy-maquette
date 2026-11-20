# Rapport d’audit

Projet : `villa-mageroy-maquette` · 20/11/2026 18:27:17 · 5 min · 7 page(s) · audit standard (étapes : fichiers, parcours)

## Résumé

- Statut : **tout a tourné, aucun échec**
- Passe : `20261120-172231-standard-partiel` · version ?v=1
- Échecs : **0**
- À regarder : **5**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), intro accélérable et passable (7), menu (1), clavier (7), liens et boutons (7), liens profonds (16), liens vers la page en cours (6), changements de hauteur (6)

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
| 20261120-165738-standard | standard | toutes | toutes | 1 | 19 | 1 | échecs |
| **20261120-172231-standard-partiel** (celle-ci) | standard | toutes | fichiers, parcours | 0 | 5 | 0 | complet |

## Échecs

Aucun.

## À regarder

### « à compléter » visible (4)

- **« à compléter » visible** — `agenda.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `ecoles.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `visiter.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### rechargement au milieu de la page (1)

- **rechargement au milieu de la page** — `/ecoles` — écran différent à la même position après rechargement (4.6 %), voir comparaisons/rechargement-ecoles-*.png _(1366×768)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 3 étape(s) notée(s), 36 min de travail pour 70 min de budget, 12 min d’attente de l’utilisateur.
- Audit standard : étapes lourdes sur /, /agenda, /contact, /ecoles, /le-site, /visiter.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Aucun parcours propre au projet (_audit/parcours.mjs) : filtres, calculateurs, panier, réservation, fenêtres testés seulement par les contrôles généraux.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`
