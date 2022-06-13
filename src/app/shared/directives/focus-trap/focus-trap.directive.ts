import { AfterViewInit, Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appFocusTrap]',
})
export class FocusTrapDirective implements AfterViewInit {
  private firstFocusElement: HTMLElement = null;
  private lastFocusElement: HTMLElement = null;

  constructor(private elementRef: ElementRef<any>) {}

  ngAfterViewInit(): void {

    const focusElementList = this.elementRef
      .nativeElement
      .querySelectorAll(`[tabindex]:not([tabindex="-1"]),
                        a[href]:not([disabled]),
                        button:not([disabled]),
                        textarea:not([disabled]),
                        input:not([disabled]),
                        select:not([disabled])`) as Array<HTMLElement>;

    this.firstFocusElement = focusElementList[0];
    this.lastFocusElement = focusElementList[focusElementList.length - 1];

    this.firstFocusElement.focus();
  }

  @HostListener('keydown', ['$event'])
  public tratarTabulacaoModal(event: KeyboardEvent): void {
    // propriedade "$event" declarada no HostListener é passada automaticamente para o parâmeto "event" de função

    if (event.key !== 'Tab') {
      return;
    }

    if (event.shiftKey && document.activeElement === this.firstFocusElement) {

      this.lastFocusElement.focus();
      event.preventDefault();

    } else if (document.activeElement === this.lastFocusElement) {

      this.firstFocusElement.focus();
      event.preventDefault();

    }
  }

}
