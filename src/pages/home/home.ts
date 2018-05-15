import { Component } from '@angular/core';
import { NavController, IonicPage, MenuController } from 'ionic-angular';
import { CredentialDTO } from './../../models/credential.dto';
import { AuthService } from '../../services/auth.service';

/**
 * CONTROLLER: Ex: Tem a classe HoemPage, que corresponde a VIEW, arquivo home.html
 */
@IonicPage() //Incluído depois!! Esse DECORATOR serve para dizer que esta classe é uma página, e vou poder refênciar a esta classe na format de String entre aspas ""
@Component({   //Design Pattner Decorator: Define que esta classe é o controller
  selector: 'page-home',
  templateUrl: 'home.html'  // referencia para qual arquivo html que ele esta controlando!
})
export class HomePage {

  credential : CredentialDTO = {
    email : "",
    password: ""
  };
    

  constructor(
    public navCtrl: NavController, 
    public menu: MenuController,
    public auth: AuthService
  ) {

  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }

  ionViewWillEnter() { 
    console.log("ionViewWillEnter");
    this.menu.swipeEnable(false); 
  } 
 
  ionViewDidLeave() { 
    console.log("ionViewDidLeave");
    this.menu.swipeEnable(true); 
  } 

  login() {
    
    /*console.log(this.credential);*/
    
    this.auth.authenticate(this.credential)
      .subscribe(response => {
        console.log(response.headers.get('Authorization')); 
        this.navCtrl.setRoot('ProfessionalsPage');
      }, 
      error => {} );         
  }
}
