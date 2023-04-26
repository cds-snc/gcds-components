import { NgModule } from '@angular/core';
import { DIRECTIVES } from './stencil-generated';
import { defineCustomElements } from '@cdssnc/gcds-components/loader';

defineCustomElements(window);

@NgModule({
    declarations: [...DIRECTIVES],
    exports: [...DIRECTIVES],
})
export class GcdsComponentsModule { }
