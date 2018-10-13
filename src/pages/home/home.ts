import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
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
    public navParams: NavParams) {
      this.user = this.navParams.get("usuario")
      //console.log("Hola "+this.user.name)
  }
}
