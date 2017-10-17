import { NgModule } from '@angular/core';
// import { BrowserModule } from '@angular/platform-browser';
 import { IonicModule } from 'ionic-angular';

import { TicketDetailsComponent } from './tickets/ticket-details/ticket-details';
import { TicketListComponent } from './tickets/ticket-list/ticket-list';
import { EventDetailsComponent } from './events/event-details/event-details';
import { EventListComponent } from './events/event-list/event-list';
import { UserDetailsComponent } from './user/user-details/user-details';

@NgModule({
	declarations: [
        TicketDetailsComponent,
        TicketListComponent,
        EventDetailsComponent,
        EventListComponent,
        UserDetailsComponent
    ],
	imports: [
         IonicModule
    ],
	exports: [
        TicketDetailsComponent,
        TicketListComponent,
        EventDetailsComponent,
        EventListComponent,
        UserDetailsComponent
    ]
})
export class ComponentsModule {}
