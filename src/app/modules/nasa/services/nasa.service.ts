import { HttpClient, HttpParams } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LaunchResponse } from '../interfaces/nasa.interface';

/**
 * Servicio para consultar los lanzamientos espaciales de Launch Library 2.
 *
 * Centraliza las solicitudes HTTP relacionadas con los lanzamientos y entrega
 * las respuestas tipadas con `LaunchResponse` para que los componentes no
 * dependan directamente de la URL ni de la estructura de la API.
 *
 * @remarks
 * El servicio está registrado en el inyector raíz y utiliza `HttpClient`,
 * configurado mediante `provideHttpClient()` en `AppModule`.
 *
 * @see https://ll.thespacedevs.com/2.2.0/launch/
 *
 * @example
 * ```ts
 * constructor(private nasaService: NasaService) {}
 *
 * ngOnInit(): void {
 *   this.nasaService.getAllLaunches().subscribe(response => {
 *     console.log(response.results);
 *   });
 * }
 * ```
 */
@Injectable({
  providedIn: 'root',
})
export class NasaService {
  /** URL del recurso de lanzamientos de Launch Library 2. */
  private readonly apiUrl = 'https://ll.thespacedevs.com/2.2.0/launch/';

  /** Cliente HTTP utilizado para realizar las solicitudes a la API. */
  private readonly http = inject(HttpClient);

  /**
   * Obtiene la respuesta predeterminada de lanzamientos de la API.
   *
   * La API devuelve una respuesta paginada. Para consultar una cantidad u
   * offset específicos, se puede utilizar `getLaunches`.
   *
   * @returns Observable con la respuesta paginada de lanzamientos.
   */
  getAllLaunches(): Observable<LaunchResponse> {
    return this.http.get<LaunchResponse>(this.apiUrl);
  }

  /**
   * Obtiene una página específica de lanzamientos.
   *
   * @param limit Cantidad máxima de lanzamientos que debe devolver la API.
   * @param offset Número de registros que se deben omitir antes de comenzar
   * la página solicitada.
   * @returns Observable con la respuesta paginada de lanzamientos.
   *
   * @example
   * ```ts
   * this.nasaService.getLaunches(20, 40).subscribe(response => {
   *   console.log(response.results);
   * });
   * ```
   */
  getLaunches(limit: number, offset: number): Observable<LaunchResponse> {
    const params = new HttpParams()
      .set('limit', limit)
      .set('offset', offset);

    return this.http.get<LaunchResponse>(this.apiUrl, { params });
  }
}
