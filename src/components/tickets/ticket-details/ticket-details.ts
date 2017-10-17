import { Component } from '@angular/core';

/**
 * Generated class for the TicketDetailsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ticket-details',
  templateUrl: 'ticket-details.html'
})
export class TicketDetailsComponent {

  text: string;

  constructor() {
    console.log('Hello TicketDetailsComponent Component');
    this.text = 'Hello World';
  }

}
