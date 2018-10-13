import { Injectable } from '@angular/core'

@Injectable()

export class User{
    public user_data: {_no:Number,_nip:Number,_name:String}
    public user_subjects: {
        no:Number,
        materias: [
            {name: string,
            photo: string,
            description: string}
        ]
    }
    constructor() {
        this.user_data = {
            _no: 0,
            _nip: 0,
            _name: ''
        }
        this.user_subjects = {
            no:0,
            materias: [
                {name: '',
                photo: '',
                description: ''}
            ]       
        }        
    }
        
    // }
    // get name() {
    //     return this.user_data._name
    // }
    // set name(newVal) {
    //     this.user_data._name = newVal
    // }
    
    // get no() {
    //     return this.user_data._no
    // }
    
    // set no(newVal) {
    //     this.user_data._no = newVal
    // }
    
    // get nip(){
    //     return this.user_data._nip
    // }

    // set nip(newVal){
    //     this.user_data._nip= newVal
    // }

    // inicializar(user){        
    //     this.name = user.name
    //     this.no = user.no
    //     this.nip = user.nip
    // }
}