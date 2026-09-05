import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NevaCharacter } from '../interfaces/neva';
import { NEVA_CONFIG } from '../../../core/config/neva.config';

/**
 * Servicio para gestionar los personajes de Neva.
 *
 * Proporciona el listado de personajes utilizado por el módulo. Actualmente
 * los datos se obtienen desde la configuración estática `NEVA_CONFIG`.
 */
@Injectable({
  providedIn: 'root',
})
export class Neva {
  /**
   * Obtiene todos los personajes disponibles.
   *
   * @returns Observable con el listado de personajes (`NevaCharacter[]`).
   */
  getCharacters(): Observable<NevaCharacter[]> {
    return of(NEVA_CONFIG);
  }
}
