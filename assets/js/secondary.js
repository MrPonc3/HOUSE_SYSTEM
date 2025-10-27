/* NAVBAR */
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  toggle?.addEventListener('click', () => links?.classList.toggle('open'));

  const path = location.pathname.replace(/\/+$/, '');
  const isSecondary = path.includes('/pages/secondary.html') || path.endsWith('/secondary.html');
  const activeKey = isSecondary ? 'secondary' : 'home';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.dataset.page === activeKey) a.classList.add('active');
  });
});

/* Config */
const defaultConfig = {
  main_title: "Meet Our House Teachers",
  school_name: "The American School of Tampico",
  footer_text: "House System 2025",
};

/* Data */
const teachersData = {
  aegir: [
    // HS
    { name: "Ana Sofia Haces", email: "ahaces@ats.edu.mx", houseMaster: false, level: "HS" },
    { name: "Renk Nieto Max", email: "mrenk@ats.edu.mx", houseMaster: false, level: "HS" },
    { name: "Etienne Du Toit", email: "edutoit@ats.edu.mx", houseMaster: true,  level: "HS" },
    { name: "Gloria Morales", email: "gmorales@ats.edu.mx", houseMaster: false, level: "HS" },
    { name: "Lilia Durán", email: "lduran@ats.edu.mx", houseMaster: false, level: "HS" },
    { name: "Lizzette Martinez", email: "lmartinez@ats.edu.mx", houseMaster: false, level: "HS" },
    { name: "Luz Alejandra Rodriguez", email: "l.rodriguez@ats.edu.mx", houseMaster: false, level: "HS" },
    { name: "Maria De Jesus Ponce", email: "mponce@ats.edu.mx", houseMaster: false, level: "HS" },
    { name: "Michael Adam Geer", email: "mgeer@ats.edu.mx", houseMaster: false, level: "HS" },
    // MS
    { name: "Joachim Weiss", email: "", houseMaster: true,  level: "MS" },
    { name: "Olga Renee de la Torre", email: "", houseMaster: false, level: "MS" },
    { name: "Homero Castillo", email: "", houseMaster: false, level: "MS" },
    { name: "Fabiola Rodriguez", email: "", houseMaster: false, level: "MS" },
  ],
  kai: [
    // HS
    { name: "Ana Cecilia Davila", email: "adavila@ats.edu.mx", houseMaster: false, level: "HS" },
    { name: "Betty Olguin", email: "bolguin@ats.edu.mx", houseMaster: false, level: "HS" },
    { name: "Carrie Heeter", email: "cheeter@ats.edu.mx", houseMaster: false, level: "HS" },
    { name: "Isaac Martínez", email: "imartinez@ats.edu.mx", houseMaster: false, level: "HS" },
    { name: "James Roman", email: "jroman@ats.edu.mx", houseMaster: true,  level: "HS" },
    { name: "Judith Páez", email: "jpaez@ats.edu.mx", houseMaster: false, level: "HS" },
    { name: "Noel Hernández", email: "nhernandez@ats.edu.mx", houseMaster: false, level: "HS" },
    { name: "Rodríguez Belinda", email: "b.rodriguez@ats.edu.mx", houseMaster: false, level: "HS" },
    { name: "Teresa Villela", email: "tvillela@ats.edu.mx", houseMaster: false, level: "HS" },
    // MS
    { name: "Gaby Cristo", email: "", houseMaster: false,  level: "MS" },
    { name: "Laura Possamai", email: "", houseMaster: true, level: "MS" },
    { name: "Carolina Casillas", email: "", houseMaster: false, level: "MS" },
    { name: "Silvia Albo", email: "", houseMaster: false, level: "MS" },
    { name: "Joe Becht", email: "", houseMaster: false, level: "MS" },
    { name: "Pato Mendez", email: "pmendez@ats.edu.mx", houseMaster: false, level: "HS" }, // HS existente
    { name: "Laura Solbes", email: "", houseMaster: false, level: "MS" },
  ],
  nerida: [
    // HS
    { name: "Cynthia Juárez", email: "c.juarez@ats.edu.mx", houseMaster: false, level: "HS" },
    { name: "Elvia González", email: "egonzalez@ats.edu.mx", houseMaster: false, level: "HS" },
    { name: "Iliana Olvera", email: "iolvera@ats.edu.mx", houseMaster: true,  level: "HS" },
    { name: "Jessica Hernández", email: "jhernandez@ats.edu.mx", houseMaster: false, level: "HS" },
    { name: "Keili Gunden", email: "kgunden@ats.edu.mx", houseMaster: false, level: "HS" },
    { name: "Ma.Alejandra Roman", email: "mroman@ats.edu.mx", houseMaster: false, level: "HS" },
    { name: "Maria Elena Montes", email: "mechavez@ats.edu.mx", houseMaster: false, level: "HS" },
    { name: "Mariana Sabbatini", email: "msabbatini@ats.edu.mx", houseMaster: false, level: "HS" },
    { name: "Manuel Pelayo", email: "mpelayo@ats.edu.mx", houseMaster: false, level: "HS" },
    { name: "Mariola Pintado", email: "mpintado@ats.edu.mx", houseMaster: false, level: "HS" },
    // MS
    { name: "Dalia Pecero", email: "", houseMaster: true,  level: "MS" },
    { name: "Thomas Nijstad", email: "", houseMaster: false, level: "MS" },
    { name: "Ally Geosits", email: "", houseMaster: false, level: "MS" },
    { name: "Jimena Fernandez", email: "", houseMaster: false, level: "MS" },
    { name: "Max Renk", email: "", houseMaster: false, level: "MS" },
    { name: "Christina Jurgensen", email: "", houseMaster: false, level: "MS" },
  ],
  pelagia: [
    // HS
    { name: "Alejandro Magaña", email: "amagana@ats.edu.mx", houseMaster: false, level: "HS" },
    { name: "Jesus Gonzalez", email: "jegonzalez@ats.edu.mx", houseMaster: false, level: "HS" },
    { name: "Juan Ponce", email: "jponce@ats.edu.mx", houseMaster: true,  level: "HS" },
    { name: "Lilia Gloria Peña", email: "lpena@ats.edu.mx", houseMaster: false, level: "HS" },
    { name: "Lorena Montiel", email: "lmontiel@ats.edu.mx", houseMaster: false, level: "HS" },
    { name: "Marcela Morales", email: "mmorales@ats.edu.mx", houseMaster: false, level: "HS" },
    { name: "Ruth Lozano Leiva", email: "rlozano@ats.edu.mx", houseMaster: false, level: "HS" },
    { name: "Victoria Mejía", email: "vmejia@ats.edu.mx", houseMaster: false, level: "HS" },
    // MS
    { name: "Juan Carlos Hermosillo", email: "", houseMaster: true,  level: "MS" },
    { name: "Cecilia Ramon", email: "", houseMaster: false, level: "MS" },
    { name: "Erika Garcia", email: "", houseMaster: false, level: "MS" },
    { name: "Maria Roman", email: "", houseMaster: false, level: "MS" },
  ],
};

/* Quotes */
const quotesData = {
  aegir: [
    "Calm seas or stormy waves, we steer together.",
    "Steady hearts build steady teams.",
    "Strength is gentle when it lifts others.",
    "Lead with patience; win with unity.",
    "Where respect flows, progress follows.",
  ],
  kai: [
    "Ride the wave—adapt, learn, and try again.",
    "Curiosity is the tide that lifts every mind.",
    "Change the angle, change the answer.",
    "Brave ideas begin with brave questions.",
    "Be fluid, not flimsy—flex and commit.",
  ],
  nerida: [
    "Kindness is courage in everyday clothes.",
    "Care for one, and you strengthen all.",
    "Listen deeply; people bloom when heard.",
    "Community is built one helpful act at a time.",
    "Empathy turns differences into bridges.",
  ],
  pelagia: [
    "Courage is choosing the right wave to face.",
    "Excellence is a habit of small, honest steps.",
    "Integrity is your compass when no one is watching.",
    "Aim high; the horizon is only a start line.",
    "Do the hard thing—then help the next person do it too.",
  ],
};

/* Helpers */
const mailto = (email) => email ? `<a href="mailto:${email}" class="uk-link-muted">${email}</a>` : '';

function teacherCard(t, houseKey){
  const houseClass =
    houseKey === 'aegir' ? 'card-border-aegir' :
    houseKey === 'kai' ? 'card-border-kai' :
    houseKey === 'nerida' ? 'card-border-nerida' : 'card-border-pelagia';

  const levelClass = t.level === 'MS' ? 'card-level-MS' : 'card-level-HS';
  const levelBadge = t.level
    ? `<span class="uk-label ${t.level === 'MS' ? 'level-MS' : 'level-HS'}">${t.level}</span>`
    : '';

  return `
    <div>
      <div class="uk-card uk-card-default uk-card-hover uk-border-rounded ${houseClass} ${levelClass}">
        <div class="uk-card-body uk-position-relative">
          <!-- Ribbon opcional -->
          <div class="card-level-ribbon ${t.level || ''}">${t.level || ''}</div>

          ${t.houseMaster ? `<span class="uk-label uk-label-success uk-position-small uk-position-top-right">👑 House Master</span>` : ''}

          <h3 class="uk-card-title uk-margin-small-bottom">${t.name}</h3>
          <p class="uk-text-meta uk-margin-remove">${mailto(t.email)}</p>

          <!-- Badges debajo del nombre -->
          <div class="uk-margin-small-top">${levelBadge}</div>
        </div>
      </div>
    </div>
  `;
}

function renderGrid(houseKey, list){
  const sorted = [...list].sort((a,b) => {
    // Masters primero
    if (a.houseMaster && !b.houseMaster) return -1;
    if (!a.houseMaster && b.houseMaster) return 1;
    // HS antes que MS
    const rank = (x) => x.level === 'HS' ? 0 : (x.level === 'MS' ? 1 : 2);
    return rank(a) - rank(b);
  });
  const el = document.getElementById(`grid-${houseKey}`);
  el.innerHTML = sorted.map(t => teacherCard(t, houseKey)).join('');
  UIkit.update(el);
}

function renderQuotes(houseKey){
  const wrap = document.getElementById(`quotes-${houseKey}`);
  const arr = quotesData[houseKey] || [];
  if (!wrap) return;
  wrap.innerHTML = `<div class="quote-list">${arr.map(q => `<blockquote>“${q}”</blockquote>`).join('')}</div>`;
}

function attachFilters(houseKey){
  const input = document.getElementById(`search-${houseKey}`);
  const chk = document.getElementById(`masters-${houseKey}`);
  const levelSel = document.getElementById(`level-${houseKey}`);

  const apply = () => {
    const q = (input?.value || '').toLowerCase().trim();
    const onlyMasters = !!(chk && chk.checked);
    const levelFilter = (levelSel && levelSel.value) || 'ALL';

    const base = teachersData[houseKey] || [];
    const filtered = base.filter(t => {
      const hit = t.name.toLowerCase().includes(q) || (t.email || '').toLowerCase().includes(q);
      const matchMaster = !onlyMasters || t.houseMaster;
      const matchLevel = (levelFilter === 'ALL') || (t.level === levelFilter);
      return hit && matchMaster && matchLevel;
    });

    renderGrid(houseKey, filtered);
  };

  input?.addEventListener('input', apply);
  chk?.addEventListener('change', apply);
  levelSel?.addEventListener('change', apply);
  apply();
}

function applyConfig(){
  document.getElementById('mainTitle').textContent = defaultConfig.main_title;
  document.getElementById('schoolName').textContent = defaultConfig.school_name;
  document.getElementById('footerText').textContent = defaultConfig.footer_text;
}

function initAll(){
  applyConfig();
  ['aegir','kai','nerida','pelagia'].forEach(h => { attachFilters(h); renderQuotes(h); });
  const modal = UIkit.modal('#welcome-modal'); if (modal) modal.show();
}

document.addEventListener('DOMContentLoaded', initAll);
