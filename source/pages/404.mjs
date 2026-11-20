/* Page 404 : un carré de fouille vide. */
import { html } from '../../outils/gabarit.mjs';
import { titreLignes } from '../gabarits/elements.mjs';

export const page = { cle: '404', fichier: '404', langues: ['fr'], partage: false };

export default (c) => html`
<section class="introuvable" id="debut">
  <div>
    <p class="surtitre tete-anime">404</p>
    ${titreLignes([c.t('introuvable.titre')])}
    <p class="tete-intro tete-anime">${c.t('introuvable.texte')}</p>
    <p class="tete-actions tete-anime">${c.lien('accueil', { classe: 'bouton', texte: c.t('introuvable.retour'), attrs: 'data-action-principale' })}</p>
  </div>
  ${c.media({ nom: 'grok/page-404', alt: c.s('introuvable.alt'), priorite: true, sizes: '(max-width: 760px) 100vw, 48vw', attrs: 'data-iris-centre data-fx="zoom"' })}
</section>
`;
