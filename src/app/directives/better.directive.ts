import { OnInit, Renderer2, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[better]'
})
export class BetterDirective implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', '#eeeeee');
  }
}