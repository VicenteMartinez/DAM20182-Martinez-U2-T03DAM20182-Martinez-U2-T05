import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import { SubjectsRest } from '../../services/apirest/subjectsrest' 
import { User } from '../../services/dataUser/user'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public user : {
    no: Number,
    nip: Number,
    name: String
  }
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public menuCtrl: MenuController,
    public subjects: SubjectsRest,
    public data_user: User) {       
      this.user = this.navParams.get("usuario")
      this.subjects.getSubject(this.user.no)    
      //this.data_user.inicializar(this.user)
  }
  ionViewDidEnter(){
    this.menuCtrl.enable(true, 'myMenu');    

  }
  ionViewWillLeave(){
    
    console.log(this.user)
    this.data_user.user_data._no = this.user.no
    this.data_user.user_data._nip = this.user.nip
    this.data_user.user_data._name = this.user.name
    
    console.log("me estoy llendo")
  }
}
