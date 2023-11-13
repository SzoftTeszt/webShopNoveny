import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {
  serverURL="http://localhost:3000/novenyek/"
  mUrl="http://localhost:3000/megrendelesek"

  constructor(private http:HttpClient) { }

  getPlants(){
    return this.http.get(this.serverURL)
  }

  addMegrendeles(body:any){
    return this.http.post(this.mUrl, body)
  }
}
