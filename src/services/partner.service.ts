import { Observable } from 'rxjs/Rx';
import { StorageService } from './storage.service';
import { API_CONFIG } from './../config/api.config';
import { PartnerDTO } from './../models/partner.dto';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class PartnerService {

    constructor( public http: HttpClient, public storage: StorageService){
    }

    findByEmail(email: string) : Observable<PartnerDTO>{
         return this.http.get<PartnerDTO>(`${API_CONFIG.baseURL}/partners/email?value=${email}`);
    }

    getImageFromBucket(id: string) : Observable<any>{
        let url = `${API_CONFIG.bucketBaseURL}/partner${id}.jpg`
        return this.http.get(url, {responseType : 'blob'});
    }
}