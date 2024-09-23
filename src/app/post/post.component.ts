import { Component, Input, EventEmitter, Output, OnInit,
  OnChanges, DoCheck, AfterContentInit, AfterContentChecked,
  AfterViewInit, AfterViewChecked, OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-post',
  standalone: true,
  imports: [],
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit, OnChanges, DoCheck,
  AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked,
  OnDestroy {
  @Input('img') postImg = ''
  @Output() imgSelected = new EventEmitter<string>();

  constructor() {
    console.log('constructor() called', this.postImg); 
    // First called, the componenet isn't initialized yet, so the value is undefined
  }

  ngOnInit() {
    console.log('ngOnInit() called', this.postImg); 
    // Second called, the component is initialized, so the value is the one passed by the parent component
  }

  ngOnChanges(): void {
    console.log('ngOnChanges() called'); 
    // Called when a change is detected in the input properties
  }

  ngDoCheck() {
    console.log('ngDoCheck() called');
    // Called when Angular checks for changes
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked() called');
    // Called after the content is checked
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit() called');
    // Called after the content is initialized
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked() called');
    // Called after the view is checked
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit() called');
    // Called after the view is initialized
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy() called');
    // Called when the component is destroyed
  }

}
