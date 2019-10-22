import { Directive, OnInit, ElementRef } from '@angular/core';

@Directive({
  selector: '[basic]'
})
export class BasicDirective implements OnInit {
  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = '#000000';
  }
}