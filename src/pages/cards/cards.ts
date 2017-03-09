import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'cards.html'
})
export class CardsPage {
  program: any;

  constructor(public navCtrl: NavController, public params: NavParams) {
    this.program = params.get('program');
  }

}