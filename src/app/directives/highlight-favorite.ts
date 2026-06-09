import { Directive, effect, ElementRef, inject, input } from '@angular/core';

@Directive({
  selector: '[appHighlightFavorite]',
  standalone: true
})
export class HighlightFavorite {
  appHighlightFavorite = input.required<Boolean>();

  private el = inject(ElementRef);

  constructor() {
    effect(() => {
      this.el.nativeElement.style.border = 
        this.appHighlightFavorite()
          ? '2px solid gold'
          : '1px solid #ddd'
    });
  }
}
