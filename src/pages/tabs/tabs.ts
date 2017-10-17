import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { EventsPage } from "../events/events";
import { TicketsPage } from "../tickets/tickets";
import { AccountPage } from "../account/account";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = EventsPage;
  tab3Root = TicketsPage;
  tab4Root = AccountPage;
  
  constructor() {

  }
}
