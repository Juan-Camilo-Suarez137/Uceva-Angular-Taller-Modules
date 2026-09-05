import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NEVA_CONFIG } from '../../../../core/config/neva.config';
import { TableNeva } from './table-neva';

describe('TableNeva', () => {
  let component: TableNeva;
  let fixture: ComponentFixture<TableNeva>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableNeva],
    }).compileComponents();

    fixture = TestBed.createComponent(TableNeva);
    component = fixture.componentInstance;
    component.characters = NEVA_CONFIG;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('debería renderizar una tabla', () => {
    expect(fixture.debugElement.query(By.css('table'))).toBeTruthy();
  });

  it('debería renderizar una fila por cada personaje', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));
    expect(rows.length).toBe(component.characters.length);
  });

  it('debería mostrar los datos de cada personaje', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));

    rows.forEach((row, index) => {
      const columns = row.queryAll(By.css('td'));
      const character = component.characters[index];

      expect(columns[0].nativeElement.textContent.trim()).toBe(character.name);
      expect(columns[1].nativeElement.textContent.trim()).toBe(character.role);
      expect(columns[2].nativeElement.textContent.trim()).toBe(character.season);
      expect(columns[4].nativeElement.textContent.trim()).toBe(character.ability);
    });
  });

  it('debería retornar la clase correcta para cada facción', () => {
    expect(component.getFactionClass('Guardianes del Bosque')).toBe('badge-guardians');
    expect(component.getFactionClass('La Corrupción')).toBe('badge-corruption');
  });

  it('debería retornar la clase por defecto para una facción desconocida', () => {
    expect(component.getFactionClass('Neutral')).toBe('badge-default');
  });
});
