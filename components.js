// Web Components for reusable Site Header and Footer

class SiteHeader extends HTMLElement {
  connectedCallback() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';

    this.innerHTML = `
      <header class="nav">
        <a href="index.html" class="logo" data-testid="site-logo">
          AFTER<br><span class="logo2">HOURS</span>
        </a>
        <nav class="nav-links">
          <a href="menu.html" class="${currentPath === 'menu.html' ? 'active' : ''}" data-testid="nav-menu-link">Eat</a>
          <a href="the-place.html" class="${currentPath === 'the-place.html' ? 'active' : ''}" data-testid="nav-place-link">Hang</a>
          <a href="play.html" class="${currentPath === 'play.html' ? 'active' : ''}" data-testid="nav-play-link">Play</a>
          <a href="whats-on.html" class="${currentPath === 'whats-on.html' ? 'active' : ''}" data-testid="nav-tonight-link">Tonight</a>
        </nav>
        <a href="book.html" class="button button-red nav-book" data-testid="nav-book-button">
          I’m coming
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M7 17L17 7"></path>
            <path d="M7 7h10v10"></path>
          </svg>
        </a>
        <button class="mobile-toggle" data-testid="mobile-menu-toggle" aria-label="Open menu">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </header>
      <div class="mobile-menu" style="display: none;">
        <a href="menu.html" class="${currentPath === 'menu.html' ? 'active' : ''}">Eat</a>
        <a href="the-place.html" class="${currentPath === 'the-place.html' ? 'active' : ''}">Hang</a>
        <a href="play.html" class="${currentPath === 'play.html' ? 'active' : ''}">Play</a>
        <a href="whats-on.html" class="${currentPath === 'whats-on.html' ? 'active' : ''}">Tonight</a>
        <a href="gallery.html" class="${currentPath === 'gallery.html' ? 'active' : ''}">Gallery</a>
        <a href="contact.html" class="${currentPath === 'contact.html' ? 'active' : ''}">Contact</a>
        <a href="book.html" class="button button-red">Book a Table</a>
      </div>
    `;

    const toggle = this.querySelector('.mobile-toggle');
    const menu = this.querySelector('.mobile-menu');
    if (toggle && menu) {
      toggle.addEventListener('click', () => {
        const isVisible = menu.style.display === 'block';
        menu.style.display = isVisible ? 'none' : 'block';
      });
    }
  }
}

class SiteFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <div class="footer-top">
          <div class="footer-col brand-col">
            <a href="index.html" class="logo">AFTER<br><span>HOURS</span></a>
            <p class="footer-tagline">
              Good food.<br>
              Bad plans.<br>
              Great company.
            </p>
          </div>
          <div class="footer-col">
            <span class="eyebrow yellow">KEEP HANGING</span>
            <a href="menu.html">Menu</a>
            <a href="the-place.html">The Place</a>
            <a href="whats-on.html">What's On</a>
            <a href="gallery.html">Gallery</a>
            <a href="book.html">Book a table</a>
          </div>
          <div class="footer-col">
            <span class="eyebrow yellow">COME FIND US</span>
            <div class="address-block">
              <p>12 Somewhere Street<br>Lucknow, India</p>
              <p>MON–THU 10AM–11PM<br>FRI–SAT 10AM–12:30AM<br>SUN 9AM–11PM</p>
              <p>+91 522 400 1234</p>
            </div>
          </div>
        </div>
        <div class="footer-bottom">
          <span>© 2026 AFTER HOURS</span>
          <div class="footer-social-links">
            <a href="#">Instagram</a> · <a href="#">WhatsApp</a>
          </div>
          <span>If you're still scrolling, you're officially staying too long.</span>
        </div>
      </footer>
    `;
  }
}

customElements.define('site-header', SiteHeader);
customElements.define('site-footer', SiteFooter);
