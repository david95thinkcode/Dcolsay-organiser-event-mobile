import { Component } from '@angular/core';
import { NavController, NavParams, ToastController  } from 'ionic-angular';

/**
 * Generated class for the UserDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html',
})
export class UserDetailsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserDetailsPage');
  }

  saveChanges() {
    this.presentToast();
  }

  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'Enrégistré',
      duration: 3000
    });
    toast.present();
  }
}
