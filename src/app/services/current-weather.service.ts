import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';
import { CurrentWeather } from '../models/currentWeather.model';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CurrentWeatherService {

    constructor(private http: HttpClient) { }

    getCurrentWeather(city: string): Promise<CurrentWeather> {
        let params = new HttpParams();

        params = params.append('query', city);

        const observable = this.http.get(environment.baseUrl + "/current", { params }) as Observable<CurrentWeather>;
        return firstValueFrom(observable);

    }
}
