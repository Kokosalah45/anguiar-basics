import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit , OnChanges , DoCheck , AfterContentInit , AfterContentChecked , AfterViewInit , AfterViewChecked , OnDestroy {
  //properties
  @Input() postImg = ""
  //emits
  @Output() sendImgSelected = new EventEmitter<string>();

  // always runs first OOP duh
  constructor(){
    console.log("constructor called CHILD");
  }
  // runs whenever changes happen to the component and before the ngOnInit method on the first mount
  // runs on the properties that is decorated by the @input decorator
  // if there's no @input bound properties it doens't run on the first mount
  ngOnChanges(changes: SimpleChanges): void {
    console.log("onchanges called CHILD");
  }

  // it gets called after ngOnChanges method if and only if there's @input decorated properties in the child component and it's usually the case
  // runs to initialize the the component -> good for network request to initialize your data
  ngOnInit(): void {
    console.log("oninit called CHILD");
  }

  // runs whenever a change detection cycle is completed -> in dev mode change cycle runs twice so it will run twice in dev mode
  // so it always runs after ngOnChanges except for the first mount it runs after ngOnInit
    /*
      why ?
        because change detection cycle happens in the first run anyways so it runs after ngOnInit as there's no guarantee that there's any
        input decorated properties for the child component
    */
  // it runs more frequently than ngOnChanges as ngOnChanges only runs if during a changle detection cycle a change has been detected
  // you will not need it alot
  ngDoCheck(): void {
    console.log('docheck called CHILD');
  }


  // ALL THIS FOUR LIFE CYCLE HOOKS ngAfterContentInit,ngAfterContentChecked,ngAfterViewInit and ngAfterViewChecked
  // are the burden of the parent to run

  // if there's a template passed to a component it's evaluated first due to angular being a heirarchial framework
  // so it's the burden of the parent to evaluate (create) that PROJECTED content that's why it's checked first
  // ngAfterContentInit runs only once when the PROJECTED content is evaluated
  // (component inside a template or anything passed between the tags if a component)
  ngAfterContentInit(): void {
    console.log('aftercontentinit called CHILD');

  }

  // again when a change happens to a PROJECTED component this method runs
  ngAfterContentChecked(): void {
    console.log('aftercontentchecked called CHILD');
  }

  // this method runs only once and after ngAfterContentInit and ngAfterContentChecked as when the PROJECTED CONTENT
  // is mounted a change life cycle take place so this method has to wait for both of them
  ngAfterViewInit(): void {
    console.log('afterviewinit called CHILD');

  }

  // again when a change or an event happens this method runs after ngAfterViewInit
  ngAfterViewChecked(): void {
    console.log('afterviewchecked called CHILD');
  }

  ngOnDestroy(): void {
    console.log('ondestroy called CHILD');
  }

}
