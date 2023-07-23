import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { PostComponent } from './post/post.component';
@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, PostComponent],
  bootstrap: [AppComponent] /* only used for the root component */
})
export class AppModule { }
