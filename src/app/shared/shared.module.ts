import { NgModule } from '@angular/core';
import { FocusDirective } from './directives/focus.directive';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  declarations: [
    HighlightDirective,
    FocusDirective
  ],
  imports: [],
  exports: [
    HighlightDirective,
    FocusDirective
  ],
  providers: [],
})
export class SharedModule { }
