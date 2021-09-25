import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  private hovered = false;

  @HostListener("mouseenter") onMouseEnter() {
    this.hovered = true;
  }
  
  @HostListener("mouseleave") onMouseLeave() {
    this.hovered = false;
  }

  @HostBinding("style.backgroundColor") get getFontWeight() {
    return this.hovered ? "#2E8BC0" : "#B1D4E0";
  }
}
