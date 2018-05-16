import { StorageService } from './../services/storage.service';
import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest
} from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/observable/throw";
import "rxjs/add/operator/catch";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(public storage: StorageService) {}
  
  intercept( req: HttpRequest<any>, next: HttpHandler ): Observable<HttpEvent<any>> {
    console.log("Error intercepted request ... ");
    
    return next.handle(req)
    .catch((error, caught) => {
      //intercept the respons error and displace it to the console      
      let errorObj = error;
      if (errorObj.error) {
        errorObj = errorObj.error;
      }
      
      if (!errorObj.status) {
        errorObj = JSON.parse(errorObj); 
      }
      
      console.log( errorObj );
      
      switch (errorObj.status) {
        case 403:
        this.handle403();
        break;
        
        default:
        break;
      }
      
      //return the error to the method that called it
      return Observable.throw(errorObj);
    }) as any;
  }
  
  handle403(): any {
    this.storage.setLocalUser(null);
  }
}
