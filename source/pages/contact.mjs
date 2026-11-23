/* Contact : coordonnées en grand et bandeau du pavillon, formulaire prérempli, trois adresses, adhésion et bénévolat. */
import { html, brut } from '../../outils/gabarit.mjs';
import { surtitre, titreLignes, planAcces, apercu } from '../gabarits/elements.mjs';

export const page = { cle: 'contact', fichier: 'contact', imagePartage: 'contact-pavillon-1280.webp' };

export default (c) => {
  return html`
<section class="tete-contact" id="debut">
  <div class="conteneur tete-contact-texte">
    <div>
      <p class="surtitre tete-anime">${c.t('contact.tete.surtitre')}</p>
      ${titreLignes([c.t('contact.tete.titre')])}
      <p class="tete-intro tete-anime masque-ecran-tres-bas">${c.t('contact.tete.texte')}</p>
    </div>
    <div class="joindre tete-anime">
      <a href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a>
      <a class="joindre-mail" href="mailto:${c.site.contact.email}">${c.site.contact.email}</a>
      <p class="statut-bureau" data-statut-bureau data-info-cle data-ouvert-texte="${c.s('contact.statut.ouvert')}" data-ferme-texte="${c.s('contact.statut.ferme')}" data-demain="${c.s('contact.statut.demain')}" data-lundi="${c.s('contact.statut.lundi')}">${c.t('commun.bureau')}</p>
      <p class="tete-actions"><a class="bouton" href="#formulaire" data-action-principale>${c.t('contact.tete.action')}</a></p>
    </div>
  </div>
  <div class="bandeau apercu" data-effet="bandeau" data-iris-centre${apercu(c, 'contact-pavillon')}>
    ${c.media({ nom: 'contact-pavillon', alt: c.s('contact.tete.alt'), cadrage: '30% 40%', priorite: true, sizes: '100vw' })}
  </div>
</section>

<section class="section bande-sable" id="formulaire">
  <div class="conteneur formulaire-grille">
    <div class="formulaire-cote">
      ${surtitre(c.t('contact.formulaire.surtitre'))}
      <h2 class="titre-section" data-anime="lignes">${c.tb('contact.formulaire.titre')}</h2>
      <p data-anime>${c.t('commun.bureau')}</p>
      <p class="joindre-court" data-anime>${c.t('visiter.reserver.ou')}<br><a href="tel:${c.site.contact.telephoneLien}">${c.site.contact.telephone}</a><br><a href="mailto:${c.site.contact.email}">${c.site.contact.email}</a></p>
    </div>
    <form class="formulaire" data-formulaire action="#" novalidate data-anime>
      <div class="champ champ--large"><label for="c-sujet">${c.t('contact.formulaire.sujet')}</label>
        <select id="c-sujet" name="sujet" required data-libelle-evenement="${c.s('contact.formulaire.sujets.evenement')}">
          ${['visite', 'ecole', 'evenement', 'adhesion', 'benevolat', 'chantier', 'revue', 'autre'].map((k) => html`<option value="${k}">${c.t(`contact.formulaire.sujets.${k}`)}</option>`)}
        </select></div>
      <input type="hidden" name="evenement" value="">
      <script type="application/json" data-evenements>${brut(JSON.stringify(Object.fromEntries(c.donnees.agenda.map((e) => [e.id, `${e.titre}, ${new Date(e.debut).toLocaleDateString('fr-BE', { day: 'numeric', month: 'long', year: 'numeric' })}`]))).replace(/</g, '\\u003c'))}</script>
      <div class="champ champ--large"><label for="c-nom">${c.t('contact.formulaire.nom')}</label><input id="c-nom" name="nom" autocomplete="name" required></div>
      <div class="champ"><label for="c-email">${c.t('contact.formulaire.email')}</label><input id="c-email" name="email" type="email" autocomplete="email" required></div>
      <div class="champ"><label for="c-tel">${c.t('contact.formulaire.telephone')}</label><input id="c-tel" name="telephone" type="tel" autocomplete="tel"></div>
      <div class="champ champ--large"><label for="c-message">${c.t('contact.formulaire.message')}</label><textarea id="c-message" name="message" required></textarea></div>
      <p class="mention-donnees">${c.t('commun.donnees')}</p>
      <p data-message-envoi tabindex="-1" hidden data-texte="${c.s('commun.simule')}"></p>
      <p class="formulaire-pied"><button class="bouton" type="submit">${c.t('commun.envoyer')}</button></p>
    </form>
  </div>
</section>

<section class="section" id="adresses">
  <div class="conteneur">
    <div class="section-tete">${surtitre(c.t('contact.adresses.surtitre'))}<h2 data-anime="lignes">${c.tb('contact.adresses.titre')}</h2></div>
    <div class="adresses-grille">
      <ul class="adresses" data-anime="cascade">
        ${['site', 'bureau', 'siege'].map((k) => html`<li><h3>${c.t(`contact.adresses.${k}.titre`)}</h3><p>${c.t(`contact.adresses.${k}.texte`)}</p><p class="detail">${c.t(`contact.adresses.${k}.detail`)}</p></li>`)}
      </ul>
      ${planAcces(c)}
    </div>
  </div>
</section>

<section class="section bande-sable" id="soutenir">
  <div class="conteneur soutenir">
    <div>
      ${surtitre(c.t('contact.soutenir.surtitre'))}
      <h2 class="titre-section" data-anime="lignes">${c.tb('contact.soutenir.titre')}</h2>
      <h3 data-anime>${c.t('contact.soutenir.benevolatTitre')}</h3>
      <p data-anime>${c.t('contact.soutenir.benevolat')}</p>
      <p data-anime><a class="bouton bouton--contour" href="?sujet=benevolat#formulaire" data-sans-transition data-sujet="benevolat">${c.t('contact.soutenir.aider')}</a></p>
    </div>
    <div class="carte-membre sur-charbon" data-anime="rideau">
      <p class="prix-ligne"><strong data-prix>${c.t('contact.soutenir.prix')}</strong><span>${c.t('contact.soutenir.prixDetail')}</span></p>
      <ul>
        <li>${c.t('contact.soutenir.avantage1')}</li>
        <li>${c.t('contact.soutenir.avantage2')}</li>
        <li>${c.t('contact.soutenir.avantage3')}</li>
      </ul>
      <p class="paiement">${c.t('contact.soutenir.paiement')}</p>
      <a class="bouton" href="?sujet=adhesion#formulaire" data-sans-transition data-sujet="adhesion">${c.t('contact.soutenir.adherer')}</a>
    </div>
  </div>
</section>
`;
};
