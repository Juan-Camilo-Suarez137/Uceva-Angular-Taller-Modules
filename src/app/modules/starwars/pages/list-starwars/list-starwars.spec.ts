import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStarwars } from './list-starwars';

describe('ListStarwars', () => {
  let component: ListStarwars;
  let fixture: ComponentFixture<ListStarwars>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListStarwars]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListStarwars);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
