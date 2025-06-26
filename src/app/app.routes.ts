import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'heroes',
    loadChildren: () =>
      import('./features/hero/hero.module').then((m) => m.HeroModule),
  },
  { path: '', redirectTo: '/heroes', pathMatch: 'full' },
];
