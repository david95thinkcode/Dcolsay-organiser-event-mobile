import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { TicketDetailsComponent } from './tickets/ticket-details/ticket-details';

@NgModule({
	declarations: [
        TicketDetailsComponent
    ],
	imports: [
         IonicModule
    ],
	exports: [
        TicketDetailsComponent
    ]
})
export class ComponentsModule {}
