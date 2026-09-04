/**
 * Representa un personaje del universo Star Wars
 * mostrado en el módulo de Star Wars.
 */
export interface StarWarsCharacter {
  /** Identificador único del personaje */
  id: number;
  /** Nombre del personaje */
  name: string;
  /** Especie a la que pertenece */
  species: string;
  /** Planeta de origen */
  homeworld: string;
  /** Facción a la que pertenece (Rebeldes, Imperio, etc.) */
  affiliation: string;
  /** Arma o herramienta característica */
  weapon: string;
}