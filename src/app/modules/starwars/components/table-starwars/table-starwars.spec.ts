import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { STARWARS_CONFIG } from '../../../../core/config/starwars.config';
import { TableStarwars } from './table-starwars';

describe('TableStarwars', () => {
  let component: TableStarwars;
  let fixture: ComponentFixture<TableStarwars>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableStarwars]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableStarwars);
    component = fixture.componentInstance;
    component.characters = STARWARS_CONFIG;
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
      expect(columns[1].nativeElement.textContent.trim()).toBe(character.species);
      expect(columns[2].nativeElement.textContent.trim()).toBe(character.homeworld);
      expect(columns[3].nativeElement.textContent.trim()).toBe(character.affiliation);
      expect(columns[4].nativeElement.textContent.trim()).toBe(character.weapon);
    });
  });

  it('debería aplicar el color correspondiente a cada facción', () => {
    const rows = fixture.debugElement.queryAll(By.css('tbody tr'));

    rows.forEach((row, index) => {
      const character = component.characters[index];
      const badge = row.queryAll(By.css('td'))[3].query(By.css('span'));

      expect(badge.nativeElement.className).toContain('badge');
      expect(badge.nativeElement.className).toContain(
        component.getAffiliationClass(character.affiliation)
      );
    });
  });

  it('debería retornar la clase correcta para cada facción', () => {
    expect(component.getAffiliationClass('Alianza Rebelde')).toBe('badge-rebel');
    expect(component.getAffiliationClass('Imperio Galáctico')).toBe('badge-empire');
    expect(component.getAffiliationClass('Orden Jedi')).toBe('badge-jedi');
    expect(component.getAffiliationClass('Cazarrecompensas')).toBe('badge-bounty');
  });

  it('debería retornar la clase por defecto para una facción desconocida', () => {
    expect(component.getAffiliationClass('Neutral')).toBe('badge-default');
  });
});
