import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="main-footer">
      <div class="footer-content">
        <div class="footer-top">
          <div class="footer-brand">
            <h2 class="logo-text">Sshinz <span>NEON</span></h2>
            <p class="copyright">© 2024 Sshinz NEON. ALL RIGHTS RESERVED.</p>
          </div>
          
          <nav class="footer-nav">
            <a href="#">PRIVACY POLICY</a>
            <a href="#">TERMS OF SERVICE</a>
            <a href="#">COOKIE SETTINGS</a>
            <a href="#">CONTACT US</a>
          </nav>

          <div class="footer-actions">
            <button class="footer-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </button>
            <button class="footer-btn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <circle cx="18" cy="5" r="3"></circle>
                <circle cx="6" cy="12" r="3"></circle>
                <circle cx="18" cy="19" r="3"></circle>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: `
    .main-footer {
      background-color: var(--bg-dark);
      border-top: 1px solid var(--border);
      padding: 60px 40px;
      margin-top: auto;
    }

    .footer-content {
      max-width: 1400px;
      margin: 0 auto;
    }

    .footer-top {
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
      gap: 30px;
    }

    .footer-brand {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .logo-text {
      font-size: 18px;
      color: #fff;
      font-weight: 700;
    }

    .logo-text span {
      font-style: italic;
    }

    .copyright {
      color: #71717a;
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.5px;
    }

    .footer-nav {
      display: flex;
      gap: 32px;
    }

    .footer-nav a {
      color: #a1a1aa;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 0.5px;
      transition: color 0.2s;
    }

    .footer-nav a:hover {
      color: #fff;
    }

    .footer-actions {
      display: flex;
      gap: 12px;
    }

    .footer-btn {
      background: #18181b;
      border: 1px solid #27272a;
      color: #71717a;
      width: 36px;
      height: 36px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s;
    }

    .footer-btn:hover {
      color: #fff;
      border-color: #3f3f46;
      background-color: #27272a;
    }

    .footer-btn svg {
      width: 18px;
      height: 18px;
    }
  `
})
export class FooterComponent {}
