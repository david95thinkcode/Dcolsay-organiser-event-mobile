import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the TicketsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({selector: 'page-tickets-list', templateUrl: 'tickets-list.html'})
export class TicketsListPage implements OnInit {

  qrcodeValue : string[]; // Here we store all Qrcode text of the user
  elementType : 'text' | 'canvas' | 'img' = 'text';
  dr : string;

  constructor(public navCtrl : NavController, public navParams : NavParams) {
    this.dr = "fdg vhdsbsdhvidfhvdfjhgkfhgihsdfighiHGVYDGVBFYSGFDIVSD5984"
  }

  ngOnInit() {
    this.qrcodeValue = [];
    this.qrcodeValue = ["david95thinkcode@github.io", "http://www.github.io"]
  }

}
