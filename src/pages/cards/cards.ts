import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';


@Component({
  templateUrl: 'cards.html'
})
export class CardsPage {
  card: any;

  constructor(public navCtrl: NavController, public params: NavParams) {
    this.card = params.get('card');
  }

}
