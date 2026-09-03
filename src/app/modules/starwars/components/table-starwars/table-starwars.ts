import { Component, Input } from '@angular/core';
import { StarWarsCharacter } from '../../interfaces/starwars';

@Component({
  selector: 'app-table-starwars',
  standalone: false,
  templateUrl: './table-starwars.html',
  styleUrl: './table-starwars.scss'
})
export class TableStarwars {
  @Input() characters: StarWarsCharacter[] = [];

  /**
   * Determina la clase de color del badge según la facción del personaje.
   */
  getAffiliationClass(affiliation: string): string {
    const map: Record<string, string> = {
      'Alianza Rebelde': 'badge-rebel',
      'Imperio Galáctico': 'badge-empire',
      'Orden Jedi': 'badge-jedi',
      'Cazarrecompensas': 'badge-bounty'
    };
    return map[affiliation] ?? 'badge-default';
  }
}