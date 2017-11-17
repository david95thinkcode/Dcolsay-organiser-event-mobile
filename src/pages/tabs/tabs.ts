import { Component } from '@angular/core';

import { TicketsListPage } from "../tickets/ticket-list/tickets-list";
import { EventCategoryListPage } from "../events/event-category-list/event-category-list";
import { AccountPage } from "../account/account";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = TicketsListPage;
  tab2Root = EventCategoryListPage
  tab3Root = AccountPage;
  
  constructor() { }
}
