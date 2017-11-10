import { Component, OnInit } from '@angular/core';
import { ViewController, NavController, NavParams } from 'ionic-angular';

import { TicketScannerPage } from "../ticket-scanner/ticket-scanner";

/**
 * Generated class for the EventSelectModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-event-select-modal',
  templateUrl: 'event-select-modal.html',
})

export class EventSelectModalPage implements OnInit {
  private userId: number;
  private events: string[];

  //TODO: Retrive the list of events assigned to that organizer inside an the variable "events"

  constructor(public viewCtrl:ViewController, public navCtrl: NavController, public navParams: NavParams) {
    this.userId = navParams.get('userId');  
  }

  ngOnInit() {

    this.events = [];
    this.events.push('First event');
    this.events.push("Code Lab spécial");
    this.events.push("UX Conference");

    
    // console.log(this.userId);  
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

  openScanner(event: any) {
    this.navCtrl.push(TicketScannerPage, { event: event });
  }

}
