import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Rx";
import { ProfessionalDTO } from "../../models/professional.dto";
import { API_CONFIG } from "../../config/api.config";

@Injectable()
export class ProfessionalService {

    constructor(public http: HttpClient ){
    }

    findAll( ) : Observable<ProfessionalDTO> {
        return this.http.get<ProfessionalDTO>(`${API_CONFIG.baseURL}/professionals`);
    }


}