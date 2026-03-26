import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <header class="main-header">
      <div class="header-content">
        <div class="logo-section">
          <a routerLink="/" class="logo">
             <span class="logo-text">Sshinz <span>Game</span></span>
          </a>
        </div>
        
        <nav class="nav-links">
          <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">HOME</a>
          <a routerLink="/all-games" routerLinkActive="active">ALL GAMES</a>
          <a routerLink="/categories" routerLinkActive="active">CATEGORY</a>
          <a routerLink="/gold-card" routerLinkActive="active" class="highlight">GOLD CARD</a>
          <a routerLink="/support" routerLinkActive="active">SUPPORT</a>
          <a routerLink="/faq" routerLinkActive="active">FAQ</a>
        </nav>

        <div class="header-actions">
          <div class="search-bar">
            <svg class="search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
            <input type="text" placeholder="Search games...">
          </div>
          <button class="icon-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4H6z"></path>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <path d="M16 10a4 4 0 0 1-8 0"></path>
            </svg>
          </button>
          <button class="profile-btn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="12" cy="7" r="4"></circle>
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
            </svg>
          </button>
        </div>
      </div>
    </header>
  `,
  styles: `
    .main-header {
      background-color: var(--bg-dark);
      border-bottom: 1px solid var(--border);
      height: 72px;
      display: flex;
      align-items: center;
      position: sticky;
      top: 0;
      z-index: 1000;
      padding: 0 40px;
    }

    .header-content {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      max-width: 1400px;
      margin: 0 auto;
    }

    .logo-text {
      font-size: 22px;
      color: #fff;
      letter-spacing: 0.5px;
      font-weight: 700;
    }

    .logo-text span {
      font-style: italic;
    }

    .nav-links {
      display: flex;
      gap: 32px;
      align-items: center;
    }

    .nav-links a {
      color: #a1a1aa;
      font-size: 13px;
      font-weight: 600;
      transition: color 0.2s;
      letter-spacing: 0.5px;
    }

    .nav-links a:hover {
      color: #fff;
    }

    .nav-links a.active {
      color: #fff;
      background: rgba(168, 85, 247, 0.2);
      padding: 6px 12px;
      border-radius: 4px;
    }

    .nav-links a.highlight {
      color: #d8b4fe;
    }

    .header-actions {
      display: flex;
      align-items: center;
      gap: 20px;
    }

    .search-bar {
      position: relative;
      display: flex;
      align-items: center;
    }

    .search-bar input {
      background: #18181b;
      border: 1px solid #27272a;
      border-radius: 8px;
      padding: 8px 12px 8px 40px;
      color: #fff;
      font-size: 13px;
      width: 200px;
      transition: width 0.3s;
    }

    .search-bar input:focus {
      outline: none;
      border-color: var(--accent);
      width: 240px;
    }

    .search-icon {
      position: absolute;
      left: 12px;
      width: 18px;
      height: 18px;
      color: #71717a;
    }

    .icon-btn, .profile-btn {
      background: none;
      color: #71717a;
      padding: 4px;
      transition: color 0.2s;
    }

    .icon-btn:hover, .profile-btn:hover {
      color: #fff;
    }

    .icon-btn svg, .profile-btn svg {
      width: 22px;
      height: 22px;
    }
  `
})
export class HeaderComponent {}
