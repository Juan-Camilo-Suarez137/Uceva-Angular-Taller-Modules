import { StarWarsCharacter } from '../../modules/starwars/interfaces/starwars';
/**
 * Fuente de datos estática para el módulo de Star Wars.
 * Simula el origen de información que normalmente
 * vendría de un backend, pero se gestiona desde el Core
 * como archivo de configuración del módulo.
 */
export const STARWARS_CONFIG: StarWarsCharacter[] = [
  { 
    id: 1,
    name: 'Luke Skywalker',
    species: 'Humano',
    homeworld: 'Tatooine',
    affiliation: 'Alianza Rebelde',
    weapon: 'Sable de luz' 
    },

  { 
    id: 2,
    name: 'Leia Organa',
    species: 'Humano',
    homeworld: 'Alderaan',
    affiliation: 'Alianza Rebelde',
     weapon: 'Blaster'
     },
  { 
    id: 3,
    name: 'Han Solo',
    species: 'Humano',
    homeworld: 'Corellia',
    affiliation: 'Alianza Rebelde',
    weapon: 'Blaster' 
     },
  { 
    id: 4,
    name: 'Darth Vader',
    species: 'Humano',
    homeworld: 'Tatooine',
    affiliation: 'Imperio Galáctico',
        weapon: 'Sable de luz'
     },
  { 
    id: 5,
    name: 'Yoda',
    species: 'Desconocida',
    homeworld: 'Dagobah',
    affiliation: 'Orden Jedi',
    weapon: 'Sable de luz' 
    },
  { 
    id: 6,
    name: 'Chewbacca', 
    species: 'Wookiee',
    homeworld: 'Kashyyyk',
    affiliation: 'Alianza Rebelde',
    weapon: 'Ballesta' 
    },
  { 
    id: 7,
    name: 'Obi-Wan Kenobi',
    species: 'Humano',
    homeworld: 'Stewjon',
    affiliation: 'Orden Jedi',
    weapon: 'Sable de luz' 
    },
  { 
    id: 8,
    name: 'Boba Fett',
    species: 'Humano (clon)',
    homeworld: 'Kamino',
    affiliation: 'Cazarrecompensas',
    weapon: 'Blaster' 
    },
];