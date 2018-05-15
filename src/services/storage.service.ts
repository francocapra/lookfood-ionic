import { STORAGEKEYS } from './../config/storageKeys.config';
import { LocalUser } from './../models/localUser.model';
import { Injectable } from '@angular/core';

@Injectable()
export class StorageService{

    getLocalUser(): LocalUser {
        let usr = localStorage.getItem(STORAGEKEYS.localUser);
        if (usr == null){
            return null;
        }
        else {
            return JSON.parse(usr);
        }
    }

    setLocalUser(obj:LocalUser){
        if (obj == null) {
            localStorage.removeItem(STORAGEKEYS.localUser);
        }
        else {
             localStorage.setItem(STORAGEKEYS.localUser, JSON.stringify(obj));
        }
    }
}