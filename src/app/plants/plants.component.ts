import { Component } from '@angular/core';
import { BaseService } from '../base.service';
import { KosarService } from '../kosar.service';

@Component({
  selector: 'app-plants',
  templateUrl: './plants.component.html',
  styleUrls: ['./plants.component.css']
})
export class PlantsComponent {

    plants:any
    showError=false
    errorMessage=""

    oszlopok=[
      {key:"id", text:"#", type:"plain"},
      {key:"ar", text:"Ár", type:"number"},
      {key:"kepUrl", text:"Kép", type:"image"},
      {key:"leiras", text:"Leírás", type:"text"},
      {key:"megnevezes", text:"Név", type:"text"},
    ]

    constructor(private base:BaseService, private kosar:KosarService){

      


       this.base.getPlants().subscribe({

        next:(adatok)=>{this.plants=adatok; this.showError=false },
        error:(e)=>{this.showError=true; this.errorMessage=e.message}
       
       })        
    }

    kosarba(id:any, db:any){
      // console.log(id,";",db)
      this.kosar.addTetel(id,db)
    }
}
