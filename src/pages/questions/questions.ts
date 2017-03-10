import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewquePage } from '../newque/newque';

@Component({
  selector: 'page-questions',
  templateUrl: 'questions.html'
})
export class QuestionsPage {

  questions = [
    {
    questionTitle: "Scholarship Deadlines?",
    questionContent: "I was wondering what dealines are coming up?",
  },
      {
    questionTitle: "What is the average financial aid package?",
    questionContent: "I'm a senior and I was wondering what type of aid I'm going to be recieving next year?",
  },
      {
    questionTitle: "What does it take to graduate in four years?",
    questionContent: "First generation college student looking for advice.",
  },    {
    questionTitle: "What type of tutoring programs are available?",
    questionContent: "There are not enough tutoring programs in my school? Where can I see elsewhere?",
  },    {
    questionTitle: "Common App or Schools website?",
    questionContent: "Is the Common App really the best route to apply to colleges?",
  },    {
    questionTitle: "Can I take the SAT more than once?",
    questionContent: "I took the SAT the other day and it was really hard. What should I do?",
  }, {
    questionTitle: "Commuting vs On Campus?",
    questionContent: "A lot of people live on campus, but the people who save the most money live off-campus.",
  },
  
  ];

  constructor(public navCtrl: NavController) {

  }

  launchSecondPage(){
  this.navCtrl.push(NewquePage);
  }

}
