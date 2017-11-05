// import { Component, ViewChild } from '@angular/core';
import {Component, OnInit}       from '@angular/core';
import {NavController, ModalController, Platform, AlertController} from 'ionic-angular';
import { Storage }               from "@ionic/storage";
// import { AnimationService, AnimationBuilder } from 'css-animator';

import { EventSelectModalPage } from '../organizer/event-select-modal/event-select-modal';

@Component({selector: 'page-home', templateUrl: 'home.html'})

export class HomePage implements OnInit {
  // @ViewChild('myElem') myElem; private animator: AnimationBuilder;
  // constructor(public navCtrl: NavController,  animationService:
  // AnimationService) {

  constructor(public modalCtrl: ModalController, public alertCtrl : AlertController, public navCtrl : NavController, public plateform : Platform, private storage: Storage) {
    // this.animator = animationService.builder();
  }

  PresentAlert(title: string, msg: string) {
    const alert = this
      .alertCtrl
      .create({
        title: title,
        subTitle: msg,
        buttons: ['Dismiss']
      });

    alert.present();
  }

  ngOnInit() {
    let t:string = 'title by default';
    let m:string = 'Default message';

    this.storage.set('name', 'David')
    .then((e) => {
      console.log('Set with success');
    });

    this.storage.get('name')
    .then((val) => {
      console.log('Your name is ', val);
    });
    t = 'Number of stored key';
    let n = this.storage.length();
    console.log(n);

    // this.PresentAlert(t, m);
  }

  showScanPage() {
    // TODO : open a modal that shows events that this organiser is assigned to
    const EventSelectModal = this.modalCtrl.create(EventSelectModalPage, { userId: 81995 });
    EventSelectModal.present();
  }

  animateElem() {
    // this.animator.setType('flipInX').show(this.myElem.nativeElement);
  }

}
