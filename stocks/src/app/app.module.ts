import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Registers service with the App module
import { StocksService } from './services/stocks.service';
// Register HttpClient with the application as well
import { HttpClientModule } from '@angular/common/http';
import { SummaryComponent } from './components/summary/summary.component';

@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  // Now we need to register the new StocksService with the providers property to 
  // inform Angular that it should be made available for the module to use:
  providers: [StocksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
