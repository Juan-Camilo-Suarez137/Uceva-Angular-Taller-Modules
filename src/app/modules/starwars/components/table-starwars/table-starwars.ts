import { Component, Input } from '@angular/core';
import { StarWarsCharacter } from '../../interfaces/starwars';

/**
 * Componente que muestra los personajes de Star Wars en una tabla.
 *
 * Recibe los personajes desde la página del módulo y asigna una clase de
 * color a cada insignia según la facción del personaje.
 */
@Component({
  selector: 'app-table-starwars',
  standalone: false,
  templateUrl: './table-starwars.html',
  styleUrl: './table-starwars.scss'
})
export class TableStarwars {
  /** Personajes que se renderizarán en las filas de la tabla. */
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