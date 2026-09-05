import { Component, Input } from '@angular/core';
import { BadgeType } from '../../../shared/interfaces/badge.interface';
import { Result, StatusName } from '../../interfaces/nasa.interface';

/**
 * Componente de tabla de lanzamientos espaciales.
 *
 * Presenta los datos principales de cada lanzamiento recibido desde
 * Launch Library 2, incluyendo nombre, estado, mision, cohete, ubicacion
 * y fecha programada.
 *
 * @remarks
 * Este componente es presentacional: recibe los lanzamientos mediante el
 * `@Input` `launches` y no realiza solicitudes HTTP directamente.
 *
 * @example
 * ```html
 * <app-table-nasa [launches]="launches"></app-table-nasa>
 * ```
 */
@Component({
  selector: 'app-table-nasa',
  standalone: false,
  templateUrl: './table-nasa.component.html',
})
export class TableNasaComponent {
  /**
   * Lanzamientos que se mostraran en las filas de la tabla.
   *
   * @type {Result[]}
   * @remarks
   * Cada elemento contiene la informacion anidada del estado, la mision,
   * el cohete y la plataforma de lanzamiento.
   */
  @Input() launches: Result[] = [];

  /**
   * Mapeo de estados de lanzamiento a colores del badge.
   *
   * Los colores permiten distinguir visualmente el resultado o la órbita
   * asociada a cada lanzamiento.
   */
  statusMap: Record<StatusName, BadgeType> = {
    'Launch Successful': 'success',
    'Launch Failure': 'danger',
    'Low Earth Orbit': 'primary',
    'Elliptical Orbit': 'warning',
  };
}