export interface WeatherTable {
    current: Current;
    location: Location;
}

interface Current {
    temperature: number;
    weather_descriptions: Array<string>;
}

interface Location {
    contry: string;
    name: string;
    region: string;
    localtime:string;
}