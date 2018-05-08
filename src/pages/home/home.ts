/**
 * CONTROLLER: Ex: Tem a classe HoemPage, que corresponde a VIEW, arquivo home.html
 */

import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

@IonicPage() //Incluído depois!! Esse DECORATOR serve para dizer que esta classe é uma página, e vou poder refênciar a esta classe na format de String entre aspas ""
@Component({   //Design Pattner Decorator: Define que esta classe é o controller
  selector: 'page-home',
  templateUrl: 'home.html'  // referencia para qual arquivo html que ele esta controlando!
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
