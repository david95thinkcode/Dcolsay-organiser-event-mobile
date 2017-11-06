import {Component, OnInit} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {SQLite, SQLiteObject}                from '@ionic-native/sqlite';
/**
 * Generated class for the TicketsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
const DATABASE_FILENAME: string = "db_dcolsay_events.db";

@Component({selector: 'page-tickets-list', templateUrl: 'tickets-list.html'})

export class TicketsListPage implements OnInit {
  db: SQLiteObject;
  qrcodeValue : string[]; // Here we store all Qrcode text of the user
  elementType : 'text' | 'canvas' | 'img' = 'text';
  dr : string;

  constructor(private sqlite : SQLite, public navCtrl : NavController, public navParams : NavParams) {
    this.dr = "fdg vhdsbsdhvidfhvdfjhgkfhgihsdfighiHGVYDGVBFYSGFDIVSD5984"
  }

  ngOnInit() {
    this.qrcodeValue = [];
    this.RetrieveTicket();
  }

  private RetrieveTicket(): void {
    this.db.executeSql('SELECT code_data FROM Tickets', {})
    .then((data) => {
      if (data.row) {
        if (data.row.lenght > 0 ) {
          for (let i: number = 0; i <= data.row.lenght-1; i++ ) {
            this.qrcodeValue.push(data.row.item(i).code_data)
          }          
        }        
      }
    })
    .catch()
  }

}
