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
}