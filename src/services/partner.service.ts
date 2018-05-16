import { Observable } from 'rxjs/Rx';
import { StorageService } from './storage.service';
import { API_CONFIG } from './../config/api.config';
import { PartnerDTO } from './../models/partner.dto';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { linkToSegment } from 'ionic-angular/navigation/nav-util';

@Injectable()
export class PartnerService {

    constructor( public http: HttpClient, public storage: StorageService){
    }

    findByEmail(email: string) : Observable<PartnerDTO>{

        let token = this.storage.getLocalUser().token;
        let authHeader = new HttpHeaders({'Authorization': 'Bearer ' + token});

         return this.http.get<PartnerDTO>(
            `${API_CONFIG.baseURL}/partners/email?value=${email}`,
            {'headers':authHeader});
    }

    getImageFromBucket(id: string) : Observable<any>{
        let url = `${API_CONFIG.bucketBaseURL}/partner${id}.jpg`
        return this.http.get(url, {responseType : 'blob'});
    }
}