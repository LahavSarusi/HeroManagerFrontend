import { Component, Input } from '@angular/core';
import { Hero } from '../../hero.model';

@Component({
  selector: 'app-hero-row',
  templateUrl: './hero-row.html',
  standalone: false,
  styleUrls: ['./hero-row.scss']
})
export class HeroRowComponent {
  @Input() hero!: Hero;
}
