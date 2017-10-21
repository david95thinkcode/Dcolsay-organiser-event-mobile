import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UserDetailsPage } from '../user/user-details/user-details';
import { AboutPage } from '../about/about';
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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

  showUserDetail() {
    this.navCtrl.push(UserDetailsPage);
  }

  showAbout() {
    this.navCtrl.push(AboutPage);
  }

}
