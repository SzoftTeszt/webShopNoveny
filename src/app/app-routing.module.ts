import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RendelesComponent } from './rendeles/rendeles.component';

const routes: Routes = [
  {path:"home",component:HomeComponent},
  {path:"rendelesleadas",component:RendelesComponent},
  {path:"",redirectTo:"home",pathMatch:'full'},
  {path:"**",component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
