import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';
import { Materias } from '../materias/materias';
import { UsersRest } from '../../services/apirest/usersrest'
import { Events } from 'ionic-angular'
import { HomePage } from '../home/home';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LogInPage {
  public user:{
    no: string,
    nip: string,
    name: string
  }
  constructor(
    public navCtrl: NavController,
    public userrest:UsersRest,
    public event: Events,
    public menuCtrl: MenuController){
      
      this.menuCtrl.enable(true, 'myMenu');    
      this.user = {
        no: '14401032',
        nip: '7545',
        name: ''
      }
      this.userrest.getUsers()
  }
  
  public goToHome(){
    //this.validUser()
    this.navCtrl.setRoot(HomePage,{usuario: this.validUser()})
  }

  validUser(){
    for(let i in this.userrest.user.usuarios){
      var no_exist = this.equal(this.userrest.user.usuarios[i].no,this.user.no)
      var nip_exist = this.equal(this.userrest.user.usuarios[i].nip, this.user.nip)
      if( no_exist && nip_exist ){                
        return this.userrest.user.usuarios[i]
      }
    }
  }

  equal(a,b):boolean{        
    if(a==b){
      return true
    }else{
        return false
    }    
  }
}





  
