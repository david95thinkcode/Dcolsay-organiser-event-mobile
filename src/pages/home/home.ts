// import { Component, ViewChild } from '@angular/core';
import {Component, OnInit}                   from '@angular/core';
import { ToastController, NavController, ModalController, Platform, AlertController} from 'ionic-angular';
import { Storage }                           from "@ionic/storage";
import {SQLite, SQLiteObject}                from '@ionic-native/sqlite';
import { EventSelectModalPage }              from '../organizer/event-select-modal/event-select-modal';

// import { AnimationService, AnimationBuilder } from 'css-animator';

const DATABASE_FILENAME: string = "db_dcolsay_events.db";

@Component({selector: 'page-home', templateUrl: 'home.html'})

export class HomePage implements OnInit {
  // @ViewChild('myElem') myElem; private animator: AnimationBuilder;
  // constructor(public navCtrl: NavController,  animationService:
  // AnimationService) {
    db: SQLiteObject;

  constructor(public toastCtrl: ToastController, private sqlite : SQLite, public modalCtrl: ModalController, public alertCtrl : AlertController, public navCtrl : NavController, public plateform : Platform, private storage: Storage) {
    // this.animator = animationService.builder();
  }

  PresentToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 3000
    });
    toast.present();
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

  ngOnInit() {
    this.OpenDatabase();
    this.PopulateTickets();
    /*
      let t:string = 'title by default';
      let m:string = 'Default message';
  
      this.storage.set('name', 'David')
      .then((e) => {
        console.log('Set with success');
      });
  
      this.storage.get('name')
      .then((val) => {
        console.log('Your name is ', val);
      });
      t = 'Number of stored key';
      let n = this.storage.length();
      console.log(n);
  
      // this.PresentAlert(t, m);
    */
  }

  /**
   * Populate tables with defaut values
   */
  PopulateTickets(): void {
      
    if (this.db != null ) {
      this.db.executeSql("insert into `Tickets` (code_data) values ('david95thinkcode@github.io')", {})
      .then(() => this.PresentToast('Default datas 1 added ;'))
      .catch((e) => { this.PresentAlert('Bugs occured', 'Default datas not added : ' + e); })

      this.db.executeSql("insert into `Tickets` (code_data) values ('http://www.github.io')", {})
      .then(() => this.PresentToast('Default datas 2 added ;'))
      .catch((e) => { this.PresentAlert('Bugs occured', 'Default datas not added : ' + e); })
    }
  
  }

  /**
   * Create a database if not exists / Open the database if exists
   */
  private OpenDatabase(): void {
    
    this.sqlite.create({
        name: DATABASE_FILENAME, 
        location: 'default'
    })
      .then((db : SQLiteObject) => {
        this.db = db;
        console.log('BDD créée');
        this.PresentToast('BDD Créée');
        this.CreateTables();
      })
      .catch(e => this.PresentToast('Failed to create BD : ' + e));
  }

  /**
   * Create all required tables for the app
   */
  private CreateTables(): void {

    this.db.executeSql('CREATE TABLE IF NOT EXISTS "Accounts" ( `email` TEXT UNIQUE, `firstname` TEXT, `lastname` TEXT, `tel` TEXT, `profession` TEXT, PRIMARY KEY(`email`) )', {})
      .then(() => {
           console.log('Accounts table created successfully !');
          this.PresentToast('Accounts table created successfully !');
          // Let's create tickets tables
          this.db.executeSql('CREATE TABLE "Tickets" ( `id` INTEGER PRIMARY KEY AUTOINCREMENT UNIQUE, `code-data` TEXT UNIQUE, `isExpired` TEXT, `ticket_api_id` INTEGER )', {})
          .then(() => { 
            console.log('Tickets table created !');
            this.PresentToast('Tickets table created !');
           })
          .catch((e) => {
            console.log('Failed to build Tickets table : ' + e);
            this.PresentToast('Failed to build Tickets table : ' + e);
          })
      })
      .catch((e) => {
        console.log('Failed to build tables !! : '+ e);
        this.PresentToast('Failed to build tables : ' + e);
      });
  }


  showScanPage() {
    // TODO : open a modal that shows events that this organiser is assigned to
    const EventSelectModal = this.modalCtrl.create(EventSelectModalPage, { userId: 81995 });
    EventSelectModal.present();
  }

  animateElem() {
    // this.animator.setType('flipInX').show(this.myElem.nativeElement);
  }

}
