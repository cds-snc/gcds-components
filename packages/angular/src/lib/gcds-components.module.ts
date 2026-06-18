import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DIRECTIVES } from './stencil-generated';
import { defineCustomElements } from '@gcds-core/components/loader';

import { SelectValueAccessor } from './stencil-generated/select-value-accessor';
import { TextValueAccessor } from './stencil-generated/text-value-accessor';
import { GcdsRouterDirective } from '../lib/directives/gcds-router-link';
import { GcdsCellDirective } from '../lib/directives/gcds-cell.directive';
import { GcdsTableWithSlotsComponent } from './gcds-table-with-slots.component';

const DECLARATIONS = [
  ...DIRECTIVES,
  // ngModel Accessors
  SelectValueAccessor,
  TextValueAccessor,
  GcdsRouterDirective,
  GcdsCellDirective,
  GcdsTableWithSlotsComponent,
];

defineCustomElements(window);

@NgModule({
  imports: [CommonModule],
  declarations: DECLARATIONS,
  exports: DECLARATIONS,
})
export class GcdsComponentsModule {}
