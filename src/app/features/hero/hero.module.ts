import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroRoutingModule } from './hero-routing.module';
import { HeroListComponent } from './pages/hero-list/hero-list';
import { HeroRowComponent } from './components/hero-row/hero-row';

@NgModule({
  declarations: [
    HeroListComponent,
    HeroRowComponent
  ],
  imports: [
    CommonModule,
    HeroRoutingModule
  ]
})
export class HeroModule {}
