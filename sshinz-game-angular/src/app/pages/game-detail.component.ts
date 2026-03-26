import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { GameService } from '../services/game.service';
import { Game } from '../models/game.model';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-game-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <div class="game-detail-page" *ngIf="game">
      <!-- Hero Section -->
      <section class="hero-detail">
        <div class="hero-bg">
           <img [src]="game.image" [alt]="game.name">
        </div>
        <div class="hero-content">
          <span class="status-label">{{game.isComingSoon ? 'NOW AVAILABLE FOR PRE-ORDER' : 'NOW AVAILABLE'}}</span>
          <h1>{{game.name}}</h1>
          <button class="trailer-btn" (click)="openTrailer()">
            <span class="play-icon">▶</span> PLAY TRAILER
          </button>
        </div>
      </section>

      <!-- Trailer Modal -->
      <div class="video-overlay" *ngIf="showTrailer" (click)="closeTrailer()">
         <div class="video-container" (click)="$event.stopPropagation()">
            <iframe [src]="safeVideoUrl" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <button class="close-overlay" (click)="closeTrailer()">×</button>
         </div>
      </div>

      <div class="page-container">
        <!-- Main Info Columns -->
        <div class="info-columns">
          <div class="left-column">
             <div class="badges-row">
                <span class="badge" *ngFor="let cat of game.category">{{cat}}</span>
             </div>
             
             <div class="story-section">
                <span class="explore-label">EXPLORE</span>
                <p class="sub-quote" *ngIf="game.subQuote">{{game.subQuote}}</p>
                <p class="description">{{game.description}}</p>
             </div>

             <div class="metadata-grid">
               <div class="meta-item">
                  <label>DEVELOPER</label>
                  <span>{{game.developer || 'N/A'}}</span>
               </div>
               <div class="meta-item">
                  <label>PUBLISHER</label>
                  <span>{{game.publisher || 'N/A'}}</span>
               </div>
               <div class="meta-item">
                  <label>RELEASE DATE</label>
                  <span>{{game.releaseDate || 'N/A'}}</span>
               </div>
               <div class="meta-item">
                  <label>PLATFORMS</label>
                  <div class="platforms">
                     <span *ngFor="let p of (game.platforms || ['PC'])">{{p}}</span>
                  </div>
               </div>
             </div>

             <!-- Screenshot Gallery -->
             <section class="screenshots">
               <div class="section-header">
                  <h2>SCREENSHOTS <span>GALLERY</span></h2>
                  <a href="#">VIEW ALL</a>
               </div>
               <div class="screenshot-grid">
                  <div class="main-shot">
                     <img [src]="game.screenshots?.[0] || game.image" alt="">
                  </div>
                  <div class="side-shots">
                     <img [src]="game.screenshots?.[1] || game.image" alt="">
                     <img [src]="game.screenshots?.[2] || game.image" alt="">
                  </div>
               </div>
             </section>

             <!-- Requirements -->
             <section class="requirements">
                <div class="section-header">
                   <h2>SYSTEM <span>REQUIREMENTS</span></h2>
                   <span class="perf-label">PERFORMANCE</span>
                </div>
                <div class="req-grid">
                  <div class="req-box min">
                    <h3>MINIMUM SPECS</h3>
                    <ul *ngIf="game.requirements">
                       <li *ngFor="let line of game.requirements.minimum">{{line}}</li>
                    </ul>
                  </div>
                  <div class="req-box rec">
                    <h3>RECOMMENDED SPECS</h3>
                    <ul *ngIf="game.requirements">
                       <li *ngFor="let line of game.requirements.recommended">{{line}}</li>
                    </ul>
                  </div>
                </div>
             </section>
          </div>

          <aside class="right-column">
             <div class="buy-card sticky-card">
               <div class="card-header">
                  <span class="edition">STANDARD EDITION</span>
                  <div class="price-wrap">
                     <span class="final-price">{{game.price}}</span>
                     <div class="original-price-wrap" *ngIf="game.discount">
                        <span class="old-price">{{game.originalPrice}}</span>
                        <span class="discount-badge">{{game.discount}} OFF</span>
                     </div>
                  </div>
               </div>
               
               <button class="buy-now-btn">BUY NOW</button>
               
               <div class="buy-benefits">
                  <div class="benefit">
                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                     Instant Digital Delivery
                  </div>
                  <div class="benefit">
                     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                     Global Activation
                  </div>
               </div>

               <div class="payment-methods">
                  <div class="method-box"></div>
                  <div class="method-box"></div>
                  <div class="method-box"></div>
               </div>
             </div>
          </aside>
        </div>

        <!-- Recommendations -->
        <section class="recommendations">
          <h2 class="section-title-line">YOU MAY ALSO LIKE</h2>
          <div class="rec-grid">
            <div class="rec-card" *ngFor="let rec of recommendations">
               <div class="rec-img" [routerLink]="['/game', rec.id]">
                  <img [src]="rec.image" [alt]="rec.name">
               </div>
               <div class="rec-info">
                  <span class="publisher">GAME SCIENCE</span>
                  <h3>{{rec.name}}</h3>
                  <div class="rec-footer">
                     <span class="rec-price">{{rec.price}}</span>
                     <button class="rec-cart-btn">+</button>
                  </div>
               </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  `,
  styles: `
    .game-detail-page {
      background-color: var(--bg-dark);
      padding-bottom: 120px;
    }

    /* Hero */
    .hero-detail {
      height: 80vh;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      text-align: center;
    }

    .hero-bg {
      position: absolute;
      inset: 0;
      z-index: 1;
    }

    .hero-bg img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      opacity: 0.5;
    }

    .hero-bg::after {
      content: "";
      position: absolute;
      inset: 0;
      background: linear-gradient(to top, var(--bg-dark) 0%, transparent 50%, rgba(9,9,11,0.6) 100%);
    }

    .hero-content {
      position: relative;
      z-index: 10;
      max-width: 800px;
    }

    .status-label {
      font-size: 11px;
      font-weight: 800;
      color: var(--accent);
      letter-spacing: 2px;
      margin-bottom: 24px;
      display: block;
    }

    .hero-content h1 {
      font-size: 80px;
      line-height: 0.9;
      margin-bottom: 40px;
      text-transform: uppercase;
    }

    .trailer-btn {
      background: rgba(255,255,255,0.05);
      border: 1px solid #3f3f46;
      backdrop-filter: blur(10px);
      color: white;
      padding: 16px 40px;
      border-radius: 40px;
      font-weight: 800;
      font-size: 13px;
      display: flex;
      align-items: center;
      gap: 12px;
      margin: 0 auto;
    }

    .play-icon {
      background: var(--accent);
      width: 24px;
      height: 24px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 10px;
      padding-left: 2px;
    }

    /* Layout */
    .page-container {
      max-width: 1400px;
      margin: -100px auto 0;
      position: relative;
      z-index: 20;
      padding: 0 40px;
    }

    .info-columns {
      display: flex;
      gap: 60px;
      align-items: flex-start;
    }

    .left-column { flex: 1.8; }
    .right-column { flex: 1; }

    /* Left Content */
    .badges-row {
      display: flex;
      gap: 10px;
      margin-bottom: 32px;
    }

    .badge {
      background: #18181b;
      color: var(--accent);
      font-size: 10px;
      font-weight: 800;
      padding: 6px 12px;
      border-radius: 4px;
      border: 1px solid rgba(168, 85, 247, 0.2);
    }

    .story-section { margin-bottom: 60px; }

    .explore-label {
      font-size: 10px;
      color: #71717a;
      font-weight: 800;
      letter-spacing: 2px;
      display: block;
      margin-bottom: 20px;
    }

    .sub-quote {
      font-size: 20px;
      font-style: italic;
      line-height: 1.4;
      margin-bottom: 24px;
      color: #fafafa;
    }

    .description {
      color: var(--text-muted);
      font-size: 15px;
      line-height: 1.8;
    }

    .metadata-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 32px;
      padding-bottom: 60px;
      border-bottom: 1px solid var(--border);
      margin-bottom: 80px;
    }

    .meta-item label {
      display: block;
      font-size: 9px;
      font-weight: 800;
      color: #71717a;
      margin-bottom: 12px;
    }

    .meta-item span {
      font-size: 14px;
      font-weight: 700;
      color: white;
    }

    .platforms { display: flex; gap: 8px; }

    /* Screenshot Gallery */
    .section-header {
      display: flex;
      justify-content: space-between;
      align-items: baseline;
      margin-bottom: 32px;
    }

    .section-header h2 { font-size: 24px; font-style: italic; }
    .section-header h2 span { color: var(--accent); }
    .section-header a { font-size: 11px; font-weight: 800; color: #71717a; }

    .screenshot-grid {
      display: flex;
      gap: 20px;
      margin-bottom: 100px;
    }

    .main-shot { flex: 2; height: 500px; border-radius: 16px; overflow: hidden; }
    .side-shots { flex: 1; display: flex; flex-direction: column; gap: 20px; }
    .side-shots div, .side-shots img { height: 240px; border-radius: 16px; overflow: hidden; }

    .screenshot-grid img { width: 100%; height: 100%; object-fit: cover; }

    /* Requirements */
    .requirements { margin-bottom: 120px; }
    .perf-label { font-size: 10px; color: var(--accent); font-weight: 800; }

    .req-grid { display: flex; gap: 32px; }
    .req-box {
      flex: 1;
      background: #0d0d12;
      border: 1px solid var(--border);
      border-top: 4px solid #3f3f46;
      border-radius: 12px;
      padding: 40px;
    }

    .req-box.rec { border-top-color: var(--accent); }

    .req-box h3 { font-size: 16px; margin-bottom: 32px; color: white; }
    .req-box ul { list-style: none; padding: 0; }
    .req-box li {
      padding: 16px 0;
      border-bottom: 1px solid rgba(255,255,255,0.03);
      font-size: 13px;
      color: #a1a1aa;
    }

    /* Right Column - Buy Card */
    .sticky-card {
      position: sticky;
      top: 100px;
      background: #111116;
      border: 1px solid var(--border);
      border-radius: 24px;
      padding: 40px;
    }

    .card-header { margin-bottom: 40px; }
    .edition { font-size: 10px; font-weight: 700; color: #71717a; margin-bottom: 8px; display: block; }

    .price-wrap { display: flex; align-items: baseline; gap: 20px; }
    .final-price { font-size: 40px; font-weight: 700; font-family: 'Space Grotesk'; }

    .original-price-wrap { display: flex; flex-direction: column; }
    .old-price { font-size: 14px; text-decoration: line-through; color: #71717a; }
    .discount-badge { background: #ec4899; color: white; font-size: 9px; font-weight: 900; padding: 4px 8px; border-radius: 4px; }

    .buy-now-btn {
      width: 100%;
      background: var(--accent);
      color: white;
      padding: 18px;
      border-radius: 12px;
      font-weight: 800;
      font-size: 14px;
      margin-bottom: 32px;
      box-shadow: 0 10px 30px rgba(168, 85, 247, 0.2);
    }

    .buy-benefits { display: flex; flex-direction: column; gap: 16px; margin-bottom: 48px; }
    .benefit { display: flex; align-items: center; gap: 12px; font-size: 13px; color: #a1a1aa; font-weight: 600; }
    .benefit svg { width: 16px; height: 16px; color: var(--accent); }

    .payment-methods { display: flex; gap: 12px; }
    .method-box { width: 48px; height: 32px; background: #27272a; border-radius: 6px; }

    /* Recommendations */
    .section-title-line {
      font-size: 24px;
      font-style: italic;
      display: flex;
      align-items: center;
      gap: 24px;
      margin-bottom: 60px;
    }
    .section-title-line::after { content: ""; height: 2px; flex-grow: 1; background: var(--border); }

    .rec-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 32px; }
    .rec-card { background: #111116; border-radius: 16px; overflow: hidden; }
    .rec-img { height: 240px; overflow: hidden; cursor: pointer; }
    .rec-img img { width: 100%; height: 100%; object-fit: cover; }
    .rec-info { padding: 24px; }
    .publisher { font-size: 9px; font-weight: 800; color: #71717a; margin-bottom: 8px; display: block; }
    .rec-info h3 { font-size: 16px; margin-bottom: 16px; text-transform: uppercase; cursor: pointer; }
    .rec-footer { display: flex; justify-content: space-between; align-items: center; }
    .rec-price { font-weight: 700; color: #a1a1aa; }
    .rec-cart-btn { background: #18181b; border: 1px solid var(--border); color: white; width: 32px; height: 32px; border-radius: 6px; }

    /* Video Overlay */
    .video-overlay {
      position: fixed;
      inset: 0;
      background: rgba(0,0,0,0.9);
      backdrop-filter: blur(20px);
      z-index: 2000;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 40px;
    }

    .video-container {
      width: 100%;
      max-width: 1200px;
      aspect-ratio: 16/9;
      position: relative;
      background: black;
      box-shadow: 0 0 100px rgba(168, 85, 247, 0.4);
      border-radius: 12px;
      overflow: hidden;
    }

    .video-container iframe {
      width: 100%;
      height: 100%;
    }

    .close-overlay {
      position: absolute;
      top: -60px;
      right: 0;
      background: none;
      border: none;
      color: white;
      font-size: 40px;
      cursor: pointer;
    }
  `
})
export class GameDetailComponent implements OnInit {
  game?: Game;
  recommendations: Game[] = [];
  showTrailer: boolean = false;
  safeVideoUrl?: SafeResourceUrl;

  constructor(
    private route: ActivatedRoute,
    private gameService: GameService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      if (id) {
        this.gameService.getGameById(id).subscribe(g => {
          if (g) {
            this.game = g;
            if (g.video) {
              this.safeVideoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(g.video);
            }
          }
          this.loadRecommendations();
          window.scrollTo(0, 0);
        });
      }
    });
  }

  openTrailer() {
    if (this.game?.video) {
      this.showTrailer = true;
    }
  }

  closeTrailer() {
    this.showTrailer = false;
  }

  loadRecommendations() {
    this.gameService.getGames().subscribe(games => {
      this.recommendations = games
        .filter(g => g.id !== this.game?.id)
        .slice(0, 4);
    });
  }
}
