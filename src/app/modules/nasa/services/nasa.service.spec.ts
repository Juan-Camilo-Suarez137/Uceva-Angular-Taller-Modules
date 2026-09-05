import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { NasaService } from './nasa.service';

describe('NasaService', () => {
  let service: NasaService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [provideHttpClient(), provideHttpClientTesting()],
    });
    service = TestBed.inject(NasaService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should request all launches', () => {
    service.getAllLaunches().subscribe();

    const request = httpTestingController.expectOne('https://ll.thespacedevs.com/2.2.0/launch/');
    expect(request.request.method).toBe('GET');
    request.flush({ count: 0, next: '', previous: null, results: [] });
  });

  it('should return the launches response', () => {
    const response = {
      count: 1,
      next: '',
      previous: null,
      results: [],
    };

    service.getAllLaunches().subscribe(result => {
      expect(result).toEqual(response);
    });

    const request = httpTestingController.expectOne('https://ll.thespacedevs.com/2.2.0/launch/');
    request.flush(response);
  });

  it('should request launches with pagination parameters', () => {
    service.getLaunches(20, 40).subscribe();

    const request = httpTestingController.expectOne(
      request => request.url === 'https://ll.thespacedevs.com/2.2.0/launch/'
        && request.params.get('limit') === '20'
        && request.params.get('offset') === '40',
    );
    expect(request.request.method).toBe('GET');
    request.flush({ count: 0, next: '', previous: null, results: [] });
  });
});
