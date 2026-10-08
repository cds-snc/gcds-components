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
  GcdsCellDirective,
  GcdsTableWithSlotsComponent,
];

defineCustomElements(window);

@NgModule({
  // GcdsRouterDirective is standalone so it can also be imported directly in standalone components
  imports: [CommonModule, GcdsRouterDirective],
  declarations: DECLARATIONS,
  exports: [...DECLARATIONS, GcdsRouterDirective],
})
export class GcdsComponentsModule {}
