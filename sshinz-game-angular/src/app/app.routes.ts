import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { LoginComponent } from './pages/login.component';
import { GameDetailComponent } from './pages/game-detail.component';
import { AllGamesComponent } from './pages/all-games.component';
import { CategoryComponent } from './pages/category.component';
import { GoldCardComponent } from './pages/gold-card.component';
import { SupportComponent } from './pages/support.component';
import { FaqComponent } from './pages/faq.component';

import { MainLayoutComponent } from './layout/main-layout.component';

export const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'categories', component: CategoryComponent },
      { path: 'gold-card', component: GoldCardComponent },
      { path: 'support', component: SupportComponent },
      { path: 'faq', component: FaqComponent },
      { path: 'all-games', component: AllGamesComponent },
      { path: 'game/:id', component: GameDetailComponent },
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '**', redirectTo: 'all-games' }
];
