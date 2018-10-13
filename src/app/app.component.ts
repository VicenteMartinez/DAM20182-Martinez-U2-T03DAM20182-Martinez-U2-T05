import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';


import { LogInPage } from '../pages/login/login';
import { Materias } from '../pages/materias/materias'

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav
  rootPage:any = LogInPage;

  pages:Array<{title: string, component:any}>
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();

      this.pages = [
        { title: "Mis materias", component: Materias },
        { title: "Salir", component: LogInPage }
      ]
    });
  }
  goToPage(page){
    this.nav.push(page.component)
  }
}

