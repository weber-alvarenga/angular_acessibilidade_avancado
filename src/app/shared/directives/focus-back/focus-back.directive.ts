import { Directive, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[appFocusBack]'
})
export class FocusBackDirective implements OnInit, OnDestroy{
  private elementoOrigem: Element = null;

  ngOnInit(): void {
    this.elementoOrigem = document.activeElement;
  }

  ngOnDestroy(): void {
    if (this.elementoOrigem) {
      (this.elementoOrigem as HTMLElement).focus();
    }
  }

}
