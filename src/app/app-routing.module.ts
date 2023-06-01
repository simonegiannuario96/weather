import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CurrentWeatherComponent } from './features/current-weather/current-weather.component';
import { ErrorPageComponent } from './features/error-page/error-page.component';

const routes: Routes = [
    { path: '', component: CurrentWeatherComponent },
    { path: '404', component: ErrorPageComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
