import { Component } from '@angular/core';

/**
 * Generated class for the TicketListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ticket-list',
  templateUrl: 'ticket-list.html'
})
export class TicketListComponent {

  text: string;

  constructor() {
    console.log('Hello TicketListComponent Component');
    this.text = 'Hello World';
  }

}
