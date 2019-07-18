import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MouseEvent} from '@agm/core';
import {WeatherServiceService} from '../../service/weather-service.service';
import {WeatherRespone} from '../../model/weather-respone';
import {NavController} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit, AfterViewInit {

  constructor(private weatherService: WeatherServiceService,
              public navCtrl: NavController,
              private router: Router) { }

  // google maps zoom level
  zoom = 8;

  // initial center position for the map
  lat = 21.028801;
  lng = 105.8394643;

  markers: Marker[] = [];

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(location => {
        this.lat = location.coords.latitude;
        this.lng = location.coords.longitude;
        this.addMarker(this.lat, this.lng);
      });
    }
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
  }

  mapClicked($event: MouseEvent) {
    this.addMarker($event.coords.lat, $event.coords.lng);
  }

  markerDragEnd(m: Marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

  addMarker(lat: number, lng: number) {
    const m: Marker = {} as Marker;
    m.lng = lng;
    m.lat = lat;
    m.iconUrl = './assets/icon/marker.png';
    this.weatherService.getCurrentWeatherByLatLon(m.lat, m.lng).subscribe((res: WeatherRespone) => {
      m.weatherRes = res;
      m.iconUrl = 'http://openweathermap.org/img/wn/' + res.weather[0].icon + '.png';
    });
    this.markers.push(m);
  }

  openFiveDayPage(lat: number, lng: number) {
    this.router.navigateByUrl('/five-day-forecast/' + lat + '/' + lng);
  }

}

interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
  weatherRes?: WeatherRespone;
  iconUrl?: string;
}
