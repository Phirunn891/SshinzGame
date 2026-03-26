import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="category-page">
      <!-- Hero Section -->
      <section class="hero-section">
        <h1>EXPLORE <span>UNIVERSES</span></h1>
        <p>Dive into our curated DNA of digital experiences. From high-octane<br>battlegrounds to silent narrative puzzles, filter your next obsession by genre.</p>
      </section>

      <!-- Category Grid -->
      <div class="category-grid">
        <!-- Row 1 -->
        <div class="grid-row row-1">
          <div class="cat-card large action-card">
            <div class="card-image">
              <img src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop" alt="Action">
              <div class="titles-overlay">
                <span class="count">432 TITLES</span>
              </div>
            </div>
            <div class="card-content">
              <span class="sub-label">01 // COMBAT FOCUS</span>
              <h2>ACTION</h2>
              <button class="cat-btn secondary" routerLink="/all-games">ENTER ARENA</button>
            </div>
          </div>
          <div class="cat-card small adventure-card">
            <div class="card-image">
               <img src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=2070&auto=format&fit=crop" alt="Adventure">
            </div>
            <div class="card-content">
              <span class="sub-label">02 // NARRATIVE JOURNEY</span>
              <h2>ADVENTURE</h2>
              <button class="cat-btn outline" routerLink="/all-games">EXPLORE</button>
            </div>
          </div>
        </div>

        <!-- Row 2 -->
        <div class="grid-row row-2">
          <div class="cat-card medium indie-card">
            <div class="card-content centered">
               <div class="indie-icon">
                  <!-- Abstract indie icon -->
                  <div class="pixel-grid"></div>
               </div>
               <h2>INDIE</h2>
               <span class="sub-label">AURA OF INNOVATION</span>
            </div>
          </div>
          <div class="cat-card x-large rpg-card">
            <div class="card-image">
               <img src="https://images.unsplash.com/photo-1538356111083-d2118973abc5?q=80&w=2069&auto=format&fit=crop" alt="RPG">
            </div>
            <div class="card-content">
              <span class="sub-label">03 // DEEP SYSTEMS</span>
              <h2>RPG</h2>
              <div class="tags">
                <span class="tag">Open World</span>
                <span class="tag">Strategy</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Row 3: Horizontal cards -->
        <div class="grid-row row-3">
          <div class="wide-card">
            <div class="card-icon">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
               </svg>
            </div>
            <div class="card-text">
               <h3>STRATEGY</h3>
               <p>Master the tactical grid and outsmart the machine.</p>
               <span class="count">128 TITLES</span>
            </div>
            <div class="arrow">→</div>
          </div>
          <div class="wide-card">
            <div class="card-icon warning">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                  <line x1="12" y1="9" x2="12" y2="13"></line>
                  <line x1="12" y1="17" x2="12.01" y2="17"></line>
               </svg>
            </div>
            <div class="card-text">
               <h3>HORROR</h3>
               <p>Face the shadows in high-fidelity nightmare fuel.</p>
               <span class="count">64 TITLES</span>
            </div>
            <div class="arrow">→</div>
          </div>
        </div>
      </div>

      <!-- Gold Card Banner -->
      <section class="gold-vault-section">
        <div class="vault-container">
          <div class="vault-text">
            <span class="rarity">RARITY LEVEL: EXOTIC</span>
            <h1>UNLOCK THE<br><span>GOLD CARD</span> VAULT</h1>
            <p>Access early betas, exclusive digital collectibles, and category-wide discounts that never expire. The ultimate power-up for the Kinetic collective.</p>
            <button class="vault-btn">CLAIM ACCESS</button>
          </div>
          <div class="vault-visual">
            <div class="gold-card-mockup">
               <div class="shine"></div>
               <div class="card-chip"></div>
               <div class="card-brand">Safe card work</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: `
    .category-page {
      background-color: var(--bg-dark);
      padding: 80px 40px;
    }

    /* Hero Section */
    .hero-section {
      text-align: left;
      margin-bottom: 80px;
      max-width: 1400px;
      margin-left: auto;
      margin-right: auto;
    }

    .hero-section h1 {
      font-size: 64px;
      margin-bottom: 24px;
      letter-spacing: -2px;
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

    /* Grid Layout */
    .category-grid {
      max-width: 1400px;
      margin: 0 auto 120px;
      display: flex;
      flex-direction: column;
      gap: 32px;
    }

    .grid-row {
      display: flex;
      gap: 32px;
    }

    .cat-card {
      background: var(--bg-card);
      border-radius: 20px;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      position: relative;
      border: 1px solid var(--border);
    }

    .card-image {
      flex-grow: 1;
      position: relative;
      overflow: hidden;
    }

    .card-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s;
    }

    .cat-card:hover .card-image img {
      transform: scale(1.05);
    }

    .card-content {
      padding: 32px;
    }

    .sub-label {
      font-size: 11px;
      color: var(--accent);
      font-weight: 700;
      letter-spacing: 1px;
      display: block;
      margin-bottom: 12px;
    }

    .card-content h2 {
      font-size: 32px;
      font-style: italic;
      margin-bottom: 24px;
    }

    /* Specific Card Sizes */
    .row-1 .large { width: 65%; height: 600px; }
    .row-1 .small { width: 35%; height: 600px; }
    
    .row-2 .medium { width: 30%; height: 500px; }
    .row-2 .x-large { width: 70%; height: 500px; }

    .action-card .card-content { background: #000; }
    .adventure-card .card-content { background: #000; }
    
    .centered {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      text-align: center;
    }

    /* Buttons inside cards */
    .cat-btn {
      padding: 12px 24px;
      border-radius: 8px;
      font-weight: 700;
      font-size: 12px;
      cursor: pointer;
    }

    .cat-btn.secondary { background: var(--accent); color: white; border: none; }
    .cat-btn.outline { background: transparent; color: white; border: 1px solid #3f3f46; }

    /* Wide Cards */
    .row-3 .wide-card {
      flex: 1;
      background: #0d0d12;
      border: 1px solid var(--border);
      border-radius: 16px;
      padding: 24px;
      display: flex;
      align-items: center;
      gap: 24px;
      cursor: pointer;
      transition: background 0.2s;
    }

    .row-3 .wide-card:hover {
      background: #16161c;
    }

    .card-icon {
      width: 48px;
      height: 48px;
      color: var(--accent);
    }

    .card-icon.warning { color: #f43f5e; }

    .card-text h3 { font-size: 18px; margin-bottom: 4px; font-style: italic; }
    .card-text p { font-size: 13px; color: var(--text-muted); margin-bottom: 8px; }
    .card-text .count { font-size: 11px; font-weight: 700; color: #71717a; }

    .arrow { margin-left: auto; color: #3f3f46; font-size: 20px; }

    /* RPG Specific */
    .rpg-card .tags { display: flex; gap: 8px; }
    .tag {
      background: rgba(168, 85, 247, 0.1);
      color: var(--accent);
      padding: 4px 12px;
      border-radius: 6px;
      font-size: 11px;
      font-weight: 600;
      border: 1px solid rgba(168, 85, 247, 0.2);
    }

    /* Gold Vault Section */
    .gold-vault-section {
      background: linear-gradient(to right, #111, #09090b);
      border-radius: 24px;
      padding: 80px;
      max-width: 1400px;
      margin: 0 auto;
      border: 1px solid var(--border);
    }

    .vault-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 80px;
    }

    .vault-text { flex: 1; }
    
    .rarity {
      display: inline-block;
      background: #27272a;
      color: var(--text-muted);
      padding: 4px 12px;
      border-radius: 6px;
      font-size: 10px;
      font-weight: 700;
      margin-bottom: 24px;
    }

    .vault-text h1 { font-size: 48px; margin-bottom: 24px; line-height: 1.1; }
    .vault-text h1 span { color: var(--accent); }
    .vault-text p { color: var(--text-muted); margin-bottom: 40px; font-size: 16px; max-width: 450px; }

    .vault-btn {
      background: #f472b6;
      color: white;
      padding: 16px 48px;
      border-radius: 12px;
      font-weight: 800;
      font-size: 14px;
      border: none;
      box-shadow: 0 0 20px rgba(244, 114, 182, 0.3);
      cursor: pointer;
    }

    .vault-visual { flex: 1; display: flex; justify-content: flex-end; }

    .gold-card-mockup {
      width: 450px;
      height: 280px;
      background: linear-gradient(135deg, #fde047 0%, #ca8a04 100%);
      border-radius: 20px;
      position: relative;
      padding: 32px;
      box-shadow: 0 40px 100px rgba(202, 138, 4, 0.2);
    }

    .card-chip {
      width: 60px;
      height: 48px;
      background: linear-gradient(135deg, #fef08a, #854d0e);
      border-radius: 8px;
      margin-top: 60px;
      border: 1px solid rgba(0,0,0,0.1);
    }

    .card-brand {
      position: absolute;
      bottom: 32px;
      right: 32px;
      color: #3f2e0e;
      font-weight: 700;
      font-size: 24px;
    }
  `
})
export class CategoryComponent {}
