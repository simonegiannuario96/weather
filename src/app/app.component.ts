import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    title = 'weather';

    constructor(translate: TranslateService) {
        translate.addLangs(['it', 'en']);
        translate.setDefaultLang('it');
        translate.use('it');

        localStorage.setItem('favouriteCities', JSON.stringify(['Foggia', 'Rome']));
    }
}
