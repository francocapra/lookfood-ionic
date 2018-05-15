import { StorageService } from './storage.service';
import { LocalUser } from './../models/localUser.model';
import { API_CONFIG } from './../config/api.config';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { CredentialDTO } from "../models/credential.dto";
import { JwtHelper } from "angular2-jwt";

@Injectable()
export class AuthService {

    jwtHelper : JwtHelper = new JwtHelper();

    constructor (
        public http: HttpClient,
        public storage: StorageService
    ){
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

    successfulLogin(authorizationValue: string){
        let jwtoken = authorizationValue.substring(7); //Retirar a palavra Bearer
        let usr : LocalUser = { 
            token: jwtoken ,
            password: this.jwtHelper.decodeToken(jwtoken).sub 
        }

        this.storage.setLocalUser(usr);
    }   


    logout( ) {
        this.storage.setLocalUser(null);
    }     

}