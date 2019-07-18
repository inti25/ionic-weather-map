import { NgModule } from '@angular/core';
import {CommonModule, DatePipe} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { FiveDayForecastPage } from './five-day-forecast.page';

const routes: Routes = [
  {
    path: '',
    component: FiveDayForecastPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [FiveDayForecastPage]
})
export class FiveDayForecastPageModule {}
