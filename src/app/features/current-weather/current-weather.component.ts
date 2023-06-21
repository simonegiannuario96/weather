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
    protected selectedCity!: CurrentWeather;
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
        this.favouriteCity.forEach(async city => {
            await this.findWeather(city);
        })
    }

    protected async findWeather(city?: string) {
        const weather = await this.currentWeatherService.getCurrentWeather(city ? city : this.city);
        this.weatherFavourite.push(weather);
    }
}
