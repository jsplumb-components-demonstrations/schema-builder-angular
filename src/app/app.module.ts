import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { SchemaModule} from "@jsplumb-components/schema-angular"


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, SchemaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
