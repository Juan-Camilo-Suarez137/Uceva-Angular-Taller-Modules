import { Component, OnInit } from '@angular/core';
import { Starwars } from '../../services/starwars';
import { StarWarsCharacter } from '../../interfaces/starwars';

/**
 * Página principal del módulo de Star Wars.
 *
 * Consume `Starwars` y entrega los personajes al componente de tabla para
 * presentarlos en la interfaz.
 */
@Component({
  selector: 'app-list-starwars',
  standalone: false,
  templateUrl: './list-starwars.html',
  styleUrl: './list-starwars.scss'
})
export class ListStarwars implements OnInit {
  /** Personajes cargados para mostrar en la tabla. */
  characters: StarWarsCharacter[] = [];

  /**
   * Crea la página con el servicio de personajes.
   *
   * @param starwarsService Servicio que proporciona los personajes.
   */
  constructor(private starwarsService: Starwars) {}

  /** Carga los personajes cuando la página termina de inicializarse. */
  ngOnInit(): void {
    this.starwarsService.getCharacters().subscribe({
      next: (data) => this.characters = data,
      error: (error) => console.error(error),
    });
  }
}