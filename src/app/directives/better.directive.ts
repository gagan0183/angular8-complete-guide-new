import { OnInit, HostListener, HostBinding, Input, Renderer2, Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[better]'
})
export class BetterDirective implements OnInit {
  @Input() defaultColor = 'transparent';
  @Input() highlightColor = '#eeeeee';
  @HostBinding('style.backgroundColor') backgroundColor;
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', '#eeeeee');
    this.backgroundColor = this.defaultColor;
  }

  @HostListener('mouseenter') mouseenter(event: Event) {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', '#eeeeee');
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(event: Event) {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor', '#e1e1e1');
    this.backgroundColor = this.defaultColor;
  }
}