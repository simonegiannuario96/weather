import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable, mergeMap, retryWhen } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

    constructor(private router: Router) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

        return next.handle(request).pipe(
            retryWhen((error) => {
                return error.pipe(
                    mergeMap((error, index) => {
                        switch (error.status) {
                            case 500:
                                alert('Il server è al momento fuori servizio.');
                                break;
                            case 401:
                                alert('Non sei autorizzato');
                                break;
                            case 404:
                                this.router.navigate(['/404']);
                                break;
                            default:
                                break;
                        }

                        throw error;
                    })
                )
            })
        )

    }
}

