import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GcdsComponentsModule } from '@gcds-core/components-angular';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, GcdsComponentsModule],
  template: `
    <gcds-heading tag="h1"> GCDS angular test app </gcds-heading>

    <gcds-text>
      Angular test app to test GCDS Angular components and Angular functions.
    </gcds-text>

    <ul class="list-disc">
      <li>
        <gcds-link href="/forms" routerLink="/forms">Form components</gcds-link>
      </li>
      <li>
        <gcds-link href="/nav-one" routerLink="/nav-one">
          Navigation components
        </gcds-link>
      </li>
      <li>
        <p>Extra tests:</p>
        <ul class="list-disc">
          <li>
            <gcds-link href="/file-uploader" routerLink="/file-uploader">
              File uploader
            </gcds-link>
          </li>
        </ul>
      </li>
    </ul>
  `,
})
export class HomeComponent {}
