import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProfessionalService } from '../../services/domain/professional.service';

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

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public professionalService: ProfessionalService
    ) {
  }

  ionViewDidLoad() {
    this.professionalService.findAll( )
      .subscribe(response => {
        console.log( response );
      },
      error  => {
        console.log( error );
      }
    
    
    );
    console.log('ionViewDidLoad ProfessionalsPage');
  }

}
