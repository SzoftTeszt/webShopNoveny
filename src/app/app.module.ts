import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlantsComponent } from './plants/plants.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BasketComponent } from './basket/basket.component';
import { BaskeComponent } from './baske/baske.component';

@NgModule({
  declarations: [
    AppComponent,
    PlantsComponent,
    BasketComponent,
    BaskeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
