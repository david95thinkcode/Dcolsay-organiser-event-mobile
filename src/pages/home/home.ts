// import { Component, ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
// import { AnimationService, AnimationBuilder } from 'css-animator';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  //@ViewChild('myElem') myElem;
  // private animator: AnimationBuilder;

  // constructor(public navCtrl: NavController,  animationService: AnimationService) {
  constructor(public navCtrl: NavController) {
    // this.animator = animationService.builder();
  }

  animateElem() {
    // this.animator.setType('flipInX').show(this.myElem.nativeElement);
  }

}
