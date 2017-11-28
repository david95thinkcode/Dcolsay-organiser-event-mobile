// THIS IS THE HOME COMPONENT, WE SHOULD CHANGE THE NAME

import { Component, OnInit} from '@angular/core';
import { NavController, LoadingController, Loading, AlertController, NavParams} from 'ionic-angular';
import { AttendeeTicketServiceProvider } from '../../providers/attendee-ticket-service/attendee-ticket-service';
import { AttendeeTicket } from '../../models/api/attendee-ticket.model';
import { User } from '../../models/api/user.model';
/**
 * Generated class for the TicketsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({selector: 'page-home', templateUrl: 'home.html'})

export class HomePage implements OnInit {
  
  loading: Loading;
  private tickets : AttendeeTicket[];
  private user : User = new User();

  qrcodeValue = []; // Here we store all ticket qrcode text
  elementType : 'text' | 'canvas' | 'img' = 'text';

  constructor(public alertCtrl : AlertController,
    public navCtrl : NavController, 
    public navParams : NavParams,
    private ticketService : AttendeeTicketServiceProvider,
    private loadingCtrl: LoadingController) {
    // this.dr = "fdg vhdsbsdhvidfhvdfjhgkfhgihsdfighiHGVYDGVBFYSGFDIVSD5984";
  } 

  ngOnInit() {
    
    //this.qrcodeValue = [];
    this.getTickets();
    
  }

  getTickets() {
    this.user.id = 8;
    this.ticketService.getTicketsFromAPI(this.user)
    .then(res => {
      this.tickets = res;
      console.log(this.tickets);
    })
    .catch(e => console.log('Error on getTickets Method : ' + e.message));
  }

  // UX component
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

  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
}
