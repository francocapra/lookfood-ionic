import { Injectable } from "@angular/core";

@Injectable()
export class ProfessionalService {

    constructor(public http: HttpClient ){
    }

    findAll( ) : Observable<ProfessionalDTO> {
        return this.http.get<ProfessionalDTO>(`${API_CONFIG.baseURL}/professionals`);
    }


}