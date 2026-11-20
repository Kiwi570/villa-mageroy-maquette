# Rapport d’audit

Projet : `villa-mageroy-maquette` · 20/11/2026 17:52:17 · 8 min · 7 page(s) · audit complet (étapes : mesures, ecran)

## Résumé

- Statut : **5 échec(s)**
- Passe : `20261120-164422-complet-partiel` · version ?v=1
- Échecs : **5**
- À regarder : **11**
- Non lancé : **0**
- Contrôles passés : mesures (273), balayage (6), tient dans l’écran (8), films des épinglages (1)

## Passes de cette version (?v=1)

Chaque passe garde son rapport dans `_audit/passes/` : une relance ciblée ne fait pas disparaître la preuve d’une passe plus large.

| Passe | Niveau | Pages | Étapes | Échecs | À regarder | Non lancé | Statut |
|---|---|---|---|---:|---:|---:|---|
| 20261120-161308-standard | standard | toutes | toutes | 34 | 38 | 1 | échecs |
| 20261120-163835-standard-cible-partiel | standard | /,/agenda,/contact,/le-site,/visiter,/ecoles | fichiers, mesures | 5 | 14 | 0 | échecs |
| 20261120-164113-standard-cible-partiel | standard | /,/agenda,/contact,/ecoles,/visiter | fichiers, mesures | 2 | 14 | 0 | échecs |
| 20261120-164324-standard-cible-partiel | standard | /,/agenda | fichiers, mesures | 0 | 7 | 0 | complet |
| **20261120-164422-complet-partiel** (celle-ci) | complet | toutes | mesures, ecran | 5 | 11 | 0 | échecs |

## Échecs

### premier écran : information clé hors de l’écran (2)

- **premier écran : information clé hors de l’écran** — `/` — section#debut > div.hero-texte:nth-of-type(1) > p.hero-actions:nth-of-type(3) > span.info-cle « Accessible maintenant · entrée libre » _(1000×560 normal, 1000×560 sansJs, 1000×560 sansWebgl)_
- **premier écran : information clé hors de l’écran** — `/agenda` — div:nth-of-type(1) > div.tete-anime > p.tete-actions:nth-of-type(4) > span.info-cle « Réservation obligatoire, places limitées » _(1000×560 normal, 1000×560 sansJs, 1000×560 sansWebgl)_

### premier écran : bouton principal hors de l’écran (3)

- **premier écran : bouton principal hors de l’écran** — `/` — section#debut > div.hero-texte:nth-of-type(1) > p.hero-actions:nth-of-type(3) > a.bouton « Préparer ma visite » _(1000×560 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/404` — section#debut > div > p.tete-actions.tete-anime:nth-of-type(3) > a.bouton « Revenir à l'accueil » _(844×390 sansJs, 1000×560 sansJs)_
- **premier écran : bouton principal hors de l’écran** — `/agenda` — div:nth-of-type(1) > div.tete-anime > p.tete-actions:nth-of-type(4) > a.bouton « Réserver ma place » _(1000×560 normal, 1000×560 sansJs, 1000×560 sansWebgl)_

## À regarder

### section sans visuel (11)

- **section sans visuel** — `/` — section#rendez-vous « AGENDA Le prochain rendez-vous 5 DÉC. Saint-Nicola » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(390×844 normal, 375×667 normal, 320×568 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/` — section#siecles « Quatre siècles de vie, quarante ans de fouilles I  » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(844×390 normal, 844×390 sansJs, 844×390 sansWebgl)_
- **section sans visuel** — `/` — section#siecles « CHRONOLOGIE Quatre siècles de vie, quarante ans de » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(1000×560 normal, 1000×560 sansJs, 1000×560 sansWebgl)_
- **section sans visuel** — `/agenda` — section#lettre « RESTER INFORMÉ Recevoir le programme La lettre d'i » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/contact` — section#formulaire « ÉCRIRE Votre demande Bureau : du lundi au vendredi » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/contact` — section#soutenir « SOUTENIR Devenir membre d'ARC-HAB Bénévole Rejoind » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/ecoles` — section#travaux « Pendant les travaux du pavillon Les ateliers en in » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/ecoles` — section#reserver « RÉSERVER Demander une réservation Réservation obli » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(375×667 normal, 320×568 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/visiter` — section#formules « FORMULES ET TARIFS Quatre façons de découvrir la v » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/visiter` — section#calcul « CALCULER Combien coûte votre visite guidée ? Un fo » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_
- **section sans visuel** — `/visiter` — section#reserver « RÉSERVER Demander une visite guidée Les visites on » — une belle photo ou un visuel animé quand le contenu s’y prête ; une section de texte peut rester typographique (v11) _(320×568 normal, 375×667 normal, 390×844 normal, 844×390 normal, 768×1024 normal, 1024×768 normal, +33)_

## Non lancé

Tout a été lancé.


## Repères

- Accessibilité : axe-core 4.12.1 en plus des contrôles intégrés.
- Tient dans l'écran /agenda : aucune section épinglée ou plein écran.
- Tient dans l'écran /contact : aucune section épinglée ou plein écran.
- Tient dans l'écran /ecoles : aucune section épinglée ou plein écran.
- Tient dans l'écran /le-site : aucune section épinglée ou plein écran.
- Tient dans l'écran /visiter : aucune section épinglée ou plein écran.

## Fichiers

- Captures : `captures/` (téléphone, tablette, ordinateur, écran par écran)
- Films : `films/` (planches contact de l’ouverture, des transitions, des retours, des ancres et des épinglages ; ⚠ = image signalée)
- Comparaisons : `comparaisons/`
- Détail complet : `rapport.json`


## Relancer seulement ce qui a échoué

Après correction, si elle ne touche que ces pages (sinon, relancer l’audit standard en entier) :

```
node _audit/audit.mjs --complet --pages=/,/404,/agenda --seulement=fichiers,mesures
```
