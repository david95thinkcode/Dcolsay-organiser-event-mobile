import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { TicketDetailsComponent } from './tickets/ticket-details/ticket-details';
import { TicketListComponent } from './tickets/ticket-list/ticket-list';
import { EventListComponent } from './events/event-list/event-list';

@NgModule({
	declarations: [
        TicketDetailsComponent,
        TicketListComponent,
        EventListComponent
    ],
	imports: [
         IonicModule
    ],
	exports: [
        TicketDetailsComponent,
        TicketListComponent,
        EventListComponent
    ]
})
export class ComponentsModule {}
