/*
 * @Author: your name
 * @Date: 2019-12-02 18:35:28
 * @LastEditTime: 2019-12-14 16:34:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \ng-official-demo\client\src\app\guard\auth.interceptor.ts
 */
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
export class HttpErrorInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request)
            .pipe(
                retry(1),
                catchError((error: HttpErrorResponse) => {
                    let errorMessage = '';
                    if (error.error instanceof ErrorEvent) {
                        //client error
                        errorMessage = `Intercept Error: ${error.error.message}`;
                    } else {
                        // server error

                        errorMessage = `Intercept Code:${error.status} \n message:${error.message}`;


                    }
                    window.alert(errorMessage);
                    return throwError(errorMessage);
                })
            )
    }
}