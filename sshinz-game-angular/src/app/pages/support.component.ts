import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-support',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="support-page">
      <!-- Hero Section -->
      <section class="hero-section">
        <h1>SUPPORT <span>CENTER</span></h1>
        <p>High-frequency assistance for the modern gamer. Reach out to our<br>technical dispatch or browse our decentralized knowledge base.</p>
      </section>

      <!-- Category Cards -->
      <section class="support-categories">
        <div class="support-card">
           <div class="icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                 <path d="M21 8V21H3V8"></path>
                 <path d="M1 3H23V8H1V3Z"></path>
                 <path d="M10 12H14"></path>
              </svg>
           </div>
           <h3>Orders & Delivery</h3>
           <p>Track digital keys, manage pre-orders, and handle payment inquiries.</p>
           <a href="#" class="support-link">VIEW ARTICLES</a>
        </div>
        <div class="support-card highlighted">
           <div class="icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                 <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21"></path>
                 <circle cx="12" cy="7" r="4"></circle>
              </svg>
           </div>
           <h3>Account Access</h3>
           <p>Security settings, multi-factor authentication, and profile management.</p>
           <a href="#" class="support-link">SECURE ACCOUNT</a>
        </div>
        <div class="support-card">
           <div class="icon-wrap">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                 <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
              </svg>
           </div>
           <h3>Technical Support</h3>
           <p>Installation troubleshooting, driver updates, and hardware optimization.</p>
           <a href="#" class="support-link">TROUBLESHOOT</a>
        </div>
      </section>

      <!-- Main Support Layout -->
      <div class="support-layout">
        <!-- Dispatch Form -->
        <main class="dispatch-form">
          <h2 class="section-title">DIRECT <span>DISPATCH</span></h2>
          <div class="form-grid">
            <div class="field">
              <label>FULL NAME</label>
              <input type="text" placeholder="JACK RYAN">
            </div>
            <div class="field">
              <label>EMAIL ADDRESS</label>
              <input type="email" placeholder="JACK@NEON.NET">
            </div>
          </div>
          <div class="field full">
            <label>SUPPORT CATEGORY</label>
            <div class="custom-select">
              <select>
                <option>Technical Issue</option>
                <option>Account Problem</option>
                <option>Billing Question</option>
              </select>
            </div>
          </div>
          <div class="field full">
            <label>DETAILED MESSAGE</label>
            <textarea placeholder="Describe the frequency of your issue..."></textarea>
          </div>
          <button class="submit-btn">INITIALIZE TRANSMISSION</button>
        </main>

        <!-- Sidebar Info -->
        <aside class="support-sidebar">
          <div class="sidebar-block info-block">
             <h3 class="block-title"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 18v-6a9 9 0 0 1 18 0v6"></path><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"></path></svg> LIVE UPLINK</h3>
             <div class="info-item">
                <span>EMAIL</span>
                <strong>support&#64;sshinz-game.com</strong>
             </div>
             <div class="info-item">
                <span>GLOBAL HOTLINE</span>
                <strong>+1 (888) SSHINZ-GAME</strong>
             </div>
             <div class="info-item">
                <span>UPTIME</span>
                <strong>24/7 Monitored Dispatch</strong>
             </div>
          </div>

          <div class="sidebar-block hub-block">
             <div class="hub-image">
                <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop" alt="Operations Hub">
                <span class="hub-badge">NEON HQ</span>
             </div>
             <div class="hub-text">
                <h3>OPERATIONS HUB</h3>
             </div>
          </div>

          <div class="sidebar-block discord-block">
             <div class="discord-inner">
                <div class="discord-text">
                   <h3>Join the Discord</h3>
                   <p>Real-time community support.</p>
                </div>
                <div class="discord-icon">
                   <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                </div>
             </div>
          </div>
        </aside>
      </div>

      <!-- FAQ Section -->
      <section class="popular-transmissions">
        <h2 class="centered-title">POPULAR <span>TRANSMISSIONS</span></h2>
        <div class="faq-list">
          <div class="faq-item">
             <span>How do I redeem my Gold Card credits?</span>
             <span class="arrow">→</span>
          </div>
          <div class="faq-item">
             <span>Refund policy for digital license keys</span>
             <span class="arrow">→</span>
          </div>
          <div class="faq-item">
             <span>Multi-factor authentication (MFA) setup guide</span>
             <span class="arrow">→</span>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: `
    .support-page {
      background-color: var(--bg-dark);
      padding: 80px 40px;
      max-width: 1400px;
      margin: 0 auto;
    }

    /* Hero Section */
    .hero-section {
      text-align: left;
      margin-bottom: 80px;
    }

    .hero-section h1 {
      font-size: 64px;
      margin-bottom: 24px;
      letter-spacing: -2px;
      text-transform: uppercase;
    }

    .hero-section h1 span {
      color: var(--accent);
      font-style: italic;
    }

    .hero-section p {
      color: var(--text-muted);
      font-size: 18px;
      line-height: 1.6;
    }

    /* Support categories */
    .support-categories {
      display: flex;
      gap: 32px;
      margin-bottom: 100px;
    }

    .support-card {
      flex: 1;
      background: #111116;
      border: 1px solid var(--border);
      border-radius: 20px;
      padding: 40px;
      transition: all 0.3s;
      position: relative;
    }

    .support-card:hover {
      border-color: #3f3f46;
      transform: translateY(-8px);
    }

    .support-card.highlighted {
      border-color: rgba(168, 85, 247, 0.4);
      background: #16161c;
    }

    .icon-wrap {
      width: 40px;
      height: 40px;
      color: var(--accent);
      margin-bottom: 24px;
    }

    .icon-wrap svg { width: 32px; height: 32px; }

    .support-card h3 {
      font-size: 20px;
      margin-bottom: 16px;
    }

    .support-card p {
      color: var(--text-muted);
      font-size: 13px;
      margin-bottom: 32px;
      line-height: 1.6;
    }

    .support-link {
      font-size: 11px;
      font-weight: 800;
      color: var(--accent);
      letter-spacing: 1px;
    }

    /* Support Layout */
    .support-layout {
      display: flex;
      gap: 60px;
      margin-bottom: 120px;
    }

    .dispatch-form {
      flex: 1.5;
      background: #0d0d12;
      border: 1px solid var(--border);
      border-radius: 24px;
      padding: 60px;
    }

    .section-title {
      font-size: 24px;
      margin-bottom: 48px;
      text-transform: uppercase;
    }

    .section-title span { color: var(--accent); }

    .form-grid {
      display: flex;
      gap: 32px;
      margin-bottom: 32px;
    }

    .field {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 12px;
    }

    .field.full { margin-bottom: 32px; }

    .field label {
      font-size: 10px;
      font-weight: 800;
      color: #71717a;
      letter-spacing: 1px;
    }

    .field input, .field select, .field textarea {
      background: #09090b;
      border: 1px solid #1f1f23;
      padding: 16px;
      border-radius: 8px;
      color: white;
      font-size: 14px;
      font-weight: 600;
    }

    .field textarea {
      height: 160px;
      resize: none;
    }

    .field input:focus, .field textarea:focus {
      outline: none;
      border-color: var(--accent);
    }

    .custom-select select {
      width: 100%;
      appearance: none;
    }

    .submit-btn {
      width: 100%;
      background: var(--accent);
      color: white;
      padding: 18px;
      border-radius: 12px;
      font-weight: 800;
      font-size: 14px;
      letter-spacing: 1px;
      box-shadow: 0 10px 30px rgba(168, 85, 247, 0.2);
    }

    /* Sidebar */
    .support-sidebar {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 32px;
    }

    .sidebar-block {
      background: #111116;
      border: 1px solid var(--border);
      border-radius: 20px;
      padding: 32px;
    }

    .info-block .block-title {
      font-size: 12px;
      color: var(--accent);
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 32px;
    }

    .info-item { margin-bottom: 24px; }
    .info-item span { display: block; font-size: 9px; color: #71717a; font-weight: 800; margin-bottom: 8px; }
    .info-item strong { font-size: 14px; font-weight: 700; color: white; }

    .hub-block { padding: 0; overflow: hidden; }
    .hub-image { height: 200px; position: relative; }
    .hub-image img { width: 100%; height: 100%; object-fit: cover; opacity: 0.6; }
    .hub-badge { position: absolute; top: 16px; left: 16px; background: var(--accent); font-size: 9px; font-weight: 800; padding: 4px 8px; border-radius: 4px; }
    .hub-text { padding: 24px; }
    .hub-text h3 { font-size: 14px; font-style: italic; text-align: center; }

    .discord-block { padding: 24px; cursor: pointer; transition: background 0.2s; }
    .discord-block:hover { background: #16161c; }
    .discord-inner { display: flex; justify-content: space-between; align-items: center; }
    .discord-text h3 { font-size: 14px; margin-bottom: 4px; }
    .discord-text p { font-size: 12px; color: #71717a; }
    .discord-icon { color: #5865f2; }
    .discord-icon svg { width: 32px; height: 32px; }

    /* FAQ List */
    .centered-title {
      text-align: center;
      font-size: 24px;
      margin-bottom: 60px;
      text-transform: uppercase;
    }

    .centered-title span { color: var(--accent); }

    .faq-list {
      display: flex;
      flex-direction: column;
      gap: 16px;
      max-width: 900px;
      margin: 0 auto;
    }

    .faq-item {
      background: #0d0d12;
      border: 1px solid var(--border);
      border-radius: 12px;
      padding: 24px 32px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      transition: border-color 0.2s;
    }

    .faq-item:hover { border-color: #3f3f46; }
    .faq-item span { font-size: 14px; font-weight: 600; }
    .arrow { color: #3f3f46; font-size: 18px; }
  `
})
export class SupportComponent {}
