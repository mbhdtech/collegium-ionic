import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CardsPage } from '../cards/cards';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
      slides = [
    {
      studentName: "Mekhi Jones",
      studentSchool: "Stanford University",
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
      cardImage: "http://www.allstarcode.org/wp-content/uploads/2014/10/july07.jpg",
      cardProgramType: "SUMMER PROGRAM",
      cardArticle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper, lacus ut tempus semper, dolor lectus dictum mi, sed pretium dolor sem non nisi. Nulla semper, quam et efficitur lacinia, mi urna rhoncus leo, et pharetra risus velit ac quam. Duis vel nisi vitae purus suscipit egestas vitae sit amet metus. Fusce ac quam at sem tempor commodo. Curabitur vel nisl ac nulla faucibus laoreet. Proin hendrerit finibus efficitur. Sed vehicula, lectus sit amet iaculis feugiat, ipsum nisl semper eros, nec dictum sapien felis sagittis augue. Donec a vestibulum leo. Phasellus in sapien eu neque dapibus scelerisque eu tincidunt ipsum. Duis fringilla felis elit, in pretium magna elementum sed. Nulla ac erat vestibulum, commodo felis quis, dignissim ex. Maecenas in nisl blandit, imperdiet diam vitae, sagittis arcu.",
    },
    {
      cardTitle: "DDC at Columbia University program opens",
      cardContent: "The Double Discovery Center at Columbia College works with low-income and first generation college bound Manhattan area youth from ages 12-27 to ensure high school graduation, college enrollment and completion and responsible adulthood.",
      cardImage: "https://ddc.college.columbia.edu/sites/default/files/styles/front_photo/public/2016%20DDC%20Graduation0015.JPG?itok=PxHaMvy2",
      cardProgramType: "COMMUNITY PROGRAM",
      cardArticle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper, lacus ut tempus semper, dolor lectus dictum mi, sed pretium dolor sem non nisi. Nulla semper, quam et efficitur lacinia, mi urna rhoncus leo, et pharetra risus velit ac quam. Duis vel nisi vitae purus suscipit egestas vitae sit amet metus. Fusce ac quam at sem tempor commodo. Curabitur vel nisl ac nulla faucibus laoreet. Proin hendrerit finibus efficitur. Sed vehicula, lectus sit amet iaculis feugiat, ipsum nisl semper eros, nec dictum sapien felis sagittis augue. Donec a vestibulum leo. Phasellus in sapien eu neque dapibus scelerisque eu tincidunt ipsum. Duis fringilla felis elit, in pretium magna elementum sed. Nulla ac erat vestibulum, commodo felis quis, dignissim ex. Maecenas in nisl blandit, imperdiet diam vitae, sagittis arcu.",
    },
    {
      cardTitle: "LEDA summer program at Princeton University opens",
      cardContent: "LEDA is a national, not-for-profit organization dedicated to identifying and developing the academic and leadership potential of exceptional public high school students.",
      cardImage: "https://www.princeton.edu/main/images/news/2016/12/IMG_7143_1150.jpg",
      cardProgramType: "SUMMER PROGRAM",
      cardArticle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper, lacus ut tempus semper, dolor lectus dictum mi, sed pretium dolor sem non nisi. Nulla semper, quam et efficitur lacinia, mi urna rhoncus leo, et pharetra risus velit ac quam. Duis vel nisi vitae purus suscipit egestas vitae sit amet metus. Fusce ac quam at sem tempor commodo. Curabitur vel nisl ac nulla faucibus laoreet. Proin hendrerit finibus efficitur. Sed vehicula, lectus sit amet iaculis feugiat, ipsum nisl semper eros, nec dictum sapien felis sagittis augue. Donec a vestibulum leo. Phasellus in sapien eu neque dapibus scelerisque eu tincidunt ipsum. Duis fringilla felis elit, in pretium magna elementum sed. Nulla ac erat vestibulum, commodo felis quis, dignissim ex. Maecenas in nisl blandit, imperdiet diam vitae, sagittis arcu.",
    },
    {
      cardTitle: "The Posse Foundation application opens",
      cardContent: "An 8-month pre-collegiate training program during the academic school year",
      cardImage: "http://nationswell.com/wp-content/uploads/2014/01/posse-foundation-1.jpg",
      cardProgramType: "COMMUNITY PROGRAM",
      cardArticle: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean semper, lacus ut tempus semper, dolor lectus dictum mi, sed pretium dolor sem non nisi. Nulla semper, quam et efficitur lacinia, mi urna rhoncus leo, et pharetra risus velit ac quam. Duis vel nisi vitae purus suscipit egestas vitae sit amet metus. Fusce ac quam at sem tempor commodo. Curabitur vel nisl ac nulla faucibus laoreet. Proin hendrerit finibus efficitur. Sed vehicula, lectus sit amet iaculis feugiat, ipsum nisl semper eros, nec dictum sapien felis sagittis augue. Donec a vestibulum leo. Phasellus in sapien eu neque dapibus scelerisque eu tincidunt ipsum. Duis fringilla felis elit, in pretium magna elementum sed. Nulla ac erat vestibulum, commodo felis quis, dignissim ex. Maecenas in nisl blandit, imperdiet diam vitae, sagittis arcu.",
    },

  ]
    viewCard(card){
    this.navCtrl.push(CardsPage,{
      card: card
    });
  }

}
