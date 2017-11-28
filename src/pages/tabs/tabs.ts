import { Component } from '@angular/core';

import { HomePage } from "../home/home";
import { EventCategoryListPage } from "../events/event-category-list/event-category-list";
import { AccountPage } from "../account/account";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = EventCategoryListPage
  tab3Root = AccountPage;
  
  constructor() { }
}
