import { Component } from '@angular/core';
import { KosarService } from '../kosar.service';
import { BaseService } from '../base.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {

  tetelek:any
  plants:any

  constructor(private kosar:KosarService, private base:BaseService){
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

}
