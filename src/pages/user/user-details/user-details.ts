import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, ToastController  } from 'ionic-angular';
import { SQLite, SQLiteObject}                from '@ionic-native/sqlite';
import { AccountMobile } from "../../../models/account-mobile.model";

/**
 * Generated class for the UserDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
const DATABASE_FILENAME: string = "db_dcolsay_events.db";

@Component({
  selector: 'page-user-details',
  templateUrl: 'user-details.html',
})

export class UserDetailsPage implements OnInit {
  
  db: SQLiteObject;
  account: AccountMobile;

  constructor(private sqlite : SQLite, public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.account = new AccountMobile();
    this.account.email = '';
    this.account.firstname = '';
    this.account.lastname = '';
    this.account.tel = '';
    this.account.profession = '';

  }

  saveChanges() {
    this.db.executeSql('', {})
    .then(() => { 
      this.PresentToast('Enrgistré avec succès !');
     })
    .catch((e) => {
     //  console.log('Failed to build Tickets table : ' + e);
      this.PresentToast('L\'enregistrement a échoué : ' + e);
    });
  }

  PresentToast(message: string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 4000
    });
    toast.present();
  }
}
