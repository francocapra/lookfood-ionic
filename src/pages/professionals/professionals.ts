import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfessionalService } from '../../services/domain/professional.service';
import { ProfessionalDTO } from '../../models/professional.dto';
import { API_CONFIG } from '../../config/api.config';

/**
 * Generated class for the ProfessionalsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-professionals',
  templateUrl: 'professionals.html',
})
export class ProfessionalsPage {

  bucketURL: string = API_CONFIG.bucketBaseURL;

  professionals: ProfessionalDTO[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public professionalService: ProfessionalService ) {
  }

  ionViewDidLoad() {
    this.professionalService.findAll( )
      .subscribe(response => {
        this.professionals =  response ;
      },
      error  => {
        console.log( error );
      }
    
    
    );
    console.log('ionViewDidLoad ProfessionalsPage');
  }

}
