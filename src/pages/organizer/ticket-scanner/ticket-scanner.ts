import { Component } from '@angular/core';
import { NavController, NavParams, Platform } from 'ionic-angular';
import { BarcodeScanner, BarcodeScannerOptions } from "@ionic-native/barcode-scanner";
/**
 * Generated class for the TicketScannerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-ticket-scanner',
  templateUrl: 'ticket-scanner.html',
})

export class TicketScannerPage {
  options: BarcodeScannerOptions;
  event: string;
  results: any;
  ticketfound: boolean;
  attendeesCount:number;
  attendeesNotCkeckedCount:number;

  constructor(private scanner: BarcodeScanner, 
    public navCtrl: NavController, 
    public navParams: NavParams,
    public plateform: Platform) {
    
      this.event = this.navParams.get('event');
      this.ticketfound = false;
      this.attendeesCount = 0;
      this.attendeesNotCkeckedCount = 0;
  }

  async ScanBarcode() {
    let test:string = 'http://www.github.io';

    this.results = await this.scanner.scan();
    
    if (this.results.text == test) {
      this.ticketfound = true;
      this.attendeesCount++;
    } 
    else {
      this.ticketfound = false;
      this.attendeesNotCkeckedCount ++;
    }
    // Vérifier si le text retourné est dans la base de données des participants

  }


}
