import { API_CONFIG } from './../../config/api.config';
import { PartnerService } from './../../services/partner.service';
import { PartnerDTO } from './../../models/partner.dto';
import { StorageService } from './../../services/storage.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  partner: PartnerDTO; 

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storage: StorageService,
    public partnerService: PartnerService   
  ) {
  }

  ionViewDidLoad() {
    let localUser  = this.storage.getLocalUser();
    if (localUser && localUser.email){
      this.partnerService.findByEmail(localUser.email)
      .subscribe(response =>{
        this.partner = response;
        this.getImageIfExists();
      },
      error => {
        if (error.status == 403){
          this.navCtrl.setRoot('HomePage');
        }
      });
    }
    else{
      this.navCtrl.setRoot('HomePage');
    }
  }

  getImageIfExists() {
    this.partnerService.getImageFromBucket(this.partner.id)
    .subscribe(response => {
      this.partner.imageURL = `${API_CONFIG.bucketBaseURL}/partner${this.partner.id}.jpg`;
    },
    error => {});
  }
}
