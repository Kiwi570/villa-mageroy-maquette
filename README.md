# Villa gallo-romaine de Mageroy · maquette v1

Maquette du futur site de la villa gallo-romaine de Mageroy (asbl ARC-HAB, Habay-la-Vieille), direction « Pierre et ambre ».
Adresse prévue : https://villa-mageroy-maquette.vercel.app (site statique, sans étape de construction, `cleanUrls` dans `vercel.json`).

## Pages

| Page | Ouverture | Sections |
|---|---|---|
| Accueil `/` | Titre sur la pierre, photo des coquelicots dégagée carré par carré | Que faire, frise des siècles épinglée, domaine vu du ciel en plein écran, trésor et bois conservés, prochain rendez-vous, écoles, association, venir, appel final |
| Visiter `/visiter` | Photo plein cadre, « 0 € » en très grand | Formules et tarifs, calculateur de visite guidée, réservation simulée, accès, balades autour, FAQ |
| Écoles `/ecoles` | Grand titre puis bandeau qui s'élargit | Avis travaux, visite scolaire, 8 ateliers filtrables, dossier pédagogique, demande de réservation avec estimation |
| Le site `/le-site` | Grille de fouille de quatre photos | Le lieu, chronologie, domaine et cotes de l'enclos, découvertes, recherche et revue |
| Agenda `/agenda` | La prochaine date en très grand | Toutes les dates (module agenda-des-dates : statut au jour réel, filtres, ajout à l'agenda), lettre d'information |
| Contact `/contact` | Téléphone en grand, bandeau du pavillon | Formulaire prérempli selon la page d'origine, trois adresses, adhésion et bénévolat |
| 404 | Carré de fouille vide | — |

Pages du site actuel non reprises dans la v1 (disponibles en v2) : Anniversaires enfants, Stages de vacances, Tourisme (repris en partie dans Visiter), Missions de l'association, Nous soutenir (repris dans Contact), Projets, Partenaires, Projet européen LEADER, Microprojet Interreg, Reconstitution, Treviri, Olitores, Publications, Revues, Ressources scolaires (repris dans Écoles), page en allemand.

## Travailler sur la maquette

- Textes : `donnees/textes/fr.json` ; données : `donnees/agenda.json`, `ateliers.json`, `chronologie.json`, `faq.json`, `site.json`.
- Pages : `source/pages/*.mjs`, composants : `source/gabarits/elements.mjs`, style : `assets/css/site.css`, effets : `assets/js/site.js`.
- Générer les pages : `node outils/generer.mjs` (ne jamais modifier les `.html` à la main).
- Images : `plan-images.json` puis `node _biblio/images/produire.mjs plan-images.json`. Les images générées (Grok) sont ensuite rangées dans `assets/images/grok/` (`evocation-villa`, `appel-crepuscule`, `page-404`) : c'est ce dossier qui fait apparaître la mention « Illustration générée ».
- Audit : `node _audit/audit.mjs` (rapport dans `_audit/rapport/`).

## À fournir par le client (à compléter)

- Mentions légales : éditeur (ARC-HAB, groupe d'Archéologie de Habay asbl, BCE 447.685.682), responsable de la publication, hébergeur (Vercel Inc., 440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis).
- Politique de confidentialité (RGPD) pour les formulaires : visite, école, contact, lettre d'information.
- Crédits photo : les photos viennent du site actuel ; une photo porte la signature « Véronique Meraux » (reconstitueurs) : confirmer les crédits à afficher.
- Crédits des illustrations générées : `evocation-villa` (villa au IIe siècle, présentée comme évocation, pas comme reconstitution scientifique), `appel-crepuscule`, `page-404`. Garder la mention « Illustration générée » sur le site final.
- Accessibilité du site aux personnes à mobilité réduite, chiens, pique-nique : non indiqués sur le site actuel, donc absents de la maquette.
- Durée de la visite guidée : 1 h 30 (pages Adultes et Écoles du site actuel) ou 1 h 15 (Infos pratiques) ? La maquette affiche 1 h 30.
- Début des fouilles : 1984 (accueil du site actuel) ou 1986 (page Missions) ? La maquette affiche 1984.
- Heure de fermeture du bureau : 17 h ou 17 h 30 ? La maquette affiche 17 h pour le bureau, 17 h 30 pour les visites et réservations.
- Fin des travaux du pavillon d'accueil : date de reprise des ateliers en intérieur, des anniversaires et des conférences.
- Dates de la prochaine campagne de fouille, des stages 2027 et des prochains événements.
- Dossier pédagogique « Mageroy » (PDF) et brochure des ateliers extra-muros : à relier au site final.
- Plan schématique d'accès : positions approximatives à faire valider.
- Jours fériés pour le statut « Bureau ouvert maintenant » : jours fériés légaux belges 2026-2027 pris par défaut ; fermetures de congés à fournir.

## Retiré ou remplacé faute d'information

- Tarifs des visites combinées site et musée d'Arlon (« bientôt disponibles ») : non affichés.
- Nombre de bénévoles et de membres : non affiché (« nombreux » sur le site actuel).
- Anniversaires et stages : non repris dans la v1 (anniversaires suspendus, stages 2026 passés).

## À retirer ou à garder à la mise en ligne définitive

- Retirer : `noindex` dans chaque page (`source/gabarits/commun.mjs`) et l'en-tête `X-Robots-Tag` de `vercel.json` ; le mot « Maquette de démonstration » du pied de page ; les formulaires simulés (à brancher sur un vrai envoi) ; les mentions « à compléter » du pied de page (remplacées par les vraies pages).
- Garder : la mention « Illustration générée » sur les trois images générées.

## Incohérences relevées sur le site actuel

- Deux dates de début des fouilles (1984, 1986), deux durées de visite guidée (1 h 15, 1 h 30), deux heures de fermeture du bureau (17 h, 17 h 30).
- Deux pages Facebook ; le lien e-mail des Treviri mène à une autre adresse que celle affichée ; titre « Stages d'été 2023 » resté sur la page des stages.
- Actualités de l'accueil sans date ni texte ; même bandeau photo sur toutes les pages.
