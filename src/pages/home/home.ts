import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';
import { CardsPage } from '../cards/cards';
import { SlidesPage } from '../slides/slides';
import { ProgramService } from '../../providers/program-service'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {

  students: any;
  programs: any;
  
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public ProgramService: ProgramService )  {
  }

ngOnInit(){
  this.getStudentsLocalData();
  this.getProgramsLocalData();
  // this.ProgramService.getScholarshipLocalData();
}

getStudentsLocalData(){
  this.ProgramService.getStudentsLocalData().subscribe(response => {
    this.students = response;
    console.log(this.students);
  })
}

getProgramsLocalData(){
  this.ProgramService.getProgramsLocalData().subscribe(response => {
    this.programs = response;
  })
}

//Refreshes Page
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

  //Presents student success story when slide clicked 
  //   presentModal(slide) {
  //   let modal = this.modalCtrl.create(SlidesPage, {
  //     slide: slide
  //   });
  //   modal.present();
  // }

  presentModal(student){
    let modal = this.modalCtrl.create(SlidesPage, {
      student: student
    });
    modal.present();

  }


//Shows article when card clicked
 viewCard(card){
    this.navCtrl.push(CardsPage,{
      card: card
    });
  }

  viewProgram(program){
    this.navCtrl.push(CardsPage,{
      program: program
    });
  }

//Sends article to save later
  sendToProfile(card){
    console.log('I hope you work')
  }

}

