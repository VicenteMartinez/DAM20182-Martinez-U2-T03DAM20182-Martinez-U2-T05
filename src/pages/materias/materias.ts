import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { UsuMaterias } from '../usu_materias/usu_materias';
import { SubjectsRest } from '../../services/apirest/subjectsrest'
import { User } from '../../services/dataUser/user'

@Component({
  selector: 'page-materias',
  templateUrl: 'materias.html'
})
export class Materias {
  public subjects:any
  constructor(
    public navCtrl: NavController, 
    public menuCtrl:MenuController,
    public subjectsrest: SubjectsRest,
    public data_user: User) {
      //this.subjectsrest.getSubject()
      this.menuCtrl.enable(false, 'myMenu');      
      this.subjects = this.subjectsrest.subjects.materias  
  }

  public goToHome(){
    this.navCtrl.push(UsuMaterias);  
  }

  ionViewDidLoad(){
    
    
  }

}