// import { Component, ViewChild } from '@angular/core';
import {Component, OnInit} from '@angular/core';
import {ToastController, NavController, ModalController, Platform, AlertController} from 'ionic-angular';
import {Storage} from "@ionic/storage";
import {SQLite, SQLiteObject} from '@ionic-native/sqlite';
import {EventSelectModalPage} from '../organizer/event-select-modal/event-select-modal';
import { AuthServiceProvider } from "../../providers/auth-service/auth-service";
import { User } from "../../models/api/user.model";
// import { AnimationService, AnimationBuilder } from 'css-animator';

const DATABASE_FILENAME : string = 'dcolsay_tickets.db';

@Component({selector: 'page-home', templateUrl: 'home.html'})

export class HomePage implements OnInit {
  // @ViewChild('myElem') myElem; private animator: AnimationBuilder;
  // constructor(public navCtrl: NavController,  animationService:
  // AnimationService) {
  db : SQLiteObject;
  database_config: any;
  user: User = new User();

  constructor(public toastCtrl : ToastController, 
    private auth:AuthServiceProvider,
    private sqlite : SQLite, 
    public modalCtrl : ModalController, 
    public alertCtrl : AlertController, 
    public navCtrl : NavController, 
    public plateform : Platform, 
    private storage : Storage) {
    // this.animator = animationService.builder();
    this.database_config = { name: DATABASE_FILENAME, location: 'default' };
    this.user = this.auth.getUserInfo();
  }

  ngOnInit() {
    // this.plateform.ready()
    // .then((action) => { this.OpenDatabase(); })
    // .catch((e) => { this.PresentAlert('Platform is not ready', e.message); })
  }

  public logout() {
    this.auth.logout().subscribe(succ => {
      this.navCtrl.setRoot('LoginPage')
    });
  }

  /**
   * Populate tables with defaut values (in progess...)
   */
  private PopulateTickets() : void {
    // TODO: finish it

    this.db.executeSql("INSERT INTO Tickets(code_data) VALUES('david95thinkcode@github.io')", {})
    .then(() =>  {
      // this.PresentAlert('Data 1 added', 'Default datas 1 added ;')
    })
    .catch((e) => { this.PresentAlert('Data 1 not added', e.message); })
    
    this.db.executeSql("insert into Tickets(code_data) values('http://www.github.io')", {})
    .then(() => {
      //this.PresentAlert('Data 2 added ', ' Default datas 2 added;')
    })
    .catch((e) => { this.PresentAlert(' Data 2 not added ', e.message); }) 
    

  }

  private DeleteDatabase(): void {
    this.sqlite.deleteDatabase(this.database_config)
    .then(() => this.PresentAlert("DB suppressed successfully!", ''))
    .catch((e) => { this.PresentAlert("DB not suppressed !", e.message) })
  }

  /**
   * Create a database if not exists / Open the database if exists
   */
  private OpenDatabase() : void {
    this.sqlite.create(this.database_config)
      .then((db : SQLiteObject) => {
        this.db = db;
        this.CreateTables();
        this.PopulateTickets();
      })
      .catch(e => this.PresentAlert('', 'Failed to create BD : ' + e));
  }

  /**
   * Create all required tables for the app
   */
  private CreateTables() : void {

    this.db.executeSql('CREATE TABLE IF NOT EXISTS "Accounts" ( `email` TEXT UNIQUE, `firstname` TEXT, `' +
          'lastname` TEXT, `tel` TEXT, `profession` TEXT, PRIMARY KEY(`email`) )', {})
      .then(() => {
        console.log('Accounts table created successfully !');
        //this.PresentAlert('', 'Accounts table created successfully !');
        // Let's create tickets tables
        this.db.executeSql('CREATE TABLE IF NOT EXISTS "Tickets" ( `id` INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE, `code_data` TEXT, `isExpired` TEXT, `ticket_api_id` INTEGER )', {})
        .then(() => {
          console.log('Tickets table created !');
          // this.PresentAlert('', 'Tickets table created !');
        }).catch((e) => {
          // console.log('Failed to build Tickets table : ' + e);
          this.PresentAlert('', 'Failed to build Tickets table : ' + e);
        })
      })
      .catch((e) => {
        //console.log('Failed to build tables !! : ' + e);
        this.PresentAlert('', 'Failed to build tables : ' + e);
      });
  }

  showScanPage() {
    // TODO : open a modal that shows events that this organiser is assigned to
    const EventSelectModal = this.modalCtrl.create(EventSelectModalPage, {userId: 81995});
    EventSelectModal.present();
  }

  animateElem() {
    // this.animator.setType('flipInX').show(this.myElem.nativeElement);
  }

  PresentToast(message : string) {
    let toast = this
      .toastCtrl
      .create({message: message, duration: 3000});
    toast.present();
  }

  PresentAlert(title : string, msg : string) {
    const alert = this
      .alertCtrl
      .create({title: title, subTitle: msg, buttons: ['Dismiss']});
    alert.present();
  }

}
