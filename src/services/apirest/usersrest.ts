import { Injectable  } from '@angular/core'
import { Http } from '@angular/http'
import { HomePage } from '../../pages/home/home'
import { SubjectsRest } from './subjectsrest'
//import { NavController, NavParams } from 'ionic-angular'

@Injectable()
export class UsersRest{

    public user:any;
    constructor (
        public http:Http,
        public subjects: SubjectsRest){

    }
    getUser(no, nip){
        this.http.get("https://dam20182-guerra-martinez-u2t05.herokuapp.com/users/"+no)
        .subscribe(
            (res) => {            
                this.user = res.json()             

                let valid_user = this.equal(no,this.user.usuario.no)
                let valid_nip = this.equal(nip, this.user.usuario.nip)
                
                if(valid_user && valid_nip){
                    console.log("Welcom "+this.user.usuario.name)                
                }
                else{
                    console.log("usuario invalido o nip incorrecto")
                }
            },
            (err) => {
                console.log(err)
            }
                    
        )                               
    }

    getUsers(){
        this.http.get("https://dam20182-guerra-martinez-u2t05.herokuapp.com/users")
        .subscribe(
            (res) => {
                this.user = res.json()
            },
            (err) => {  
                console.log(err)
            }
        )
    }
    equal(a,b):boolean{        
        if(a==b){
          return true
        }else{
            return false
        }
        
    }
    
}
