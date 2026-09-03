import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { STARWARS_CONFIG } from '../../../../core/config/starwars.config';
import { TableStarwars } from '../../components/table-starwars/table-starwars';
import { Starwars } from '../../services/starwars';
import { ListStarwars } from './list-starwars';

describe('ListStarwars', () => {
  let component: ListStarwars;
  let fixture: ComponentFixture<ListStarwars>;
  let starwarsService: Starwars;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListStarwars, TableStarwars]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListStarwars);
    component = fixture.componentInstance;
    starwarsService = TestBed.inject(Starwars);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería cargar los personajes al iniciar', () => {
    const spyGetCharacters = jest.spyOn(starwarsService, 'getCharacters').mockReturnValue(of(STARWARS_CONFIG));

    fixture.detectChanges();

    expect(spyGetCharacters).toHaveBeenCalled();
    expect(component.characters).toEqual(STARWARS_CONFIG);
  });

  it('debería pasar los personajes a la tabla', () => {
    jest.spyOn(starwarsService, 'getCharacters').mockReturnValue(of(STARWARS_CONFIG));

    fixture.detectChanges();

    const tableComponent = fixture.debugElement
      .query(By.directive(TableStarwars))
      .componentInstance;
    expect(tableComponent.characters).toEqual(STARWARS_CONFIG);
  });

  it('debería manejar el error al cargar los personajes', () => {
    const errorResponse = new Error('Error al cargar personajes');
    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(starwarsService, 'getCharacters').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.characters).toEqual([]);
  });
});
