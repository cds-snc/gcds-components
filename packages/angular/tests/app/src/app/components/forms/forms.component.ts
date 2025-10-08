import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GcdsComponentsModule } from '@cdssnc/gcds-components-angular';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  standalone: true,
  imports: [CommonModule, GcdsComponentsModule, FormsModule],
  template: `<div>
    <gcds-breadcrumbs [hideCanadaLink]="true">
      <gcds-breadcrumbs-item href="/home" routerLink="/home">
        Home
      </gcds-breadcrumbs-item>
    </gcds-breadcrumbs>

    <gcds-heading tag="h1">Form components</gcds-heading>

    <section class="b-solid p-300 mb-300" id="input">
      <gcds-heading tag="h2" margin-top="0">Gcds-input</gcds-heading>
      <p>Text input and number input</p>

      <gcds-input
        type="text"
        input-id="name"
        name="name"
        label="Full name"
        [(ngModel)]="name"
      ></gcds-input>

      <gcds-input
        type="number"
        input-id="number"
        name="number"
        label="Number"
        [(ngModel)]="number"
      ></gcds-input>

      <div>
        <p>
          You entered: <span id="input-name">{{ name }}</span>
        </p>
        <p>
          You entered: <span id="input-number">{{ number }}</span>
        </p>
      </div>
    </section>

    <section class="b-solid p-300 mb-300" id="textarea">
      <gcds-heading tag="h2" margin-top="0">Gcds-textarea</gcds-heading>

      <gcds-textarea
        label="Message"
        textarea-id="message"
        name="message"
        [(ngModel)]="message"
      ></gcds-textarea>

      <div>
        <p>
          You entered: <span id="input-message">{{ message }}</span>
        </p>
      </div>
    </section>

    <section class="b-solid p-300 mb-300" id="date-input">
      <gcds-heading tag="h2" margin-top="0">Gcds-date-input</gcds-heading>
      <p>Date input in full and compact format.</p>

      <gcds-date-input
        legend="Full date"
        name="date-full"
        format="full"
        [(ngModel)]="date"
      ></gcds-date-input>

      <gcds-date-input
        legend="Compact date"
        name="date-compact"
        format="compact"
        [(ngModel)]="date"
      ></gcds-date-input>

      <div>
        <p>
          You entered: <span id="input-date">{{ date }}</span>
        </p>
      </div>
    </section>

    <section class="b-solid p-300 mb-300" id="select">
      <gcds-heading tag="h2" margin-top="0">Gcds-select</gcds-heading>

      <gcds-select
        label="Select"
        select-id="select"
        name="select"
        default-value="Select an option"
        [(ngModel)]="select"
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
      </gcds-select>

      <div>
        <p>
          You entered: <span id="input-select">{{ select }}</span>
        </p>
      </div>
    </section>

    <section class="b-solid p-300 mb-300" id="radios">
      <gcds-heading tag="h2" margin-top="0">Gcds-radios</gcds-heading>

      <gcds-radios
        name="radio"
        legend="Radios"
        options='[
          { "label": "Label for radio 1", "id": "radio1", "value": "radio1"},
          { "label": "Label for radio 2", "id": "radio2", "value": "radio2"},
          { "label": "Label for radio 3", "id": "radio3", "value": "radio3"}
        ]'
        [(ngModel)]="radio"
      ></gcds-radios>

      <div>
        <p>
          You entered: <span id="input-radios">{{ radio }}</span>
        </p>
      </div>
    </section>

    <section class="b-solid p-300 mb-300" id="checkboxes">
      <gcds-heading tag="h2" margin-top="0">Gcds-checkboxes</gcds-heading>

      <gcds-checkboxes
        name="check"
        legend="Checkboxes"
        options='[
            { "label": "Label for checkbox 1", "id": "check1", "value": "check1"},
            { "label": "Label for checkbox 2", "id": "check2", "value": "check2"},
            { "label": "Label for checkbox 3", "id": "check3", "value": "check3"}
          ]'
        [(ngModel)]="check"
      ></gcds-checkboxes>

      <div>
        <p>
          You entered: <span id="input-check">{{ check }}</span>
        </p>
      </div>
    </section>
  </div> `,
})
export class FormsComponent {
  name: string = '';
  message: string = '';
  select: string = '';
  date: string = '';
  radio: string = '';
  check: string | string[] = '';
  number: number = 0;
}
