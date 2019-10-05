import { Component, OnInit, Input, ViewEncapsulation, AfterContentInit, AfterContentChecked, OnChanges, DoCheck, AfterViewInit, AfterViewChecked, ContentChild, OnDestroy, ElementRef, ViewChild, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  //encapsulation: ViewEncapsulation.None
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy  {
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('heading', {static: true}) heading: ElementRef;
  @ContentChild('contentParagrap', {static: true}) contentParagrap: ElementRef;

  constructor() { 
    console.log('constructors');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit');
  }

  ngDoCheck() {
    console.log('ngDoCheck');
  }
  
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
    console.log('contentParagrap ' + this.contentParagrap.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
    console.log(this.heading.nativeElement.textContent);
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
    console.log(this.heading.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}