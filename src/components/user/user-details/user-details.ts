import { Component } from '@angular/core';

/**
 * Generated class for the UserDetailsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'user-details',
  templateUrl: 'user-details.html'
})
export class UserDetailsComponent {

  text: string;

  constructor() {
    console.log('Hello UserDetailsComponent Component');
    this.text = 'Hello World';
  }

}
