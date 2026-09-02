import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { StarWarsCharacter } from '../interfaces/starwars';
import { STARWARS_CONFIG } from '../../../core/config/starwars.config';

@Injectable({
  providedIn: 'root'
})
export class Starwars {

  getCharacters(): Observable<StarWarsCharacter[]> {
    return of(STARWARS_CONFIG);
  }
}