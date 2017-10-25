import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { EventsListPage } from "../events/events-list/events-list";
import { TicketsListPage } from "../tickets/ticket-list/tickets-list";
import { AccountPage } from "../account/account";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = EventsListPage;
  tab3Root = TicketsListPage;
  tab4Root = AccountPage;
  
  constructor() {

  }
}
