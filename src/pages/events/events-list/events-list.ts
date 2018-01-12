import {Component, OnInit} from '@angular/core';
import {NavController, AlertController, LoadingController, Loading, NavParams} from 'ionic-angular';
import {EventDetailsPage} from '../event-details/event-details';
import {EventCategory} from "../../../models/event-category";
import { EventServiceProvider } from '../../../providers/event-service/event-service';
import { Event } from '../../../models/api/event.model';

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
  events: Event[];

  constructor(public navCtrl : NavController, 
    public alertCtrl : AlertController, 
    private loadingCtrl: LoadingController, 
    public navParams : NavParams, 
    private eventService : EventServiceProvider) {

    this.eventCategory = this.navParams.get('category');
  }

  ngOnInit() {
    
    this.eventCategory = new EventCategory();
    console.log('HLAHALA');
    this.eventService.getAllEvents()
    .then(result => {
      this.events = result;
      console.log(this.events);
    })
    .catch(e => {
      this.PresentAlert('Server Error', 'We cannot get Events from API because we cannot access the server');
    });
  }

  showDetails(event : Event) {
    // testing animation
    const animationsOptions = {
      animation: 'ios-transition',
      duration: 1000
    }

    this.navCtrl.push(EventDetailsPage, { event : event }, animationsOptions);
  }

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }

  PresentAlert(title : string, msg : string) {
    const alert = this
      .alertCtrl
      .create({title: title, subTitle: msg, buttons: ['Dismiss']});
    alert.present();
  }

}
