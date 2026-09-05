import { TestBed } from '@angular/core/testing';
import { NEVA_CONFIG } from '../../../core/config/neva.config';
import { Neva } from './neva';

describe('Neva', () => {
  let service: Neva;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Neva);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getCharacters debería retornar un observable con los personajes', (done) => {
    service.getCharacters().subscribe((characters) => {
      expect(characters).toEqual(NEVA_CONFIG);
      expect(characters.length).toBe(NEVA_CONFIG.length);
      done();
    });
  });
});
