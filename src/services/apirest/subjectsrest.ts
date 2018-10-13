import { Injectable } from '@angular/core'
import { Http } from '@angular/http'

@Injectable()
export class SubjectsRest{
    public subjects:any

    constructor(public http:Http){

    }

    getSubject(no){
        this.http.get("https://dam20182-guerra-martinez-u2t05.herokuapp.com/subjects/"+no)
        .subscribe(
            (res) => {
                res.json()
                this.subjects = res.json().oneUserSubjects
                //console.log("aqui esta el resultado "+this.subjects)
                
            },
            (err) => {
                console.log(err)
            }        
        )
    }
}