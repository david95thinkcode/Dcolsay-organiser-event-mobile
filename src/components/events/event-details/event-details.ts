import { Component } from '@angular/core';

/**
 * Generated class for the EventDetailsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'event-details',
  templateUrl: 'event-details.html'
})
export class EventDetailsComponent {

  text: string;

  constructor() {
    console.log('Hello EventDetailsComponent Component');
    this.text = 'Hello World';
  }

}
