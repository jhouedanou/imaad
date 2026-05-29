// Shared components for IMAAD Financial Group

const IMAAD_NAV = (activePage) => `
<nav class="navbar">
  <a href="index.html" class="navbar-logo">
    <img class="imaad-logo-svg" src="assets/logo-imaad.svg" alt="IMAAD Financial Group">
  </a>
  <nav class="navbar-nav">
    <a href="index.html" class="${activePage === 'apropos' ? 'active' : ''}">À propos</a>
    <a href="projets.html" class="${activePage === 'projets' ? 'active' : ''}">Projets</a>
    <a href="equipe.html" class="${activePage === 'equipe' ? 'active' : ''}">Équipe</a>
    <a href="contact.html" class="${activePage === 'contact' ? 'active' : ''}">Contact</a>
    <a href="contact.html" class="btn-contact-nav">Nous contacter</a>
  </nav>
</nav>
`;

// Hero title component from Zeplin: "Catalyseur de la souveraineté et de la croissance durable"
const IMAAD_SOVEREIGNETE_HEADLINE = () => `
<h1 class="sov-growth-heading" aria-label="Catalyseur de la souveraineté et de la croissance durable">
  <span class="line">Catalyseur de la <span class="highlight">souveraineté</span></span>
  <span class="line">et de la croissance durable</span>
</h1>
`;

const IMAAD_FOOTER = () => `
<footer>
  <div class="footer-grid">
    <div class="footer-brand">
      <p class="logo-name">IMAAD FINANCIAL GROUP</p>
      <p>Catalyseur de la souveraineté et de la croissance durable.</p>
      <div class="footer-sep"></div>
    </div>
    <div class="footer-col">
      <h4>Qui sommes-nous ?</h4>
      <ul>
        <li><a href="index.html">À propos</a></li>
        <li><a href="index.html#domaines">Domaines d'excellence</a></li>
        <li><a href="projets.html">Projets & Impact</a></li>
        <li><a href="equipe.html">Équipe & Gouvernance</a></li>
        <li><a href="contact.html">Contact</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Mieux nous connaître</h4>
      <ul>
        <li><a href="#">Télécharger la brochure</a></li>
        <li><a href="#">Actualités & Insights</a></li>
        <li><a href="#">Carrières</a></li>
      </ul>
    </div>
    <div class="footer-col">
      <h4>Contacts</h4>
      <p class="contact-email">infos@imaadholding.com</p>
      <div class="footer-bureaux">
        <h5>Bureaux</h5>
        <div class="bureaux-flags">
          <span>🇷🇼 Kigali</span>
          <span>🇨🇮 Abidjan</span>
          <span>🇬🇳 Conakry</span>
          <span>🇸🇳 Dakar</span>
          <span>🇳🇬 Lagos</span>
          <span>🇨🇲 Yaoundé</span>
          <span>🇮🇳 Inde</span>
          <span>🇬🇧 Londres</span>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <p>© 2025 IMAAD Financial Group. Tous droits réservés.</p>
    <div class="footer-social">
      <a href="#" aria-label="LinkedIn">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>
      </a>
      <a href="#" aria-label="Twitter">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/></svg>
      </a>
    </div>
    <div class="footer-bottom-links">
      <a href="#">Mentions légales</a>
      <a href="#">Politique de confidentialité</a>
    </div>
  </div>
</footer>
`;
