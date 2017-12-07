import { Injectable } from '@angular/core';
import { HttpClient, HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { AuthService } from '../service/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private auth: AuthService) { }
    intercept(req: HttpRequest<any>, next:HttpHandler):Observable<HttpEvent<any>>{
        const started = Date.now();

        return next.handle(req)
            .do(event => {
                if(event instanceof HttpResponse){
                    const elapsed = Date.now() - started;
                    console.log(`Request for ${req.urlWithParams} took ${elapsed} ms.`)
                }
            })
    }
}