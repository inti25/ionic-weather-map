import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  baseUrl = 'https://api.openweathermap.org/data/2.5/';

  constructor(private httpClient: HttpClient) { }

  getCurrentWeatherByLatLon(lat: number, lon: number) {
    return this.httpClient.get(this.baseUrl
        + 'weather?appid=413b4f3fe224ebb24c6466edb0bdc76b&units=metric&lang=vi&lat='
        + lat + '&lon=' + lon);
  }

  getForeCastByLocation(lat: number, lon: number) {
    return this.httpClient.get(this.baseUrl
        + 'forecast?appid=413b4f3fe224ebb24c6466edb0bdc76b&units=metric&lang=vi&lat='
        + lat + '&lon=' + lon);
  }
}
