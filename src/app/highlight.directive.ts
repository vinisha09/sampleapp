import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input('appHighlight')
  highlightColor!: string;
  @Input()
  highlightName!: string;
  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    if (this.el.nativeElement.innerText.includes(this.highlightName)) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', this.highlightColor || 'orange');
    }
  }
}
