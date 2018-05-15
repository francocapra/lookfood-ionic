import { API_CONFIG } from './../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { CredentialDTO } from "../models/credential.dto";

@Injectable()
export class AuthService {

    constructor (public http: HttpClient){
    }

    authenticate(credential : CredentialDTO){
        return this.http.post(
                    `${API_CONFIG.baseURL}/login`,
                    credential,
                    {
                        observe: 'response',
                        responseType: 'text'                
                    })        
    }
}