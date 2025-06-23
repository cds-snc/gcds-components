import { Directive, ElementRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

import { ValueAccessor } from './value-accessor';

@Directive({
  /* tslint:disable-next-line:directive-selector */
  selector: 'gcds-date-input, gcds-checkboxes, gcds-radios, gcds-input, gcds-textarea, gcds-file-uploader',
  host: {
    '(gcdsChange)': 'handleChangeEvent($event.target.value)',
    '(gcdsInput)': 'handleChangeEvent($event.target.value)'
  },
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TextValueAccessor,
      multi: true
    }
  ],standalone: false
})
export class TextValueAccessor extends ValueAccessor {
  constructor(el: ElementRef) {
    super(el);
  }
}
