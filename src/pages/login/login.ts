/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

import { Component, OnInit }        from '@angular/core';
import { Storage }                  from '@ionic/storage';
import { Platform, IonicPage,  AlertController, LoadingController, Loading, NavController, NavParams } from 'ionic-angular';
import { User }                     from "../../models/api/user.model";
import { AuthServiceProvider }      from '../../providers/auth-service/auth-service';
import { TabsPage }                 from '../tabs/tabs';
import * as StorageKey              from '../../models/storage';

@IonicPage()

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})

export class LoginPage implements OnInit{

  loading: Loading;
  user: User;

  constructor(public nav: NavController, 
    private auth: AuthServiceProvider, 
    private alertCtrl: AlertController,
    private platform: Platform,
    private loadingCtrl: LoadingController,
    private storage: Storage, 
    public navParams: NavParams) 
  {
      this.user = new User();
  }


  ngOnInit() {
    this.user.email = 'davidhihea@gmail.com'; //using default value for test
  }
  
  /**
   * Store user data in local storage
   */
  private StoreUser() {
    this.storage.set(StorageKey.getEmailKey(), this.user.email);
    this.storage.set(StorageKey.getPasswordKey(), this.user.password);
  }

  public login() {
    
    this.showLoading();
    this.auth.login(this.user)
    .subscribe(allowed => {
      if (allowed) {
        this.StoreUser();
        this.nav.setRoot(TabsPage);
      } else {
        this.showError("Authentication failed");
      }
    },
      error => {
        this.showError(error);
      });
  }
 
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      dismissOnPageChange: true
    });
    this.loading.present();
  }
 
  showError(text) {
    this.loading.dismiss();
 
    let alert = this.alertCtrl.create({
      title: 'Fail',
      subTitle: text,
      buttons: ['OK']
    });
    alert.present(prompt);
  }


  public createAccount() {
    this.nav.push('RegisterPage');
  }
 
  /**
   * Used to skip dierctly to the root page
   */
  private SkipToRoot() {
    this.showLoading();
    this.nav.setRoot(TabsPage);
  }
}
