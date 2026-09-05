import { CommonModule } from '@angular/common';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of, throwError } from 'rxjs';

import { TableNasaComponent } from '../../components/table-nasa/table-nasa.component';
import { NasaService } from '../../services/nasa.service';
import { ListNasaComponent } from './list-nasa.component';

describe('ListNasaComponent', () => {
  let component: ListNasaComponent;
  let fixture: ComponentFixture<ListNasaComponent>;
  let nasaServiceMock: { getAllLaunches: jest.Mock };

  beforeEach(async () => {
    nasaServiceMock = {
      getAllLaunches: jest.fn(() => of({ count: 0, next: '', previous: null, results: [] })),
    };

    await TestBed.configureTestingModule({
      declarations: [ListNasaComponent, TableNasaComponent],
      imports: [CommonModule],
      providers: [
        {
          provide: NasaService,
          useValue: nasaServiceMock,
        },
      ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListNasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should log service errors', () => {
    const error = new Error('Error loading launches');
    nasaServiceMock.getAllLaunches.mockReturnValueOnce(throwError(() => error));
    const consoleError = jest.spyOn(console, 'error').mockImplementation();

    const errorFixture = TestBed.createComponent(ListNasaComponent);
    errorFixture.detectChanges();

    expect(consoleError).toHaveBeenCalledWith(error);
    consoleError.mockRestore();
  });
});
