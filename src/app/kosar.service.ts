import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KosarService {
  private kosar:any=[]
  private kosarTartalom= new BehaviorSubject(this.kosar)
  
  constructor() { }

  getKosarTartalom(){
    return this.kosarTartalom
  }

  frissul(){
    this.kosarTartalom.next(this.kosar)
  }
  
  addTetel(idv:any, dbv:any){
    let tetel={id:idv, db:dbv}
    let van=this.kosar.findIndex(
      (e:any)=> e.id==idv
    )
    console.log(van)
    if (van>=0) this.kosar[van].db=dbv
    else this.kosar.push(tetel)
    this.frissul()
    console.log(this.kosar)
  }


  tetelTorlese(tetel:any){
    this.kosar=this.kosar.filter(
      (e:any)=> e.id!=tetel.id
    )
    this.frissul()
  }

}
