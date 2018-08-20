import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GreenComponent } from './components/green/green.component';
import { RedComponent } from './components/red/red.component';
import { AppRoutingModule } from './app-routing.module';
import { RoutersContainerComponent } from './components/routers-container/routers-container.component';
import { OuterComponent } from './components/outer/outer.component';

@NgModule({
  declarations: [
    AppComponent,
    GreenComponent,
    RedComponent,
    RoutersContainerComponent,
    OuterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
