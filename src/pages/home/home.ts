import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

    slides = [
    {
      studentName: "Mekhi Jones",
      studentSchool: "Stanford University",
      // studentImage: "background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 80%, black 100%, rgba(0, 0, 0, 0.65) 100%), url(https://scontent.cdninstagram.com/t51.2885-15/e35/15876040_255712054859476_4055350641059430400_n.jpg);background-size: cover;",
            studentImage: "https://scontent.cdninstagram.com/t51.2885-15/e35/15876040_255712054859476_4055350641059430400_n.jpg')",
    },
    {
      studentName: "Devon Howell",
      studentSchool: "Columbia University",
      studentImage: "https://i.imgur.com/LkiaKnI.jpg",
    },
    {
      studentName: "Mamadou Diallo",
      studentSchool: "Stanford University",
      studentImage: "https://i.imgur.com/JcUzEYg.jpg",
    }
  ];

  cards = [
    {
      cardTitle: "All Star Code Summer Intensive opens",
      cardContent: "All Star Code empowers young men with the skills, networks, and mindsets they need.",
      cardThumbnail: "",
      cardProgramType: "SUMMER PROGRAM",
    },
    {
      cardTitle: "DDC at Columbia University program opens",
      cardContent: "The Double Discovery Center at Columbia College works with low-income and first generation college bound Manhattan area youth from ages 12-27 to ensure high school graduation, college enrollment and completion and responsible adulthood.",
      cardThumbnail: "",
      cardProgramType: "COMMUNITY PROGRAM",

    },
    {
      cardTitle: "LEDA summer program at Princeton University opens",
      cardContent: "LEDA is a national, not-for-profit organization dedicated to identifying and developing the academic and leadership potential of exceptional public high school students.",
      cardThumbnail: "",
      cardProgramType: "SUMMER PROGRAM",

      
    },
    {
      cardTitle: "The Posse Foundation application opens",
      cardContent: "An 8-month pre-collegiate training program during the academic school year",
      cardThumbnail: "",
      cardProgramType: "COMMUNITY PROGRAM",

    },

  ]

  constructor(public navCtrl: NavController) {

  }

}
