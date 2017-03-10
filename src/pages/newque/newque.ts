import { Component } from '@angular/core';
import { NavController, App, ViewController } from 'ionic-angular';


@Component({
  selector: 'page-newque',
  templateUrl: 'newque.html'
})
export class NewquePage {

  constructor(public navCtrl: NavController, public app: App, public viewCtrl: ViewController) {

  }


backPage() {
    this.viewCtrl.dismiss()
  }
}
