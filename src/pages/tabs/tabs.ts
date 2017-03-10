import { Component } from '@angular/core';
import { HomePage } from '../home/home';
import { QuestionsPage } from '../questions/questions';
import { CalendarPage } from '../calendar/calendar';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = QuestionsPage;
  tab3Root: any = CalendarPage;

  constructor() {

  }
}
