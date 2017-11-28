import { Component } from '@angular/core';
import { ModalController, NavController, NavParams, App } from 'ionic-angular';

import { UserDetailsPage } from '../user/user-details/user-details';
import { AboutPage } from '../about/about';
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})

export class AccountPage {

  constructor(public app: App, private auth: AuthServiceProvider, public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  showUserDetail() {
    this.navCtrl.push(UserDetailsPage);
  }

  showAbout() {
    this.navCtrl.push(AboutPage);
  }

  Logout() {
    this.auth.logout(); 
    this.app.getRootNav().setRoot('LoginPage');
  }
}
