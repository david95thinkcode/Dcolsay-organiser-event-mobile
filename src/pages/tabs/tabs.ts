import { Component } from '@angular/core';

import { HomePage } from "../home/home";
import { EventCategoryListPage } from "../events/event-category-list/event-category-list";
import { AccountPage } from "../account/account";
import { EventsListPage } from '../events/events-list/events-list';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
//  tab2Root = EventCategoryListPage
  tab2Root = EventsListPage;
  tab3Root = AccountPage;
  
  constructor() { }
}
