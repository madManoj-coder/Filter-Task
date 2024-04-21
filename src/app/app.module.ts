import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { FairsDashboardComponent } from './shared/components/fairs-dashboard/fairs-dashboard.component';
import { FairsCardComponent } from './shared/components/fairs-card/fairs-card.component';
import { FairsDetailsComponent } from './shared/components/fairs-details/fairs-details.component';

@NgModule({
  declarations: [
    AppComponent,
    FairsDashboardComponent,
    FairsCardComponent,
    FairsDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
