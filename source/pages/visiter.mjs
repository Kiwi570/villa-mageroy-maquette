/* Visiter : photo plein cadre et prix en très grand, formules, calculateur, réservation, accès, autour, FAQ. */
import { html } from '../../outils/gabarit.mjs';
import { surtitre, titreLignes, planAcces, appelFinal, apercu } from '../gabarits/elements.mjs';

export const page = { cle: 'visiter', fichier: 'visiter', imagePartage: 'visiter-vestiges-pavillon-1280.webp' };

export default (c) => {
  const f = (k) => `visiter.formules.${k}`;
  const formule = (k, { lien, suspendu, brasserie, image, cadrage = '50% 50%' } = {}) => html`<li class="formule${suspendu ? ' formule--suspendue' : ''}">
    ${image ? c.media({ nom: image, alt: '', cadrage, classe: 'formule-photo', sizes: '(max-width: 860px) 92vw, 46vw', attrs: 'data-fx="vitesse"' }) : ''}
    <h3>${c.t(f(k) + '.titre')}</h3>
    <p class="formule-prix"><strong data-prix>${c.t(f(k) + '.prix')}</strong>${k !== 'libre' ? html`<span>${c.t(f(k) + '.prixDetail')}</span>` : ''}</p>
    <p class="formule-infos">${c.t(f(k) + '.infos')}</p>
    <p>${c.t(f(k) + '.texte')}</p>
    ${brasserie ? html`<p>${c.t('visiter.formules.brasserie')}</p>` : ''}
    ${suspendu ? html`<span class="formule-statut">${c.t('commun.suspendu')}</span>` : ''}
    ${lien || ''}
  </li>`;
  return html`
<section class="tete-plein apercu" id="debut"${apercu(c, 'visiter-vestiges-pavillon')}>
  ${c.media({ nom: 'visiter-vestiges-pavillon', alt: c.s('visiter.tete.alt'), cadrage: '45% 50%', priorite: true, sizes: '100vw', attrs: 'data-fx="parallaxe" data-fx-force="6"' })}
  <div class="tete-plein-contenu">
    <div>
      <p class="surtitre tete-anime">${c.t('visiter.tete.surtitre')}</p>
      ${titreLignes([c.t('visiter.tete.titre')])}
      <p class="tete-intro tete-anime masque-ecran-tres-bas">${c.t('visiter.tete.texte')}</p>
      <p class="tete-actions tete-anime">
        <a class="bouton" href="#reserver" data-action-principale data-survol="magnetique">${c.t('visiter.tete.action')}</a>
        <span class="info-cle" data-info-cle>${c.t('commun.ouvertMaintenant')}</span>
      </p>
    </div>
    <p class="prix-geant tete-anime" data-iris-centre data-effet="prix-geant"><strong data-prix>${c.t('visiter.tete.prix')}</strong><span>${c.t('visiter.tete.prixLegende')}</span></p>
  </div>
</section>

<section class="section bande-sable" id="formules">
  <div class="conteneur">
    <div class="section-tete">${surtitre(c.t('visiter.formules.surtitre'))}<h2 data-anime="lignes">${c.tb('visiter.formules.titre')}</h2></div>
    <ul class="formules" data-anime="cascade">
      ${formule('libre', { image: 'carte-visite-libre', cadrage: '50% 62%', lien: html`<a class="lien-fleche" href="#acces">${c.t('accueil.venir.lien')}</a>` })}
      ${formule('guidee', { image: 'visiter-guide', cadrage: '50% 40%', lien: html`<a class="lien-fleche" href="#calcul">${c.t('visiter.formules.calculer')}</a>` })}
      ${formule('combinee', { image: 'visiter-combinee', cadrage: '50% 60%', brasserie: true, lien: html`<a class="lien-fleche" href="#reserver">${c.t('visiter.formules.reserver')}<span class="visuellement-cache"> : ${c.t(f('combinee') + '.titre')}</span></a>` })}
      ${formule('conferences', { image: 'visiter-conference', suspendu: true })}
    </ul>
  </div>
</section>

<section class="section cordeaux" id="calcul">
  <div class="conteneur calcul">
    <div>
      ${surtitre(c.t('visiter.calcul.surtitre'))}
      <h2 class="titre-section" data-anime="lignes">${c.tb('visiter.calcul.titre')}</h2>
      <p data-anime>${c.t('visiter.calcul.texte')}</p>
    </div>
    <div class="calcul-outil sur-charbon" data-calculateur data-anime>
      <div class="compteur-ligne">
        <label for="calc-personnes">${c.t('visiter.calcul.personnes')}</label>
        <span class="pas"><button type="button" data-pas="-1" data-cible="calc-personnes" aria-label="${c.s('visiter.calcul.moins')}">−</button><input id="calc-personnes" type="number" inputmode="numeric" min="1" max="20" value="10" data-calc-personnes><button type="button" data-pas="1" data-cible="calc-personnes" aria-label="${c.s('visiter.calcul.plus')}">+</button></span>
      </div>
      <div class="compteur-ligne">
        <label for="calc-petits">${c.t('visiter.calcul.petits')}</label>
        <span class="pas"><button type="button" data-pas="-1" data-cible="calc-petits" aria-label="${c.s('visiter.calcul.petitsMoins')}">−</button><input id="calc-petits" type="number" inputmode="numeric" min="0" max="20" value="0" data-calc-petits><button type="button" data-pas="1" data-cible="calc-petits" aria-label="${c.s('visiter.calcul.petitsPlus')}">+</button></span>
      </div>
      <div class="calcul-total" aria-live="polite">
        <span>${c.t('visiter.calcul.total')}</span>
        <strong data-calc-total data-prix>40 €</strong>
      </div>
      <p class="calcul-detail" data-calc-detail data-forfait="${c.s('visiter.calcul.detailForfait')}" data-sup="${c.s('visiter.calcul.detailSup')}">40 € · ${c.t('visiter.calcul.detailForfait')}</p>
      <p class="calcul-max" data-calc-max data-texte="${c.s('visiter.calcul.max')}"></p>
      <a class="bouton" href="#reserver" data-calc-lien>${c.t('visiter.calcul.action')}</a>
    </div>
  </div>
</section>

<section class="section bande-sable" id="reserver">
  <div class="conteneur formulaire-grille">
    <div class="formulaire-cote">
      ${surtitre(c.t('visiter.reserver.surtitre'))}
      <h2 class="titre-section" data-anime="lignes">${c.tb('visiter.reserver.titre')}</h2>
      <p data-anime>${c.t('visiter.reserver.texte')}</p>
      <p class="joindre-court" data-anime>${c.t('visiter.reserver.ou')}<br><a href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a><br><a href="mailto:${c.site.contact.email}">${c.site.contact.email}</a></p>
    </div>
    <form class="formulaire" data-formulaire action="#" novalidate data-anime>
      <div class="champ"><label for="r-date">${c.t('visiter.reserver.date')}</label><input id="r-date" name="date" type="date" required></div>
      <div class="champ"><label for="r-personnes">${c.t('visiter.reserver.personnes')}</label><input id="r-personnes" name="personnes" type="number" min="1" max="50" value="10" required></div>
      <div class="champ champ--large"><label for="r-nom">${c.t('visiter.reserver.nom')}</label><input id="r-nom" name="nom" autocomplete="name" required></div>
      <div class="champ"><label for="r-email">${c.t('visiter.reserver.email')}</label><input id="r-email" name="email" type="email" autocomplete="email" required></div>
      <div class="champ"><label for="r-tel">${c.t('visiter.reserver.telephone')}</label><input id="r-tel" name="telephone" type="tel" autocomplete="tel"></div>
      <div class="champ champ--large"><label for="r-message">${c.t('visiter.reserver.message')}</label><textarea id="r-message" name="message"></textarea></div>
      <p class="mention-donnees">${c.t('commun.donnees')}</p>
      <p data-message-envoi tabindex="-1" hidden data-texte="${c.s('commun.simule')}"></p>
      <p class="formulaire-pied"><button class="bouton" type="submit">${c.t('commun.envoyer')}</button></p>
    </form>
  </div>
</section>

<section class="section" id="acces">
  <div class="conteneur acces-grille">
    <div>
      ${surtitre(c.t('visiter.acces.surtitre'))}
      <h2 class="titre-section" data-anime="lignes">${c.tb('visiter.acces.titre')}</h2>
      <p data-anime><strong>${c.t('visiter.acces.adresse')}</strong></p>
      <div class="acces-liste" data-anime="cascade">
        <div><h3>${c.t('visiter.acces.voitureTitre')}</h3><p>${c.t('visiter.acces.voiture')}</p></div>
        <div><h3>${c.t('visiter.acces.trainTitre')}</h3><p>${c.t('visiter.acces.train')}</p></div>
        <div><h3>${c.t('visiter.acces.busTitre')}</h3><p>${c.t('visiter.acces.bus')}</p></div>
      </div>
    </div>
    ${planAcces(c)}
  </div>
</section>

<section class="section bande-sable" id="autour">
  <div class="conteneur">
    <div class="section-tete">${surtitre(c.t('visiter.autour.surtitre'))}<h2 data-anime="lignes">${c.tb('visiter.autour.titre')}</h2></div>
    <ul class="autour" data-anime="cascade" data-visuel>
      ${[['gallor', 'autour-campagne'], ['noeuds', 'autour-riviere'], ['parc', 'autour-foret']].map(([k, img]) => html`<li>${c.media({ nom: img, alt: c.donnees.images[img].alt, sizes: '(max-width: 860px) 92vw, 30vw', attrs: 'data-fx="zoom"' })}<h3>${c.t(`visiter.autour.${k}.titre`)}</h3><p>${c.t(`visiter.autour.${k}.texte`)}</p></li>`)}
    </ul>
  </div>
</section>

<section class="section" id="faq">
  <div class="conteneur">
    <div class="section-tete">${surtitre(c.t('visiter.faq.surtitre'))}<h2 data-anime="lignes">${c.tb('visiter.faq.titre')}</h2></div>
    <div class="faq-liste" data-anime="cascade" data-visuel>
      ${c.donnees.faq.map((q) => html`<details class="faq-item"><summary>${q.q}</summary><p>${q.r}</p></details>`)}
    </div>
  </div>
</section>

${appelFinal(c, {
  image: 'fin-visiter',
  titre: c.tb('accueil.fin.titre'),
  texte: c.t('accueil.fin.texte'),
  actions: html`<a class="bouton" href="#reserver">${c.t('accueil.fin.reserver')}</a><a class="bouton bouton--contour" href="tel:${c.site.contact.telephoneLien}">${c.t('commun.appeler')} ${c.site.contact.telephone}</a>`,
})}
`;
};
