import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TJsonViewerModule } from 't-json-viewer';

import { AppComponent } from './app.component';
import { UrlParseService } from './url-parse.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    TJsonViewerModule,
    ReactiveFormsModule
  ],
  providers: [
    UrlParseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
