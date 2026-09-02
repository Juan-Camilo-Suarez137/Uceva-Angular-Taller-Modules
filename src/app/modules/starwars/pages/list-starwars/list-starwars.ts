import { Component, OnInit } from '@angular/core';
import { Starwars } from '../../services/starwars';
import { StarWarsCharacter } from '../../interfaces/starwars';

@Component({
  selector: 'app-list-starwars',
  standalone: false,
  templateUrl: './list-starwars.html',
  styleUrl: './list-starwars.scss'
})
export class ListStarwars implements OnInit {
  characters: StarWarsCharacter[] = [];

  constructor(private starwarsService: Starwars) {}

  ngOnInit(): void {
    this.starwarsService.getCharacters().subscribe((data) => {
      this.characters = data;
    });
  }
}