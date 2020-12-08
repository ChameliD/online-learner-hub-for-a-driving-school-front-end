import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { LocalStorageService } from 'ngx-webstorage';
import { nextTick } from 'process';
import { Observable } from 'rxjs';

@Injectable()
export class HttpClientInterceptor implements HttpClientInterceptor {
    constructor(private $localStorage: LocalStorageService){
    }
    intercept(req: HttpRequest<any>,
        next: HttpHandler): Observable<HttpEvent<any>>{
            const token = this.$localStorage.retrieve("authenticationToken");
            console.log('jwt token'+token);
            if(token){
                const cloned = req.clone({
                    headers: req.headers.set("Authorization",
                    "Bearer" +token)
                });
                return next.handle(cloned);
            }
            else{
                return next.handle(req);
            }
        }
}
