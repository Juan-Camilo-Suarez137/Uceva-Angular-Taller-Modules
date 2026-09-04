import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Nasas } from './nasas';

describe('Nasas', () => {
  let component: Nasas;
  let fixture: ComponentFixture<Nasas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Nasas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Nasas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
