/* Écoles : grand titre puis bandeau qui s'élargit, avis travaux, visite scolaire, ateliers filtrables, dossier, réservation. */
import { html, brut } from '../../outils/gabarit.mjs';
import { surtitre, titreLignes, appelFinal, apercu } from '../gabarits/elements.mjs';

export const page = { cle: 'ecoles', fichier: 'ecoles', imagePartage: 'ecoles-legionnaires-1280.webp' };

const PRIX = { ceramique: 4, mosaique: 6.5, alimentation: 6.5, enfance: 4, stratification: 4, fouille: 4, sport: 4, objets: 4 };

export default (c) => {
  const a = (k) => c.t(`ecoles.ateliers.${k}`);
  return html`
<section class="tete-bandeau" id="debut">
  <div class="conteneur tete-bandeau-texte">
    <div>
      <p class="surtitre tete-anime">${c.t('ecoles.tete.surtitre')}</p>
      ${titreLignes([c.t('ecoles.tete.titre1'), c.t('ecoles.tete.titre2')], { mot: 1 })}
    </div>
    <div class="tete-cote">
      <p class="tete-intro tete-anime masque-ecran-tres-bas">${c.t('ecoles.tete.texte')}</p>
      <p class="tete-actions tete-anime">
        <a class="bouton" href="#reserver" data-action-principale>${c.t('ecoles.tete.action')}</a>
        <span class="info-cle" data-info-cle>${c.t('ecoles.tete.info')}</span>
      </p>
    </div>
  </div>
  <div class="bandeau apercu" data-effet="bandeau" data-iris-centre${apercu(c, 'ecoles-legionnaires')}>
    ${c.media({ nom: 'ecoles-legionnaires', alt: c.s('ecoles.tete.alt'), cadrage: '62% 55%', priorite: true, sizes: '100vw' })}
  </div>
</section>

<section class="section section--serree" id="travaux">
  <div class="conteneur">
    <div class="avis" data-anime="rideau">
      <svg viewBox="0 0 48 48" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 40h36M10 40V22l14-10 14 10v18"/><path d="M19 40V28h10v12"/><path d="M4 18l20-14 20 14"/></svg>
      <div><h2>${c.t('ecoles.travaux.titre')}</h2><p>${c.t('ecoles.travaux.texte')}</p></div>
    </div>
  </div>
</section>

<section class="section bande-sable" id="visite">
  <div class="conteneur visite-scolaire">
    ${c.media({ nom: 'carte-visite-guidee', alt: c.donnees.images['carte-visite-guidee'].alt, sizes: '(max-width: 860px) 100vw, 45vw', attrs: 'data-anime="rideau"' })}
    <div>
      ${surtitre(c.t('ecoles.visite.surtitre'))}
      <h2 class="titre-section" data-anime="lignes">${c.tb('ecoles.visite.titre')}</h2>
      <p data-anime>${c.t('ecoles.visite.texte')}</p>
      <p class="prix-ligne" data-anime><strong data-prix>${c.t('ecoles.visite.prix')}</strong><span>${c.t('ecoles.visite.prixDetail')}</span></p>
      <a class="bouton" href="${c.url('ecoles', 'reserver', 'formule=visite')}">${c.t('ecoles.tete.action')}</a>
    </div>
  </div>
</section>

<section class="section" id="ateliers">
  <div class="conteneur">
    <div class="section-tete">${surtitre(a('surtitre'))}<h2 data-anime="lignes">${c.tb('ecoles.ateliers.titre')}</h2></div>
    <div class="filtres" role="group" aria-label="${c.s('ecoles.ateliers.filtres')}" data-filtres-ateliers>
      ${['tous', 'maternelle', 'primaire', 'secondaire', 'classe'].map((k, i) => html`<button type="button" class="filtre" data-filtre="${k}" aria-pressed="${i === 0 ? 'true' : 'false'}">${a(k)}</button>`)}
    </div>
    <ul class="ateliers" data-anime="cascade" data-liste-ateliers>
      ${c.donnees.ateliers.map((x) => html`<li class="atelier" id="atelier-${x.id}" data-niveaux="${x.niveaux.join(' ')}${x.classe ? ' classe' : ''}">
        ${c.media({ nom: x.image, alt: '', sizes: '(max-width: 560px) 100vw, (max-width: 1100px) 50vw, 25vw' })}
        <div class="atelier-corps">
          <span class="etiquette${!x.classe && !x.campagne ? ' etiquette--suspendu' : ''}">${x.classe ? a('enClasse') : x.campagne ? a('campagne') : c.t('commun.suspendu')}</span>
          <h3>${x.nom}</h3>
          <p class="atelier-prix"><strong data-prix>${x.prix.split(' + ')[0]}</strong><span>${a('parEleve')}${x.prix.includes(' + ') ? html` + ${x.prix.split(' + ')[1]}` : ''} · ${x.duree}</span></p>
          <p class="atelier-public">${x.public}</p>
          <p>${x.texte}</p>
          <a class="lien-fleche" href="${c.url('ecoles', 'reserver', `formule=${x.id}`)}">${a('demander')}<span class="visuellement-cache"> : ${x.nom}</span></a>
        </div>
      </li>`)}
    </ul>
    <p class="ateliers-vide" data-ateliers-vide hidden>${a('vide')}</p>
  </div>
</section>

<section class="section bande-sable" id="dossier">
  <div class="conteneur dossier">
    ${c.media({ nom: 'dossier-pedagogique', alt: c.s('ecoles.dossier.alt'), sizes: '280px', attrs: 'data-fx="vitesse" data-fx-force="4"' })}
    <div>
      ${surtitre(c.t('ecoles.dossier.surtitre'))}
      <h2 class="titre-section" data-anime="lignes">${c.tb('ecoles.dossier.titre')}</h2>
      <p data-anime>${c.t('ecoles.dossier.texte')}</p>
      ${c.lien('contact', { ancre: 'formulaire', params: 'sujet=ecole', classe: 'bouton bouton--contour', texte: c.t('ecoles.dossier.action') })}
    </div>
  </div>
</section>

<section class="section cordeaux" id="reserver">
  <div class="conteneur formulaire-grille">
    <div class="formulaire-cote">
      ${surtitre(c.t('ecoles.reserver.surtitre'))}
      <h2 class="titre-section" data-anime="lignes">${c.tb('ecoles.reserver.titre')}</h2>
      <p data-anime>${c.t('ecoles.reserver.texte')}</p>
      <p class="joindre-court" data-anime>${c.t('visiter.reserver.ou')}<br><a href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a><br><a href="mailto:${c.site.contact.email}">${c.site.contact.email}</a></p>
    </div>
    <form class="formulaire" data-formulaire data-estimation-ecole action="#" novalidate data-anime>
      <div class="champ champ--large"><label for="e-ecole">${c.t('ecoles.reserver.ecole')}</label><input id="e-ecole" name="ecole" required></div>
      <div class="champ"><label for="e-niveau">${c.t('ecoles.reserver.niveau')}</label>
        <select id="e-niveau" name="niveau" required><option value="">${c.t('ecoles.reserver.choisir')}</option><option>Maternelle</option><option>Primaire</option><option>Secondaire</option><option>Enseignement spécialisé</option></select></div>
      <div class="champ"><label for="e-eleves">${c.t('ecoles.reserver.eleves')}</label><input id="e-eleves" name="eleves" type="number" min="1" max="120" value="22" required></div>
      <div class="champ"><label for="e-formule">${c.t('ecoles.reserver.formule')}</label>
        <select id="e-formule" name="formule" required>
          <option value="visite" data-prix="3">${c.t('ecoles.reserver.visiteSeule')}</option>
          ${c.donnees.ateliers.map((x) => html`<option value="${x.id}" data-prix="${PRIX[x.id]}">${x.nom} (${x.prix})</option>`)}
        </select></div>
      <div class="champ"><label for="e-lieu">${c.t('ecoles.reserver.lieu')}</label>
        <select id="e-lieu" name="lieu"><option value="site">${c.t('ecoles.reserver.auSite')}</option><option value="classe">${c.t('ecoles.reserver.enClasse')}</option></select></div>
      <div class="champ champ--large"><label for="e-date">${c.t('ecoles.reserver.date')}</label><input id="e-date" name="periode" placeholder="Ex. : semaine du 8 mars"></div>
      <div class="champ"><label for="e-nom">${c.t('ecoles.reserver.nom')}</label><input id="e-nom" name="nom" autocomplete="name" required></div>
      <div class="champ"><label for="e-email">${c.t('ecoles.reserver.email')}</label><input id="e-email" name="email" type="email" autocomplete="email" required></div>
      <div class="champ champ--large"><label for="e-tel">${c.t('ecoles.reserver.telephone')}</label><input id="e-tel" name="telephone" type="tel" autocomplete="tel"></div>
      <p class="mention-donnees">${c.t('commun.donnees')}</p>
      <p data-message-envoi tabindex="-1" hidden data-texte="${c.s('commun.simule')}"></p>
      <div class="formulaire-pied">
        <p class="estimation" aria-live="polite"><span>${c.t('ecoles.reserver.estimation')}</span><strong data-estimation data-prix>66 €</strong><span>${c.t('ecoles.reserver.estimationDetail')}</span></p>
        <button class="bouton" type="submit">${c.t('commun.envoyer')}</button>
      </div>
    </form>
  </div>
</section>

${appelFinal(c, {
  image: 'fin-ecoles',
  titre: c.tb('ecoles.fin.titre'),
  texte: c.t('ecoles.fin.texte'),
  actions: html`<a class="bouton" href="#ateliers">${c.t('ecoles.fin.action')}</a><a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${c.t('commun.appeler')} ${c.site.contact.telephone}</a>`,
})}
`;
};
