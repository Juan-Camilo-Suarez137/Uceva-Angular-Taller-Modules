import { Component, inject } from '@angular/core';
import { Result } from '../../interfaces/nasa.interface';
import { NasaService } from '../../services/nasa.service';

/**
 * Componente contenedor del listado de lanzamientos espaciales.
 *
 * Consume `NasaService` para obtener los lanzamientos de Launch Library 2
 * y los entrega al componente `TableNasaComponent` mediante su plantilla.
 *
 * @remarks
 * Este componente pertenece a la capa de paginas y coordina la comunicacion
 * entre el servicio HTTP y la tabla presentacional.
 *
 * @example
 * ```html
 * <app-list-nasa.component></app-list-nasa.component>
 * ```
 */
@Component({
  selector: 'app-list-nasa.component',
  standalone: false,
  templateUrl: './list-nasa.component.html',
  styleUrl: './list-nasa.component.scss',
})
export class ListNasaComponent {
  /**
   * Lanzamientos recibidos desde la API.
   *
   * @type {Result[]}
   * @remarks
   * Inicia vacio para permitir que la tabla se renderice antes de completar
   * la solicitud HTTP.
   */
  launches: Result[] = [];

  /** Servicio que obtiene la respuesta paginada de lanzamientos. */
  private nasaService = inject(NasaService);

  /**
   * Carga los lanzamientos al inicializar el componente.
   *
   * La respuesta de la API contiene metadatos de paginacion y la coleccion
   * se encuentra en la propiedad `results`.
   */
  ngOnInit(): void {
    this.nasaService.getAllLaunches().subscribe({
      next: (response) => this.launches = response.results,
      error: (error) => console.error(error),
    });
  }
}
