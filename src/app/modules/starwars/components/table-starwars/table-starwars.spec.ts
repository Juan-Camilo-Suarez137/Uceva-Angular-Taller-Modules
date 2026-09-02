import { ComponentFixture, TestBed } from '@angular/core/testing';

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
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
