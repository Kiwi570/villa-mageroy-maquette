/* Composants du site de la villa de Mageroy, partagés par les pages. */
import { existsSync, readdirSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { html, brut } from '../../outils/gabarit.mjs';

const racine = resolve(dirname(fileURLToPath(import.meta.url)), '../..');
/** Vrai si l'image (variantes WebP) existe déjà : sinon le projet pose un visuel dessiné en code. */
export function imageExiste(nom) {
  const d = join(racine, 'assets/images', dirname(nom));
  const base = nom.split('/').pop();
  return existsSync(d) && readdirSync(d).some((f) => f.startsWith(base + '-') && f.endsWith('.webp'));
}

export const surtitre = (texte) => html`<p class="surtitre">${texte}</p>`;

/** Titre découpé en lignes (montée par le projet, état de départ posé en CSS ; aucun data-anime sur les lignes). */
export const titreLignes = (lignes, { niveau = 'h1', classe = 'titre-page', mot = -1 } = {}) => {
  const contenu = lignes.map((l, i) => html`<span class="ligne"><span${i === mot ? brut(' class="mot"') : ''}>${l}</span></span>`);
  return niveau === 'h1' ? html`<h1 class="${classe}" data-anime="gsap">${contenu}</h1>` : html`<h2 class="${classe}" data-anime="gsap">${contenu}</h2>`;
};

/** Photo qui se dégage carré par carré (effet « carroyage » du projet). */
/** Fond flou de l'image d'ouverture (donnees/apercus.json) : jamais de case unie pendant le décodage. */
export const apercu = (c, nom) => {
  const a = c.donnees.apercus || {};
  if (!a[nom]) return '';
  return brut(` style="--apercu:url(${a[nom]});--apercu-mobile:url(${a[nom + '-mobile'] || a[nom]})"`);
};

export const carroyage = (media, style = '') => html`<div class="carroyage apercu"${style} data-effet="carroyage">${media}<div class="carroyage-grille" aria-hidden="true" data-audit-ignorer></div></div>`;

/** Cotes de l'enclos (200 × 145 m) : rectangle et lignes de cote qui se tracent. */
export const cotes = (c, { longueur, largeur, legende }) => html`<figure class="cotes" data-visuel>
  <svg viewBox="0 0 320 270" data-fx="trace" role="img" aria-label="${legende}">
    <rect class="cote-enclos" x="34" y="56" width="236" height="171" rx="2" data-fx-trait/>
    <path class="cote-trait" d="M34 30 H270 M34 22 V38 M270 22 V38" data-fx-trait/>
    <path class="cote-trait" d="M296 56 V227 M288 56 H304 M288 227 H304" data-fx-trait/>
    <text x="152" y="22" text-anchor="middle">${longueur}</text>
    <text x="0" y="0" text-anchor="middle" transform="translate(316 142) rotate(90)">${largeur}</text>
  </svg>
</figure>`;

/** Plan schématique d'accès (positions approximatives, sans échelle). */
export const planAcces = (c) => html`<figure class="plan-acces" data-visuel>
  <svg viewBox="0 0 600 430" data-fx="trace" role="img" aria-label="${c.s('commun.plan')} : la villa de Mageroy à Habay-la-Vieille, entre l'E411 (sortie 29), Marbehan et Étalle">
    <path class="riviere" d="M330 150 C 290 160, 250 182, 213 190 S 150 222, 120 250 S 80 300, 60 330"/>
    <path class="route route--autoroute" d="M40 30 L 283 112 L 470 210 L 575 262"/>
    <path class="rail" d="M30 140 L 94 134 L 252 142 L 400 200 L 530 276"/>
    <path class="route" d="M283 112 L 262 128 L 232 150 L 213 172 L 200 240 L 189 300"/>
    <path class="route" d="M94 134 L 150 150 L 232 150"/>
    <path class="route" d="M189 300 L 120 330"/>
    <path class="route route--trace" d="M283 112 L 262 128 L 232 150 L 213 172" data-fx-trait/>
    <circle class="ville" cx="262" cy="128" r="6"/><text x="276" y="140">Habay-la-Neuve</text>
    <circle class="ville" cx="94" cy="134" r="6"/><text x="70" y="116">Marbehan</text>
    <circle class="ville" cx="189" cy="300" r="6"/><text x="204" y="306">Étalle</text>
    <circle class="ville" cx="530" cy="276" r="6"/><text x="500" y="304">Arlon</text>
    <rect x="270" y="98" width="28" height="22" rx="4" fill="#1D1A16"/><text x="284" y="114" text-anchor="middle" style="fill:#F2ECE2;font-size:13px;font-weight:800">29</text>
    <text x="330" y="80" class="petit">E411</text>
    <text x="60" y="290" class="petit">La Rulles</text>
    <text x="330" y="252" class="petit">Train Bruxelles-Luxembourg</text>
    <circle class="site-pastille" cx="213" cy="182" r="13"/>
    <text x="200" y="214" text-anchor="end" style="font-weight:800">Villa, Habay-la-Vieille</text>
  </svg>
  <figcaption>${c.t('commun.plan')}</figcaption>
</figure>`;

/** Pictogrammes des objets en bois conservés. */
export const ICONES = {
  pelle: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 4v26"/><path d="M17 4h14"/><path d="M16 30h16l-3 12a5 5 0 0 1-10 0z"/></svg>',
  tuyau: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M6 18h28a8 8 0 0 1 8 8v16"/><path d="M6 28h22a4 4 0 0 1 4 4v10"/><path d="M6 18v10"/></svg>',
  tablette: '<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="7" y="9" width="34" height="30" rx="3"/><rect x="12" y="14" width="24" height="20" rx="1"/><path d="M16 21h14M16 27h10"/></svg>',
  sandale: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M18 6c8 0 12 6 12 16s-2 20-6 20-8-4-8-18S14 6 18 6z"/><path d="M15 18c5 2 10 2 15 0M16 26h12"/></svg>',
  feu: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M24 42c-8 0-13-5-13-12 0-8 7-11 8-20 5 4 6 8 6 12 2-2 3-5 3-8 5 4 9 10 9 16 0 7-5 12-13 12z"/></svg>',
  amphore: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M19 5h10M20 5v6c-6 4-9 10-9 17 0 7 5 12 9 15h8c4-3 9-8 9-15 0-7-3-13-9-17V5"/><path d="M20 11c-5 0-7 3-7 6M28 11c5 0 7 3 7 6M18 43l-1 2h14l-1-2"/></svg>',
  maison: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M5 20 24 8l19 12"/><path d="M8 20h32M8 40h32M5 44h38"/><path d="M12 22v18M19 22v18M29 22v18M36 22v18"/></svg>',
  bains: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M6 24h36v8a8 8 0 0 1-8 8H14a8 8 0 0 1-8-8z"/><path d="M14 18c-2-3 2-5 0-8M24 18c-2-3 2-5 0-8M34 18c-2-3 2-5 0-8"/><path d="M12 40l-2 4M36 40l2 4"/></svg>',
  marteau: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 38h28l4 6H4z"/><path d="M12 38c2-5 6-7 12-7s10 2 12 7"/><path d="M27 8l10 10M30 5l-6 6 10 10 6-6zM29 16 17 28"/></svg>',
  tour: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M12 44V14h24v30M12 14V6h5v4h5V6h4v4h5V6h5v8"/><path d="M8 44h32M21 44v-8a3 3 0 0 1 6 0v8M22 22h4"/></svg>',
  four: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M6 44h36M10 44c0-14 6-22 14-22s14 8 14 22"/><path d="M19 44v-6a5 5 0 0 1 10 0v6"/><path d="M22 16c-3-3 3-5 0-9M28 16c-2-2 2-4 0-6"/></svg>',
  truelle: '<svg viewBox="0 0 48 48" aria-hidden="true"><path d="M8 40 24 8l16 32z"/><path d="M24 8V4M24 24v10"/><path d="M17 26h14"/></svg>',
  piece: '<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="17"/><circle cx="24" cy="24" r="12"/><path d="M20 30c1-5 3-9 7-11M22 18l2-4 2 4"/></svg>',
};

/** Appel final : murs au crépuscule (image Grok), ou un ciel dessiné tant qu'elle n'est pas arrivée. */
export const appelFinal = (c, { titre, texte, actions, image = 'grok/appel-crepuscule', alt }) => {
  const img = imageExiste(image);
  const texteAlt = alt || (c.donnees.images[image.replace('grok/', '')] || {}).alt || c.s('accueil.fin.alt');
  return html`<section class="fin sur-charbon" id="fin" data-section>
  ${img ? c.media({ nom: image, alt: texteAlt, sizes: '100vw', attrs: 'data-fx="parallaxe" data-fx-force="8"' })
    : html`<div class="media fin-visuel" data-visuel aria-hidden="true"></div>`}
  <div class="fin-contenu">
    <h2 data-anime="lignes">${titre}</h2>
    <p data-anime>${texte}</p>
    <p class="fin-actions" data-anime>${actions}</p>
  </div>
</section>`;
};
