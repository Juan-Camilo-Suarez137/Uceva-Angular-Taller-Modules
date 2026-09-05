import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of, throwError } from 'rxjs';
import { NEVA_CONFIG } from '../../../../core/config/neva.config';
import { TableNeva } from '../../components/table-neva/table-neva';
import { Neva } from '../../services/neva';
import { ListNeva } from './list-neva';

describe('ListNeva', () => {
  let component: ListNeva;
  let fixture: ComponentFixture<ListNeva>;
  let nevaService: Neva;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListNeva, TableNeva],
    }).compileComponents();

    fixture = TestBed.createComponent(ListNeva);
    component = fixture.componentInstance;
    nevaService = TestBed.inject(Neva);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería cargar los personajes al iniciar', () => {
    const spyGetCharacters = jest.spyOn(nevaService, 'getCharacters').mockReturnValue(of(NEVA_CONFIG));

    fixture.detectChanges();

    expect(spyGetCharacters).toHaveBeenCalled();
    expect(component.characters).toEqual(NEVA_CONFIG);
  });

  it('debería pasar los personajes a la tabla', () => {
    jest.spyOn(nevaService, 'getCharacters').mockReturnValue(of(NEVA_CONFIG));

    fixture.detectChanges();

    const tableComponent = fixture.debugElement.query(By.directive(TableNeva)).componentInstance;
    expect(tableComponent.characters).toEqual(NEVA_CONFIG);
  });

  it('debería manejar el error al cargar los personajes', () => {
    const errorResponse = new Error('Error al cargar personajes');
    jest.spyOn(console, 'error').mockImplementation(() => {});
    jest.spyOn(nevaService, 'getCharacters').mockReturnValue(throwError(() => errorResponse));

    fixture.detectChanges();

    expect(console.error).toHaveBeenCalledWith(errorResponse);
    expect(component.characters).toEqual([]);
  });
});
