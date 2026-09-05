/**
 * Respuesta paginada de la API de lanzamientos espaciales.
 *
 * Contiene el total de resultados, los enlaces de paginación y la colección
 * de lanzamientos disponible para mostrar en la aplicación.
 */
export interface LaunchResponse {
    /** Total de lanzamientos disponibles. */
    count:    number;
    /** Enlace a la siguiente página de resultados. */
    next:     string;
    /** Enlace a la página anterior, si existe. */
    previous: null;
    /** Lanzamientos incluidos en la página actual. */
    results:  Result[];
}

/**
 * Información detallada de un lanzamiento espacial.
 *
 * Agrupa los datos generales del lanzamiento junto con el proveedor,
 * cohete, misión y plataforma utilizados.
 */
export interface Result {
    /** Identificador único del lanzamiento. */
    id:                                 string;
    /** URL del recurso del lanzamiento. */
    url:                                string;
    /** Identificador legible del lanzamiento. */
    slug:                               string;
    /** Nombre del lanzamiento. */
    name:                               string;
    /** Estado en el que terminó o se encuentra el lanzamiento. */
    status:                             Status;
    /** Fecha de última actualización del registro. */
    last_updated:                       Date;
    /** Fecha y hora previstas del lanzamiento. */
    net:                                Date;
    /** Fecha y hora final de la ventana de lanzamiento. */
    window_end:                         Date;
    /** Fecha y hora inicial de la ventana de lanzamiento. */
    window_start:                       Date;
    /** Precisión informada para la fecha del lanzamiento. */
    net_precision:                      null;
    /** Probabilidad de lanzamiento informada por la API. */
    probability:                        null;
    /** Información meteorológica asociada al lanzamiento. */
    weather_concerns:                   null;
    /** Motivo por el que el lanzamiento se mantiene en espera. */
    holdreason:                         string;
    /** Motivo de fallo, si el lanzamiento falló. */
    failreason:                         null | string;
    /** Hashtag asociado al lanzamiento. */
    hashtag:                            null;
    /** Proveedor responsable del lanzamiento. */
    launch_service_provider:            LaunchServiceProvider;
    /** Cohete utilizado en el lanzamiento. */
    rocket:                             Rocket;
    /** Misión asociada al lanzamiento. */
    mission:                            Mission;
    /** Plataforma desde la que se realizó el lanzamiento. */
    pad:                                Pad;
    /** Indica si la transmisión del lanzamiento está en directo. */
    webcast_live:                       boolean;
    /** URL de la imagen del lanzamiento. */
    image:                              string;
    /** URL de la infografía del lanzamiento. */
    infographic:                        null;
    /** Programas espaciales relacionados con el lanzamiento. */
    program:                            unknown[];
    /** Número de intentos orbitales acumulados. */
    orbital_launch_attempt_count:       number;
    /** Número de intentos acumulados en la ubicación. */
    location_launch_attempt_count:      number;
    /** Número de intentos acumulados en la plataforma. */
    pad_launch_attempt_count:           number;
    /** Número de intentos acumulados de la agencia. */
    agency_launch_attempt_count:        number;
    /** Intentos orbitales realizados durante el año. */
    orbital_launch_attempt_count_year:  number;
    /** Intentos realizados en la ubicación durante el año. */
    location_launch_attempt_count_year: number;
    /** Intentos realizados en la plataforma durante el año. */
    pad_launch_attempt_count_year:      number;
    /** Intentos realizados por la agencia durante el año. */
    agency_launch_attempt_count_year:   number;
    /** Tipo de registro del lanzamiento. */
    type:                               ResultType;
}

/** Proveedor responsable del lanzamiento espacial. */
export interface LaunchServiceProvider {
    /** Identificador del proveedor. */
    id:   number;
    /** URL del proveedor. */
    url:  string;
    /** Nombre del proveedor. */
    name: LaunchServiceProviderName;
    /** Tipo de organización del proveedor. */
    type: LaunchServiceProviderType;
}

/** Nombres de proveedores de lanzamiento disponibles en la respuesta. */
export type LaunchServiceProviderName = "Soviet Space Program" | "US Navy" | "Army Ballistic Missile Agency";

/** Tipo de organización del proveedor de lanzamiento. */
export type LaunchServiceProviderType = "Government";

/** Información de la misión asociada al lanzamiento. */
export interface Mission {
    /** Identificador de la misión. */
    id:                number;
    /** Nombre de la misión. */
    name:              string;
    /** Descripción de los objetivos de la misión. */
    description:       string;
    /** Designador de lanzamiento de la misión. */
    launch_designator: null;
    /** Tipo de misión. */
    type:              MissionType;
    /** Órbita objetivo de la misión. */
    orbit:             Status;
    /** Agencias participantes en la misión. */
    agencies:          unknown[];
    /** Enlaces informativos de la misión. */
    info_urls:         unknown[];
    /** Enlaces de video de la misión. */
    vid_urls:          unknown[];
}

/** Estado u órbita asociada a una misión o lanzamiento. */
export interface Status {
    /** Identificador del estado. */
    id:           number;
    /** Nombre descriptivo del estado. */
    name:         StatusName;
    /** Abreviatura del estado u órbita. */
    abbrev:       Abbrev;
    /** Descripción detallada del estado. */
    description?: string;
}

/** Abreviaturas de los estados y órbitas disponibles. */
export type Abbrev = "LEO" | "Elliptical" | "Success" | "Failure";

/** Nombres descriptivos de los estados y órbitas disponibles. */
export type StatusName = "Low Earth Orbit" | "Elliptical Orbit" | "Launch Successful" | "Launch Failure";

/** Tipos de misión disponibles. */
export type MissionType = "Test Flight" | "Earth Science";

/** Plataforma desde la que se realiza el lanzamiento. */
export interface Pad {
    /** Identificador de la plataforma. */
    id:                           number;
    /** URL de la plataforma. */
    url:                          string;
    /** Identificador de la agencia operadora. */
    agency_id:                    number | null;
    /** Nombre de la plataforma. */
    name:                         PadName;
    /** Descripción de la plataforma. */
    description:                  null;
    /** URL informativa de la plataforma. */
    info_url:                     null;
    /** URL de Wikipedia de la plataforma. */
    wiki_url:                     string;
    /** URL del mapa de la plataforma. */
    map_url:                      string;
    /** Latitud de la plataforma. */
    latitude:                     string;
    /** Longitud de la plataforma. */
    longitude:                    string;
    /** Ubicación geográfica de la plataforma. */
    location:                     Location;
    /** Código del país de la plataforma. */
    country_code:                 CountryCode;
    /** Imagen del mapa de la plataforma. */
    map_image:                    string;
    /** Total de lanzamientos desde la plataforma. */
    total_launch_count:           number;
    /** Total de intentos orbitales desde la plataforma. */
    orbital_launch_attempt_count: number;
}

/** Códigos de país de las plataformas de lanzamiento. */
export type CountryCode = "KAZ" | "USA";

/** Ubicación geográfica de una plataforma de lanzamiento. */
export interface Location {
    /** Identificador de la ubicación. */
    id:                  number;
    /** URL de la ubicación. */
    url:                 string;
    /** Nombre de la ubicación. */
    name:                LocationName;
    /** Código del país de la ubicación. */
    country_code:        CountryCode;
    /** Descripción geográfica de la ubicación. */
    description:         string;
    /** Imagen del mapa de la ubicación. */
    map_image:           string;
    /** Zona horaria de la ubicación. */
    timezone_name:       TimezoneName;
    /** Total de lanzamientos realizados en la ubicación. */
    total_launch_count:  number;
    /** Total de aterrizajes registrados en la ubicación. */
    total_landing_count: number;
}

/** Nombres de las ubicaciones de lanzamiento disponibles. */
export type LocationName = "Baikonur Cosmodrome, Republic of Kazakhstan" | "Cape Canaveral SFS, FL, USA";

/** Zonas horarias de las ubicaciones de lanzamiento disponibles. */
export type TimezoneName = "Asia/Qyzylorda" | "America/New_York";

/** Nombres de las plataformas de lanzamiento disponibles. */
export type PadName = "1/5" | "Launch Complex 18A" | "Launch Complex 26A";

/** Información del cohete utilizado en el lanzamiento. */
export interface Rocket {
    /** Identificador del cohete. */
    id:            number;
    /** Configuración del cohete utilizado. */
    configuration: Configuration;
}

/** Configuración específica del cohete. */
export interface Configuration {
    /** Identificador de la configuración. */
    id:        number;
    /** URL de la configuración. */
    url:       string;
    /** Nombre de la configuración. */
    name:      string;
    /** Familia a la que pertenece el cohete. */
    family:    Family;
    /** Nombre completo del cohete. */
    full_name: string;
    /** Variante específica del cohete. */
    variant:   string;
}

/** Familias de cohetes disponibles en la respuesta. */
export type Family = "Sputnik" | "" | "Redstone";

/** Tipo de resultado devuelto por la API para un lanzamiento. */
export type ResultType = "normal";