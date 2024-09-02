import { Directive, ElementRef, HostListener, Input, inject } from '@angular/core';

@Directive({
  selector: 'img[fallbackImage]',
  standalone: true,
})
export class FallbackImageDirective {
  private el = inject(ElementRef)
  @Input() fallbackImage!: string;

  @HostListener('error')
  private onError() {
    const img = new Image();
    img.src = this.fallbackImage;
    img.onload = () => (this.el.nativeElement.src = this.fallbackImage)
  }
}
