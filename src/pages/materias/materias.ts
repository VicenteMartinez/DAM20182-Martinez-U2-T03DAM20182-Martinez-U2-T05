import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { UsuMaterias } from '../usu_materias/usu_materias';

@Component({
  selector: 'page-materias',
  templateUrl: 'materias.html'
})
export class Materias {

  constructor(public navCtrl: NavController, public menuCtrl:MenuController) {
    this.menuCtrl.enable(false, 'myMenu');
  }

  public goToHome(){
    this.navCtrl.push(UsuMaterias);  
  }

}