import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../components/header.component';
import { FooterComponent } from '../components/footer.component';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  template: `
    <div class="app-layout">
      <app-header></app-header>
      <main>
        <router-outlet></router-outlet>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styles: `
    .app-layout { 
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      background-color: var(--bg-dark);
    }
    main { 
      flex-grow: 1;
    }
  `
})
export class MainLayoutComponent {}
