import {Component, OnInit} from '@angular/core';
import {NavController, LoadingController, Loading, NavParams} from 'ionic-angular';
import {EventDetailsPage} from '../event-details/event-details';
import {EventCategory} from "../../../models/event-category";

/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({selector: 'page-events-list', templateUrl: 'events-list.html'})

export class EventsListPage implements OnInit {
  
  loading: Loading;
  eventCategory : EventCategory;
  
  constructor(public navCtrl : NavController, private loadingCtrl: LoadingController, public navParams : NavParams) {

    this.eventCategory = this.navParams.get('category');
  }

  ngOnInit() {
    this.eventCategory = new EventCategory();
  }

  showDetails() {
    this.navCtrl.push(EventDetailsPage);
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

}
