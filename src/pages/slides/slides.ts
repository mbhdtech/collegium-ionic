import { Component } from '@angular/core';
import { NavController, NavParams, ViewController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-slides',
  templateUrl: 'slides.html'
})
export class SlidesPage {
  // slide: any;
  student: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController, public modalCtrl: ModalController, params: NavParams) {
    // this.slide = params.get('slide');
    this.student = params.get('student');
  }

  closeModal(){
    this.viewCtrl.dismiss();
  }

}
