import { Component } from '@angular/core';
/**
 * Componente contenedor de la sección de la NASA.
 *
 * Este componente funciona como contenedor de todas las rutas relacionadas
 * con los datos de la NASA, mostrando sus componentes hijos dentro del `<router-outlet>`.
 *
 * @remarks
 * Forma parte de la capa de presentación y se considera un **organismo**.
 *
 * @example
 * ```html
 * <app-nasa></app-nasa>
 * ```
 */
@Component({
  selector: 'app-nasa.component',
  standalone: false,
  template: `<router-outlet></router-outlet>`,
})
export class NasaComponent {

}
