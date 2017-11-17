import { Component }        from '@angular/core';
import { Platform }         from 'ionic-angular';
import { StatusBar }        from '@ionic-native/status-bar';
import { SplashScreen }     from '@ionic-native/splash-screen';
import { Storage  }         from "@ionic/storage";
import { TabsPage }         from '../pages/tabs/tabs';

// Static variables
const CURRENT_USER_MAIL_KEY:string = 'DCOLSAY_email';
const CURRENT_USER_PASS_KEY:string = 'DCOLSAY_password';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = TabsPage;
// rootPage = 'LoginPage';

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
      this.storage.get(CURRENT_USER_MAIL_KEY)
      .then((mail) => {
        if (mail == null) {
          this.storage.get(CURRENT_USER_PASS_KEY)
          .then((password) => {
            if (password == null) {
              // Here we go to the LoginPage
              this.rootPage = 'LoginPage';
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
