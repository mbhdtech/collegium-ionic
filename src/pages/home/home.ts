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
  // scholarships: any;
  
  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public ProgramService: ProgramService )  {
  }

ngOnInit(){
  this.getStudentsLocalData();
  this.getProgramsLocalData();
  // this.getScholarshipLocalData();
}


/***************************
****************************
    STUDENT SPOTLIGHT
****************************
***************************/
//Fetches JSON 'students' data and stores it to variable
getStudentsLocalData(){
  this.ProgramService.getStudentsLocalData().subscribe(response => {
    this.students = response;
  })
}

  // Shows student spotlight when slide clicked
  presentModal(student){
    let modal = this.modalCtrl.create(SlidesPage, {
      student: student
    });
    modal.present();

  }

/***************************
****************************
        SUMMER PROGRAMS
****************************
***************************/
//Fetches JSON 'programs' data and stores it to variable
getProgramsLocalData(){
  this.ProgramService.getProgramsLocalData().subscribe(response => {
    this.programs = response;
  })
}

//Shows program when card clicked
  viewProgram(program){
    this.navCtrl.push(CardsPage,{
      program: program
    });
  }

// //Fetches JSON 'scholarship' data and stores it to variable
// getScholarshipsLocalData(){
//   this.ProgramService.getScholarshipLocalData().subscribe(response => {
//     this.scholarships = response;
//   })
// }

//Refreshes Page
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }

    doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.programs.push( this.programs.length );
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }


}

