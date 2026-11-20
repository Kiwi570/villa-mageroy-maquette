/* Le site : grille de fouille de quatre photos dégagées case par case, le lieu, chronologie, domaine, découvertes, recherche. */
import { html, brut } from '../../outils/gabarit.mjs';
import { surtitre, titreLignes, cotes, ICONES, appelFinal, imageExiste } from '../gabarits/elements.mjs';

export const page = { cle: 'le-site', fichier: 'le-site', imagePartage: 'site-fouilles-1280.webp' };

export default (c) => {
  const alt = (n) => (c.donnees.images[n] || {}).alt || '';
  const evo = imageExiste('grok/evocation-villa');
  return html`
<section class="tete-grille" id="debut">
  <div>
    <p class="surtitre tete-anime">${c.t('lesite.tete.surtitre')}</p>
    ${titreLignes([c.t('lesite.tete.titre')])}
    <p class="tete-intro tete-anime masque-ecran-tres-bas">${c.t('lesite.tete.texte')}</p>
    <p class="tete-actions tete-anime">
      <a class="bouton" href="#siecles" data-action-principale>${c.t('lesite.tete.action')}</a>
      <span class="info-cle" data-info-cle>${c.t('lesite.tete.info')}</span>
    </p>
  </div>
  <div class="grille-fouille carroyage" data-effet="carroyage" role="group" aria-label="${c.s('lesite.tete.grille')}" data-iris-centre>
    ${c.media({ nom: 'site-fouilles', alt: alt('site-fouilles'), priorite: true, sizes: '(max-width: 760px) 50vw, 26vw' })}
    ${c.media({ nom: 'site-murs', alt: alt('site-murs'), priorite: true, sizes: '(max-width: 760px) 50vw, 26vw' })}
    ${c.media({ nom: 'site-fouilleur', alt: alt('site-fouilleur'), sizes: '(max-width: 760px) 50vw, 14vw' })}
    ${c.media({ nom: 'trouvaille', alt: alt('trouvaille'), sizes: '(max-width: 760px) 50vw, 14vw' })}
    <div class="carroyage-grille" aria-hidden="true" data-audit-ignorer></div>
  </div>
</section>

<section class="section bande-sable" id="lieu">
  <div class="conteneur lieu-grille">
    ${c.media({ nom: 'site-vallee', alt: alt('site-vallee'), sizes: '(max-width: 860px) 100vw, 46vw', attrs: 'data-fx="zoom"' })}
    <div>
      ${surtitre(c.t('lesite.lieu.surtitre'))}
      <h2 class="titre-section" data-anime="lignes">${c.t('lesite.lieu.titre')}</h2>
      <p data-anime>${c.t('lesite.lieu.texte')}</p>
      <p class="chiffre-cle" data-anime><strong>${c.t('lesite.lieu.chiffre')}</strong><span>${c.t('lesite.lieu.chiffreLegende')}</span></p>
    </div>
  </div>
</section>

<section class="section cordeaux" id="siecles">
  <div class="conteneur">
    <div class="section-tete">${surtitre(c.t('lesite.siecles.surtitre'))}<h2 data-anime="lignes">${c.t('lesite.siecles.titre')}</h2></div>
    <ol class="chrono" data-effet="chrono">
      <span class="chrono-fil" aria-hidden="true"><span></span></span>
      ${c.donnees.chronologie.map((e) => html`<li data-anime>
        <span class="chrono-siecle" aria-hidden="true">${e.siecle}</span>
        <span class="etape-quand">${e.quand}</span>
        <h3>${e.titre}</h3>
        <p>${e.texte}</p>
        ${e.image && evo ? html`${c.media({ nom: 'grok/evocation-villa', alt: c.s('accueil.siecles.evocation'), cadrage: '50% 50%', sizes: '(max-width: 760px) 90vw, 640px' })}<p class="legende">${c.t('accueil.siecles.evocation')}</p>` : ''}
      </li>`)}
    </ol>
  </div>
</section>

<section class="section bande-sable" id="domaine">
  <div class="conteneur domaine-grille">
    ${c.media({ nom: 'site-aerien', alt: alt('site-aerien'), sizes: '(max-width: 860px) 100vw, 52vw', attrs: 'data-fx="parallaxe"' })}
    <div>
      ${surtitre(c.t('lesite.domaine.surtitre'))}
      <h2 class="titre-section" data-anime="lignes">${c.t('lesite.domaine.titre')}</h2>
      <p data-anime>${c.t('lesite.domaine.texte')}</p>
      ${cotes(c, { longueur: c.s('lesite.domaine.longueur'), largeur: c.s('lesite.domaine.largeur'), legende: c.s('lesite.domaine.schema') })}
      <div class="pars" data-anime="cascade">
        <div><h3>${c.t('lesite.domaine.urbanaTitre')}</h3><p>${c.t('lesite.domaine.urbana')}</p></div>
        <div><h3>${c.t('lesite.domaine.rusticaTitre')}</h3><p>${c.t('lesite.domaine.rustica')}</p></div>
      </div>
    </div>
  </div>
</section>

<section class="section" id="decouvertes">
  <div class="conteneur">
    <div class="section-tete">${surtitre(c.t('lesite.decouvertes.surtitre'))}<h2 data-anime="lignes">${c.t('lesite.decouvertes.titre')}</h2></div>
    <ul class="decouvertes" data-anime="cascade" data-visuel>
      <li><span class="tresor-mini" data-compteur="105">105</span><h3>${c.t('lesite.decouvertes.tresorTitre')}</h3><p>${c.t('lesite.decouvertes.tresor')}</p></li>
      <li>${brut(ICONES.tablette)}<h3>${c.t('lesite.decouvertes.boisTitre')}</h3><p>${c.t('lesite.decouvertes.bois')}</p></li>
      <li>${brut(ICONES.feu)}<h3>${c.t('lesite.decouvertes.fortTitre')}</h3><p>${c.t('lesite.decouvertes.fort')}</p></li>
    </ul>
  </div>
</section>

<section class="section bande-sable" id="recherche">
  <div class="conteneur recherche-grille">
    <div>
      ${surtitre(c.t('lesite.recherche.surtitre'))}
      <h2 class="titre-section" data-anime="lignes">${c.t('lesite.recherche.titre')}</h2>
      <p data-anime>${c.t('lesite.recherche.texte')}</p>
      <p data-anime><strong>${c.t('lesite.recherche.chantier')}</strong></p>
      ${c.lien('contact', { ancre: 'formulaire', params: 'sujet=chantier', classe: 'bouton bouton--contour', texte: c.t('lesite.recherche.candidater') })}
      <div class="revue" data-anime>
        <h3>${c.t('lesite.recherche.revueTitre')}</h3>
        <p>${c.t('lesite.recherche.revue')}</p>
        ${c.lien('contact', { ancre: 'formulaire', params: 'sujet=revue', classe: 'lien-fleche', texte: c.t('lesite.recherche.commander') })}
      </div>
    </div>
    <div class="recherche-photos" data-anime="cascade">
      ${c.media({ nom: 'vivre-benevoles', alt: alt('vivre-benevoles'), sizes: '(max-width: 860px) 50vw, 24vw' })}
      ${c.media({ nom: 'atelier-fouille', alt: alt('atelier-fouille'), sizes: '(max-width: 860px) 50vw, 24vw' })}
    </div>
  </div>
</section>

${appelFinal(c, {
  image: 'fin-site',
  titre: c.t('accueil.fin.titre'),
  texte: c.t('accueil.fin.texte'),
  actions: html`${c.lien('visiter', { ancre: 'reserver', classe: 'bouton', texte: c.t('accueil.fin.reserver') })}${c.lien('agenda', { classe: 'bouton bouton--contour', texte: c.t('accueil.agenda.tout') })}`,
})}
`;
};
