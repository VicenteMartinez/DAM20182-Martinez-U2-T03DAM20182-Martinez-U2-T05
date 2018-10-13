import { Component } from '@angular/core';
import { NavController, MenuController, AlertController } from 'ionic-angular';
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
    public menuCtrl: MenuController,
    public alertCtrl: AlertController){
      
      this.menuCtrl.enable(true, 'myMenu');    
      this.user = {
        no: '14401032',
        nip: '7545',
        name: ''
      }
      this.userrest.getUsers()
  }
  
  public goToHome(){
    if(!this.validUser()){
      this.presentAlert()
      console.log('usuario invalido')
    }
    else{
      this.navCtrl.setRoot(HomePage,{usuario: this.validUser()})
    }    
  }

  validUser(){
    for(let i in this.userrest.user.usuarios){
      var no_exist = this.equal(this.userrest.user.usuarios[i].no,this.user.no)
      var nip_exist = this.equal(this.userrest.user.usuarios[i].nip, this.user.nip)
      if( no_exist && nip_exist ){                
        return this.userrest.user.usuarios[i]
      }
      else{
        return false
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

  presentAlert(){
    let alert = this.alertCtrl.create({
      title: 'Datos incorrectos',
      subTitle: 'El numero de control o nip son incorrectos',
      buttons: ['Aceptar']
    });
    alert.present();
  }
}





  
