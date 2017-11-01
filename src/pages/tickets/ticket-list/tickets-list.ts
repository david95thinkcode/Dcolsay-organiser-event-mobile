import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TicketsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-tickets-list',
  templateUrl: 'tickets-list.html',
})
export class TicketsListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketsPage');
  }

  /**
   * Affiche le ticket sur un Modal Component
   */
  show() {
    
  }

}
