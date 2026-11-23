/* Agenda : la prochaine date en très grand, puis toutes les dates (module agenda-des-dates), lettre d'information. */
import { html } from '../../outils/gabarit.mjs';
import { surtitre, titreLignes, appelFinal, apercu } from '../gabarits/elements.mjs';

export const page = { cle: 'agenda', fichier: 'agenda', imagePartage: 'agenda-fete-romaine-1280.webp', agenda: true };

const AUJOURDHUI = new Date('2026-11-20T12:00:00');
const MOIS = ['janv.', 'févr.', 'mars', 'avril', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];
const ecrire = (e) => {
  const d = new Date(e.debut), f = e.fin ? new Date(e.fin) : null;
  const jour = d.toLocaleDateString('fr-BE', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  const h = (iso) => (iso.includes('T') ? iso.slice(11, 16).replace(':', ' h ').replace(' h 00', ' h') : '');
  if (f && e.fin.slice(0, 10) !== e.debut.slice(0, 10)) return `du ${d.toLocaleDateString('fr-BE', { day: 'numeric', month: 'long' })} au ${f.toLocaleDateString('fr-BE', { day: 'numeric', month: 'long', year: 'numeric' })}`;
  return `${jour}${h(e.debut) ? `, ${h(e.debut)}` : ''}${f && h(e.fin) ? ` à ${h(e.fin)}` : ''}`;
};

/* Photos des rendez-vous passés, dans l'ordre de l'année. */
const RETOUR = [['fil-eau', 'retour-fil-eau'], ['mercredis', 'retour-mercredis'], ['portes-ouvertes', 'retour-portes'], ['biere', 'retour-biere'], ['jardins-memoire', 'retour-jardins']];
const periode = (e) => {
  const d = new Date(e.debut), f = e.fin ? new Date(e.fin) : null;
  const jour = (x) => (x.getDate() === 1 ? '1er' : x.getDate());
  if (f && d.getMonth() !== f.getMonth()) {
    if (f - d > 10 * 864e5) return `${d.toLocaleDateString('fr-BE', { month: 'long' })} et ${f.toLocaleDateString('fr-BE', { month: 'long' })}`;
    return `${jour(d)} ${MOIS[d.getMonth()]} au ${jour(f)} ${MOIS[f.getMonth()]}`;
  }
  if (f && d.getDate() !== f.getDate()) return `${d.getDate()} au ${f.getDate()} ${MOIS[d.getMonth()]}`;
  return `${d.getDate()} ${MOIS[d.getMonth()]}`;
};

export default (c) => {
  const dates = [...c.donnees.agenda].sort((a, b) => a.debut.localeCompare(b.debut));
  const prochain = dates.find((e) => new Date(e.fin || e.debut) >= AUJOURDHUI);
  return html`
<section class="tete-date" id="debut">
  <div>
    <p class="surtitre tete-anime">${c.t('agenda.tete.surtitre')}</p>
    ${titreLignes([c.t('agenda.tete.titre1'), c.t('agenda.tete.titre2')])}
    ${prochain ? html`<div class="tete-anime" data-prochain-evenement data-debut="${prochain.debut}">
      <p class="date-geante" data-iris-centre aria-label="${ecrire(prochain)}"><b>${new Date(prochain.debut).getDate()}</b><span>${MOIS[new Date(prochain.debut).getMonth()]}</span></p>
      <p class="prochain-titre">${prochain.titre}</p>
      <p class="ticket-infos"><span>${c.t('agenda.tete.prochain')}, <span class="ticket-compte" data-compte-rebours></span></span><span>${ecrire(prochain)}</span><span>${prochain.prix}</span></p>
      <p class="tete-actions">
        ${c.lien('contact', { ancre: 'formulaire', params: `sujet=evenement&evenement=${prochain.id}`, classe: 'bouton', texte: c.t('agenda.tete.action'), attrs: 'data-action-principale' })}
        <span class="info-cle" data-info-cle>${prochain.info || prochain.prix}</span>
      </p>
    </div>` : html`<p class="tete-intro tete-anime">${c.t('agenda.tete.aucun')}</p>`}
  </div>
  <div class="apercu tete-date-media"${apercu(c, 'agenda-fete-romaine')}>${c.media({ nom: 'agenda-fete-romaine', alt: c.s('agenda.tete.alt'), cadrage: '62% 40%', priorite: true, sizes: '(max-width: 760px) 100vw, 44vw', attrs: 'data-fx="parallaxe" data-fx-force="6"' })}</div>
</section>

<section class="section bande-sable agd" id="dates" data-grille="retour" data-module="agenda-des-dates" aria-labelledby="agd-titre">
  <div class="conteneur">
    <div class="agd__tete section-tete">
      ${surtitre(c.t('agenda.tete.surtitre'))}
      <h2 class="agd__h2" id="agd-titre" data-anime="lignes">${c.tb('agenda.liste.titre')}</h2>
      <p class="agd__prochaine" data-prochaine aria-live="polite"></p>
    </div>
    <div class="agd__outils">
      <div class="agd__filtres" role="group" aria-label="Types de dates"></div>
      <p class="agd__compte" data-compte aria-live="polite"></p>
    </div>
    <div class="agenda-liste" data-visuel>
      <ol class="agd__liste">
        ${dates.map((e) => html`<li class="agd__date" data-debut="${e.debut}"${e.fin ? html` data-fin="${e.fin}"` : ''} data-type="${e.type}" data-lieu="${e.lieu}"${e.reserver ? html` data-reserver="${c.url('contact', 'formulaire', `sujet=evenement&evenement=${e.id}`)}"` : ''}>
          <h3 class="agd__titre">${e.titre}</h3>
          <time class="agd__quand" datetime="${e.debut}">${ecrire(e)}</time>
          <p class="agd__texte">${e.texte} <strong>${e.prix}</strong></p>
        </li>`)}
      </ol>
    </div>
    <p class="agd__vide" hidden>${c.t('agenda.liste.vide')}</p>
  </div>
</section>

<section class="section retour" id="en-images" aria-label="${c.s('agenda.retour.region')}">
  <div class="conteneur">
    <div class="section-tete">
      ${surtitre(c.t('agenda.retour.surtitre'))}
      <h2 data-anime="lignes">${c.tb('agenda.retour.titre')}</h2>
      <p data-anime>${c.t('agenda.retour.texte')}</p>
    </div>
  </div>
  <ul class="retour-piste" data-anime="cascade">
    ${RETOUR.map(([id, img], i) => {
      const e = c.donnees.agenda.find((x) => x.id === id);
      return html`<li class="retour-carte${i % 2 ? ' retour-carte--bas' : ''}">
        ${c.media({ nom: img, alt: c.donnees.images[img].alt, sizes: '(max-width: 760px) 72vw, 19vw' })}
        <p class="retour-legende"><time datetime="${e.debut.slice(0, 10)}">${periode(e)}</time><span>${e.titre}</span></p>
      </li>`;
    })}
  </ul>
</section>

<section class="section" id="lettre">
  <div class="conteneur lettre">
    <div>
      ${surtitre(c.t('agenda.lettre.surtitre'))}
      <h2 class="titre-section" data-anime="lignes">${c.tb('agenda.lettre.titre')}</h2>
      <p data-anime>${c.t('agenda.lettre.texte')}</p>
    </div>
    <form data-formulaire action="#" novalidate data-anime>
      <div class="champ"><label for="l-email">${c.t('agenda.lettre.email')}</label><input id="l-email" name="email" type="email" autocomplete="email" required></div>
      <button class="bouton" type="submit">${c.t('agenda.lettre.action')}</button>
      <p class="mention-donnees">${c.t('commun.donnees')}</p>
      <p data-message-envoi tabindex="-1" hidden data-texte="${c.s('commun.simule')}"></p>
    </form>
  </div>
</section>

${appelFinal(c, {
  image: 'fin-agenda',
  titre: c.tb('agenda.fin.titre'),
  texte: c.t('agenda.fin.texte'),
  actions: html`${c.lien('visiter', { classe: 'bouton', texte: c.t('accueil.hero.action') })}<a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${c.t('commun.appeler')} ${c.site.contact.telephone}</a>`,
})}
`;
};
