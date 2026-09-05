import { Component, Input } from '@angular/core';
import { NevaCharacter } from '../../interfaces/neva';

/**
 * Componente que muestra los personajes de Neva en una tabla.
 *
 * Recibe los personajes desde la página del módulo y asigna una clase de
 * color a cada insignia según la facción del personaje.
 */
@Component({
  selector: 'app-table-neva',
  standalone: false,
  templateUrl: './table-neva.html',
  styleUrl: './table-neva.scss',
})
export class TableNeva {
  /** Personajes que se renderizarán en las filas de la tabla. */
  @Input() characters: NevaCharacter[] = [];

  /**
   * Determina la clase de color del badge según la facción del personaje.
   */
  getFactionClass(faction: string): string {
    const map: Record<string, string> = {
      'Guardianes del Bosque': 'badge-guardians',
      'La Corrupción': 'badge-corruption',
    };
    return map[faction] ?? 'badge-default';
  }
}
