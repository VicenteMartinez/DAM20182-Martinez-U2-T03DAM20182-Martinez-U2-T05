import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Materias } from '../materias/materias';

@Component({
  selector: 'page-usu_materias',
  templateUrl: 'usu_materias.html'
})
export class UsuMaterias {

  constructor(public navCtrl: NavController) {

  }

  public goToHome(){
    this.navCtrl.push(Materias);  
       
    
}

}