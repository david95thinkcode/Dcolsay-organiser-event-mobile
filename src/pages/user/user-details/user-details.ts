import { Component, OnInit }        from '@angular/core';
import { Platform, NavController, NavParams, ToastController  } from 'ionic-angular';
import { SQLite, SQLiteObject}      from '@ionic-native/sqlite';
import { AuthServiceProvider }      from '../../../providers/auth-service/auth-service';
import { AccountMobile }            from "../../../models/account-mobile.model";
import { User }                     from "../../../models/api/user.model";
import { Storage }                  from '@ionic/storage/dist/storage';
import * as StorageKey              from '../../../models/storage';

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
  currentUser: User;

  constructor(private sqlite : SQLite,
    private storage: Storage,
    private auth: AuthServiceProvider,
    public platform: Platform,
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public toastCtrl: ToastController) {
    
    this.platform.ready()
    .then((ready) => {
      this.currentUser = this.auth.getUserInfo();
    })
    .catch((err) => { })
    
  }

  ngOnInit() {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    
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
