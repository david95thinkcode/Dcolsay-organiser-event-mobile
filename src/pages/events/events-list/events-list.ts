import { Component, OnInit } from '@angular/core';
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
export class EventsListPage implements OnInit {
  eventCategory: EventCategory;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    
    this.eventCategory = this.navParams.get('category');
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.eventCategory = new EventCategory();
  }
  
  showDetails() {
    this.navCtrl.push(EventDetailsPage);
  }
  
}
