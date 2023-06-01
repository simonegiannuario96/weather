import { Component, OnInit } from '@angular/core';
import { CurrentWeather } from 'src/app/models/currentWeather.model';
import { CurrentWeatherService } from 'src/app/services/current-weather.service';

@Component({
    selector: 'app-current-weather',
    templateUrl: './current-weather.component.html',
    styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {
    protected city: string = '';
    protected weatherFavourite: CurrentWeather[] = [];
    protected selectedCity: CurrentWeather | undefined = undefined;
    protected favouriteCity: string[] = [];

    protected getWeatherTitle(weather: CurrentWeather): string {
        return `${weather.location.name} - ${weather.location.region} - ${weather.location.country}`;
    }
    constructor(private currentWeatherService: CurrentWeatherService) {
        const favourite = localStorage.getItem('favouriteCities');
        if (favourite) {
            this.favouriteCity = JSON.parse(favourite);
        } else {
            this.favouriteCity = ['Foggia', 'Rome'];
        }
    }

    ngOnInit() {
        this.favouriteCity.forEach(city => {
            this.findWeather(city);
        })
    }

    protected findWeather(city?: string) {
        this.currentWeatherService.getCurrentWeather(city ? city : this.city).subscribe(result => {
            this.weatherFavourite.push(JSON.parse(JSON.stringify(result)));
        })
    }
}
