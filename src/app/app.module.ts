// Modules & Services
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { ComponentsModule } from "../components/components.module";
// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AnimationService, AnimatesDirective } from 'css-animator';

// Components
import { MyApp } from './app.component';

// Pages
import { TabsPage } from '../pages/tabs/tabs';
import { AboutPage } from '../pages/about/about';
import { HomePage } from '../pages/home/home';
import { TicketsPage } from "../pages/tickets/tickets";
import { EventsPage } from "../pages/events/events";
import { AccountPage } from "../pages/account/account";
import { UserDetailsPage } from "../pages/user/user-details/user-details";
import { EventDetailsPage } from '../pages/event-details/event-details';

// Ionic components
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    TicketsPage,
    EventsPage,
    AccountPage,
    EventDetailsPage,
    UserDetailsPage,
   // AnimatesDirective
  ],
  imports: [
    BrowserModule,
    ComponentsModule,    
    IonicModule.forRoot(MyApp),
    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    HomePage,
    TabsPage,
    TicketsPage,
    EventsPage,
    AccountPage,
    EventDetailsPage,
    UserDetailsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
   // AnimationService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
