// import { Component, ViewChild } from '@angular/core';
import {Component, OnInit} from '@angular/core';
import {NavController, Platform} from 'ionic-angular';
// import { AnimationService, AnimationBuilder } from 'css-animator';

@Component({selector: 'page-home', templateUrl: 'home.html'})

export class HomePage implements OnInit {
  // @ViewChild('myElem') myElem; private animator: AnimationBuilder;
  // constructor(public navCtrl: NavController,  animationService:
  // AnimationService) {
  constructor(public navCtrl : NavController, public plateform : Platform) {
    // this.animator = animationService.builder();
  }

  ngOnInit() {}

  animateElem() {
    // this.animator.setType('flipInX').show(this.myElem.nativeElement);
  }

}
