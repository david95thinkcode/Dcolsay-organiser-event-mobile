import { Component, OnInit} from '@angular/core';
import { NavController, AlertController, NavParams} from 'ionic-angular';
import { SQLite, SQLiteObject}                from '@ionic-native/sqlite';
/**
 * Generated class for the TicketsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
const DATABASE_FILENAME: string = "dcolsay_tickets.db";

@Component({selector: 'page-tickets-list', templateUrl: 'tickets-list.html'})
// TODO: finir l'enregistrement des tickets dans la table ticket
// TODO: charger les tickets depuis la table ticket
export class TicketsListPage implements OnInit {
  
  database: SQLiteObject;
  database_config: any;
  qrcodeValue = []; // Here we store all ticket qrcode text
  elementType : 'text' | 'canvas' | 'img' = 'text';

  constructor(private sqlite : SQLite, 
    public alertCtrl : AlertController,
    public navCtrl : NavController, 
    public navParams : NavParams) {
    this.database_config = { name: DATABASE_FILENAME, location: 'default' };
    // this.dr = "fdg vhdsbsdhvidfhvdfjhgkfhgihsdfighiHGVYDGVBFYSGFDIVSD5984";
  }

  ngOnInit() {
    //this.qrcodeValue = [];
    this.sqlite.create(this.database_config)
    .then((database: SQLiteObject) => {
      this.database = database;
      this.RetrieveTicketsFromSqlite(); 
    })
    .catch((error) => { this.PresentAlert('Failure', 'Failed to open database'); })
  }

  /** */
  private RetrieveTicketsFromApi() {
    // TODO: implement it when the API will be ready to use
  }

  private RetrieveTicketsFromSqlite() {

    this.database.executeSql('SELECT * FROM Tickets', [])
    .then((data) => {
      // this.PresentAlert('Retrieving details', JSON.stringify(data));
        if (data.rows) {
          this.PresentAlert('Tickets table is not empty', JSON.stringify(data.rows.item(2).code_data));
          if (data.rows.lenght > 0 ) {            
            for (let i  = 0; i < data.rows.length; i++ ) {
              this.qrcodeValue.push(data.rows.item(i).code_data)
              this.PresentAlert('Elément ' + i, this.qrcodeValue[i]);
            }          
          }
        }
        
      /// this.qrcodeValue = tickets;        
    })
    .catch((e) => { this.PresentAlert('', 'Retrieving failed'); })
  }

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
}
