import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { SQLite } from '@ionic-native/sqlite';

/*
  Generated class for the EventServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventServiceProvider {

  constructor(public http: Http, private sqlite : SQLite) {
    console.log('Hello EventServiceProvider Provider');
  }

  /**
   * Get all events from plateforme API
   */
  getAllEvents() {

  }

  /**
   * Get event for specified categoy
   */
  getEvents(category_id : number) {

  }



}
