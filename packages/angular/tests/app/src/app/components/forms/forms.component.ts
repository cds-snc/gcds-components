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

    <form>
      <gcds-error-summary></gcds-error-summary>
      <section class="b-solid p-300 mb-300" id="input">
        <gcds-heading tag="h2" margin-top="0">Gcds-input</gcds-heading>
        <p>Text input and number input</p>

        <gcds-input
          type="text"
          input-id="name"
          name="name"
          label="Full name"
          [(ngModel)]="name"
          validate-on="submit"
          [required]="true"
        ></gcds-input>

        <gcds-input
          type="number"
          input-id="number"
          name="number"
          label="Number"
          [(ngModel)]="number"
          validate-on="submit"
          [required]="true"
        ></gcds-input>

        <p>
          You entered: <span id="input-name">{{ name }}</span>
        </p>
        <p>
          You entered: <span id="input-number">{{ number }}</span>
        </p>
      </section>

      <section class="b-solid p-300 mb-300" id="textarea">
        <gcds-heading tag="h2" margin-top="0">Gcds-textarea</gcds-heading>

        <gcds-textarea
          label="Message"
          textarea-id="message"
          name="message"
          [(ngModel)]="message"
          validate-on="submit"
          [required]="true"
        ></gcds-textarea>

        <p>
          You entered: <span id="input-message">{{ message }}</span>
        </p>
      </section>

      <section class="b-solid p-300 mb-300" id="date-input">
        <gcds-heading tag="h2" margin-top="0">Gcds-date-input</gcds-heading>
        <p>Date input in full and compact format.</p>

        <gcds-date-input
          legend="Full date"
          name="date-full"
          format="full"
          [(ngModel)]="dateFull"
          validate-on="submit"
          [required]="true"
        ></gcds-date-input>

        <gcds-date-input
          legend="Compact date"
          name="date-compact"
          format="compact"
          [(ngModel)]="dateCompact"
          validate-on="submit"
          [required]="true"
        ></gcds-date-input>

        <div>
          <p>
            You entered: <span id="input-date-full">{{ dateFull }}</span>
          </p>
          <p>
            You entered: <span id="input-date-compact">{{ dateCompact }}</span>
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
          validate-on="submit"
          [required]="true"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </gcds-select>

        <p>
          You entered: <span id="input-select">{{ select }}</span>
        </p>
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
          validate-on="submit"
          [required]="true"
        ></gcds-radios>

        <p>
          You entered: <span id="input-radios">{{ radio }}</span>
        </p>
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
          validate-on="submit"
          [required]="true"
        ></gcds-checkboxes>

        <p>
          You entered: <span id="input-check">{{ check }}</span>
        </p>
      </section>

      <gcds-button type="submit" button-role="primary" id="submit">
        Submit
      </gcds-button>
      <gcds-button
        type="button"
        button-role="primary"
        id="assignAll"
        (click)="assignAll()"
      >
        Assign all form fields
      </gcds-button>
      <gcds-button type="reset" button-role="danger" id="reset">
        Reset
      </gcds-button>
    </form>
  </div> `,
})
export class FormsComponent {
  name: string = '';
  message: string = '';
  select: string = '';
  dateFull: string = '';
  dateCompact: string = '';
  radio: string = '';
  check: string | string[] = '';
  number: number = 0;

  assignAll() {
    this.name = 'John Doe';
    this.message = 'This is a message showing ngModel working correctly.';
    this.select = '3';
    this.dateFull = '2024-12-25';
    this.dateCompact = '2024-12';
    this.radio = 'radio2';
    this.check = ['check2', 'check1'];
    this.number = 23;
  }
}
