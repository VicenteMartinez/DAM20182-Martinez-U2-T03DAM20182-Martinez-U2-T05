import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LogInPage } from '../pages/login/login';
import { Materias } from '../pages/materias/materias';
import { UsuMaterias } from '../pages/usu_materias/usu_materias';
import { HomePage } from '../pages/home/home';

//services
import { UsersRest } from '../services/apirest/usersrest';
import { SubjectsRest } from '../services/apirest/subjectsrest'
import { HttpModule } from "@angular/http";


@NgModule({
  declarations: [
    MyApp,
    LogInPage,
    Materias,
    UsuMaterias,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LogInPage,
    Materias,
    UsuMaterias,
    HomePage
  ],
  providers: [
    StatusBar,
    UsersRest,
    SubjectsRest,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
