import { NevaCharacter } from '../../modules/neva/interfaces/neva';

/**
 * Fuente de datos estática para el módulo de Neva.
 * Simula el origen de información que normalmente
 * vendría de un backend, pero se gestiona desde el Core
 * como archivo de configuración del módulo.
 */
export const NEVA_CONFIG: NevaCharacter[] = [
  {
    id: 1,
    name: 'Alba',
    role: 'Protagonista',
    season: 'Primavera',
    faction: 'Guardianes del Bosque',
    ability: 'Espada',
  },
  {
    id: 2,
    name: 'Neva (cachorra)',
    role: 'Compañera',
    season: 'Primavera',
    faction: 'Guardianes del Bosque',
    ability: 'Instinto salvaje',
  },
  {
    id: 3,
    name: 'Neva (joven)',
    role: 'Compañera',
    season: 'Verano',
    faction: 'Guardianes del Bosque',
    ability: 'Salto y garras',
  },
  {
    id: 4,
    name: 'Neva (adulta)',
    role: 'Compañera',
    season: 'Invierno',
    faction: 'Guardianes del Bosque',
    ability: 'Combate y protección',
  },
  {
    id: 5,
    name: 'Criatura Corrupta',
    role: 'Enemigo',
    season: 'Otoño',
    faction: 'La Corrupción',
    ability: 'Zarpas oscuras',
  },
  {
    id: 6,
    name: 'Guardián Ancestral',
    role: 'Aliado',
    season: 'Verano',
    faction: 'Guardianes del Bosque',
    ability: 'Sabiduría antigua',
  },
  {
    id: 7,
    name: 'Sombra Errante',
    role: 'Enemigo',
    season: 'Invierno',
    faction: 'La Corrupción',
    ability: 'Veneno',
  },
  {
    id: 8,
    name: 'Espíritu del Bosque',
    role: 'Aliado',
    season: 'Primavera',
    faction: 'Guardianes del Bosque',
    ability: 'Curación',
  },
];
