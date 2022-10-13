import { NgModule } from '@angular/core';

import { DIRECTIVES } from './stencil-generated';

import { defineCustomElements } from 'gcds-components/loader';

defineCustomElements(window);

@NgModule({
  declarations: [
    ...DIRECTIVES
  ],
  imports: [
  ],
  exports: [
    ...DIRECTIVES
  ]
})
export class GcdsComponentsModule { }
