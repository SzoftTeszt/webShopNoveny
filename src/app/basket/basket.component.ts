import { Component } from '@angular/core';
import { KosarService } from '../kosar.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.css']
})
export class BasketComponent {

  tetelek:any
  constructor(private kosar:KosarService){
    this.kosar.getKosarTartalom().subscribe(
      (adatok)=>this.tetelek=adatok
    )
  }
}
