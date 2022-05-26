//Decorators for annotating the class
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent
  ],
  // providers: [],
  bootstrap: [AppComponent]
}) //need to tell this class is module
export class AppModule {
 

}