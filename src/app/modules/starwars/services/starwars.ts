import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StarWarsCharacter } from '../interfaces/starwars';
import { STARWARS_CONFIG } from '../../../core/config/starwars.config';

/**
 * Servicio para gestionar los personajes de Star Wars.
 *
 * Proporciona el listado de personajes utilizado por el módulo. Actualmente
 * los datos se obtienen desde la configuración estática `STARWARS_CONFIG`.
 */
@Injectable({
  providedIn: 'root'
})
export class Starwars {

  /**
   * Obtiene todos los personajes disponibles.
   *
   * @returns Observable con el listado de personajes (`StarWarsCharacter[]`).
   */
  getCharacters(): Observable<StarWarsCharacter[]> {
    return of(STARWARS_CONFIG);
  }
}