import { NgModule } from '@angular/core';
import { DIRECTIVES } from './stencil-generated';
import { defineCustomElements } from '@cdssnc/gcds-components/loader';

import { SelectValueAccessor } from './stencil-generated/select-value-accessor';
import { TextValueAccessor } from './stencil-generated/text-value-accessor';

const DECLARATIONS = [
  ...DIRECTIVES,
  // ngModel Accessors
  SelectValueAccessor,
  TextValueAccessor,
];

defineCustomElements(window);

@NgModule({
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
})
export class GcdsComponentsModule {}
