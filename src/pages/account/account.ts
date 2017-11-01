import { Component } from '@angular/core';
import { ModalController, NavController, NavParams } from 'ionic-angular';

import { UserDetailsPage } from '../user/user-details/user-details';
import { SignInPage } from '../user/sign-in/sign-in';
import { AboutPage } from '../about/about';
import { EventSelectModalPage } from '../organizer/event-select-modal/event-select-modal';

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

  constructor(public modalCtrl: ModalController, public navCtrl: NavController, public navParams: NavParams) {
  }

  showUserDetail() {
    this.navCtrl.push(UserDetailsPage);
  }

  showAbout() {
    this.navCtrl.push(AboutPage);
  }

  signIn() {
    this.navCtrl.push(SignInPage);
  }

  ticketScan() {
    // TODO : open a modal that show events that this organiser is assigned to
    const EventSelectModal = this.modalCtrl.create(EventSelectModalPage, { userId: 81995 });
    EventSelectModal.present();
  }

}
