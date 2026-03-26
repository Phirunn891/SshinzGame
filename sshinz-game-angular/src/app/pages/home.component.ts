import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { GameService } from '../services/game.service';
import { Game } from '../models/game.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="home-page">
      <!-- Hero Section -->
      <section class="hero-section" *ngIf="heroGame">
        <div class="hero-bg">
           <img [src]="heroGame.image" [alt]="heroGame.name">
        </div>
        <div class="hero-content">
          <span class="label">NEW RELEASE</span>
          <h1>{{getHeroTitleFirstWord()}} <span>{{getHeroTitleRest()}}</span></h1>
          <p>{{heroGame.description}}</p>
          <div class="hero-btns">
            <button class="buy-btn" [routerLink]="['/game', heroGame.id]">BUY NOW — {{heroGame.price}}</button>
            <button class="trailer-btn" [routerLink]="['/game', heroGame.id]">TRAILER</button>
          </div>
          <div class="hero-stats">
            <div class="stat">
              <span class="value">9.8/10</span>
              <span class="desc">CRITIC SCORE</span>
            </div>
            <div class="stat">
              <span class="value">GOTY</span>
              <span class="desc">NOMINATED</span>
            </div>
          </div>
        </div>
      </section>

      <!-- Featured Releases -->
      <section class="section">
        <div class="section-header">
          <h2 class="section-title">FEATURED RELEASES</h2>
          <a routerLink="/all-games" class="view-all">VIEW ALL GAMES</a>
        </div>
        <div class="game-grid">
          <div class="game-card" *ngFor="let game of featuredGames">
            <div class="card-img" [routerLink]="['/game', game.id]">
               <img [src]="game.image" [alt]="game.name">
               <span class="card-label" *ngIf="game.isTopNewRelease">BEST SELLER</span>
            </div>
            <div class="card-info">
               <h3 [routerLink]="['/game', game.id]">{{game.name}}</h3>
               <div class="info-footer">
                  <span class="price">{{game.price}}</span>
                  <button class="add-cart-btn">+</button>
               </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Popular Genres -->
      <section class="section">
        <h2 class="section-title centered-title">POPULAR GENRES</h2>
        <div class="genre-grid">
          <div class="genre-tile large action-rpg" routerLink="/categories">
             <div class="tile-overlay">
                <h3>ACTION RPG</h3>
                <span>EXPLORE 150+ TITLES</span>
             </div>
          </div>
          <div class="genre-tile-group">
            <div class="tile-row">
              <div class="genre-tile fps" routerLink="/categories">
                 <div class="tile-overlay">
                    <h3>FPS</h3>
                 </div>
              </div>
              <div class="genre-tile indie" routerLink="/categories">
                 <div class="tile-overlay">
                    <h3>INDIE</h3>
                 </div>
              </div>
            </div>
            <div class="genre-tile multiplayer" routerLink="/categories">
               <div class="tile-overlay">
                  <h3>MULTIPLAYER</h3>
               </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Gold Card Upgrade -->
      <section class="upgrade-section">
        <div class="upgrade-container">
          <div class="upgrade-info">
            <span class="elite-label">★ ELITE MEMBERSHIP</span>
            <h2>UPGRADE TO THE<br><span>GOLD CARD</span></h2>
            <p>Get exclusive early access to betas, monthly store credits, and 15% bonus on every top-up.</p>
            <ul class="benefits">
              <li><span>Monthly $20 Store Credit</span></li>
              <li><span>Priority Pre-orders & Beta Access</span></li>
              <li><span>Custom Neon Profile Theme</span></li>
            </ul>
            <button class="upgrade-action-btn" routerLink="/gold-card">GET GOLD CARD — $14.99/mo</button>
          </div>
          <div class="upgrade-visual">
            <!-- Official Gold Card Preview -->
            <div class="official-gold-card home-preview">
              <div class="card-bg-layer"></div>
              <div class="card-texture-layer"></div>
              <div class="card-character-layer">
                 <img src="/.img/gold_card_character.png" alt="Card Character">
              </div>
              <div class="card-content-layer">
                 <div class="top-row">
                    <div class="branding">
                       <span class="brand-name">KINETIC NEON</span>
                       <span class="unit-name">ELITE OPERATOR UNIT</span>
                    </div>
                    <div class="card-chip"></div>
                 </div>
                 
                 <div class="card-number-v2">
                    <span>4522 8810 0021</span>
                    <span>9904</span>
                 </div>
                 
                 <div class="bottom-row">
                    <div class="operator-info">
                       <span class="label">OPERATOR NAME</span>
                       <span class="name">KINETIC OPERATOR</span>
                    </div>
                    <div class="date-and-shield">
                       <div class="valid-thru">
                          <span class="label">VALID THRU</span>
                          <span class="date">12/29</span>
                       </div>
                       <div class="shield-badge">
                          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                       </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: `
    .home-page {
      background-color: var(--bg-dark);
      padding-bottom: 100px;
    }

    /* Hero */
    .hero-section {
      height: 90vh;
      position: relative;
      display: flex;
      align-items: center;
      padding: 0 100px;
      overflow: hidden;
    }

    .hero-bg {
      position: absolute;
      top: 0;
      right: 0;
      width: 60%;
      height: 100%;
      z-index: 1;
    }

    .hero-bg img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: right center;
      mask-image: linear-gradient(to left, rgba(0,0,0,1) 50%, rgba(0,0,0,0));
    }

    .hero-content {
      position: relative;
      z-index: 2;
      max-width: 600px;
    }

    .hero-content .label {
      font-size: 12px;
      font-weight: 800;
      color: var(--accent);
      letter-spacing: 2px;
      margin-bottom: 20px;
      display: block;
    }

    .hero-content h1 {
      font-size: 72px;
      line-height: 0.9;
      margin-bottom: 32px;
      text-transform: uppercase;
    }

    .hero-content h1 span {
      color: var(--accent);
      display: block;
      font-style: italic;
    }

    .hero-content p {
      font-size: 18px;
      color: var(--text-muted);
      margin-bottom: 48px;
      line-height: 1.6;
    }

    .hero-btns {
      display: flex;
      gap: 20px;
      margin-bottom: 80px;
    }

    .buy-btn {
      background: linear-gradient(90deg, #a855f7, #6366f1);
      color: white;
      padding: 16px 40px;
      border-radius: 12px;
      font-weight: 800;
      font-size: 14px;
      box-shadow: 0 10px 20px rgba(168, 85, 247, 0.3);
      cursor: pointer;
    }

    .trailer-btn {
      background: rgba(255,255,255,0.05);
      border: 1px solid #3f3f46;
      color: white;
      padding: 16px 40px;
      border-radius: 12px;
      font-weight: 800;
      font-size: 14px;
      cursor: pointer;
    }

    .hero-stats {
      display: flex;
      gap: 48px;
    }

    .stat .value {
      font-size: 24px;
      font-weight: 700;
      color: white;
      display: block;
    }

    .stat .desc {
      font-size: 11px;
      color: #71717a;
      font-weight: 600;
      letter-spacing: 1px;
    }

    /* Sections */
    .section {
      padding: 100px 100px 0;
      max-width: 1600px;
      margin: 0 auto;
    }

    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 40px;
    }

    .section-title {
      font-size: 24px;
      font-style: italic;
      letter-spacing: -1px;
    }

    .centered-title {
      text-align: center;
      margin-bottom: 60px;
    }

    .view-all {
      font-size: 12px;
      font-weight: 700;
      color: var(--text-muted);
      letter-spacing: 1px;
      border-bottom: 1px solid #3f3f46;
      padding-bottom: 4px;
    }

    /* Game Grid */
    .game-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 32px;
    }

    .game-card {
      background: #111116;
      border-radius: 16px;
      overflow: hidden;
      border: 1px solid transparent;
      transition: all 0.3s;
    }

    .game-card:hover {
      border-color: #27272a;
      transform: translateY(-8px);
    }

    .card-img {
      height: 400px;
      position: relative;
    }

    .card-img img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .card-label {
      position: absolute;
      top: 12px;
      right: 12px;
      background: white;
      color: black;
      font-size: 9px;
      font-weight: 900;
      padding: 4px 8px;
      border-radius: 4px;
    }

    .card-info {
      padding: 24px;
    }

    .card-info h3 {
      font-size: 18px;
      margin-bottom: 16px;
      text-transform: uppercase;
      cursor: pointer;
    }

    .info-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .price {
      font-weight: 700;
      color: var(--text-muted);
    }

    .add-cart-btn {
      width: 32px;
      height: 32px;
      background: #27272a;
      color: white;
      border-radius: 8px;
      font-size: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* Genre Grid */
    .genre-grid {
      display: flex;
      height: 600px;
      gap: 20px;
    }

    .genre-tile {
      border-radius: 20px;
      overflow: hidden;
      position: relative;
      background-size: cover;
      background-position: center;
      cursor: pointer;
    }

    .tile-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, rgba(0,0,0,0.8), transparent);
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      padding: 32px;
      transition: background 0.3s;
    }

    .genre-tile:hover .tile-overlay {
      background: linear-gradient(to top, rgba(168, 85, 247, 0.4), transparent);
    }

    .genre-tile h3 { font-size: 24px; font-style: italic; }
    .genre-tile span { font-size: 12px; color: var(--accent); font-weight: 700; margin-top: 8px; }

    .large { flex: 1; }
    .genre-tile-group { flex: 1.2; display: flex; flex-direction: column; gap: 20px; }
    .tile-row { display: flex; gap: 20px; flex: 1; }
    .tile-row .genre-tile { flex: 1; }
    .multiplayer { flex: 0.8; }

    .action-rpg { background-image: url('https://images.unsplash.com/photo-1587202372775-e229f172b9d7?q=80&w=1974&auto=format&fit=crop'); }
    .fps { background-image: url('https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop'); }
    .indie { background-image: url('https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop'); }
    .multiplayer { background-image: url('https://images.unsplash.com/photo-1552820728-8b83bb6b773f?q=80&w=2070&auto=format&fit=crop'); }

    /* Upgrade Section */
    .upgrade-section {
      margin-top: 120px;
      padding: 0 100px;
    }

    .upgrade-container {
      background: linear-gradient(135deg, #18181b 0%, #0c0c0e 100%);
      border: 1px solid #27272a;
      border-radius: 32px;
      padding: 80px;
      display: flex;
      align-items: center;
      gap: 100px;
      position: relative;
      overflow: hidden;
    }

    .upgrade-info { flex: 1.2; }
    .upgrade-info h2 { font-size: 48px; margin-bottom: 24px; line-height: 1.1; }
    .upgrade-info h2 span { color: var(--accent); }
    .upgrade-info p { color: var(--text-muted); margin-bottom: 40px; }

    .elite-label {
      color: #fbbf24;
      font-size: 12px;
      font-weight: 800;
      letter-spacing: 2px;
      margin-bottom: 16px;
      display: block;
    }

    .benefits {
      list-style: none;
      padding: 0;
      margin-bottom: 48px;
    }

    .benefits li {
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 12px;
      color: white;
      font-weight: 600;
      font-size: 14px;
    }

    .benefits li::before {
      content: "✓";
      color: var(--accent);
      font-weight: 800;
    }

    .upgrade-action-btn {
      background: var(--accent);
      color: white;
      padding: 16px 40px;
      border-radius: 12px;
      font-weight: 800;
      font-size: 14px;
      box-shadow: 0 0 30px rgba(168, 85, 247, 0.3);
      cursor: pointer;
    }

    .upgrade-visual { flex: 1; display: flex; justify-content: center; }

    /* Official Gold Card Style */
    .official-gold-card {
      width: 480px;
      height: 300px;
      background: linear-gradient(135deg, #d4af37 0%, #f9d976 50%, #d4af37 100%);
      border-radius: 20px;
      position: relative;
      overflow: hidden;
      box-shadow: 0 40px 100px rgba(0,0,0,0.6), inset 0 0 20px rgba(255,255,255,0.3);
      color: #1a1a1a;
      font-family: 'Space Grotesk', sans-serif;
      transform: rotate3d(1, -1, 0, 15deg); /* Slight 3D tilt for Home preview */
    }

    .home-preview {
       transform: rotate3d(1, -1, 0, 10deg) scale(0.9);
    }

    .card-bg-layer { position: absolute; inset: 0; background: linear-gradient(to right, rgba(0,0,0,0.05), transparent 60%); }
    .card-texture-layer { position: absolute; inset: 0; background-image: radial-gradient(rgba(0,0,0,0.1) 1px, transparent 1px); background-size: 8px 8px; opacity: 0.2; }
    .card-character-layer { position: absolute; left: 0; top: 0; width: 70%; height: 100%; z-index: 1; overflow: hidden; mask-image: linear-gradient(to right, black 60%, transparent); }
    .card-character-layer img { width: 100%; height: 100%; object-fit: contain; filter: grayscale(1) contrast(1.2) brightness(0.8); mix-blend-mode: multiply; opacity: 0.8; }
    .card-content-layer { position: relative; z-index: 2; height: 100%; padding: 32px 40px; display: flex; flex-direction: column; justify-content: space-between; }
    .top-row { display: flex; justify-content: space-between; align-items: flex-start; }
    .branding { display: flex; flex-direction: column; gap: 2px; }
    .brand-name { font-size: 16px; font-weight: 800; letter-spacing: 0.5px; font-style: italic; }
    .unit-name { font-size: 7px; font-weight: 700; letter-spacing: 1.5px; opacity: 0.7; }
    .card-chip { width: 48px; height: 36px; background: linear-gradient(135deg, #444, #222); border-radius: 6px; position: relative; }
    .card-chip::after { content: ""; position: absolute; inset: 6px; border: 1px solid rgba(255,255,255,0.2); border-radius: 4px; }
    .card-number-v2 { display: flex; flex-direction: column; gap: 8px; font-size: 28px; font-weight: 600; letter-spacing: 2px; margin: 15px 0; line-height: 1; }
    .bottom-row { display: flex; justify-content: space-between; align-items: flex-end; }
    .operator-info { display: flex; flex-direction: column; gap: 2px; }
    .label { font-size: 7px; font-weight: 800; opacity: 0.6; letter-spacing: 0.5px; }
    .name, .date { font-size: 14px; font-weight: 700; }
    .date-and-shield { display: flex; align-items: center; gap: 24px; }
    .valid-thru { display: flex; flex-direction: column; gap: 2px; text-align: right; }
    .shield-badge { width: 28px; height: 28px; background: rgba(0,0,0,0.05); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: rgba(0,0,0,0.4); }
    .shield-badge svg { width: 16px; height: 16px; }
  `
})
export class HomeComponent implements OnInit {
  heroGame?: Game;
  featuredGames: Game[] = [];

  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.gameService.getGameById('black-myth-wukong').subscribe(game => {
      this.heroGame = game;
    });

    this.gameService.getTopNewReleases().subscribe(games => {
      this.featuredGames = games.filter(g => g.id !== 'black-myth-wukong').slice(0, 4);
    });
  }

  getHeroTitleFirstWord(): string {
    if (!this.heroGame) return '';
    const parts = this.heroGame.name.split(':');
    return parts[0].trim();
  }

  getHeroTitleRest(): string {
    if (!this.heroGame) return '';
    const parts = this.heroGame.name.split(':');
    return parts.length > 1 ? parts[1].trim() : '';
  }
}
