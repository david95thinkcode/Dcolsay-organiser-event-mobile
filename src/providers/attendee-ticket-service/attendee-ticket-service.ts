import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { User } from '../../models/api/user.model';
import { AttendeeTicket } from '../../models/api/attendee-ticket.model';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite';
/*
  Generated class for the AttendeeTicketServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

const DATABASE_FILENAME: string = "dcolsay_tickets.db";

@Injectable()
export class AttendeeTicketServiceProvider {
  
  private ticket_URL : string = 'http://localhost/dc/attendees.php';
  private database: SQLiteObject;
  private database_config: any;

  constructor(public http: Http, private sqlite: SQLite) {
    this.database_config = { name: DATABASE_FILENAME, location: 'default' };    
    console.log(this.database_config);
  }
  
  /**
   * Retrieve all tickets from a specified user
   * @param user 
   */
  getTicketsFromAPI(user : User) : Promise<AttendeeTicket[]> {
    
    return this.http
    .get(this.ticket_URL)
    .toPromise()
    .then(res => res.json().data as AttendeeTicket[]) // res.json().data can be different after api implementation
    .catch(this.handleError);
  }
  
  getTicketFromSQLite() {
    // We don't nee to specified the user like a parameter
    // this.database.executeSql('SELECT * FROM Tickets', [])
    // .then((data) => {
    //   // this.PresentAlert('Retrieving details', JSON.stringify(data));
    //     if (data.rows) {
    //       this.PresentAlert('Tickets table is not empty', JSON.stringify(data.rows.item(2).code_data));
    //       if (data.rows.lenght > 0 ) {            
    //         for (let i  = 0; i < data.rows.length; i++ ) {
    //           this.qrcodeValue.push(data.rows.item(i).code_data)
    //           this.PresentAlert('Elément ' + i, this.qrcodeValue[i]);
    //         }          
    //       }
    //     }
        
    //   /// this.qrcodeValue = tickets;        
    // })
    // .catch((e) => { this.PresentAlert('', 'Retrieving failed'); })

  }

  private createSQLiteDB() {
    this.sqlite.create(this.database_config)
    .then((database: SQLiteObject) => {
      this.database = database;
      this.createSQLiteTables();
    })
    .catch((error) => { console.log('Failed to open database --> ' +error.message ); })
  }
  
  /**
   * Create the following table in SQLITE DB
   * User
   * Tickets
   * Events
   */
  private createSQLiteTables() {

  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  
}
