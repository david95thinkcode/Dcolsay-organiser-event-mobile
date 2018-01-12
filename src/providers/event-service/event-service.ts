import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { SQLite } from '@ionic-native/sqlite';
import { Event } from '../../models/api/event.model';
import { Host } from '../../config/host';

/*
  Generated class for the EventServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class EventServiceProvider {
  private host : Host = new Host();
  private api_events_url : string;
  
  constructor(public http: Http, private sqlite : SQLite) {
    
      this.api_events_url = this.host.getHostURL + '/api/events';  
      console.log(this.api_events_url);
      console.log('HLAHALA');
    // this.api_events_url = 'http://192.168.8.100:8000/api/events';
  }

  /**
   * Get all events from plateforme API
   */
  getAllEvents() : Promise<Event[]> {

    return this.http
    .get(this.api_events_url)
    .toPromise()
    .then(res => res.json().data as Event[])
    .catch(this.handleError);
  }

  /**
   * Get event for specified categoy
   */
  getEvents(category_id : number) {

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


}
