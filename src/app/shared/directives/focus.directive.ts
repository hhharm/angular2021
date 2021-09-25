import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFocus]'
})
export class FocusDirective {
  @Input() color: string = "#B7C1A9";

  constructor(private host: ElementRef, private ren: Renderer2) {}

  @HostListener("click") onMouseEnter() {
    if (this.host) {
      this.ren.setStyle(this.host.nativeElement, "background-color", this.color);
    }
  }
  
  @HostListener("focusout") onMouseLeave() {
    if (this.host) {
      this.ren.setStyle(this.host.nativeElement, "background-color", "white");
    }
  }
}
