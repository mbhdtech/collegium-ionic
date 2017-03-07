import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Cards page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  templateUrl: 'cards.html'
})
export class CardsPage {
  card: any;

  constructor(public navCtrl: NavController, public params: NavParams) {
    this.card = params.get('card');
  }

  ionViewDidLoad() {
    console.log(this.card);
  }

}
