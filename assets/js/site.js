/* Villa de Mageroy : effets propres au projet. Le socle gère l'ouverture, le voile (forme « carroyage »), l'en-tête,
   le menu, les mesures et la bibliothèque d'effets posés par attributs. Effets du plan (data-effet) :
   carroyage (photo dégagée carré par carré), frise (siècles épinglés), tresor (105 antoniniens), bandeau (photo qui
   s'élargit), prix-geant (« 0 € » de Visiter), chrono (fil de la chronologie). */
import { demarrer, boucle, etat, versObjet, quand } from './socle/index.js?v=1';

const gsap = window.gsap;
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const telephone = () => matchMedia('(max-width: 760px)').matches;
const FUSEAU = 'Europe/Brussels';

/* ---------- Carroyage : la grille de fouille couvre la photo, puis se vide carré par carré ---------- */
function poserCarres(bloc) {
  const g = $('.carroyage-grille', bloc);
  if (!g || g.children.length) return g;
  const r = bloc.getBoundingClientRect();
  const cols = telephone() ? 4 : 6;
  const rows = Math.max(3, Math.round((r.height / Math.max(1, r.width)) * cols));
  g.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  g.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
  for (let i = 0; i < cols * rows; i++) g.appendChild(document.createElement('span'));
  g.dataset.grille = `${rows},${cols}`;
  return g;
}
function degager(bloc, retard = 0) {
  const g = poserCarres(bloc);
  if (!g || g.dataset.fini) return;
  g.dataset.fini = '1';
  const [rows, cols] = g.dataset.grille.split(',').map(Number);
  const img = $$('img', bloc);
  gsap.fromTo(g.children, { scale: 1.01, opacity: 1 }, {
    scale: 0, opacity: 0.3, duration: 0.55, ease: 'power2.in', delay: retard,
    stagger: { grid: [rows, cols], from: 'center', amount: 0.75 },
    onComplete: () => { g.style.visibility = 'hidden'; },
  });
  if (img.length) gsap.fromTo(img, { scale: 1.08 }, { scale: 1, duration: 1.6, ease: 'power2.out', delay: retard, clearProps: 'scale' });
}
function carroyages() {
  $$('.carroyage').forEach((bloc) => {
    poserCarres(bloc);
    if (bloc.closest('#debut')) return; /* premier écran : dégagé par l'intro ou l'arrivée */
    window.ScrollTrigger.create({ trigger: bloc, start: 'top 75%', once: true, onEnter: () => degager(bloc) });
  });
}
const degagerPremierEcran = (retard) => $$('#debut .carroyage').forEach((b) => degager(b, retard));

/* ---------- Premier écran : titre en lignes, textes, objets ---------- */
function premierEcran(tl, t0) {
  const lignes = $$('#debut .ligne > span');
  const titres = $$('#debut [data-anime="gsap"]');
  const textes = $$('#debut .hero-texte > :not(h1), #debut .tete-anime');
  tl.set(titres, { opacity: 1 }, 0);
  if (lignes.length) tl.fromTo(lignes, { y: 0, yPercent: 118 }, { y: 0, yPercent: 0, duration: 0.95, stagger: 0.09, ease: 'power4.out' }, t0);
  if (textes.length) tl.fromTo(textes, { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.65, stagger: 0.07, ease: 'power3.out' }, t0 + 0.2);
  const prix = $('#debut .prix-geant strong');
  if (prix) tl.fromTo(prix, { yPercent: -40, opacity: 0 }, { yPercent: 0, opacity: 1, duration: 0.8, ease: 'bounce.out' }, t0 + 0.25);
  return tl;
}

/* ---------- Frise des siècles : piste horizontale épinglée (ordinateur), fil vertical (téléphone) ---------- */
function frise() {
  const sec = $('#siecles.frise');
  if (!sec) return;
  const piste = $('[data-frise-piste]', sec), fil = $('.frise-ligne span', sec);
  const mm = gsap.matchMedia();
  mm.add('(min-width: 761px)', () => {
    const scene = $('.frise-scene', sec);
    const distance = () => Math.max(0, piste.scrollWidth - document.documentElement.clientWidth);
    const tl = gsap.timeline({
      scrollTrigger: { trigger: scene, start: 'top top', end: () => '+=' + distance(), pin: true, scrub: 0.6, invalidateOnRefresh: true },
    });
    /* Zone morte au début : rien ne bouge avant 3 % (scène qui démarre au bord de l'écran). */
    tl.to({}, { duration: 0.03 })
      .fromTo(piste, { x: 0 }, { x: () => -distance(), ease: 'none', duration: 1 }, 0.03)
      .fromTo(fil, { scaleX: 0 }, { scaleX: 1, ease: 'none', duration: 1 }, 0.03);
    $$('.etape-siecle', sec).forEach((n) => tl.fromTo(n, { x: 40 }, { x: -20, ease: 'none', duration: 1 }, 0.03));
    return () => gsap.set([piste, fil], { clearProps: 'transform' });
  });
  mm.add('(max-width: 760px)', () => {
    gsap.fromTo(fil, { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: piste, start: 'top 70%', end: 'bottom 60%', scrub: 0.5 } });
    $$('.etape-siecle', sec).forEach((e) => gsap.fromTo(e, { scale: 0.7, transformOrigin: '0% 100%' }, { scale: 1, ease: 'none', scrollTrigger: { trigger: e, start: 'top 92%', end: 'top 65%', scrub: 0.4 } }));
    return () => gsap.set([fil, ...$$('.etape-siecle', sec)], { clearProps: 'transform' });
  });
}

/* ---------- Chronologie (Le site) : le fil se trace au défilement ---------- */
function chrono() {
  const fil = $('.chrono-fil span');
  if (!fil) return;
  gsap.fromTo(fil, { scaleY: 0 }, { scaleY: 1, ease: 'none', scrollTrigger: { trigger: '.chrono', start: 'top 75%', end: 'bottom 65%', scrub: 0.5 } });
}

/* ---------- Bandeau qui s'élargit (Écoles, Contact) ---------- */
function bandeaux() {
  $$('.bandeau[data-effet="bandeau"]').forEach((b) => {
    const g = getComputedStyle(document.documentElement).getPropertyValue('--gouttiere') || '24px';
    gsap.fromTo(b, { clipPath: `inset(0px ${telephone() ? '16px' : '48px'} 0px ${telephone() ? '16px' : '48px'} round 22px)` }, {
      clipPath: 'inset(0px 0px 0px 0px round 0px)', ease: 'none',
      scrollTrigger: { trigger: b, start: 'top 85%', end: 'top 20%', scrub: 0.5, invalidateOnRefresh: true },
    });
    const img = $('img', b);
    if (img) gsap.fromTo(img, { yPercent: -4, scale: 1.08 }, { yPercent: 4, scale: 1.08, ease: 'none', scrollTrigger: { trigger: b, start: 'top bottom', end: 'bottom top', scrub: true } });
    void g;
  });
}

/* ---------- Prix géant (Visiter) : il remonte doucement au défilement ---------- */
function prixGeant() {
  const p = $('.prix-geant');
  if (!p) return;
  gsap.to(p, { y: -40, ease: 'none', scrollTrigger: { trigger: '.tete-plein', start: 'top top', end: 'bottom top', scrub: true } });
}

/* ---------- Trésor : 105 antoniniens qui tombent et se comptent ---------- */
function tresor() {
  const bloc = $('.tresor');
  if (!bloc) return;
  const cv = $('canvas', bloc), ctx = cv.getContext('2d'), compte = $('[data-tresor-compte]', bloc);
  const N = 105;
  let W = 0, H = 0, dpr = 1, pieces = [], debut = -1, fini = false;
  const mesurer = () => {
    const r = cv.getBoundingClientRect();
    dpr = Math.min(1.5, devicePixelRatio || 1); W = r.width; H = r.height;
    cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr);
    /* Tas en bas à droite : rangées de plus en plus courtes. */
    const rP = Math.max(9, Math.min(15, W / 34));
    const base = H - rP - 10, cx = W - Math.min(W * 0.26, rP * 12);
    pieces = [];
    let rangee = 0, restant = N;
    while (restant > 0) {
      const n = Math.max(1, Math.min(restant, 13 - rangee));
      for (let i = 0; i < n; i++) {
        const x = cx + (i - (n - 1) / 2) * rP * 1.3 + (rangee % 2 ? rP * 0.4 : 0) + Math.sin(i * 7.3 + rangee) * 2;
        const y = base - rangee * rP * 0.62 + Math.cos(i * 3.1) * 1.5;
        pieces.push({ x, y, r: rP * (0.92 + ((i * 13 + rangee * 7) % 10) / 60), ry: 0.42 + ((i + rangee) % 3) * 0.05, t: 0 });
      }
      restant -= n; rangee++;
    }
    pieces.sort((a, b) => b.y - a.y);
    pieces.forEach((p, i) => { p.t = i * 0.017; p.x0 = p.x + Math.sin(i) * 18; });
  };
  const dessiner = (p, y, tilt) => {
    ctx.save(); ctx.translate(p.x * dpr, y * dpr); ctx.scale(1, tilt);
    const r = p.r * dpr;
    const grad = ctx.createLinearGradient(-r, -r, r, r);
    grad.addColorStop(0, '#E8E1D6'); grad.addColorStop(0.5, '#B9AFA2'); grad.addColorStop(1, '#8D8478');
    ctx.fillStyle = grad; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = 'rgba(29,26,22,.45)'; ctx.lineWidth = dpr; ctx.stroke();
    ctx.beginPath(); ctx.arc(0, 0, r * 0.72, 0, Math.PI * 2); ctx.strokeStyle = 'rgba(29,26,22,.25)'; ctx.stroke();
    ctx.restore();
  };
  const image = (t) => {
    ctx.clearRect(0, 0, cv.width, cv.height);
    let tombees = 0;
    for (const p of pieces) {
      const k = Math.min(1, Math.max(0, (t - p.t) / 0.55));
      if (k <= 0) continue;
      const e = k < 1 ? k * k * (3 - 2 * k) : 1;
      const y = -40 + (p.y + 40) * (k < 1 ? k * k : 1) - (k > 0.85 && k < 1 ? Math.sin((k - 0.85) / 0.15 * Math.PI) * 4 : 0);
      const x = p.x0 + (p.x - p.x0) * e;
      dessiner({ ...p, x }, y, k < 1 ? 0.5 + 0.5 * Math.abs(Math.cos(k * 9)) : p.ry);
      if (k >= 1) tombees++;
    }
    return tombees;
  };
  mesurer();
  addEventListener('resize', () => { mesurer(); if (fini || debut < 0) image(99); });
  const toutPose = () => { fini = true; image(99); compte.textContent = String(N); };
  if (etat.arrivee === 'retour') { toutPose(); return; }
  compte.textContent = '0';
  ctx.clearRect(0, 0, cv.width, cv.height);
  window.ScrollTrigger.create({ trigger: bloc, start: 'top 70%', once: true, onEnter: () => { debut = performance.now(); } });
  boucle(cv, () => {
    if (debut < 0 || fini) return;
    const t = (performance.now() - debut) / 1000;
    const n = image(t);
    compte.textContent = String(Math.min(N, Math.round(n)));
    if (n >= N) toutPose();
  });
}

/* ---------- Calculateur de visite guidée ---------- */
const euros = (n) => new Intl.NumberFormat('fr-BE', { minimumFractionDigits: Number.isInteger(n) ? 0 : 2, maximumFractionDigits: 2 }).format(n).replace(/[  ]/g, ' ') + ' €';
function calculateur() {
  const bloc = $('[data-calculateur]');
  if (!bloc) return;
  const nb = $('[data-calc-personnes]', bloc), petits = $('[data-calc-petits]', bloc);
  const total = $('[data-calc-total]', bloc), detail = $('[data-calc-detail]', bloc), max = $('[data-calc-max]', bloc);
  const borne = (v, a, b) => Math.min(b, Math.max(a, Math.round(Number(v) || 0)));
  const maj = () => {
    let n = borne(nb.value, 1, 20); const k = borne(petits.value, 0, 20);
    const trop = Number(nb.value) + k > 20 || Number(nb.value) > 20;
    nb.value = n; petits.value = k;
    const prix = 40 + Math.max(0, n - 10) * 4;
    total.textContent = euros(prix);
    detail.textContent = n > 10 ? `40 € (${detail.dataset.forfait}) + ${n - 10} ${detail.dataset.sup} = ${euros(prix)}` : `40 € · ${detail.dataset.forfait}`;
    max.textContent = trop ? max.dataset.texte : '';
  };
  $$('[data-pas]', bloc).forEach((b) => b.addEventListener('click', () => { const c = document.getElementById(b.dataset.cible); c.value = Number(c.value) + Number(b.dataset.pas); maj(); }));
  [nb, petits].forEach((i) => i.addEventListener('change', maj));
  $('[data-calc-lien]', bloc).addEventListener('click', () => { const f = $('#r-personnes'); if (f) f.value = borne(nb.value, 1, 20) + borne(petits.value, 0, 20); });
  maj();
}

/* ---------- Écoles : filtres des ateliers et estimation ---------- */
function ateliers() {
  const filtres = $('[data-filtres-ateliers]');
  if (!filtres) return;
  const items = $$('[data-liste-ateliers] > li'), vide = $('[data-ateliers-vide]');
  filtres.addEventListener('click', (e) => {
    const b = e.target.closest('[data-filtre]'); if (!b) return;
    $$('[data-filtre]', filtres).forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    const f = b.dataset.filtre; let n = 0;
    items.forEach((li) => {
      const ok = f === 'tous' || li.dataset.niveaux.split(' ').includes(f);
      li.hidden = !ok; if (ok) { n++; gsap.fromTo(li, { opacity: 0, y: 14 }, { opacity: 1, y: 0, duration: 0.45, ease: 'power2.out', clearProps: 'transform,opacity' }); }
    });
    vide.hidden = n > 0;
    window.ScrollTrigger.refresh();
  });
  const form = $('[data-estimation-ecole]');
  if (form) {
    const sortie = $('[data-estimation]', form);
    const maj = () => {
      const o = form.formule.selectedOptions[0]; const p = Number(o && o.dataset.prix) || 0;
      const n = Math.max(0, Math.round(Number(form.eleves.value) || 0));
      sortie.textContent = euros(Math.round(p * n * 100) / 100);
    };
    form.addEventListener('input', maj); form.addEventListener('change', maj);
    requestAnimationFrame(maj);
  }
}

/* ---------- Contact : sujet choisi depuis la page, événement rappelé, statut du bureau ---------- */
function contact() {
  const form = $('#formulaire form');
  if (form) {
    const p = new URLSearchParams(location.search), ev = $('[data-evenements]');
    /* L'agenda envoie le titre de la date comme sujet : il devient un choix du menu, déjà sélectionné. */
    const sujet = p.get('sujet');
    if (sujet && ![...form.sujet.options].some((o) => o.value === sujet)) {
      form.sujet.add(new Option(`${form.sujet.dataset.libelleEvenement} : ${sujet}`, sujet, true, true), 3);
      form.sujet.value = sujet;
    }
    if (p.get('evenement') && ev) {
      try { const t = JSON.parse(ev.textContent)[p.get('evenement')]; if (t && !form.message.value) form.message.value = `Réservation pour « ${t} ». Nombre de places : `; } catch {}
    }
    $$('[data-sujet]').forEach((a) => a.addEventListener('click', (e) => {
      e.preventDefault(); form.sujet.value = a.dataset.sujet;
      $('#formulaire').scrollIntoView({ behavior: 'auto', block: 'start' }); setTimeout(() => form.nom.focus({ preventScroll: true }), 50);
    }));
  }
  const s = $('[data-statut-bureau]');
  if (s) {
    const FERIES = ['2026-12-25', '2027-01-01', '2027-03-29', '2027-05-01', '2027-05-06', '2027-05-17', '2027-07-21', '2027-08-15', '2027-11-01', '2027-11-11', '2027-12-25'];
    const ici = (d) => { const f = new Intl.DateTimeFormat('fr-CA', { timeZone: FUSEAU, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', hourCycle: 'h23', weekday: 'short' }).formatToParts(d);
      const g = (t) => f.find((x) => x.type === t).value; return { jour: `${g('year')}-${g('month')}-${g('day')}`, h: Number(g('hour')) + Number(g('minute')) / 60 }; };
    const ouvre = (jour) => { const j = new Date(jour + 'T12:00:00Z').getUTCDay(); return j >= 1 && j <= 5 && !FERIES.includes(jour); };
    const maj = () => {
      const now = new Date(), m = ici(now);
      if (ouvre(m.jour) && m.h >= 9 && m.h < 17) { s.textContent = s.dataset.ouvertTexte; s.dataset.ouvert = 'oui'; return; }
      let d = 0, j = m.jour;
      if (!(ouvre(m.jour) && m.h < 9)) { do { d++; j = new Date(Date.parse(m.jour + 'T12:00:00Z') + d * 864e5).toISOString().slice(0, 10); } while (!ouvre(j) && d < 15); } else d = 0;
      const nom = new Date(j + 'T12:00:00Z').toLocaleDateString('fr-BE', { weekday: 'long', timeZone: 'UTC' });
      const quand = d === 0 ? "aujourd'hui" : d === 1 ? s.dataset.demain : nom;
      s.textContent = s.dataset.fermeTexte.replace('{quand}', quand); s.dataset.ouvert = 'non';
    };
    maj(); setInterval(() => { if (!document.hidden) maj(); }, 60000);
  }
}

/* ---------- Prochain rendez-vous : recalculé au jour réel (compte à rebours en jours de calendrier) ---------- */
function rendezVous() {
  const jourIci = (d) => new Intl.DateTimeFormat('en-CA', { timeZone: FUSEAU, year: 'numeric', month: '2-digit', day: '2-digit' }).format(d);
  $$('[data-prochain-evenement]').forEach((el) => {
    const debut = new Date(el.dataset.debut), fin = new Date(el.dataset.fin || el.dataset.debut);
    const maintenant = new Date();
    if (fin < maintenant && !el.dataset.fin && debut < maintenant) { el.hidden = true; return; }
    const jours = Math.round((Date.parse(jourIci(debut)) - Date.parse(jourIci(maintenant))) / 864e5);
    const c = $('[data-compte-rebours]', el);
    if (c) c.textContent = jours > 1 ? `dans ${jours} jours` : jours === 1 ? 'demain' : jours === 0 ? "aujourd'hui" : 'terminé';
  });
}

/* ---------- Agenda (module agenda-des-dates de la bibliothèque) ---------- */
async function agenda() {
  const root = $('.agd');
  if (!root) return;
  const { init } = await import('./modules/agenda-des-dates.js?v=1');
  await init(root, { fuseau: FUSEAU, langue: 'fr-BE', textes: { tous: 'Toutes', passees: (n) => `L'année 2026 (${n} dates passées)`, prochaine: (t, q) => `Prochaine date\u00a0: ${t}, ${q}` } });
  window.ScrollTrigger && window.ScrollTrigger.refresh();
}

/* ---------- Intro : le « m » de pierres se forme, puis devient la page ---------- */
function jouer() {
  if (!gsap) return null;
  const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
  const corps = $('.intro-m-corps'), pierres = $$('.intro-m .pierre'), nom = $('.ouverture-nom');
  if (corps) tl.fromTo(corps, { clipPath: 'inset(100% 0% 0% 0%)' }, { clipPath: 'inset(0% 0% 0% 0%)', duration: 0.75, ease: 'power2.inOut' }, 0.15);
  pierres.forEach((p, i) => {
    const a = (i * 137.5) * Math.PI / 180, d = 260 + (i % 5) * 90;
    tl.fromTo(p, { x: Math.cos(a) * d, y: Math.sin(a) * d - 120, rotation: (i % 2 ? 1 : -1) * 160, opacity: 0, transformOrigin: '50% 50%' },
      { x: 0, y: 0, rotation: 0, opacity: 1, duration: 0.6, ease: 'back.out(1.6)' }, 0.1 + (i % 18) * 0.03);
  });
  if (nom) tl.fromTo(nom, { y: 16, opacity: 0 }, { y: 0, opacity: 1, duration: 0.4 }, 0.7).to(nom, { opacity: 0, duration: 0.25 }, 1.1);
  versObjet(tl, { a: 1.1, duree: 0.5, ouverture: 0.75 });
  premierEcran(tl, 1.55);
  tl.call(() => degagerPremierEcran(0), null, 1.25);
  return tl;
}

demarrer({
  preparer() {
    if (!gsap || !window.ScrollTrigger) return;
    carroyages();
    frise();
    chrono();
    bandeaux();
    prixGeant();
    tresor();
  },
  jouer,
  etatFinal() {
    if (!gsap) return;
    gsap.set('#debut [data-anime="gsap"]', { opacity: 1 });
    gsap.set('#debut .ligne > span, #debut .hero-texte > :not(h1), #debut .tete-anime, .prix-geant strong', { clearProps: 'transform,opacity' });
    $$('#debut .carroyage-grille').forEach((g) => { g.dataset.fini = '1'; g.style.visibility = 'hidden'; });
  },
  arrivee() {
    if (!gsap) return;
    premierEcran(gsap.timeline(), 0.12);
    degagerPremierEcran(0.05);
  },
});

/* Outils de la page : indépendants de l'ouverture. */
calculateur();
ateliers();
contact();
rendezVous();
quand('pret', () => { agenda(); });
