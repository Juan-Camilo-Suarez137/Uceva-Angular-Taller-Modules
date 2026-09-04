import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListNasaComponent } from './list-nasa.component';

describe('ListNasaComponent', () => {
  let component: ListNasaComponent;
  let fixture: ComponentFixture<ListNasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListNasaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListNasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
