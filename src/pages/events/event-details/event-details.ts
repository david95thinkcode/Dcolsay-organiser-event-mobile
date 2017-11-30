import { Component } from '@angular/core';
import { NavController, AlertController, NavParams, LoadingController, Loading, } from 'ionic-angular';
import { Event } from '../../../models/api/event.model';

/**
 * Generated class for the EventDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-event-details',
  templateUrl: 'event-details.html',
})
export class EventDetailsPage {
  loading: Loading;
  event : Event = new Event;

  constructor(public alertCtrl : AlertController, public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController) {
    this.event = navParams.get('event');
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Loading ...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

    Dev() {
      this.PresentAlert('Not available yet', 'This feature will be available soon')
    }

  PresentAlert(title: string, msg: string) {
    const alert = this
      .alertCtrl
      .create({
        title: title,
        subTitle: msg,
        buttons: ['Dismiss']
      });

    alert.present();
  }

}
