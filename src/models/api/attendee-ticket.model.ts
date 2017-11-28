/**
 * This model represents ticket that is already purchased
 * It's not the ticket created for an event
 *
 */

 export class AttendeeTicket {
    id: number;
    owner_id: number;
    event_id: number;
    ticket_id: number; 
    barcode: string; // Represents the QR code string
    purchased_date: string; //Tee date this ticket was buyed by the owner

    constructor() {
    }
 }