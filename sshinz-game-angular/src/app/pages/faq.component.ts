import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="faq-page">
      <!-- Hero Section -->
      <section class="hero-section">
        <h1>FREQUENTLY <span>ASKED</span> QUESTIONS</h1>
        <p>Everything you need to know about Sshinz Game, the Gold Card program,<br>and our curated game collection.</p>
      </section>

      <!-- Search & Status Bar -->
      <section class="action-bar">
        <div class="search-box">
          <h3>Can't find what you're looking for?</h3>
          <div class="search-input">
             <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
             <input type="text" placeholder="Search keywords (e.g. Gold Card, Refund...)">
          </div>
          <div class="big-icon">?</div>
        </div>
        <div class="status-box">
          <div class="status-header">
             <div class="star-icon">★</div>
             <h3>GOLD CARD STATUS</h3>
          </div>
          <p>Check your current loyalty tier and unlockable rewards.</p>
          <button class="status-btn">VERIFY STATUS</button>
        </div>
      </section>

      <!-- FAQ Content -->
      <div class="faq-layout">
        <aside class="faq-nav">
          <span class="label">CATEGORIES</span>
          <nav>
            <a href="javascript:void(0)" class="active">General Inquiries</a>
            <a href="javascript:void(0)">Store & Account</a>
            <a href="javascript:void(0)">Gold Card Program</a>
            <a href="javascript:void(0)">Technical Support</a>
          </nav>
        </aside>

        <main class="faq-content">
          <!-- Section 1 -->
          <div class="faq-group">
            <h2 class="group-title">GENERAL INQUIRIES</h2>
            <div class="accordion-item">
               <span>What is Sshinz Game?</span>
               <span class="chevron">▾</span>
            </div>
            <div class="accordion-item">
               <span>How often are new games added?</span>
               <span class="chevron">▾</span>
            </div>
          </div>

          <!-- Section 2 -->
          <div class="faq-group">
            <h2 class="group-title">GOLD CARD PROGRAM</h2>
            <div class="accordion-item active">
               <span class="highlight">How do I earn a Gold Card?</span>
               <span class="chevron">▾</span>
            </div>
            <div class="accordion-item">
               <span>What are the benefits of the Gold Card?</span>
               <span class="chevron">▾</span>
            </div>
          </div>

          <!-- Section 3 -->
          <div class="faq-group">
            <h2 class="group-title">STORE & ACCOUNT</h2>
            <div class="accordion-item">
               <span>What is the refund policy?</span>
               <span class="chevron">▾</span>
            </div>
            <div class="accordion-item">
               <span>Can I share my account?</span>
               <span class="chevron">▾</span>
            </div>
          </div>

          <!-- Final CTA -->
           <div class="cta-banner">
              <div class="cta-image">
                 <img src="https://images.unsplash.com/photo-1593305841991-05c297ba4575?q=80&w=2074&auto=format&fit=crop" alt="Support">
              </div>
              <div class="cta-text">
                 <h3>STILL NEED A POWER UP?</h3>
                 <p>Our elite support squad is standing by to help you resolve any issues or answer deep-lore questions about Sshinz Game.</p>
                 <button class="contact-btn">CONTACT SUPPORT</button>
              </div>
           </div>
        </main>
      </div>
    </div>
  `,
  styles: `
    .faq-page {
      background-color: var(--bg-dark);
      padding: 80px 40px;
      max-width: 1400px;
      margin: 0 auto;
    }

    /* Hero Section */
    .hero-section {
      text-align: center;
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

    /* Action Bar */
    .action-bar {
      display: flex;
      gap: 32px;
      margin-bottom: 100px;
    }

    .search-box {
      flex: 2;
      background: #111116;
      border-radius: 20px;
      padding: 40px;
      position: relative;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .search-box h3 { font-size: 18px; margin-bottom: 24px; }

    .search-input {
      position: relative;
      max-width: 400px;
    }

    .search-input svg {
      position: absolute;
      left: 16px;
      top: 50%;
      transform: translateY(-50%);
      width: 18px;
      color: #71717a;
    }

    .search-input input {
      width: 100%;
      background: black;
      border: 1px solid #27272a;
      padding: 16px 16px 16px 48px;
      border-radius: 12px;
      color: white;
      font-size: 14px;
    }

    .big-icon {
      position: absolute;
      right: 40px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 120px;
      color: rgba(255,255,255,0.03);
      font-weight: 800;
    }

    .status-box {
      flex: 1;
      background: #111116;
      border-radius: 20px;
      padding: 40px;
      border: 1px solid var(--border);
    }

    .status-header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 12px;
    }

    .star-icon {
      background: #a855f7;
      color: white;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
    }

    .status-box h3 { font-size: 14px; color: white; }
    .status-box p { color: #71717a; font-size: 12px; line-height: 1.6; margin-bottom: 24px; }

    .status-btn {
      background: #a855f7;
      color: white;
      width: 100%;
      padding: 12px;
      border-radius: 8px;
      font-weight: 800;
      font-size: 11px;
    }

    /* FAQ Layout */
    .faq-layout {
      display: flex;
      gap: 80px;
    }

    .faq-nav {
      width: 200px;
      flex-shrink: 0;
    }

    .faq-nav .label {
      font-size: 10px;
      color: var(--accent);
      font-weight: 800;
      letter-spacing: 1px;
      display: block;
      margin-bottom: 24px;
    }

    .faq-nav nav {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .faq-nav nav a {
      font-size: 13px;
      color: #71717a;
      font-weight: 600;
      transition: color 0.2s;
    }

    .faq-nav nav a:hover, .faq-nav nav a.active {
      color: white;
    }

    .faq-nav nav a.active {
      position: relative;
      padding-left: 20px;
    }

    .faq-nav nav a.active::before {
      content: "";
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 2px;
      height: 16px;
      background: var(--accent);
    }

    /* FAQ Content */
    .faq-content {
      flex-grow: 1;
    }

    .faq-group {
      margin-bottom: 60px;
    }

    .group-title {
      font-size: 18px;
      margin-bottom: 32px;
      font-style: italic;
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .group-title::before {
      content: "";
      width: 32px;
      height: 2px;
      background: var(--accent);
    }

    .accordion-item {
      background: #111116;
      border: 1px solid var(--border);
      padding: 24px 32px;
      border-radius: 12px;
      margin-bottom: 12px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      transition: border-color 0.2s;
    }

    .accordion-item:hover {
      border-color: #3f3f46;
    }

    .accordion-item.active {
      border-color: rgba(168, 85, 247, 0.4);
    }

    .accordion-item span { font-size: 14px; font-weight: 700; color: white; }
    .accordion-item .highlight { color: #ec4899; }
    .chevron { color: #3f3f46; font-size: 18px; }

    /* CTA Banner */
    .cta-banner {
      background: #4c1d95;
      border-radius: 24px;
      margin-top: 80px;
      display: flex;
      overflow: hidden;
      align-items: center;
      padding: 40px;
      gap: 40px;
    }

    .cta-image {
      width: 200px;
      height: 200px;
      border-radius: 16px;
      overflow: hidden;
    }

    .cta-image img { width: 100%; height: 100%; object-fit: cover; }

    .cta-text h3 { font-size: 24px; margin-bottom: 16px; }
    .cta-text p { font-size: 14px; color: rgba(255,255,255,0.7); margin-bottom: 32px; max-width: 500px; line-height: 1.6; }

    .contact-btn {
      background: white;
      color: #4c1d95;
      padding: 12px 32px;
      border-radius: 8px;
      font-weight: 800;
      font-size: 12px;
      border: none;
    }
  `
})
export class FaqComponent {}
