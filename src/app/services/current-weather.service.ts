import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CurrentWeatherService {

    constructor(private http: HttpClient) { }

    getCurrentWeather(city: string) {
        let params = new HttpParams();

        /* params = params.append('access_key', environment.accessKey); */
        params = params.append('query', city);

        return this.http.get("http://api.weatherstack.com/current", { params });

    }
}
