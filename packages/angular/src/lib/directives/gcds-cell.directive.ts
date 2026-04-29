import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[gcdsCell]',
  standalone: false,
})
export class GcdsCellDirective {
  @Input('gcdsCell') field!: string;

  constructor(public template: TemplateRef<any>) {}
}