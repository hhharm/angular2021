import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FocusDirective } from './directives/focus.directive';
import { HighlightDirective } from './directives/highlight.directive';
import { OrderByPipe } from './order-by.pipe';

@NgModule({
  declarations: [
    HighlightDirective,
    FocusDirective,
    OrderByPipe
  ],
  imports: [CommonModule, FormsModule],
  exports: [
    HighlightDirective,
    FocusDirective,
    OrderByPipe,
    CommonModule,
    FormsModule
  ],
  providers: [],
})
export class SharedModule { }
