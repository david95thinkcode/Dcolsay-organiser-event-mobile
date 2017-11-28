import { Storage  }         from "@ionic/storage";
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { User } from "../../models/api/user.model";
import * as StorageKey              from '../../models/storage';

/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()

export class AuthServiceProvider {
  currentUser: User;

  constructor(private storage: Storage) {
    console.log('Hello AuthServiceProvider Provider');
  }

  public login(credentials : User) {
    let _default_email:string = 'davidhihea@gmail.com';
    let _default_pass: string = '81995';
    let _default_name: string = 'Dcolsay';

    if ((credentials.email == null) || (credentials.password == null)) {
      return Observable.throw("Please insert credentials");
    }
    else {
      return Observable.create(observer => {
        // make a request to the backend to make a real check!
        let access = (credentials.password == _default_pass && credentials.email.trim() == _default_email);
        this.currentUser = new User();
        this.currentUser.email = _default_email;
        this.currentUser.password = _default_pass;
        this.currentUser.first_name = _default_name;
        observer.next(access);
        observer.complete();
      });
    }
  }

  public register(credentials) {
    // Inside the register function we can’t do anything as we have no
    // backend, so we only check if we got any values and then return success. 
    // This is the place to make a POST request to your server and create the new user!
    if (credentials.email === null || credentials.password === null) {
      return Observable.throw("Please insert credentials");
    } else {
      // At this point store the credentials to your backend!
      return Observable.create(observer => {
        observer.next(true);
        observer.complete();
      });
    }
  }
 
  public getUserInfo() : User {
    return this.currentUser;
  }
 
  public logout() {
    return Observable.create(observer => {
      this.DeleteAuthFromLocalStorale();
      this.currentUser = null;      
      observer.next(true);
      observer.complete();
    });
  }

  private DeleteAuthFromLocalStorale() {
    // TODO : this is not working properly
    this.storage.remove(StorageKey.getEmailKey())
    .then((one) => {
      // this.storage.remove(StorageKey.getPasswordKey())
      // .then((sec) => { console.log('MDP supprimé')  })
      // .catch()
    })
    .catch((ror) => { console.log("Logout failed"); })
  }

}