import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Materias } from '../materias/materias';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LogInPage {

  constructor(public navCtrl: NavController) {

  }

  public goToHome(){
    this.navCtrl.push(Materias);  
       
    
}

}





  
