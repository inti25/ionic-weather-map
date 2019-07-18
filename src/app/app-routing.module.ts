import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './pages/map/map.module#MapPageModule' },
  { path: 'five-day-forecast/:lat/:lng', loadChildren: './pages/five-day-forecast/five-day-forecast.module#FiveDayForecastPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
