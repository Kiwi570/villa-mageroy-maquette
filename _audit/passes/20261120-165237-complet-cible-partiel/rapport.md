# Rapport d’audit

Projet : `villa-mageroy-maquette` · 20/11/2026 17:55:21 · 3 min · 3 page(s) · audit complet ciblé sur /,/404,/agenda (étapes : fichiers, mesures)

## Résumé

- Statut : **1 échec(s)**
- Passe : `20261120-165237-complet-cible-partiel` · version ?v=1
- Échecs : **1**
- À regarder : **8**
- Non lancé : **0**
- Contrôles passés : vercel.json (1), .vercelignore (1), robots.txt (1), numéro de version (1), langues (1), mesures (117), balayage (2)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-161308-standard | standard | toutes | toutes | 34 | 38 | 1 | échecs |
| 20261120-163835-standard-cible-partiel | standard | /,/agenda,/contact,/le-site,/visiter,/ecoles | fichiers, mesures | 5 | 14 | 0 | échecs |
| 20261120-164113-standard-cible-partiel | standard | /,/agenda,/contact,/ecoles,/visiter | fichiers, mesures | 2 | 14 | 0 | échecs |
| 20261120-164324-standard-cible-partiel | standard | /,/agenda | fichiers, mesures | 0 | 7 | 0 | complet |
| 20261120-164422-complet-partiel | complet | toutes | mesures, ecran | 5 | 11 | 0 | échecs |
| **20261120-165237-complet-cible-partiel** (celle-ci) | complet | /,/404,/agenda | fichiers, mesures | 1 | 8 | 0 | échecs |

## Échecs

### textes qui se chevauchent (1)

- **textes qui se chevauchent** — `/agenda` — div:nth-of-type(1) > div.tete-anime > p.date-geante:nth-of-type(1) > span « déc. » — avec section#debut > div:nth-of-type(1) > div.tete-anime > p.prochain-titre:nth-of-type(2) « Saint-Nicolas à la villa » _(1000×560 normal, 1000×560 sansJs, 1000×560 sansWebgl)_

## À regarder

### « à compléter » visible (4)

- **« à compléter » visible** — `agenda.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `contact.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `ecoles.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)
- **« à compléter » visible** — `visiter.html` — 1 fois hors du pied de page : remplacer par une phrase vraie qui oriente le visiteur (« Tarifs selon la saison, donnés à la réservation ») ou retirer l'élément, et le noter dans la fiche du README (sauf sens propre : « dossier à compléter »)

### section sans visuel (4)

- **section sans visuel** — `/` — section#rendez-vous « AGENDA Le prochain rendez-vous 5 DÉC. Saint-Nicola » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/` — section#siecles « Quatre siècles de vie, quarante ans de fouilles I  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(844×390 normal, 844×390 sansJs, 844×390 sansWebgl)_
- **section sans visuel** — `/` — section#siecles « CHRONOLOGIE Quatre siècles de vie, quarante ans de » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(1000×560 normal, 1000×560 sansJs, 1000×560 sansWebgl)_
- **section sans visuel** — `/agenda` — section#lettre « RESTER INFORMÉ Recevoir le programme La lettre d'i » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_

## Non lancé

Tout a été lancé.


## Repères

- Numéro de version des fichiers : ?v=1
- Journal v1 : 3 étape(s) notée(s), 36 min de travail pour 70 min de budget, 12 min d’attente de l’utilisateur.
- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/agenda --seulement=fichiers,mesures
```
