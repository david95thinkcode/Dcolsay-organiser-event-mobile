import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {EventDetailsPage} from '../event-details/event-details';
import {EventCategory} from "../../../models/event-category";
import {SQLite, SQLiteObject} from '@ionic-native/sqlite';

/**
 * Generated class for the EventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
const DATABASE_FILENAME: string = "db_dcolsay_events.db";

@Component({selector: 'page-events-list', templateUrl: 'events-list.html'})

export class EventsListPage implements OnInit {
  
  eventCategory : EventCategory;
  db: SQLiteObject; // 

  constructor(public navCtrl : NavController, public navParams : NavParams, private sqlite : SQLite) {

    this.eventCategory = this.navParams.get('category');
  }

  ngOnInit() {
    this.eventCategory = new EventCategory();
  }

  showDetails() {
    this.navCtrl.push(EventDetailsPage);
  }

}
