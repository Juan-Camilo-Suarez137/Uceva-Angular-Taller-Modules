import { Component, OnInit } from '@angular/core';
import { Neva } from '../../services/neva';
import { NevaCharacter } from '../../interfaces/neva';

/**
 * Página principal del módulo de Neva.
 *
 * Consume `Neva` y entrega los personajes al componente de tabla para
 * presentarlos en la interfaz.
 */
@Component({
  selector: 'app-list-neva',
  standalone: false,
  templateUrl: './list-neva.html',
  styleUrl: './list-neva.scss',
})
export class ListNeva implements OnInit {
  /** Personajes cargados para mostrar en la tabla. */
  characters: NevaCharacter[] = [];

  /**
   * Crea la página con el servicio de personajes.
   *
   * @param nevaService Servicio que proporciona los personajes.
   */
  constructor(private nevaService: Neva) {}

  /** Carga los personajes cuando la página termina de inicializarse. */
  ngOnInit(): void {
    this.nevaService.getCharacters().subscribe({
      next: (data) => (this.characters = data),
      error: (error) => console.error(error),
    });
  }
}
