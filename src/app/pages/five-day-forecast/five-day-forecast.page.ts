import { Component, OnInit } from '@angular/core';
import {WeatherServiceService} from '../../service/weather-service.service';
import {NavController} from '@ionic/angular';
import {ActivatedRoute} from '@angular/router';
import {ForeCastResponse, ListForeCast} from '../../model/weather-respone';
import {from} from 'rxjs';
import {flatMap, groupBy, map, mergeAll, mergeMap, toArray} from 'rxjs/operators';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-five-day-forecast',
  templateUrl: './five-day-forecast.page.html',
  styleUrls: ['./five-day-forecast.page.scss'],
})
export class FiveDayForecastPage implements OnInit {

  constructor(private weatherService: WeatherServiceService,
              public navCtrl: NavController,
              private route: ActivatedRoute,
              private datePipe: DatePipe) { }

  lat = 0;
  lng = 0;

  forecastResponse: ForeCastResponse = {} as ForeCastResponse;
  listForecast: ListForeCast[][] = [];
  city = {};

  ngOnInit() {
    this.lat = + this.route.snapshot.paramMap.get('lat');
    this.lng = + this.route.snapshot.paramMap.get('lng');

    this.weatherService.getForeCastByLocation(this.lat, this.lng).pipe(
        flatMap((item: ForeCastResponse) => {
          this.city = item.city;
          return item.list;
        }),
        map((item: ListForeCast) => {
          item.dt_txt = this.datePipe.transform(item.dt * 1000, 'dd/MM/yyyy');
          item.dt_time = this.datePipe.transform(item.dt * 1000, 'HH:mm');
          return item;
        }),
        groupBy((item: ListForeCast) => item.dt_txt),
        mergeMap(group => group.pipe(toArray()))
    ).subscribe(res => {
      console.log('hungnq9', res);
      this.listForecast.push(res);
    });
  }

}
