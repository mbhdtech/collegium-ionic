import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CardsPage } from '../pages/cards/cards';
import { SlidesPage } from '../pages/slides/slides';
import { ProgramService } from '../providers/program-service';
import { QuestionsPage } from '../pages/questions/questions';
import { NewquePage } from '../pages/newque/newque';
import { NgCalendarModule } from 'ionic2-calendar';
import { CalendarPage } from '../pages/calendar/calendar';
import { TasksPage } from '../pages/task/task'


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    CardsPage,
    SlidesPage,
    NewquePage,
    QuestionsPage,
    CalendarPage,
    TasksPage
  ],
  imports: [
    NgCalendarModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    CardsPage,
    SlidesPage,
    NewquePage,
    QuestionsPage,
    CalendarPage,
    TasksPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }, ProgramService]
})
export class AppModule { }
