import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http'
import {Observable} from 'rxjs'
import {Injectable} from '@angular/core'
import {TOKEN_STORAGE_KEY} from "../controller/staticValues";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor() {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const token = sessionStorage.getItem(TOKEN_STORAGE_KEY)
        if (token) {
            let cloned = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + token)
            })
            return next.handle(cloned)
        }
        return next.handle(req)
    }

}
