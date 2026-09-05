/**
 * Representa un personaje o criatura del videojuego Neva
 * mostrado en el módulo de Neva.
 */
export interface NevaCharacter {
  /** Identificador único del personaje */
  id: number;
  /** Nombre del personaje */
  name: string;
  /** Rol dentro de la historia (Protagonista, Compañera, Aliado, Enemigo) */
  role: string;
  /** Estación del juego en la que aparece */
  season: string;
  /** Facción a la que pertenece */
  faction: string;
  /** Habilidad o rasgo característico */
  ability: string;
}
