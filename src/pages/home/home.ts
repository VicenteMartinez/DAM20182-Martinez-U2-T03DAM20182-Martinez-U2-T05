import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { SubjectsRest } from '../../services/apirest/subjectsrest' 


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public user = {
    no: Number,
    nip: Number,
    name: String
  }
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController) {  
    this.user = this.navParams.get("usuario")
  }
  ionViewDidEnter(){
    this.menuCtrl.enable(true, 'myMenu');    
  }
}
