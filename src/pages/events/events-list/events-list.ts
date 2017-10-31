import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventDetailsPage } from '../event-details/event-details';
import { EventCategory } from "../../../models/event-category";
/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-events-list',
  templateUrl: 'events-list.html',
})
export class EventsListPage {
  eventCategory: EventCategory;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.eventCategory = new EventCategory();
    this.eventCategory = this.navParams.get('category');
  }
  
  showDetails() {
    this.navCtrl.push(EventDetailsPage);
  }
  
}
