/**
 * Respuesta paginada de la API de lanzamientos espaciales.
 *
 * Contiene el total de resultados, los enlaces de paginación y la colección
 * de lanzamientos disponible para mostrar en la aplicación.
 */
export interface LaunchResponse {
    count:    number;
    next:     string;
    previous: null;
    results:  Result[];
}

/**
 * Información detallada de un lanzamiento espacial.
 *
 * Agrupa los datos generales del lanzamiento junto con el proveedor,
 * cohete, misión y plataforma utilizados.
 */
export interface Result {
    id:                                 string;
    url:                                string;
    slug:                               string;
    name:                               string;
    status:                             Status;
    last_updated:                       Date;
    net:                                Date;
    window_end:                         Date;
    window_start:                       Date;
    net_precision:                      null;
    probability:                        null;
    weather_concerns:                   null;
    holdreason:                         string;
    failreason:                         null | string;
    hashtag:                            null;
    launch_service_provider:            LaunchServiceProvider;
    rocket:                             Rocket;
    mission:                            Mission;
    pad:                                Pad;
    webcast_live:                       boolean;
    image:                              string;
    infographic:                        null;
    program:                            unknown[];
    orbital_launch_attempt_count:       number;
    location_launch_attempt_count:      number;
    pad_launch_attempt_count:           number;
    agency_launch_attempt_count:        number;
    orbital_launch_attempt_count_year:  number;
    location_launch_attempt_count_year: number;
    pad_launch_attempt_count_year:      number;
    agency_launch_attempt_count_year:   number;
    type:                               ResultType;
}

/** Proveedor responsable del lanzamiento espacial. */
export interface LaunchServiceProvider {
    id:   number;
    url:  string;
    name: LaunchServiceProviderName;
    type: LaunchServiceProviderType;
}

/** Nombres de proveedores de lanzamiento disponibles en la respuesta. */
export type LaunchServiceProviderName = "Soviet Space Program" | "US Navy" | "Army Ballistic Missile Agency";

/** Tipo de organización del proveedor de lanzamiento. */
export type LaunchServiceProviderType = "Government";

/** Información de la misión asociada al lanzamiento. */
export interface Mission {
    id:                number;
    name:              string;
    description:       string;
    launch_designator: null;
    type:              MissionType;
    orbit:             Status;
    agencies:          unknown[];
    info_urls:         unknown[];
    vid_urls:          unknown[];
}

/** Estado u órbita asociada a una misión o lanzamiento. */
export interface Status {
    id:           number;
    name:         StatusName;
    abbrev:       Abbrev;
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
    id:                           number;
    url:                          string;
    agency_id:                    number | null;
    name:                         PadName;
    description:                  null;
    info_url:                     null;
    wiki_url:                     string;
    map_url:                      string;
    latitude:                     string;
    longitude:                    string;
    location:                     Location;
    country_code:                 CountryCode;
    map_image:                    string;
    total_launch_count:           number;
    orbital_launch_attempt_count: number;
}

/** Códigos de país de las plataformas de lanzamiento. */
export type CountryCode = "KAZ" | "USA";

/** Ubicación geográfica de una plataforma de lanzamiento. */
export interface Location {
    id:                  number;
    url:                 string;
    name:                LocationName;
    country_code:        CountryCode;
    description:         string;
    map_image:           string;
    timezone_name:       TimezoneName;
    total_launch_count:  number;
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
    id:            number;
    configuration: Configuration;
}

/** Configuración específica del cohete. */
export interface Configuration {
    id:        number;
    url:       string;
    name:      string;
    family:    Family;
    full_name: string;
    variant:   string;
}

/** Familias de cohetes disponibles en la respuesta. */
export type Family = "Sputnik" | "" | "Redstone";

/** Tipo de resultado devuelto por la API para un lanzamiento. */
export type ResultType = "normal";
