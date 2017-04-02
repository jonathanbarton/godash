import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppWindowComponent } from './app-window/app-window.component';
import { AppLogoComponent } from './app-logo/app-logo.component';
import { MessageTerminalComponent } from './message-terminal/message-terminal.component';

import { MessageService } from './messages.service';

@NgModule({
  declarations: [
    AppComponent,
    AppWindowComponent,
    AppLogoComponent,
    MessageTerminalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
