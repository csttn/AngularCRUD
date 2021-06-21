import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[redColor]',
})
export class RedDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.color = '#c2185b';
  }
}
