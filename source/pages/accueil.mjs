/* Accueil : écran scindé (titre sur la pierre, photo dégagée carré par carré), que faire, frise des siècles,
   domaine vu du ciel, découvertes, prochain rendez-vous, écoles, association, venir, appel final. */
import { html, brut } from '../../outils/gabarit.mjs';
import { surtitre, titreLignes, carroyage, ICONES, appelFinal, imageExiste, apercu } from '../gabarits/elements.mjs';

export const page = { cle: 'accueil', fichier: 'index', imagePartage: 'accueil-coquelicots-1280.webp' };

const AUJOURDHUI = new Date('2026-11-20T12:00:00');
const MOIS = ['janv.', 'févr.', 'mars', 'avril', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];
const dateCourte = (iso) => { const d = new Date(iso); return `${d.getDate()} ${MOIS[d.getMonth()]}`; };
const dateLongue = (iso) => new Date(iso).toLocaleDateString('fr-BE', { weekday: 'long', day: 'numeric', month: 'long' });
const heure = (iso) => (iso && iso.includes('T') ? iso.slice(11, 16).replace(':', ' h ').replace(' h 00', ' h') : '');

export default (c) => {
  const agenda = [...c.donnees.agenda].sort((a, b) => a.debut.localeCompare(b.debut));
  /* Écrit à la génération (lisible sans JavaScript) ; le script du site le recalcule au jour réel du visiteur. */
  const prochain = agenda.find((e) => new Date(e.fin || e.debut) >= AUJOURDHUI);
  const passes = agenda.filter((e) => new Date(e.fin || e.debut) < AUJOURDHUI).reverse().slice(0, 4);
  const evo = imageExiste('grok/evocation-villa');
  const frise = c.donnees.chronologie;
  const faire = [
    ['libre', 'carte-visite-libre', c.url('visiter', 'formules')],
    ['guidee', 'carte-visite-guidee', c.url('visiter', 'calcul')],
    ['ecoles', 'carte-ecoles', c.url('ecoles')],
    ['evenements', 'carte-evenements', c.url('agenda')],
  ];
  return html`
<section class="hero" id="debut">
  <div class="hero-texte">
    ${surtitre(c.t('accueil.hero.surtitre'))}
    ${titreLignes([c.t('accueil.hero.titre1'), c.t('accueil.hero.titre2'), c.t('accueil.hero.titre3')], { classe: 'hero-titre', mot: 2 })}
    <p class="hero-intro">${c.t('accueil.hero.texte')}</p>
    <p class="hero-actions">
      ${c.lien('visiter', { classe: 'bouton', texte: c.t('accueil.hero.action'), attrs: 'data-action-principale data-survol="magnetique"' })}
      <span class="info-cle" data-info-cle>${c.t('commun.ouvertMaintenant')}</span>
    </p>
    ${prochain ? html`<p class="hero-prochain" data-prochain-evenement data-debut="${prochain.debut}" data-fin="${prochain.fin || ''}">
      <span>${c.t('accueil.hero.prochain')}</span>
      <b>${prochain.titre}</b>
      ${c.lien('agenda', { texte: html`${dateLongue(prochain.debut)}` })}
    </p>` : ''}
  </div>
  ${carroyage(c.media({ nom: 'accueil-coquelicots', alt: c.s('accueil.hero.alt'), cadrage: '50% 55%', cadrageMobile: '62% 55%', priorite: true, classe: 'hero-media', sizes: '(max-width: 760px) 100vw, 52vw', attrs: 'data-iris-centre data-fx="parallaxe" data-fx-force="6"' }), apercu(c, 'accueil-coquelicots'))}
</section>

<section class="section bande-sable" id="que-faire">
  <div class="conteneur">
    <div class="section-tete">
      ${surtitre(c.t('accueil.faire.surtitre'))}
      <h2 data-anime="lignes">${c.tb('accueil.faire.titre')}</h2>
    </div>
    <ul class="cartes" data-anime="cascade">
      ${faire.map(([k, img, url]) => html`<li class="carte-faire" data-survol="incline" data-survol-force="4">
        ${c.media({ nom: img, alt: '', sizes: '(max-width: 560px) 40vw, (max-width: 1060px) 50vw, 25vw' })}
        <div class="carte-corps">
          <h3>${c.t(`accueil.faire.${k}.titre`)}</h3>
          <p class="carte-prix" data-prix>${c.t(`accueil.faire.${k}.prix`)}</p>
          <p>${c.t(`accueil.faire.${k}.texte`)}</p>
          <a class="lien-fleche carte-lien" href="${url}" data-superpose>${c.t('accueil.faire.voir')}<span class="visuellement-cache"> : ${c.t(`accueil.faire.${k}.titre`)}</span></a>
        </div>
      </li>`)}
    </ul>
  </div>
</section>

<section class="frise" id="siecles" data-scene data-entete-cache aria-label="${c.s('accueil.siecles.region')}">
  <div class="frise-scene">
    <div class="frise-tete">
      <div>${surtitre(c.t('accueil.siecles.surtitre'))}<h2 data-anime="lignes">${c.tb('accueil.siecles.titre')}</h2></div>
      <p class="masque-ecran-bas">${c.t('accueil.siecles.texte')}</p>
    </div>
    <ol class="frise-piste" data-frise-piste data-effet="frise" data-visuel>
      <span class="frise-ligne" aria-hidden="true"><span></span></span>
      ${frise.map((e) => html`<li class="etape${e.image ? ' etape--image' : ''}">
        <span class="etape-tete" aria-hidden="true"><span class="etape-siecle">${e.siecle}</span>${e.icone && ICONES[e.icone] ? brut(ICONES[e.icone].replace('<svg ', '<svg class="etape-icone" ')) : ''}</span>
        <span class="etape-quand">${e.quand}</span>
        <h3>${e.titre}</h3>
        <p>${e.texte}</p>
        ${e.image ? (evo ? c.media({ nom: 'grok/evocation-villa', alt: c.s('accueil.siecles.evocation'), sizes: '(max-width: 760px) 90vw, 36vw' }) : '') : ''}
      </li>`)}
      <li class="frise-fin">${c.lien('le-site', { ancre: 'siecles', classe: 'bouton bouton--contour', texte: c.t('accueil.siecles.lien') })}</li>
    </ol>
  </div>
</section>

<section class="domaine" id="domaine" data-fx="plein-ecran" data-fx-depart="inset(22% 26% 22% 26% round 24px)" data-entete-cache>
  <div data-collant>
    ${c.media({ nom: 'domaine-vu-du-ciel', alt: c.s('accueil.domaine.alt'), sizes: '100vw', attrs: 'data-fx-cible' })}
    <p class="domaine-mots" aria-hidden="true"><span data-fx-ecarte="g">${c.t('accueil.domaine.mot1')}</span><span data-fx-ecarte="d">${c.t('accueil.domaine.mot2')}</span></p>
    <div class="domaine-texte" data-fx-apres>
      <h2>${c.t('accueil.domaine.titre')}</h2>
      <p>${c.t('accueil.domaine.texte')}</p>
    </div>
  </div>
</section>

<section class="section cordeaux" id="decouvertes">
  <div class="conteneur">
    <div class="section-tete">
      ${surtitre(c.t('accueil.terre.surtitre'))}
      <h2 data-anime="lignes">${c.tb('accueil.terre.titre')}</h2>
    </div>
    <div class="terre-grille">
      <div class="tresor sur-charbon" data-effet="tresor">
        <canvas class="tresor-tas" aria-hidden="true" data-audit-ignorer></canvas>
        <div class="tresor-texte">
          <span class="tresor-compte" data-tresor-compte>105</span><span class="visuellement-cache"> ${c.t('accueil.terre.compteur')}</span>
          <h3>${c.t('accueil.terre.tresorTitre')}</h3>
          <p>${c.t('accueil.terre.tresor')}</p>
        </div>
      </div>
      <div class="bois">
        <h3 data-anime="lignes">${c.t('accueil.terre.boisTitre')}</h3>
        <p data-anime>${c.t('accueil.terre.bois')}</p>
        <ul class="bois-liste" data-anime="cascade">
          <li>${brut(ICONES.pelle)}${c.t('accueil.terre.bois1')}</li>
          <li>${brut(ICONES.tuyau)}${c.t('accueil.terre.bois2')}</li>
          <li>${brut(ICONES.tablette)}${c.t('accueil.terre.bois3')}</li>
          <li>${brut(ICONES.sandale)}${c.t('accueil.terre.bois4')}</li>
        </ul>
        ${c.lien('le-site', { ancre: 'decouvertes', classe: 'lien-fleche', texte: c.t('accueil.terre.lien') })}
      </div>
    </div>
  </div>
</section>

<section class="section bande-sable" id="rendez-vous">
  <div class="conteneur">
    <div class="section-tete">
      ${surtitre(c.t('accueil.agenda.surtitre'))}
      <h2 data-anime="lignes">${c.tb('accueil.agenda.titre')}</h2>
    </div>
    <div class="rdv-grille">
      ${prochain ? html`<article class="ticket" data-anime="rideau" data-prochain-evenement data-debut="${prochain.debut}">
        <div class="ticket-date" aria-hidden="true"><span class="ticket-jour">${new Date(prochain.debut).getDate()}</span><span class="ticket-mois">${MOIS[new Date(prochain.debut).getMonth()]}</span></div>
        <div class="ticket-corps">
          <h3>${prochain.titre}</h3>
          <p class="ticket-infos"><span>${dateLongue(prochain.debut)}, ${heure(prochain.debut)}${prochain.fin ? html` à ${heure(prochain.fin)}` : ''}</span><span>${prochain.prix}</span><span class="ticket-compte" data-compte-rebours></span></p>
          <p>${prochain.texte}</p>
          ${c.lien('contact', { ancre: 'formulaire', params: `sujet=evenement&evenement=${prochain.id}`, classe: 'bouton', texte: c.t('accueil.agenda.reserver') })}
        </div>
      </article>` : html`<p>${c.t('agenda.tete.aucun')}</p>`}
      <div class="annee" data-anime>
        <h3>${c.t('accueil.agenda.annee')}</h3>
        <ol>${passes.map((e) => html`<li><time datetime="${e.debut.slice(0, 10)}">${dateCourte(e.debut)}</time><span>${e.titre}</span></li>`)}</ol>
        ${c.lien('agenda', { classe: 'lien-fleche', texte: c.t('accueil.agenda.tout') })}
      </div>
    </div>
  </div>
</section>

<section class="section" id="association">
  <div class="conteneur">
    <div class="section-tete">
      ${surtitre(c.t('accueil.vivre.surtitre'))}
      <h2 data-anime="lignes">${c.tb('accueil.vivre.titre')}</h2>
      <p data-anime>${c.t('accueil.vivre.texte')}</p>
    </div>
    <ul class="vivre-cartes" data-anime="cascade">
      ${[['treviri', 'vivre-treviri'], ['olitores', 'vivre-olitores'], ['benevoles', 'vivre-benevoles']].map(([k, img]) => html`<li>
        ${c.media({ nom: img, alt: '', sizes: '(max-width: 860px) 40vw, 30vw', attrs: 'data-fx="vitesse"' })}
        <h3>${c.t(`accueil.vivre.${k}.titre`)}</h3>
        <p>${c.t(`accueil.vivre.${k}.texte`)}</p>
      </li>`)}
    </ul>
    <p class="vivre-actions">
      ${c.lien('contact', { ancre: 'formulaire', params: 'sujet=adhesion', classe: 'bouton', texte: c.t('accueil.vivre.adherer') })}
      ${c.lien('contact', { ancre: 'formulaire', params: 'sujet=benevolat', classe: 'bouton bouton--contour', texte: c.t('accueil.vivre.aider') })}
    </p>
  </div>
</section>

${appelFinal(c, {
  titre: c.tb('accueil.fin.titre'),
  texte: html`${c.t('accueil.fin.texte')} ${c.t('accueil.fin.adresse')}`,
  actions: html`${c.lien('visiter', { ancre: 'reserver', classe: 'bouton', texte: c.t('accueil.fin.reserver'), attrs: 'data-survol="magnetique"' })}${c.lien('visiter', { ancre: 'acces', classe: 'bouton bouton--contour', texte: c.t('accueil.venir.lien') })}`,
})}
`;
};
