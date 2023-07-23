 import { Component } from "@angular/core";
 @Component({selector : 'app-root' , templateUrl : './app.component.html' , styleUrls : ['./app.component.scss'] })
 export class AppComponent {
    title = "kerolous"
    imgUrl = ""
    handleImageChange(e : Event ){
      this.imgUrl = (e.target as HTMLInputElement).value;
    }
    logImgSelected(imgSelected:string){
      console.log(imgSelected);
    }

 }
