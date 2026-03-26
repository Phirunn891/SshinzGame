import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-gold-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="gold-card-page">
      <!-- Hero Section -->
      <section class="hero-section">
        <div class="hero-content">
          <span class="premium-label">GOLD MEMBERSHIP</span>
          <h1>THE <span>UPGRADE</span></h1>
          <p>The ultimate key to the Sshinz NEON ecosystem. Exclusive rewards await those with the status.</p>
        </div>
        <div class="hero-visual">
          <!-- Official Gold Card -->
          <div class="card-container" 
               #cardContainer
               (mousemove)="onMouseMove($event)"
               (mouseleave)="onMouseLeave()">
            <div class="official-gold-card" 
                 [style.transform]="cardTransform">
              <div class="card-bg-layer"></div>
              <div class="card-texture-layer"></div>
              
              <!-- Character is the main focus -->
              <div class="card-character-layer">
                 <img src="/.img/gold_card_character.png" alt="Card Character">
              </div>
              
              <!-- Premium Shine Effect -->
              <div class="card-shine" [style.background]="shineBackground"></div>

              <div class="card-content-layer">
                 <div class="top-row">
                    <div class="branding">
                       <span class="brand-name">KINETIC NEON</span>
                    </div>
                    <div class="card-chip"></div>
                 </div>
                 
                 <div class="bottom-row">
                    <div class="operator-info">
                       <span class="name">GOLD OPERATOR</span>
                    </div>
                    <div class="shield-badge">
                       <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Pricing Section -->
      <section class="pricing-section">
        <div class="pricing-grid">
          <!-- Starter -->
          <div class="plan-card" (click)="selectPlan('starter')">
            <div class="plan-header">
              <span class="plan-type">STARTER</span>
              <h3>CORE</h3>
            </div>
            <ul class="plan-benefits">
              <li><span>$10 Wallet</span></li>
              <li><span>+5% Bonus</span></li>
            </ul>
            <div class="plan-footer">
              <div class="price">$10</div>
              <button class="plan-btn">TOP UP</button>
            </div>
          </div>

          <!-- Elite (Most Popular) -->
          <div class="plan-card popular" (click)="selectPlan('elite')">
            <div class="popular-tag">BEST</div>
            <div class="plan-header">
              <h3>ELITE</h3>
            </div>
            <ul class="plan-benefits">
              <li><span>$50 Wallet</span></li>
              <li><span>+15% Bonus</span></li>
              <li><span>VIP Badge</span></li>
            </ul>
            <div class="plan-footer">
              <div class="price">$50</div>
              <button class="plan-btn elite-btn">ELITE UPGRADE</button>
            </div>
          </div>

          <!-- Ultimate -->
          <div class="plan-card" (click)="selectPlan('ultimate')">
            <div class="plan-header">
              <span class="plan-type">LEGENDARY</span>
              <h3>ULTIMATE</h3>
            </div>
            <ul class="plan-benefits">
              <li><span>$100 Wallet</span></li>
              <li><span>+30% Bonus</span></li>
              <li><span>Physical Card</span></li>
            </ul>
            <div class="plan-footer">
              <div class="price">$100</div>
              <button class="plan-btn">CLAIM</button>
            </div>
          </div>
        </div>
      </section>

      <!-- Benefits Footer Section -->
      <section class="benefits-footer">
        <div class="benefits-grid">
          <div class="benefit-item">
            <div class="b-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.71-2.13.71-2.13l-1.58-1.58s-1.29 0-2.13.71z"></path></svg></div>
            <h4>INSTANT</h4>
            <p>Funds added in milliseconds.</p>
          </div>
          <div class="benefit-item">
            <div class="b-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg></div>
            <h4>SECURE</h4>
            <p>Multi-layered encryption.</p>
          </div>
          <div class="benefit-item">
            <div class="b-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 12 20 22 4 22 4 12"></polyline><rect x="2" y="7" width="20" height="5"></rect></svg></div>
            <h4>LOOT</h4>
            <p>Monthly exclusive drops.</p>
          </div>
          <div class="benefit-item">
            <div class="b-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg></div>
            <h4>HELP</h4>
            <p>Dedicated support staff.</p>
          </div>
        </div>
      </section>
    </div>
  `,
  styles: `
    .gold-card-page {
      background-color: var(--bg-dark);
      padding: 120px 40px;
      overflow-x: hidden;
    }

    /* Hero Section */
    .hero-section {
      max-width: 1200px;
      margin: 0 auto 160px;
      display: flex;
      align-items: center;
      gap: 100px;
    }

    .hero-content { flex: 0.8; }

    .premium-label {
      background: rgba(168, 85, 247, 0.1);
      color: var(--accent);
      font-size: 10px;
      font-weight: 800;
      padding: 6px 12px;
      border-radius: 6px;
      letter-spacing: 1px;
      display: inline-block;
      margin-bottom: 24px;
    }

    .hero-content h1 {
      font-size: 80px;
      line-height: 0.9;
      margin-bottom: 32px;
    }

    .hero-content h1 span {
      color: var(--accent);
      font-style: italic;
    }

    .hero-content p {
      color: var(--text-muted);
      font-size: 18px;
      line-height: 1.6;
      max-width: 400px;
    }

    /* Official Gold Card */
    .hero-visual { 
      flex: 1.2; 
      display: flex; 
      justify-content: center; 
      perspective: 2000px; 
    }

    .card-container {
      cursor: pointer;
      position: relative;
    }

    .official-gold-card {
      width: 500px;
      height: 320px;
      background: linear-gradient(135deg, #d4af37 0%, #f9d976 50%, #d4af37 100%);
      border-radius: 24px;
      position: relative;
      overflow: hidden;
      box-shadow: 0 50px 100px rgba(0,0,0,0.5), inset 0 0 20px rgba(255,255,255,0.2);
      color: #1a1a1a;
      font-family: 'Space Grotesk', sans-serif;
      transform-style: preserve-3d;
      transition: transform 0.5s cubic-bezier(0.23, 1, 0.32, 1);
    }

    .card-shine {
      position: absolute;
      inset: -50%;
      background: radial-gradient(circle at 50% 50%, rgba(255,255,255,0.5) 0%, transparent 60%);
      z-index: 5;
      pointer-events: none;
      opacity: 0;
      transition: opacity 0.3s;
    }

    .card-container:hover .card-shine {
      opacity: 1;
    }

    .card-bg-layer {
      position: absolute;
      inset: 0;
      background: linear-gradient(to right, rgba(0,0,0,0.05), transparent 60%);
    }

    .card-texture-layer {
      position: absolute;
      inset: 0;
      background-image: radial-gradient(rgba(0,0,0,0.1) 1px, transparent 1px);
      background-size: 8px 8px;
      opacity: 0.15;
    }

    .card-character-layer {
      position: absolute;
      inset: 0;
      z-index: 1;
      overflow: hidden;
      mask-image: linear-gradient(to right, black 60%, transparent);
    }

    .card-character-layer img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: left center;
      filter: grayscale(1) contrast(1.1) brightness(0.9);
      mix-blend-mode: multiply;
      opacity: 0.9;
      transform: translateZ(80px) scale(1.1);
    }

    .card-content-layer {
      position: relative;
      z-index: 2;
      height: 100%;
      padding: 40px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      transform: translateZ(40px);
    }

    .top-row {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }

    .brand-name {
      font-size: 20px;
      font-weight: 900;
      letter-spacing: 1px;
      font-style: italic;
    }

    .card-chip {
      width: 52px;
      height: 40px;
      background: linear-gradient(135deg, #333, #000);
      border-radius: 8px;
      box-shadow: inset 0 0 5px rgba(255,255,255,0.2);
    }

    .bottom-row {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
    }

    .name {
      font-size: 18px;
      font-weight: 800;
      letter-spacing: 0.5px;
    }

    .shield-badge {
      width: 32px;
      height: 32px;
      background: rgba(0,0,0,0.1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: rgba(0,0,0,0.5);
    }

    .shield-badge svg { width: 18px; height: 18px; }

    /* Pricing Section */
    .pricing-grid {
      max-width: 1200px;
      margin: 0 auto 120px;
      display: flex;
      gap: 24px;
    }

    .plan-card {
      flex: 1;
      background: #0d0d12;
      border: 1px solid var(--border);
      border-radius: 20px;
      padding: 32px;
      display: flex;
      flex-direction: column;
      transition: all 0.3s;
      cursor: pointer;
    }

    .plan-card:hover { 
      transform: translateY(-8px); 
      border-color: #3f3f46;
    }
    
    .plan-card.popular { 
      background: #111118;
      border-color: var(--accent); 
    }

    .popular-tag {
      position: absolute;
      top: -10px;
      right: 24px;
      background: #ec4899;
      color: white;
      font-size: 9px;
      font-weight: 900;
      padding: 3px 10px;
      border-radius: 20px;
    }

    .plan-header { margin-bottom: 32px; }
    .plan-type { font-size: 9px; font-weight: 800; color: #71717a; letter-spacing: 1px; margin-bottom: 4px; display: block; }
    .plan-header h3 { font-size: 24px; }

    .plan-benefits { list-style: none; padding: 0; margin-bottom: 40px; flex-grow: 1; }
    .plan-benefits li { padding: 8px 0; display: flex; align-items: center; gap: 10px; color: var(--text-muted); font-size: 13px; font-weight: 600; }
    .plan-benefits li::before { content: "•"; color: var(--accent); }

    .plan-footer { display: flex; flex-direction: column; gap: 16px; }
    .price { font-size: 40px; font-weight: 700; color: white; }

    .plan-btn { background: #18181b; color: white; padding: 14px; border-radius: 10px; font-weight: 800; font-size: 11px; border: 1px solid #27272a; }
    .elite-btn { background: var(--accent); border: none; }

    /* Exclusive Benefits */
    .benefits-footer { max-width: 1200px; margin: 0 auto; }
    .benefits-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
    .benefit-item { background: #09090b; border: 1px solid var(--border); border-radius: 16px; padding: 24px; text-align: center; transition: all 0.3s; }
    .benefit-item:hover { border-color: var(--accent); transform: scale(1.05); }
    .b-icon { color: var(--accent); margin-bottom: 16px; }
    .b-icon svg { width: 24px; height: 24px; margin: 0 auto; }
    .benefit-item h4 { font-size: 12px; margin-bottom: 8px; letter-spacing: 1px; }
    .benefit-item p { font-size: 11px; color: #71717a; }

    @media (max-width: 1000px) {
      .hero-section { flex-direction: column; text-align: center; }
      .hero-content { margin-bottom: 60px; }
      .hero-view-all { margin: 0 auto; }
      .pricing-grid { flex-direction: column; }
    }
  `
})
export class GoldCardComponent {
  cardTransform = 'rotateX(0deg) rotateY(0deg)';
  shineBackground = '';

  @ViewChild('cardContainer') cardContainer!: ElementRef;

  onMouseMove(event: MouseEvent) {
    if (!this.cardContainer) return;

    const el = this.cardContainer.nativeElement;
    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (centerY - y) / 15;
    const rotateY = (x - centerX) / 15;
    
    this.cardTransform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    
    // Shine effect position
    const shineX = (x / rect.width) * 100;
    const shineY = (y / rect.height) * 100;
    this.shineBackground = `radial-gradient(circle at ${shineX}% ${shineY}%, rgba(255,255,255,0.5) 0%, transparent 60%)`;
  }

  onMouseLeave() {
    this.cardTransform = 'rotateX(0deg) rotateY(0deg)';
    this.shineBackground = '';
  }

  selectPlan(plan: string) {
    alert(`Selecting ${plan.toUpperCase()} plan.`);
  }
}
