// Modules & Services
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { ComponentsModule } from "../components/components.module";
import { NgxQRCodeModule } from "ngx-qrcode2";

// Native modules & Components
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
import { BarcodeScanner } from "@ionic-native/barcode-scanner";

import { IonicStorageModule } from "@ionic/storage";

// Animations compenents
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AnimationService, AnimatesDirective } from 'css-animator';

// Components
import { MyApp } from './app.component';

// TODO: Create module for all pages and import it just once here
// Pages
import { TabsPage } from '../pages/tabs/tabs';
import { AboutPage } from '../pages/about/about';
import { TicketsListPage } from "../pages/tickets/ticket-list/tickets-list";

import { EventCategoryListPage } from "../pages/events/event-category-list/event-category-list";
import { EventsListPage } from "../pages/events/events-list/events-list";
import { EventDetailsPage } from '../pages/events/event-details/event-details';

import { AccountPage } from "../pages/account/account";

import { UserDetailsPage } from "../pages/user/user-details/user-details";
import { SignInPage } from '../pages/user/sign-in/sign-in';

// Ionic components
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    TabsPage,
    TicketsListPage,
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
    ComponentsModule,    
    IonicModule.forRoot(MyApp),  
    NgxQRCodeModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    TabsPage,
    TicketsListPage,
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
    AuthServiceProvider
  ]
})
export class AppModule {}
