// Modules
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NgxQRCodeModule } from "ngx-qrcode2";
import { IonicStorageModule } from "@ionic/storage";
import { HttpModule } from '@angular/http';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { BarcodeScanner } from "@ionic-native/barcode-scanner";

// Animations compenents
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AnimationService, AnimatesDirective } from 'css-animator';

// Components
import { MyApp } from './app.component';

// TODO: Create module for all pages and import it just once here
// Pages
import { TabsPage } from '../pages/tabs/tabs';
import { AboutPage } from '../pages/about/about';
import { HomePage } from "../pages/home/home";

import { EventCategoryListPage } from "../pages/events/event-category-list/event-category-list";
import { EventsListPage } from "../pages/events/events-list/events-list";
import { EventDetailsPage } from '../pages/events/event-details/event-details';
import { AccountPage } from "../pages/account/account";
import { UserDetailsPage } from "../pages/user/user-details/user-details";
import { SignInPage } from '../pages/user/sign-in/sign-in';

// Providers
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { AttendeeTicketServiceProvider } from '../providers/attendee-ticket-service/attendee-ticket-service';
import { EventServiceProvider } from '../providers/event-service/event-service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    TabsPage,
    HomePage,
    EventsListPage,
    AccountPage,
    EventDetailsPage,
    UserDetailsPage,
    SignInPage,
    EventCategoryListPage
   // AnimatesDirective
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),  
    NgxQRCodeModule,
    HttpModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    TabsPage,
    HomePage,
    EventsListPage,
    AccountPage,
    EventDetailsPage,
    UserDetailsPage,
    SignInPage,
    EventCategoryListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
   // AnimationService,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner,
    SQLite,
    AuthServiceProvider,
    AttendeeTicketServiceProvider,
    EventServiceProvider
  ]
})
export class AppModule {}
