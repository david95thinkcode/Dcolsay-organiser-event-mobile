import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { EventsListPage } from "../events-list/events-list";
import { EventCategory } from "../../../models/event-category";

/**
 * Generated class for the EventCategoryListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-event-category-list',
  templateUrl: 'event-category-list.html',
})
export class EventCategoryListPage {
  categories: EventCategory[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.categories = [];
    this.setCategories();
  }

  /**
   * Put categories insite category array
   */
  setCategories() {
    //TODO: Retrive the list of events categories assigned to that organizer inside an the variable "categories"

    let cat_1: EventCategory = new EventCategory();
    let cat_2: EventCategory = new EventCategory();
    let cat_3: EventCategory = new EventCategory();
    let cat_4: EventCategory = new EventCategory();

    cat_1.label = 'Pool Party';
    cat_1.picture_path = 'assets/events/test.jpg';

    cat_2.label = 'Barbecue party';
    cat_2.picture_path = 'assets/dev/to_do_hires.jpg';
    
    cat_3.label = 'Tech Conferences';
    cat_3.picture_path = 'assets/dev/glenn-carstens-peters-282287.jpg';
    
    cat_4.label = 'Politic MeetUp';
    cat_4.picture_path = 'assets/dev/grass-hands-moss-4627-825x550.jpg';

    this.categories.push(cat_1, cat_2, cat_3, cat_4);
  }

  showEvents(category: EventCategory) {
    this.navCtrl.push(EventsListPage, { category: category } );
  }

}
