#!/usr/bin/env node
/* Aperçus flous (20 px, base64) des images d'ouverture : posés en fond derrière la photo, ils évitent une case unie
   pendant le décodage (retour arrière, connexion lente). Usage : node outils/apercus.mjs (après produire.mjs). */
import { readdirSync, writeFileSync } from 'node:fs';
import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const sharp = require('../_biblio/node_modules/sharp');
const NOMS = ['accueil-coquelicots', 'visiter-vestiges-pavillon', 'ecoles-legionnaires', 'site-fouilles', 'agenda-fete-romaine', 'contact-pavillon', 'grok/page-404'];
const sortie = {};
for (const nom of NOMS) {
  const dossier = 'assets/images/' + (nom.includes('/') ? nom.split('/')[0] + '/' : '');
  const base = nom.split('/').pop();
  for (const [cle, motif] of [[nom, new RegExp(`^${base}-(\\d+)\\.webp$`)], [nom + '-mobile', new RegExp(`^${base}-mobile-(\\d+)\\.webp$`)]]) {
    const f = readdirSync(dossier).filter((x) => motif.test(x)).sort((a, b) => +a.match(motif)[1] - +b.match(motif)[1])[0];
    if (!f) continue;
    const buf = await sharp(dossier + f).resize(24).blur(1.2).webp({ quality: 40 }).toBuffer();
    sortie[cle] = 'data:image/webp;base64,' + buf.toString('base64');
  }
}
writeFileSync('donnees/apercus.json', JSON.stringify(sortie, null, 1));
console.log(Object.keys(sortie).length, 'aperçus écrits dans donnees/apercus.json');
