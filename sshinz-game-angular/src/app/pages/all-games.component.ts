import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { GameService } from '../services/game.service';
import { Game } from '../models/game.model';

@Component({
  selector: 'app-all-games',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="all-games-page">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-overlay"></div>
        <div class="hero-content">
          <h1>Sshinz <span>GAMES</span></h1>
          <p>Experience the next level of digital adrenaline.<br>Curated titles for the modern kinetic player.</p>
        </div>
      </section>

      <div class="page-container">
        <!-- Sidebar -->
        <aside class="sidebar">
          <div class="sidebar-section">
            <h3 class="section-title">FILTER BY GENRE</h3>
            <div class="filter-list">
              <label class="checkbox-container" *ngFor="let genre of genres">
                <input type="checkbox" [checked]="genre === 'RPG'">
                <span class="checkmark"></span>
                {{genre}}
              </label>
            </div>
          </div>

          <div class="upgrade-card">
            <div class="upgrade-content">
              <h3>GOLD CARD</h3>
              <p>Unlock exclusive legendary rewards and early access to triple-A titles.</p>
              <button class="upgrade-btn">UPGRADE NOW</button>
            </div>
            <div class="upgrade-icon">
               <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                  <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                  <line x1="2" y1="10" x2="22" y2="10"></line>
               </svg>
            </div>
          </div>

          <div class="sidebar-section">
            <h3 class="section-title">SORT BY</h3>
            <div class="sort-dropdown">
              <select>
                <option>Most Popular</option>
                <option>Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
              </select>
            </div>
          </div>
        </aside>

        <!-- Main Content -->
        <main class="main-content">
          <div class="game-grid">
            <div class="game-card" *ngFor="let game of allGames">
              <div class="card-image" [routerLink]="['/game', game.id]">
                <img [src]="game.image" [alt]="game.name">
                <div class="platform-badges">
                  <span class="badge" *ngFor="let p of (game.platforms || ['PC'])">{{p}}</span>
                </div>
                <div class="featured-tag" *ngIf="game.isFeatured">FEATURED</div>
              </div>
              <div class="card-info">
                <div class="info-header">
                  <h3 class="game-title" [routerLink]="['/game', game.id]">{{game.name}}</h3>
                  <span class="price-tag">{{game.price}}</span>
                </div>
                <p class="game-desc">{{game.description | slice:0:80}}...</p>
                <button class="add-btn" [class.get-now]="game.price === 'Free To Play' || game.price === 'Free'">
                  <svg *ngIf="game.price !== 'Free To Play' && game.price !== 'Free'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4H6z"></path>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <path d="M16 10a4 4 0 0 1-8 0"></path>
                  </svg>
                  <svg *ngIf="game.price === 'Free To Play' || game.price === 'Free'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="7 10 12 15 17 10"></polyline>
                    <line x1="12" y1="15" x2="12" y2="3"></line>
                  </svg>
                  {{(game.price === 'Free To Play' || game.price === 'Free') ? 'GET NOW' : 'ADD TO CART'}}
                </button>
              </div>
            </div>
          </div>

          <!-- Pagination -->
          <div class="pagination">
            <button class="page-btn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"></polyline></svg></button>
            <button class="page-btn active">1</button>
            <button class="page-btn">2</button>
            <button class="page-btn">3</button>
            <span class="dots">...</span>
            <button class="page-btn">12</button>
            <button class="page-btn"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"></polyline></svg></button>
          </div>
        </main>
      </div>
    </div>
  `,
  styles: `
    .all-games-page {
      background-color: var(--bg-dark);
      min-height: 100vh;
    }

    /* Hero Section */
    .hero-section {
      height: 400px;
      position: relative;
      background-image: url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop');
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: center;
      padding: 0 80px;
    }

    .hero-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(90deg, #09090b 20%, rgba(9, 9, 11, 0.4) 100%);
    }

    .hero-content {
      position: relative;
      z-index: 10;
      max-width: 600px;
    }

    .hero-content h1 {
      font-size: 64px;
      line-height: 1;
      margin-bottom: 24px;
      letter-spacing: -2px;
    }

    .hero-content h1 span {
      color: var(--accent);
      font-style: italic;
    }

    .hero-content p {
      color: var(--text-muted);
      font-size: 18px;
    }

    /* Page Layout */
    .page-container {
      display: flex;
      padding: 60px 80px;
      gap: 60px;
      max-width: 1600px;
      margin: 0 auto;
    }

    /* Sidebar */
    .sidebar {
      width: 280px;
      flex-shrink: 0;
    }

    .section-title {
      font-size: 11px;
      color: var(--accent);
      margin-bottom: 24px;
      letter-spacing: 1px;
    }

    .sidebar-section {
      margin-bottom: 48px;
    }

    .filter-list {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .checkbox-container {
      display: flex;
      align-items: center;
      cursor: pointer;
      font-size: 12px;
      font-weight: 600;
      color: var(--text-muted);
      text-transform: uppercase;
      position: relative;
      padding-left: 28px;
    }

    .checkbox-container input {
      position: absolute;
      opacity: 0;
      cursor: pointer;
    }

    .checkmark {
      position: absolute;
      top: -2px;
      left: 0;
      height: 18px;
      width: 18px;
      background-color: transparent;
      border: 2px solid #27272a;
      border-radius: 50%;
    }

    .checkbox-container:hover input ~ .checkmark {
      border-color: var(--accent);
    }

    .checkbox-container input:checked ~ .checkmark {
      background-color: var(--accent);
      border-color: var(--accent);
    }

    .checkmark:after {
      content: "";
      position: absolute;
      display: none;
    }

    .checkbox-container input:checked ~ .checkmark:after {
      display: block;
    }

    .checkbox-container .checkmark:after {
      left: 5px;
      top: 2px;
      width: 4px;
      height: 8px;
      border: solid white;
      border-width: 0 2px 2px 0;
      transform: rotate(45deg);
    }

    /* Upgrade Card */
    .upgrade-card {
      background: linear-gradient(135deg, #18181b 0%, #09090b 100%);
      border: 1px solid #27272a;
      border-radius: 12px;
      padding: 24px;
      margin-bottom: 48px;
      position: relative;
      overflow: hidden;
    }

    .upgrade-card h3 {
      font-size: 16px;
      margin-bottom: 8px;
    }

    .upgrade-card p {
      font-size: 12px;
      color: var(--text-muted);
      margin-bottom: 20px;
    }

    .upgrade-btn {
      background: var(--accent);
      color: white;
      width: 100%;
      padding: 10px;
      border-radius: 6px;
      font-weight: 700;
      font-size: 11px;
    }

    .upgrade-icon {
      position: absolute;
      right: -10px;
      bottom: -10px;
      width: 80px;
      height: 80px;
      color: rgba(168, 85, 247, 0.1);
      transform: rotate(-15deg);
    }

    /* Sort Dropdown */
    .sort-dropdown select {
      width: 100%;
      background: #09090b;
      border: 1px solid #27272a;
      color: white;
      padding: 12px;
      border-radius: 8px;
      font-size: 13px;
      font-weight: 600;
      appearance: none;
      cursor: pointer;
    }

    /* Game Grid */
    .main-content {
      flex-grow: 1;
    }

    .game-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
      gap: 32px;
      margin-bottom: 60px;
    }

    .game-card {
      background: #18181b;
      border-radius: 16px;
      overflow: hidden;
      border: 1px solid transparent;
      transition: all 0.3s;
    }

    .game-card:hover {
      border-color: #27272a;
      transform: translateY(-4px);
    }

    .card-image {
      height: 380px;
      position: relative;
      cursor: pointer;
    }

    .card-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .platform-badges {
      position: absolute;
      top: 12px;
      left: 12px;
      display: flex;
      gap: 6px;
    }

    .badge {
      background: rgba(9, 9, 11, 0.8);
      backdrop-filter: blur(4px);
      padding: 4px 8px;
      border-radius: 4px;
      font-size: 10px;
      font-weight: 700;
      color: white;
    }

    .featured-tag {
      position: absolute;
      top: 12px;
      right: 12px;
      background: var(--accent);
      padding: 4px 10px;
      border-radius: 6px;
      font-size: 10px;
      font-weight: 800;
      color: white;
    }

    .card-info {
      padding: 24px;
    }

    .info-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;
    }

    .game-title {
      font-size: 18px;
      text-transform: uppercase;
      cursor: pointer;
    }

    .price-tag {
      color: var(--accent);
      font-weight: 700;
      font-size: 14px;
    }

    .game-desc {
      font-size: 13px;
      color: var(--text-muted);
      margin-bottom: 24px;
      line-height: 1.6;
    }

    .add-btn {
      width: 100%;
      background: transparent;
      border: 1px solid #27272a;
      color: white;
      padding: 12px;
      border-radius: 8px;
      font-weight: 700;
      font-size: 12px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      transition: all 0.2s;
    }

    .add-btn:hover {
      background: #27272a;
    }

    .add-btn svg {
      width: 16px;
      height: 16px;
    }

    .add-btn.get-now {
      background: var(--accent);
      border: none;
    }

    .add-btn.get-now:hover {
      background: var(--accent-hover);
    }

    /* Pagination */
    .pagination {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 8px;
    }

    .page-btn {
      background: #18181b;
      border: 1px solid #27272a;
      color: var(--text-muted);
      width: 40px;
      height: 40px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 600;
      font-size: 14px;
      transition: all 0.2s;
    }

    .page-btn:hover {
      border-color: var(--accent);
      color: white;
    }

    .page-btn.active {
      background: var(--accent);
      color: white;
      border-color: var(--accent);
    }

    .page-btn svg {
      width: 18px;
      height: 18px;
    }

    .dots {
      color: #3f3f46;
      font-weight: 600;
      margin: 0 4px;
    }
  `
})
export class AllGamesComponent implements OnInit {
  allGames: Game[] = [];
  genres = ['ACTION', 'RPG', 'FPS', 'ADVENTURE', 'CYBERPUNK'];

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.gameService.getGames().subscribe(games => this.allGames = games);
  }
}
