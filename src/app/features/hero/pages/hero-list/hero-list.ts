import { Component } from '@angular/core';
import { Hero } from '../../hero.model';

@Component({
  selector: 'app-hero-list',
  templateUrl: './hero-list.html',
  standalone: false,
  styleUrls: ['./hero-list.scss'],
})
export class HeroListComponent {
  heroes: Hero[] = [
    {
      id: 1,
      name: 'Superman',
      suit_color: 'blue',
      has_cape: true,
      last_mission: '2025-06-24T10:00:00Z',
      is_retired: false
    },
    {
      id: 2,
      name: 'Batman',
      suit_color: 'black',
      has_cape: true,
      last_mission: '2025-06-20T16:30:00Z',
      is_retired: false
    }
  ];
}
