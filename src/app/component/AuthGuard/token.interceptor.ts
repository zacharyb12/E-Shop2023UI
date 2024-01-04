import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpInterceptor
} from '@angular/common/http';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {


  intercept(request: HttpRequest<any>, next: HttpHandler){
    
    console.log("coucou")

    const newReq = request.clone({
      headers: request.headers.set("Authorization", "El token")
      }
    )

    return next.handle(newReq);
  }
}
