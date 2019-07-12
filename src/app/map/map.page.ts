import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MouseEvent} from '@agm/core';
import {WeatherServiceService} from '../service/weather-service.service';
import {WeatherRespone} from '../model/weather-respone';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})
export class MapPage implements OnInit, AfterViewInit {

  // @ViewChild('map') mapElement: any;
  // map: google.maps.Map;

  constructor(private weatherService: WeatherServiceService) { }

  // google maps zoom level
  zoom = 8;

  // initial center position for the map
  lat = 21.028801;
  lng = 105.8394643;

  markers: Marker[] = [
    {
      lat: 21.028801,
      lng: 105.8394643,
      label: 'Ha Noi',
      draggable: true
    }
  ];

  ngOnInit() {

  }

  ngAfterViewInit(): void {
  }

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`);
    const lat = this.markers[index].lat;
    const lon = this.markers[index].lng;
    this.weatherService.getCurrentWeatherByLatLon(lat, lon).subscribe((res: WeatherRespone) => {
      this.markers[index].weatherRes = res;
    });
  }

  mapClicked($event: MouseEvent) {
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }

  markerDragEnd(m: Marker, $event: MouseEvent) {
    console.log('dragEnd', m, $event);
  }

}

interface Marker {
  lat: number;
  lng: number;
  label?: string;
  draggable: boolean;
  weatherRes?: WeatherRespone;
}
