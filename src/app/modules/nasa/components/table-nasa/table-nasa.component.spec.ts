import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableNasaComponent } from './table-nasa.component';

describe('TableNasaComponent', () => {
  let component: TableNasaComponent;
  let fixture: ComponentFixture<TableNasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableNasaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TableNasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
