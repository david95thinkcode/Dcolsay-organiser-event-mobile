import { Component }        from '@angular/core';
import { Platform }         from 'ionic-angular';
import { StatusBar }        from '@ionic-native/status-bar';
import { SplashScreen }     from '@ionic-native/splash-screen';
import { Storage  }         from "@ionic/storage";
import { TabsPage }         from '../pages/tabs/tabs';
import * as StorageKey      from '../models/storage';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private storage : Storage) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

      /**
       * Choising the root page
       * -+-+-+-+--+-+-++-+-++-+-+-+-++--+-+--+---++--+-+
       * If the local storage contains the following variable :
       * const CURRENT_USER_MAIL_KEY
       * const CURRENT_USER_PASS_KEY
       * so we will directly go to ====> TabsPage
       * Otherwise, we go to ====>  LoginPage
       */
      this.storage.get(StorageKey.getEmailKey())
      .then((mail) => {
        if (mail == null) {
          this.storage.get(StorageKey.getPasswordKey())
          .then((password) => {
            if (password == null) {
              this.rootPage = 'LoginPage'; // Here we go to the LoginPage
            }
          })
        }
      })
      .catch((error) => { });
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
