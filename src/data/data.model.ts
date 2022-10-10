export interface WeatherTable {
  current: Current;
  location: Location;
}

interface Current {
  temperature: number;
  weather_descriptions: Array<string>;
  weather_icons: Array<string>;
}

interface Location {
  country: string;
  name: string;
  region: string;
  localtime: string;
}
