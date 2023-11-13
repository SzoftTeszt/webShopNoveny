import { Component } from '@angular/core';
import { KosarService } from '../kosar.service';
import { BaseService } from '../base.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-rendeles',
  templateUrl: './rendeles.component.html',
  styleUrls: ['./rendeles.component.css']
})
export class RendelesComponent {
  tetelek:any
  plants:any
  nev:any
  cim:any
  beleegyezes=false
  body:any={}
  
  constructor(
    private kosar:KosarService,
     private base:BaseService,
     private router:Router){

    this.kosar.getKosarTartalom().subscribe(
      (adatok)=>this.tetelek=adatok
    )

    this.base.getPlants().subscribe(
      (adatok)=>this.plants=adatok
     )        
  }

  keresNoveny(id:any){
    return this.plants.find(
      (e:any)=>e.id==id
    )
  }
  valtozas(tetel:any){
    this.kosar.addTetel(tetel.id,tetel.db)
  }

  tetelTorlese(tetel:any){
    this.kosar.tetelTorlese(tetel)
  }


  osszesen(){
    let sum=0
    this.tetelek.forEach((e:any) => {
      sum += this.keresNoveny(e.id).ar*e.db      
    });
    return sum
  }
  megrendel(){
    
    this.body.uid="1111A6E"
    this.body.nev=this.nev
    this.body.cim=this.cim
    this.body.tetelek=this.tetelek
    this.body.status="Felvéve"


    this.base.addMegrendeles(this.body).subscribe(
      ()=>this.router.navigate(['/home'])
    )
  }

}
