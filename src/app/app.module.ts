import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CardsPage } from '../pages/cards/cards';
import { SlidesPage } from '../pages/slides/slides';
import { ProgramService } from '../providers/program-service';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    CardsPage,
    SlidesPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    CardsPage,
    SlidesPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, ProgramService]
})
export class AppModule {}
