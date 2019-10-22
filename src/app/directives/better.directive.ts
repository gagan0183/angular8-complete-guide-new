import { OnInit, HostListener, HostBinding, Renderer2, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[better]'
})
export class BetterDirective implements OnInit {
  @HostBinding('style.backgroundColor') backgroundColor;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', '#eeeeee');
  }

  @HostListener('mouseenter') mouseenter(event: Event) {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', '#eeeeee');
    this.backgroundColor = '#eeeeee';
  }

  @HostListener('mouseleave') mouseleave(event: Event) {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', '#e1e1e1');
    this.backgroundColor = 'transparent';
  }
}