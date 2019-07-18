export interface WeatherRespone {
    coord: Coord;
    weather: Weather[];
    base: string;
    main: Main;
    visibility: number;
    wind: Wind;
    clouds: Clouds;
    dt: number;
    sys: Sys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
}

export interface Sys {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
    pod: string;
}

export interface Clouds {
    all: number;
}

export interface Wind {
    speed: number;
    deg: number;
}

export interface Main {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
    sea_level: number;
    grnd_level: number;
    temp_kf: number;
}

export interface Weather {
    id: number;
    main: string;
    description: string;
    icon: string;
}

export interface Coord {
    lon: number;
    lat: number;
}


export interface ForeCastResponse {
    cod: string;
    message: number;
    cnt: number;
    list: ListForeCast[];
    city: City;
}

export interface City {
    id: number;
    name: string;
    coord: Coord;
    country: string;
    timezone: number;
}

export interface ListForeCast {
    dt: number;
    main: Main;
    weather: Weather[];
    clouds: Clouds;
    wind: Wind;
    rain?: Rain;
    sys: Sys;
    dt_txt: string;
    dt_time?: string;
}

export interface Rain {
    '3h'?: number;
}

