import { TestBed } from '@angular/core/testing';
import { STARWARS_CONFIG } from '../../../core/config/starwars.config';
import { Starwars } from './starwars';

describe('Starwars', () => {
  let service: Starwars;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Starwars);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getCharacters debería retornar un observable con los personajes', (done) => {
    service.getCharacters().subscribe(characters => {
      expect(characters).toEqual(STARWARS_CONFIG);
      expect(characters.length).toBe(STARWARS_CONFIG.length);
      done();
    });
  });
});
