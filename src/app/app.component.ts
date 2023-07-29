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
    // always runs first OOP duh
    constructor(){
      console.log("constructor called APP");
    }
    // runs whenever changes happen to the component and before the ngOnInit method on the first mount
    // runs on the properties that is decorated by the @input decorator
    // if there's no @input bound properties it doens't run on the first mount
    ngOnChanges(): void {
      console.log("onchanges called APP");
    }

    // it gets called after ngOnChanges method if and only if there's @input decorated properties in the APP component and it's usually the case
    // runs to initialize the the component -> good for network request to initialize your data
    ngOnInit(): void {
      console.log("oninit called APP");
    }

    // runs whenever a change detection cycle is completed -> in dev mode change cycle runs twice so it will run twice in dev mode
    // so it always runs after ngOnChanges except for the first mount it runs after ngOnInit
      /*
        why ?
          because change detection cycle happens in the first run anyways so it runs after ngOnInit as there's no guarantee that there's any
          input decorated properties for the APP component
      */
    // it runs more frequently than ngOnChanges as ngOnChanges only runs if during a changle detection cycle a change has been detected
    // you will not need it alot
    ngDoCheck(): void {
      console.log('docheck called APP');
    }

    ngAfterContentInit(): void {
      console.log('aftercontentinit called APP');

    }
    ngAfterContentChecked(): void {
      console.log('aftercontentchecked called APP');

    }
    ngAfterViewInit(): void {
      console.log('afterviewinit called APP');

    }
    ngAfterViewChecked(): void {
      console.log('afterviewchecked called APP');

    }
    ngOnDestroy(): void {
      console.log('ondestroy called APP');
    }

 }
