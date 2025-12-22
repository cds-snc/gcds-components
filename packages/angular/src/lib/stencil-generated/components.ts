/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@cdssnc/gcds-components';


@ProxyCmp({
  inputs: ['alertRole', 'container', 'heading', 'hideCloseBtn', 'hideRoleIcon', 'isFixed'],
  outputs: ['gcdsDismiss']
})
@Component({
  selector: 'gcds-alert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alertRole', 'container', 'heading', 'hideCloseBtn', 'hideRoleIcon', 'isFixed'],
  outputs: ['gcdsDismiss'],
  standalone: false,
})
export class GcdsAlert {
  protected el: HTMLGcdsAlertElement;
    /**
   * Defines alert role. @default 'info'
   */
  set alertRole(_: Components.GcdsAlert['alertRole']) {};
    /**
   * Defines the max width of the alert content. @default 'full'
   */
  set container(_: Components.GcdsAlert['container']) {};
    /**
   * Defines the alert heading.
   */
  set heading(_: Components.GcdsAlert['heading']) {};
    /**
   * Defines if the alert's close button is displayed or not. @default false
   */
  set hideCloseBtn(_: Components.GcdsAlert['hideCloseBtn']) {};
    /**
   * Defines if the alert's role icon is displayed or not. @default false
   */
  set hideRoleIcon(_: Components.GcdsAlert['hideRoleIcon']) {};
    /**
   * Defines if the alert's position is fixed. @default false
   */
  set isFixed(_: Components.GcdsAlert['isFixed']) {};
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, ['gcdsDismiss']);
  }
}


export declare interface GcdsAlert extends Components.GcdsAlert {
  /**
   * Events
   */
  gcdsDismiss: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['hideCanadaLink']
})
@Component({
  selector: 'gcds-breadcrumbs',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['hideCanadaLink'],
  standalone: false,
})
export class GcdsBreadcrumbs {
  protected el: HTMLGcdsBreadcrumbsElement;
    /**
   * Defines if the default canada.ca link is displayed or omitted. @default false
   */
  set hideCanadaLink(_: Components.GcdsBreadcrumbs['hideCanadaLink']) {};
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsBreadcrumbs extends Components.GcdsBreadcrumbs {}


@ProxyCmp({
  inputs: ['href'],
  outputs: ['gcdsFocus', 'gcdsBlur', 'gcdsClick']
})
@Component({
  selector: 'gcds-breadcrumbs-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['href'],
  outputs: ['gcdsFocus', 'gcdsBlur', 'gcdsClick'],
  standalone: false,
})
export class GcdsBreadcrumbsItem {
  protected el: HTMLGcdsBreadcrumbsItemElement;
    /**
   * Specifies the href of the breadcrumb item.
   */
  set href(_: Components.GcdsBreadcrumbsItem['href']) {};
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, ['gcdsFocus', 'gcdsBlur', 'gcdsClick']);
  }
}


export declare interface GcdsBreadcrumbsItem extends Components.GcdsBreadcrumbsItem {
  /**
   * Emitted when the link has focus.
   */
  gcdsFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the link loses focus.
   */
  gcdsBlur: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the link has been clicked. Contains the href in the event detail.
   */
  gcdsClick: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['buttonId', 'buttonRole', 'disabled', 'download', 'href', 'name', 'rel', 'size', 'target', 'type', 'value'],
  outputs: ['gcdsClick', 'gcdsFocus', 'gcdsBlur']
})
@Component({
  selector: 'gcds-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['buttonId', 'buttonRole', 'disabled', 'download', 'href', 'name', 'rel', 'size', 'target', 'type', 'value'],
  outputs: ['gcdsClick', 'gcdsFocus', 'gcdsBlur'],
  standalone: false,
})
export class GcdsButton {
  protected el: HTMLGcdsButtonElement;
    /**
   * Set button types @default 'button'
   */
  set type(_: Components.GcdsButton['type']) {};
    /**
   * Set the main style @default 'primary'
   */
  set buttonRole(_: Components.GcdsButton['buttonRole']) {};
    /**
   * Set the button size @default 'regular'
   */
  set size(_: Components.GcdsButton['size']) {};
    /**
   * The buttonId attribute specifies the id for a <button> element.
   */
  set buttonId(_: Components.GcdsButton['buttonId']) {};
    /**
   * The name attribute specifies the name for a <button> element.
   */
  set name(_: Components.GcdsButton['name']) {};
    /**
   * The disabled attribute for a <button> element.
   */
  set disabled(_: Components.GcdsButton['disabled']) {};
    /**
   * The value attribute specifies the value for a <button> element.
   */
  set value(_: Components.GcdsButton['value']) {};
    /**
   * The href attribute specifies the URL of the page the link goes to
   */
  set href(_: Components.GcdsButton['href']) {};
    /**
   * The rel attribute specifies the relationship between the current document and the linked document
   */
  set rel(_: Components.GcdsButton['rel']) {};
    /**
   * The target attribute specifies where to open the linked document
   */
  set target(_: Components.GcdsButton['target']) {};
    /**
   * The download attribute specifies that the target (the file specified in the href attribute) will be downloaded when a user clicks on the hyperlink
   */
  set download(_: Components.GcdsButton['download']) {};
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, ['gcdsClick', 'gcdsFocus', 'gcdsBlur']);
  }
}


export declare interface GcdsButton extends Components.GcdsButton {
  /**
   * Emitted when the button has been clicked. Contains the value or href in the event detail.
   */
  gcdsClick: EventEmitter<CustomEvent<string | void>>;
  /**
   * Emitted when the button has focus.
   */
  gcdsFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the button loses focus.
   */
  gcdsBlur: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['badge', 'cardTitle', 'cardTitleTag', 'description', 'href', 'imgAlt', 'imgSrc'],
  outputs: ['gcdsFocus', 'gcdsBlur', 'gcdsClick']
})
@Component({
  selector: 'gcds-card',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['badge', 'cardTitle', 'cardTitleTag', 'description', 'href', 'imgAlt', 'imgSrc'],
  outputs: ['gcdsFocus', 'gcdsBlur', 'gcdsClick'],
  standalone: false,
})
export class GcdsCard {
  protected el: HTMLGcdsCardElement;
    /**
   * The card title attribute specifies the title that appears on the card
   */
  set cardTitle(_: Components.GcdsCard['cardTitle']) {};
    /**
   * The href attribute specifies the URL of the page the link goes to
   */
  set href(_: Components.GcdsCard['href']) {};
    /**
   * The card title tag property specifies the HTML heading element for the title.
This property does not modify the font size. It is used to assign the heading level
in order to maintain heading hierarchy and accessibility for assistive technologies.
   */
  set cardTitleTag(_: Components.GcdsCard['cardTitleTag']) {};
    /**
   * The description attribute specifies the body of text that appears on the card
   */
  set description(_: Components.GcdsCard['description']) {};
    /**
   * The badge attribute specifies the badge text that appears in the top left corner of the card. 20 character limit.
   */
  set badge(_: Components.GcdsCard['badge']) {};
    /**
   * The img src attribute specifies the path to the image
   */
  set imgSrc(_: Components.GcdsCard['imgSrc']) {};
    /**
   * The img alt attribute specifies the alt text for the image provided, if none, image will be decorative
   */
  set imgAlt(_: Components.GcdsCard['imgAlt']) {};
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, ['gcdsFocus', 'gcdsBlur', 'gcdsClick']);
  }
}


export declare interface GcdsCard extends Components.GcdsCard {
  /**
   * Emitted when the card has focus.
   */
  gcdsFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the card loses focus.
   */
  gcdsBlur: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the card has been clicked. Contains the href in the event detail.
   */
  gcdsClick: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['autofocus', 'disabled', 'errorMessage', 'form', 'hideLabel', 'hideLegend', 'hint', 'legend', 'name', 'options', 'required', 'validateOn', 'validator', 'validity', 'value'],
  methods: ['validate', 'checkValidity', 'getValidationMessage'],
  outputs: ['gcdsClick', 'gcdsFocus', 'gcdsBlur', 'gcdsInput', 'gcdsChange', 'gcdsError', 'gcdsValid']
})
@Component({
  selector: 'gcds-checkboxes',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autofocus', 'disabled', 'errorMessage', 'form', 'hideLabel', 'hideLegend', 'hint', 'legend', 'name', 'options', 'required', 'validateOn', 'validator', 'validity', 'value'],
  outputs: ['gcdsClick', 'gcdsFocus', 'gcdsBlur', 'gcdsInput', 'gcdsChange', 'gcdsError', 'gcdsValid'],
  standalone: false,
})
export class GcdsCheckboxes {
  protected el: HTMLGcdsCheckboxesElement;
    /**
   * Name attribute for a checkboxes element.
   */
  set name(_: Components.GcdsCheckboxes['name']) {};
    /**
   * Set the legend for fieldset form group.
   */
  set legend(_: Components.GcdsCheckboxes['legend']) {};
    /**
   * Options to render checkboxes buttons
   */
  set options(_: Components.GcdsCheckboxes['options']) {};
    /**
   * Specifies if the checkboxes are required or not.
   */
  set required(_: Components.GcdsCheckboxes['required']) {};
    /**
   * Specifies if the checkboxes are disabled or not.
   */
  set disabled(_: Components.GcdsCheckboxes['disabled']) {};
    /**
   * If true, the checkobox will be focused on component render
   */
  set autofocus(_: Components.GcdsCheckboxes['autofocus']) {};
    /**
   * The ID of the form that the checkboxes belong to.
   */
  set form(_: Components.GcdsCheckboxes['form']) {};
    /**
   * For single checkbox, specifies if the label is hidden or not. @default false
   */
  set hideLabel(_: Components.GcdsCheckboxes['hideLabel']) {};
    /**
   * For checkbox groups, specifies if the legend is hidden or not. @default false
   */
  set hideLegend(_: Components.GcdsCheckboxes['hideLegend']) {};
    /**
   * Value for checkboxes component. @default []
   */
  set value(_: Components.GcdsCheckboxes['value']) {};
    /**
   * Set this to display an error message for invalid <gcds-checkboxes>
   */
  set errorMessage(_: Components.GcdsCheckboxes['errorMessage']) {};
    /**
   * Hint displayed below the label.
   */
  set hint(_: Components.GcdsCheckboxes['hint']) {};
    /**
   * Array of validators
   */
  set validator(_: Components.GcdsCheckboxes['validator']) {};
    /**
   * Set event to call validator @default 'blur'
   */
  set validateOn(_: Components.GcdsCheckboxes['validateOn']) {};
    /**
   * Read-only property of the checkboxes, returns a ValidityState object that represents the validity states this element is in. @readonly 
   */
  set validity(_: Components.GcdsCheckboxes['validity']) {};
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, ['gcdsClick', 'gcdsFocus', 'gcdsBlur', 'gcdsInput', 'gcdsChange', 'gcdsError', 'gcdsValid']);
  }
}


export declare interface GcdsCheckboxes extends Components.GcdsCheckboxes {
  /**
   * Emitted when the checkbox has been clicked.
   */
  gcdsClick: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the checkbox has focus.
   */
  gcdsFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the checkbox loses focus.
   */
  gcdsBlur: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when a checkbox has been inputted. Contains the new value in the event detail.
   */
  gcdsInput: EventEmitter<CustomEvent<string[]>>;
  /**
   * Emitted when a checkbox has been changed. Contains the new value in the event detail.
   */
  gcdsChange: EventEmitter<CustomEvent<string[]>>;
  /**
   * Emitted when the checkbox has a validation error.
   */
  gcdsError: EventEmitter<CustomEvent<object>>;
  /**
   * Emitted when the checkbox has a validation error.
   */
  gcdsValid: EventEmitter<CustomEvent<object>>;
}


@ProxyCmp({
  inputs: ['align', 'border', 'layout', 'margin', 'padding', 'size', 'tag']
})
@Component({
  selector: 'gcds-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['align', 'border', 'layout', 'margin', 'padding', 'size', 'tag'],
  standalone: false,
})
export class GcdsContainer {
  protected el: HTMLGcdsContainerElement;
    /**
   * Defines the container's alignment.
This property is ignored when `layout` is set to `page`,
as the page layout has higher priority.
   */
  set align(_: Components.GcdsContainer['align']) {};
    /**
   * Defines if the container has a border. @default false
   */
  set border(_: Components.GcdsContainer['border']) {};
    /**
   * Controls how the container aligns with the page layout.
When set to `page`, the container uses a max width of 1140px and
switches to 90% width on smaller screens to scale consistently with
core page layout components such as the header and footer.
When set to `full`, the container spans the full width (100%)
of its parent.
   */
  set layout(_: Components.GcdsContainer['layout']) {};
    /**
   * Container margin. Horizontal margins (left and right) are not
applied if the container’s align property is defined, since
alignment has higher priority.
   */
  set margin(_: Components.GcdsContainer['margin']) {};
    /**
   * Defines the container's padding.
   */
  set padding(_: Components.GcdsContainer['padding']) {};
    /**
   * Defines container size. @default 'full'
   */
  set size(_: Components.GcdsContainer['size']) {};
    /**
   * Set tag for container. @default 'div'
   */
  set tag(_: Components.GcdsContainer['tag']) {};
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsContainer extends Components.GcdsContainer {}


@ProxyCmp({
  inputs: ['autofocus', 'disabled', 'errorMessage', 'form', 'format', 'hint', 'legend', 'max', 'min', 'name', 'required', 'validateOn', 'validator', 'validity', 'value'],
  methods: ['validate', 'checkValidity', 'getValidationMessage'],
  outputs: ['gcdsFocus', 'gcdsBlur', 'gcdsInput', 'gcdsChange', 'gcdsError', 'gcdsValid']
})
@Component({
  selector: 'gcds-date-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autofocus', 'disabled', 'errorMessage', 'form', 'format', 'hint', 'legend', 'max', 'min', 'name', 'required', 'validateOn', 'validator', 'validity', 'value'],
  outputs: ['gcdsFocus', 'gcdsBlur', 'gcdsInput', 'gcdsChange', 'gcdsError', 'gcdsValid'],
  standalone: false,
})
export class GcdsDateInput {
  protected el: HTMLGcdsDateInputElement;
    /**
   * Name attribute for the date input.
   */
  set name(_: Components.GcdsDateInput['name']) {};
    /**
   * Fieldset legend
   */
  set legend(_: Components.GcdsDateInput['legend']) {};
    /**
   * Set this property to full to show month, day, and year form elements. Set it to compact to show only the month and year form elements.
   */
  set format(_: Components.GcdsDateInput['format']) {};
    /**
   * Combined date value from the two/three form elements. Format: YYYY-MM-DD or YYYY-MM
   */
  set value(_: Components.GcdsDateInput['value']) {};
    /**
   * Specifies if a form field is required or not. @default false
   */
  set required(_: Components.GcdsDateInput['required']) {};
    /**
   * Hint displayed below the legend and above form fields.
   */
  set hint(_: Components.GcdsDateInput['hint']) {};
    /**
   * Error message displayed below the legend and above form fields.
   */
  set errorMessage(_: Components.GcdsDateInput['errorMessage']) {};
    /**
   * Specifies if the date input is disabled or not. @default false
   */
  set disabled(_: Components.GcdsDateInput['disabled']) {};
    /**
   * If true, the date-input will be focused on component render
   */
  set autofocus(_: Components.GcdsDateInput['autofocus']) {};
    /**
   * The maximum date that the date-input field can accept.
Format: YYYY-MM-DD or YYYY-MM
   */
  set max(_: Components.GcdsDateInput['max']) {};
    /**
   * The minimum date that the date-input field can accept.
Format: YYYY-MM-DD or YYYY-MM
   */
  set min(_: Components.GcdsDateInput['min']) {};
    /**
   * The ID of the form that the date-input field belongs to.
   */
  set form(_: Components.GcdsDateInput['form']) {};
    /**
   * Read-only property of the date-input, returns a ValidityState object that represents the validity states this element is in. @readonly 
   */
  set validity(_: Components.GcdsDateInput['validity']) {};
    /**
   * Array of validators
   */
  set validator(_: Components.GcdsDateInput['validator']) {};
    /**
   * Set event to call validator @default 'blur'
   */
  set validateOn(_: Components.GcdsDateInput['validateOn']) {};
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, ['gcdsFocus', 'gcdsBlur', 'gcdsInput', 'gcdsChange', 'gcdsError', 'gcdsValid']);
  }
}


export declare interface GcdsDateInput extends Components.GcdsDateInput {
  /**
   * Emitted when a date-input has focus.
   */
  gcdsFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when a date-input loses focus.
   */
  gcdsBlur: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the date-input has received input. Contains the new value in the event detail.
   */
  gcdsInput: EventEmitter<CustomEvent<string>>;
  /**
   * Emitted when a date-input has changed. Contains the new value in the event detail.
   */
  gcdsChange: EventEmitter<CustomEvent<string>>;
  /**
   * Emitted when a date-input has a validation error.
   */
  gcdsError: EventEmitter<CustomEvent<object>>;
  /**
   * Emitted when a date-input has validated.
   */
  gcdsValid: EventEmitter<CustomEvent<object>>;
}


@ProxyCmp({
  inputs: ['type']
})
@Component({
  selector: 'gcds-date-modified',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['type'],
  standalone: false,
})
export class GcdsDateModified {
  protected el: HTMLGcdsDateModifiedElement;
    /**
   * Set date modified type. Default is date. @default 'date'
   */
  set type(_: Components.GcdsDateModified['type']) {};
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsDateModified extends Components.GcdsDateModified {}


@ProxyCmp({
  inputs: ['detailsTitle', 'open'],
  methods: ['toggle'],
  outputs: ['gcdsFocus', 'gcdsBlur', 'gcdsClick']
})
@Component({
  selector: 'gcds-details',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['detailsTitle', 'open'],
  outputs: ['gcdsFocus', 'gcdsBlur', 'gcdsClick'],
  standalone: false,
})
export class GcdsDetails {
  protected el: HTMLGcdsDetailsElement;
    /**
   * The details title summarizes the panel content.
   */
  set detailsTitle(_: Components.GcdsDetails['detailsTitle']) {};
    /**
   * Defines if the details panel is open by default or not. @default false
   */
  set open(_: Components.GcdsDetails['open']) {};
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, ['gcdsFocus', 'gcdsBlur', 'gcdsClick']);
  }
}


export declare interface GcdsDetails extends Components.GcdsDetails {
  /**
   * Emitted when the details has focus.
   */
  gcdsFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the details loses focus.
   */
  gcdsBlur: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the details has been clicked.
   */
  gcdsClick: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['messageId']
})
@Component({
  selector: 'gcds-error-message',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['messageId'],
  standalone: false,
})
export class GcdsErrorMessage {
  protected el: HTMLGcdsErrorMessageElement;
    /**
   * Id attribute for the error message.
   */
  set messageId(_: Components.GcdsErrorMessage['messageId']) {};
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsErrorMessage extends Components.GcdsErrorMessage {}


@ProxyCmp({
  inputs: ['errorLinks', 'heading', 'listen'],
  outputs: ['gcdsFocus', 'gcdsBlur', 'gcdsClick']
})
@Component({
  selector: 'gcds-error-summary',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['errorLinks', 'heading', 'listen'],
  outputs: ['gcdsFocus', 'gcdsBlur', 'gcdsClick'],
  standalone: false,
})
export class GcdsErrorSummary {
  protected el: HTMLGcdsErrorSummaryElement;
    /**
   * Set error summary heading
   */
  set heading(_: Components.GcdsErrorSummary['heading']) {};
    /**
   * Specifies if the error summary should listen for GcdsError event to generate error list. @default true
   */
  set listen(_: Components.GcdsErrorSummary['listen']) {};
    /**
   * Object of list items for error list. Format: { link-href: link-label }
   */
  set errorLinks(_: Components.GcdsErrorSummary['errorLinks']) {};
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, ['gcdsFocus', 'gcdsBlur', 'gcdsClick']);
  }
}


export declare interface GcdsErrorSummary extends Components.GcdsErrorSummary {
  /**
   * Emitted when the link has focus.
   */
  gcdsFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the link loses focus.
   */
  gcdsBlur: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the link has been clicked.
   */
  gcdsClick: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['hint', 'legend', 'legendSize']
})
@Component({
  selector: 'gcds-fieldset',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['hint', 'legend', 'legendSize'],
  standalone: false,
})
export class GcdsFieldset {
  protected el: HTMLGcdsFieldsetElement;
    /**
   * Hint displayed below the legend.
   */
  set hint(_: Components.GcdsFieldset['hint']) {};
    /**
   * The title for the contents of the fieldset
   */
  set legend(_: Components.GcdsFieldset['legend']) {};
    /**
   * Sets the appropriate font size for the fieldset legend.
   */
  set legendSize(_: Components.GcdsFieldset['legendSize']) {};
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsFieldset extends Components.GcdsFieldset {}


@ProxyCmp({
  inputs: ['accept', 'autofocus', 'disabled', 'errorMessage', 'files', 'form', 'hideLabel', 'hint', 'label', 'multiple', 'name', 'required', 'uploaderId', 'validateOn', 'validator', 'validity', 'value'],
  methods: ['validate', 'checkValidity', 'getValidationMessage'],
  outputs: ['gcdsFocus', 'gcdsBlur', 'gcdsChange', 'gcdsInput', 'gcdsRemoveFile', 'gcdsError', 'gcdsValid']
})
@Component({
  selector: 'gcds-file-uploader',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['accept', 'autofocus', 'disabled', 'errorMessage', 'files', 'form', 'hideLabel', 'hint', 'label', 'multiple', 'name', 'required', 'uploaderId', 'validateOn', 'validator', 'validity', 'value'],
  outputs: ['gcdsFocus', 'gcdsBlur', 'gcdsChange', 'gcdsInput', 'gcdsRemoveFile', 'gcdsError', 'gcdsValid'],
  standalone: false,
})
export class GcdsFileUploader {
  protected el: HTMLGcdsFileUploaderElement;
    /**
   * Id attribute for a file uploader element.
   */
  set uploaderId(_: Components.GcdsFileUploader['uploaderId']) {};
    /**
   * Name attribute for file input element.
   */
  set name(_: Components.GcdsFileUploader['name']) {};
    /**
   * Form field label.
   */
  set label(_: Components.GcdsFileUploader['label']) {};
    /**
   * Specifies if the label is hidden or not. @default false
   */
  set hideLabel(_: Components.GcdsFileUploader['hideLabel']) {};
    /**
   * Specifies if a form field is required or not. @default false
   */
  set required(_: Components.GcdsFileUploader['required']) {};
    /**
   * Specifies if a file uploader element is disabled or not. @default false
   */
  set disabled(_: Components.GcdsFileUploader['disabled']) {};
    /**
   * Value for a file uploader element. @default []
   */
  set value(_: Components.GcdsFileUploader['value']) {};
    /**
   * Defines the file types the file uploader accepts.
   */
  set accept(_: Components.GcdsFileUploader['accept']) {};
    /**
   * Boolean that specifies if the user is allowed to select more than one file.
   */
  set multiple(_: Components.GcdsFileUploader['multiple']) {};
    /**
   * FileList of uploaded files to input
   */
  set files(_: Components.GcdsFileUploader['files']) {};
    /**
   * Error message for an invalid file uploader element.
   */
  set errorMessage(_: Components.GcdsFileUploader['errorMessage']) {};
    /**
   * Hint displayed below the label.
   */
  set hint(_: Components.GcdsFileUploader['hint']) {};
    /**
   * Array of validators
   */
  set validator(_: Components.GcdsFileUploader['validator']) {};
    /**
   * Set event to call validator @default 'blur'
   */
  set validateOn(_: Components.GcdsFileUploader['validateOn']) {};
    /**
   * Read-only property of the file uploader, returns a ValidityState object that represents the validity states this element is in. @readonly 
   */
  set validity(_: Components.GcdsFileUploader['validity']) {};
    /**
   * If true, the file uploader will be focused on component render
   */
  set autofocus(_: Components.GcdsFileUploader['autofocus']) {};
    /**
   * The ID of the form that the file uploader field belongs to.
   */
  set form(_: Components.GcdsFileUploader['form']) {};
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, ['gcdsFocus', 'gcdsBlur', 'gcdsChange', 'gcdsInput', 'gcdsRemoveFile', 'gcdsError', 'gcdsValid']);
  }
}


export declare interface GcdsFileUploader extends Components.GcdsFileUploader {
  /**
   * Emitted when the uploader has focus.
   */
  gcdsFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the uploader loses focus.
   */
  gcdsBlur: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the user has made a file selection. Contains the new value in the event detail.
   */
  gcdsChange: EventEmitter<CustomEvent<string[]>>;
  /**
   * Emitted when the user has uploaded a file. Contains the new value in the event detail.
   */
  gcdsInput: EventEmitter<CustomEvent<string[]>>;
  /**
   * Remove file and update value.
   */
  gcdsRemoveFile: EventEmitter<CustomEvent<any>>;
  /**
   * Emitted when the uploader has a validation error.
   */
  gcdsError: EventEmitter<CustomEvent<object>>;
  /**
   * Emitted when the uploader has a validation error.
   */
  gcdsValid: EventEmitter<CustomEvent<object>>;
}


@ProxyCmp({
  inputs: ['contextualHeading', 'contextualLinks', 'display', 'subLinks'],
  outputs: ['gcdsFocus', 'gcdsBlur', 'gcdsClick']
})
@Component({
  selector: 'gcds-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['contextualHeading', 'contextualLinks', 'display', 'subLinks'],
  outputs: ['gcdsFocus', 'gcdsBlur', 'gcdsClick'],
  standalone: false,
})
export class GcdsFooter {
  protected el: HTMLGcdsFooterElement;
    /**
   * Display mode of the footer @default 'compact'
   */
  set display(_: Components.GcdsFooter['display']) {};
    /**
   * Heading for contextual slot and nav landmark
   */
  set contextualHeading(_: Components.GcdsFooter['contextualHeading']) {};
    /**
   * Object of list items for contextual band. Format: { link-label: link-href }
   */
  set contextualLinks(_: Components.GcdsFooter['contextualLinks']) {};
    /**
   * Object of list items for sub-footer. Format: { link-label: link-href }
   */
  set subLinks(_: Components.GcdsFooter['subLinks']) {};
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, ['gcdsFocus', 'gcdsBlur', 'gcdsClick']);
  }
}


export declare interface GcdsFooter extends Components.GcdsFooter {
  /**
   * Emitted when the link has focus.
   */
  gcdsFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the link loses focus.
   */
  gcdsBlur: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the link has been clicked. Contains the href in the event detail.
   */
  gcdsClick: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['alignContent', 'alignItems', 'centered', 'columns', 'columnsDesktop', 'columnsTablet', 'container', 'display', 'equalRowHeight', 'gap', 'gapDesktop', 'gapTablet', 'justifyContent', 'justifyItems', 'placeContent', 'placeItems', 'tag']
})
@Component({
  selector: 'gcds-grid',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alignContent', 'alignItems', 'centered', 'columns', 'columnsDesktop', 'columnsTablet', 'container', 'display', 'equalRowHeight', 'gap', 'gapDesktop', 'gapTablet', 'justifyContent', 'justifyItems', 'placeContent', 'placeItems', 'tag'],
  standalone: false,
})
export class GcdsGrid {
  protected el: HTMLGcdsGridElement;
    /**
   * Defines the default number of grid columns for all viewports if columns-tablet
and columns-desktop are not defined. Option to set different layouts for
desktop with columns-desktop and for tablet with columns-tablet.
   */
  set columns(_: Components.GcdsGrid['columns']) {};
    /**
   * Provides option to set a different number of grid columns for tablet screens.
If columns-desktop is not defined, columns-tablet will be used to define the
number of columns for desktop as well.
   */
  set columnsTablet(_: Components.GcdsGrid['columnsTablet']) {};
    /**
   * Provides option to set a different number of grid columns for desktop screens.
   */
  set columnsDesktop(_: Components.GcdsGrid['columnsDesktop']) {};
    /**
   * Defines grid container size
   */
  set container(_: Components.GcdsGrid['container']) {};
    /**
   * Defines if grid container is centered or not @default false
   */
  set centered(_: Components.GcdsGrid['centered']) {};
    /**
   * Defines element as grid or inline-grid container @default 'grid'
   */
  set display(_: Components.GcdsGrid['display']) {};
    /**
   * Sets all grid items to have an equal height,
based on the tallest item. @default false
   */
  set equalRowHeight(_: Components.GcdsGrid['equalRowHeight']) {};
    /**
   * Defines the horizontal and vertical spacing between items in
a grid container for all viewports if gap-tablet and gap-desktop
are not defined. Option to set different spacing for desktop
with gap-desktop and for tablet with gap-tablet. @default '300'
   */
  set gap(_: Components.GcdsGrid['gap']) {};
    /**
   * Provides option to set horizontal and vertical spacing between items in a
grid container for tablet screens. If gap-desktop is not defined, gap-tablet
will be used to define the spacing for desktop screens as well.
   */
  set gapTablet(_: Components.GcdsGrid['gapTablet']) {};
    /**
   * Provides option to set horizontal and vertical spacing between items
in a grid container for desktop screens.
   */
  set gapDesktop(_: Components.GcdsGrid['gapDesktop']) {};
    /**
   * Set tag for grid container @default 'div'
   */
  set tag(_: Components.GcdsGrid['tag']) {};
    /**
   * If total grid size is less than the size of its grid container,
this property aligns the grid along the block (column) axis
   */
  set alignContent(_: Components.GcdsGrid['alignContent']) {};
    /**
   * If total grid size is less than the size of its grid container,
this property aligns the grid along the inline (row) axis
   */
  set justifyContent(_: Components.GcdsGrid['justifyContent']) {};
    /**
   * Sets both the align-content + justify-content properties
   */
  set placeContent(_: Components.GcdsGrid['placeContent']) {};
    /**
   * Aligns grid items along the block (column) axis
   */
  set alignItems(_: Components.GcdsGrid['alignItems']) {};
    /**
   * Aligns grid items along the inline (row) axis
   */
  set justifyItems(_: Components.GcdsGrid['justifyItems']) {};
    /**
   * Sets both the align-items + justify-items properties
   */
  set placeItems(_: Components.GcdsGrid['placeItems']) {};
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsGrid extends Components.GcdsGrid {}


@ProxyCmp({
  inputs: ['desktop', 'tablet', 'tag']
})
@Component({
  selector: 'gcds-grid-col',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['desktop', 'tablet', 'tag'],
  standalone: false,
})
export class GcdsGridCol {
  protected el: HTMLGcdsGridColElement;
    /**
   * Set tag for grid column @default 'div'
   */
  set tag(_: Components.GcdsGridCol['tag']) {};
    /**
   * Optimize grid column size for tablet (768px - 1023px).
Tablet grid column sizes are based on a 6 column grid.
The tablet size will also be used for desktop, if desktop is undefined. @default 6
   */
  set tablet(_: Components.GcdsGridCol['tablet']) {};
    /**
   * Optimize grid column size for desktop (1024px and above).
Desktop grid column sizes are based on a 12 column grid.
   */
  set desktop(_: Components.GcdsGridCol['desktop']) {};
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsGridCol extends Components.GcdsGridCol {}


@ProxyCmp({
  inputs: ['langHref', 'signatureHasLink', 'signatureVariant', 'skipToHref'],
  outputs: ['gcdsFocus', 'gcdsBlur', 'gcdsClick']
})
@Component({
  selector: 'gcds-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['langHref', 'signatureHasLink', 'signatureVariant', 'skipToHref'],
  outputs: ['gcdsFocus', 'gcdsBlur', 'gcdsClick'],
  standalone: false,
})
export class GcdsHeader {
  protected el: HTMLGcdsHeaderElement;
    /**
   * GcdsLangToggle - The href attribute specifies the URL of the opposite language page
   */
  set langHref(_: Components.GcdsHeader['langHref']) {};
    /**
   * GcdsSignature - The variant of the Government of Canada signature
   */
  set signatureVariant(_: Components.GcdsHeader['signatureVariant']) {};
    /**
   * GcdsSignature - GCDS signature links to Canada.ca @default true
   */
  set signatureHasLink(_: Components.GcdsHeader['signatureHasLink']) {};
    /**
   * Top navigation - Skip to content href
   */
  set skipToHref(_: Components.GcdsHeader['skipToHref']) {};
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, ['gcdsFocus', 'gcdsBlur', 'gcdsClick']);
  }
}


export declare interface GcdsHeader extends Components.GcdsHeader {
  /**
   * Emitted when the link has focus.
   */
  gcdsFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the link loses focus.
   */
  gcdsBlur: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the link has been clicked. Contains the href in the event detail.
   */
  gcdsClick: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['characterLimit', 'marginBottom', 'marginTop', 'tag']
})
@Component({
  selector: 'gcds-heading',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['characterLimit', 'marginBottom', 'marginTop', 'tag'],
  standalone: false,
})
export class GcdsHeading {
  protected el: HTMLGcdsHeadingElement;
    /**
   * Sets the appropriate HTML tag for the selected level.
   */
  set tag(_: Components.GcdsHeading['tag']) {};
    /**
   * Sets the line length to a maximum amount of characters per line for
each heading level, ensuring a comfortable, accessible reading length. @default true
   */
  set characterLimit(_: Components.GcdsHeading['characterLimit']) {};
    /**
   * Adds margin above the heading. The default margin-top for h1 is set to 0,
while for h2 to h6 headings, it's 600.
   */
  set marginTop(_: Components.GcdsHeading['marginTop']) {};
    /**
   * Adds margin below the heading. The default margin-botttom is 300. @default '300'
   */
  set marginBottom(_: Components.GcdsHeading['marginBottom']) {};
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsHeading extends Components.GcdsHeading {}


@ProxyCmp({
  inputs: ['hintId']
})
@Component({
  selector: 'gcds-hint',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['hintId'],
  standalone: false,
})
export class GcdsHint {
  protected el: HTMLGcdsHintElement;
    /**
   * Id attribute for the hint.
   */
  set hintId(_: Components.GcdsHint['hintId']) {};
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsHint extends Components.GcdsHint {}


@ProxyCmp({
  inputs: ['label', 'marginLeft', 'marginRight', 'name', 'size']
})
@Component({
  selector: 'gcds-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['label', 'marginLeft', 'marginRight', 'name', 'size'],
  standalone: false,
})
export class GcdsIcon {
  protected el: HTMLGcdsIconElement;
    /**
   * Add icon description.
   */
  set label(_: Components.GcdsIcon['label']) {};
    /**
   * Add margin to the left of the icon
   */
  set marginLeft(_: Components.GcdsIcon['marginLeft']) {};
    /**
   * Add margin to the right of the icon
   */
  set marginRight(_: Components.GcdsIcon['marginRight']) {};
    /**
   * Name of the icon.
   */
  set name(_: Components.GcdsIcon['name']) {};
    /**
   * Defines the size of the icon. @default 'inherit'
   */
  set size(_: Components.GcdsIcon['size']) {};
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsIcon extends Components.GcdsIcon {}


@ProxyCmp({
  inputs: ['autocomplete', 'autofocus', 'disabled', 'errorMessage', 'form', 'hideLabel', 'hint', 'inputId', 'inputmode', 'label', 'max', 'maxlength', 'min', 'minlength', 'name', 'pattern', 'readonly', 'required', 'size', 'step', 'suggestions', 'type', 'validateOn', 'validator', 'validity', 'value'],
  methods: ['validate', 'checkValidity', 'getValidationMessage'],
  outputs: ['gcdsFocus', 'gcdsBlur', 'gcdsInput', 'gcdsSuggestionSelected', 'gcdsChange', 'gcdsError', 'gcdsValid']
})
@Component({
  selector: 'gcds-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autocomplete', 'autofocus', 'disabled', 'errorMessage', 'form', 'hideLabel', 'hint', 'inputId', 'inputmode', 'label', 'max', 'maxlength', 'min', 'minlength', 'name', 'pattern', 'readonly', 'required', 'size', 'step', 'suggestions', 'type', 'validateOn', 'validator', 'validity', 'value'],
  outputs: ['gcdsFocus', 'gcdsBlur', 'gcdsInput', 'gcdsSuggestionSelected', 'gcdsChange', 'gcdsError', 'gcdsValid'],
  standalone: false,
})
export class GcdsInput {
  protected el: HTMLGcdsInputElement;
    /**
   * Specifies if an input element is disabled or not. @default false
   */
  set disabled(_: Components.GcdsInput['disabled']) {};
    /**
   * Error message for an invalid input element.
   */
  set errorMessage(_: Components.GcdsInput['errorMessage']) {};
    /**
   * Specifies if the label is hidden or not. @default false
   */
  set hideLabel(_: Components.GcdsInput['hideLabel']) {};
    /**
   * Hint displayed below the label and above the input field.
   */
  set hint(_: Components.GcdsInput['hint']) {};
    /**
   * Id  attribute for an input element.
   */
  set inputId(_: Components.GcdsInput['inputId']) {};
    /**
   * Name attribute for an input element.
   */
  set name(_: Components.GcdsInput['name']) {};
    /**
   * Form field label
   */
  set label(_: Components.GcdsInput['label']) {};
    /**
   * Specifies if a form field is required or not. @default false
   */
  set required(_: Components.GcdsInput['required']) {};
    /**
   * Size attribute for an input element to provide a visual indication
of the expected text length to the user.
   */
  set size(_: Components.GcdsInput['size']) {};
    /**
   * Set Input types @default 'text'
   */
  set type(_: Components.GcdsInput['type']) {};
    /**
   *  @default null
   */
  set inputmode(_: Components.GcdsInput['inputmode']) {};
    /**
   * Default value for an input element.
   */
  set value(_: Components.GcdsInput['value']) {};
    /**
   * String to have autocomplete enabled.
   */
  set autocomplete(_: Components.GcdsInput['autocomplete']) {};
    /**
   * If true, the input will be focused on component render
   */
  set autofocus(_: Components.GcdsInput['autofocus']) {};
    /**
   * The ID of the form that the input field belongs to.
   */
  set form(_: Components.GcdsInput['form']) {};
    /**
   * The maximum value that the input field can accept.
Only applies to number input type.
   */
  set max(_: Components.GcdsInput['max']) {};
    /**
   * The maximum number of characters that the input field can accept.
   */
  set maxlength(_: Components.GcdsInput['maxlength']) {};
    /**
   * The minimum value that the input field can accept.
Only applies to number input type.
   */
  set min(_: Components.GcdsInput['min']) {};
    /**
   * The minimum number of characters that the input field can accept.
   */
  set minlength(_: Components.GcdsInput['minlength']) {};
    /**
   * Specifies a regular expression the form control's value should match.
See: https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/pattern
   */
  set pattern(_: Components.GcdsInput['pattern']) {};
    /**
   * If true, the input field cannot be modified.
   */
  set readonly(_: Components.GcdsInput['readonly']) {};
    /**
   * A number that specifies the granularity that the value must adhere to.
Valid for number type.
See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#step
   */
  set step(_: Components.GcdsInput['step']) {};
    /**
   * Read-only property of the input, returns a ValidityState object that represents the validity states this element is in. @readonly 
   */
  set validity(_: Components.GcdsInput['validity']) {};
    /**
   * Array of validators
   */
  set validator(_: Components.GcdsInput['validator']) {};
    /**
   * Set event to call validator @default 'blur'
   */
  set validateOn(_: Components.GcdsInput['validateOn']) {};
    /**
   * Array of suggestion options. This creates a datalist element with options to represent permissible or recommended options available to choose from.
   */
  set suggestions(_: Components.GcdsInput['suggestions']) {};
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, ['gcdsFocus', 'gcdsBlur', 'gcdsInput', 'gcdsSuggestionSelected', 'gcdsChange', 'gcdsError', 'gcdsValid']);
  }
}


export declare interface GcdsInput extends Components.GcdsInput {
  /**
   * Emitted when the input has focus.
   */
  gcdsFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the input loses focus.
   */
  gcdsBlur: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the element has received input.
   */
  gcdsInput: EventEmitter<CustomEvent<string>>;
  /**
   * Emitted when a suggestion is selected.
   */
  gcdsSuggestionSelected: EventEmitter<CustomEvent<string>>;
  /**
   * Emitted when the input has changed.
   */
  gcdsChange: EventEmitter<CustomEvent<string>>;
  /**
   * Emitted when the input has a validation error.
   */
  gcdsError: EventEmitter<CustomEvent<object>>;
  /**
   * Emitted when the input has a validation error.
   */
  gcdsValid: EventEmitter<CustomEvent<object>>;
}


@ProxyCmp({
  inputs: ['hideLabel', 'label', 'labelFor', 'required']
})
@Component({
  selector: 'gcds-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['hideLabel', 'label', 'labelFor', 'required'],
  standalone: false,
})
export class GcdsLabel {
  protected el: HTMLGcdsLabelElement;
    /**
   * Specifies if the label is hidden or not.
   */
  set hideLabel(_: Components.GcdsLabel['hideLabel']) {};
    /**
   * Form field label
   */
  set label(_: Components.GcdsLabel['label']) {};
    /**
   * Defines the label's for attribute.
   */
  set labelFor(_: Components.GcdsLabel['labelFor']) {};
    /**
   * Specifies if a form field is required or not.
   */
  set required(_: Components.GcdsLabel['required']) {};
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsLabel extends Components.GcdsLabel {}


@ProxyCmp({
  inputs: ['href'],
  outputs: ['gcdsFocus', 'gcdsBlur', 'gcdsClick']
})
@Component({
  selector: 'gcds-lang-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['href'],
  outputs: ['gcdsFocus', 'gcdsBlur', 'gcdsClick'],
  standalone: false,
})
export class GcdsLangToggle {
  protected el: HTMLGcdsLangToggleElement;
    /**
   * The href attribute specifies the URL of the opposite language page
   */
  set href(_: Components.GcdsLangToggle['href']) {};
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, ['gcdsFocus', 'gcdsBlur', 'gcdsClick']);
  }
}


export declare interface GcdsLangToggle extends Components.GcdsLangToggle {
  /**
   * Emitted when the link has focus.
   */
  gcdsFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the link loses focus.
   */
  gcdsBlur: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the link has been clicked. Contains the href in the event detail.
   */
  gcdsClick: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['display', 'download', 'external', 'href', 'rel', 'size', 'target', 'type', 'variant'],
  outputs: ['gcdsFocus', 'gcdsBlur', 'gcdsClick']
})
@Component({
  selector: 'gcds-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['display', 'download', 'external', 'href', 'rel', 'size', 'target', 'type', 'variant'],
  outputs: ['gcdsFocus', 'gcdsBlur', 'gcdsClick'],
  standalone: false,
})
export class GcdsLink {
  protected el: HTMLGcdsLinkElement;
    /**
   * Sets the main style of the link. @default 'default'
   */
  set variant(_: Components.GcdsLink['variant']) {};
    /**
   * Set the link size @default 'inherit'
   */
  set size(_: Components.GcdsLink['size']) {};
    /**
   * Sets the display behavior of the link @default 'inline'
   */
  set display(_: Components.GcdsLink['display']) {};
    /**
   * The href attribute specifies the URL of the page the link goes to
   */
  set href(_: Components.GcdsLink['href']) {};
    /**
   * The rel attribute specifies the relationship between the current document and the linked document
   */
  set rel(_: Components.GcdsLink['rel']) {};
    /**
   * The target attribute specifies where to open the linked document @default '_self'
   */
  set target(_: Components.GcdsLink['target']) {};
    /**
   * Whether the link is external or not @default false
   */
  set external(_: Components.GcdsLink['external']) {};
    /**
   * The download attribute specifies that the target (the file specified in the href attribute) will be downloaded when a user clicks on the hyperlink
   */
  set download(_: Components.GcdsLink['download']) {};
    /**
   * The type specifies the media type of the linked document
   */
  set type(_: Components.GcdsLink['type']) {};
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, ['gcdsFocus', 'gcdsBlur', 'gcdsClick']);
  }
}


export declare interface GcdsLink extends Components.GcdsLink {
  /**
   * Emitted when the link has focus.
   */
  gcdsFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the link loses focus.
   */
  gcdsBlur: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the link has been clicked. Contains the href in the event detail.
   */
  gcdsClick: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['closeTrigger', 'menuLabel', 'open', 'openTrigger'],
  methods: ['focusTrigger', 'toggleNav'],
  outputs: ['gcdsClick', 'gcdsFocus', 'gcdsBlur']
})
@Component({
  selector: 'gcds-nav-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['closeTrigger', 'menuLabel', 'open', 'openTrigger'],
  outputs: ['gcdsClick', 'gcdsFocus', 'gcdsBlur'],
  standalone: false,
})
export class GcdsNavGroup {
  protected el: HTMLGcdsNavGroupElement;
    /**
   * Label for the expanded button trigger
   */
  set closeTrigger(_: Components.GcdsNavGroup['closeTrigger']) {};
    /**
   * Label for the nav group menu
   */
  set menuLabel(_: Components.GcdsNavGroup['menuLabel']) {};
    /**
   * Label for the collapsed button trigger
   */
  set openTrigger(_: Components.GcdsNavGroup['openTrigger']) {};
    /**
   * Has the nav group been expanded @default false
   */
  set open(_: Components.GcdsNavGroup['open']) {};
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, ['gcdsClick', 'gcdsFocus', 'gcdsBlur']);
  }
}


export declare interface GcdsNavGroup extends Components.GcdsNavGroup {
  /**
   * Emitted when the button has been clicked.
   */
  gcdsClick: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the button has been focus.
   */
  gcdsFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the button blurs.
   */
  gcdsBlur: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['current', 'href'],
  methods: ['focusLink'],
  outputs: ['gcdsClick', 'gcdsFocus', 'gcdsBlur']
})
@Component({
  selector: 'gcds-nav-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['current', 'href'],
  outputs: ['gcdsClick', 'gcdsFocus', 'gcdsBlur'],
  standalone: false,
})
export class GcdsNavLink {
  protected el: HTMLGcdsNavLinkElement;
    /**
   * Link href
   */
  set href(_: Components.GcdsNavLink['href']) {};
    /**
   * Current page flag
   */
  set current(_: Components.GcdsNavLink['current']) {};
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, ['gcdsClick', 'gcdsFocus', 'gcdsBlur']);
  }
}


export declare interface GcdsNavLink extends Components.GcdsNavLink {
  /**
   * Emitted when the link has been clicked.
   */
  gcdsClick: EventEmitter<CustomEvent<string>>;
  /**
   * Emitted when the link has focus.
   */
  gcdsFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the link loses focus.
   */
  gcdsBlur: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['noticeTitle', 'noticeTitleTag', 'type']
})
@Component({
  selector: 'gcds-notice',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['noticeTitle', 'noticeTitleTag', 'type'],
  standalone: false,
})
export class GcdsNotice {
  protected el: HTMLGcdsNoticeElement;
    /**
   * Set notice type.
   */
  set type(_: Components.GcdsNotice['type']) {};
    /**
   * Set the notice title.
   */
  set noticeTitle(_: Components.GcdsNotice['noticeTitle']) {};
    /**
   * The notice title tag property specifies the HTML heading element for the title.
This property does not modify the font size. It is used to assign the heading level
in order to maintain heading hierarchy and accessibility for assistive technologies.
   */
  set noticeTitleTag(_: Components.GcdsNotice['noticeTitleTag']) {};
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsNotice extends Components.GcdsNotice {}


@ProxyCmp({
  inputs: ['currentPage', 'display', 'label', 'nextHref', 'nextLabel', 'previousHref', 'previousLabel', 'totalPages', 'url'],
  outputs: ['gcdsFocus', 'gcdsBlur', 'gcdsClick']
})
@Component({
  selector: 'gcds-pagination',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['currentPage', 'display', 'label', 'nextHref', 'nextLabel', 'previousHref', 'previousLabel', 'totalPages', 'url'],
  outputs: ['gcdsFocus', 'gcdsBlur', 'gcdsClick'],
  standalone: false,
})
export class GcdsPagination {
  protected el: HTMLGcdsPaginationElement;
    /**
   * Determines the pagination display style. @default 'list'
   */
  set display(_: Components.GcdsPagination['display']) {};
    /**
   * Navigation element label
   */
  set label(_: Components.GcdsPagination['label']) {};
    /**
   * Simple display - href for previous link
   */
  set previousHref(_: Components.GcdsPagination['previousHref']) {};
    /**
   * Simple display - label for previous link
   */
  set previousLabel(_: Components.GcdsPagination['previousLabel']) {};
    /**
   * Simple display - href for next link
   */
  set nextHref(_: Components.GcdsPagination['nextHref']) {};
    /**
   * Simple display - lable for next link
   */
  set nextLabel(_: Components.GcdsPagination['nextLabel']) {};
    /**
   * List display - Total number of pages
   */
  set totalPages(_: Components.GcdsPagination['totalPages']) {};
    /**
   * List display - Current page number
   */
  set currentPage(_: Components.GcdsPagination['currentPage']) {};
    /**
   * List display - URL object to create query strings and fragment on links
   */
  set url(_: Components.GcdsPagination['url']) {};
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, ['gcdsFocus', 'gcdsBlur', 'gcdsClick']);
  }
}


export declare interface GcdsPagination extends Components.GcdsPagination {
  /**
   * Emitted when the link has focus.
   */
  gcdsFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the link loses focus.
   */
  gcdsBlur: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the link has been clicked. Contains the href in event detail when using simple display,
or an object with page and href when using list display.
   */
  gcdsClick: EventEmitter<CustomEvent<object | string>>;
}


@ProxyCmp({
  inputs: ['autofocus', 'disabled', 'errorMessage', 'form', 'hideLegend', 'hint', 'legend', 'name', 'options', 'required', 'validateOn', 'validator', 'validity', 'value'],
  methods: ['validate', 'checkValidity', 'getValidationMessage'],
  outputs: ['gcdsInput', 'gcdsChange', 'gcdsFocus', 'gcdsBlur', 'gcdsValid', 'gcdsError']
})
@Component({
  selector: 'gcds-radios',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autofocus', 'disabled', 'errorMessage', 'form', 'hideLegend', 'hint', 'legend', 'name', 'options', 'required', 'validateOn', 'validator', 'validity', 'value'],
  outputs: ['gcdsInput', 'gcdsChange', 'gcdsFocus', 'gcdsBlur', 'gcdsValid', 'gcdsError'],
  standalone: false,
})
export class GcdsRadios {
  protected el: HTMLGcdsRadiosElement;
    /**
   * Options to render radio buttons
   */
  set options(_: Components.GcdsRadios['options']) {};
    /**
   * The `name` attribute for the radios, used to group radio elements together
   */
  set name(_: Components.GcdsRadios['name']) {};
    /**
   * If true, the input will be focused on component render
   */
  set autofocus(_: Components.GcdsRadios['autofocus']) {};
    /**
   * The ID of the form that the radios belong to.
   */
  set form(_: Components.GcdsRadios['form']) {};
    /**
   * Label or legend for the group of radio elements
   */
  set legend(_: Components.GcdsRadios['legend']) {};
    /**
   * Specifies if a form field is required or not.
   */
  set required(_: Components.GcdsRadios['required']) {};
    /**
   * Hint displayed below the label and above the radio elements
   */
  set hint(_: Components.GcdsRadios['hint']) {};
    /**
   * Set this to display an error message for invalid radios
   */
  set errorMessage(_: Components.GcdsRadios['errorMessage']) {};
    /**
   * Specifies if an input element is disabled or not.
   */
  set disabled(_: Components.GcdsRadios['disabled']) {};
    /**
   * Default value for the element
   */
  set value(_: Components.GcdsRadios['value']) {};
    /**
   * Read-only property of the input, returns a ValidityState object that represents the validity states this element is in. @readonly 
   */
  set validity(_: Components.GcdsRadios['validity']) {};
    /**
   * Array of validators
   */
  set validator(_: Components.GcdsRadios['validator']) {};
    /**
   * Set event to call validator @default 'blur'
   */
  set validateOn(_: Components.GcdsRadios['validateOn']) {};
    /**
   * Specifies if the legend is hidden or not. @default false
   */
  set hideLegend(_: Components.GcdsRadios['hideLegend']) {};
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, ['gcdsInput', 'gcdsChange', 'gcdsFocus', 'gcdsBlur', 'gcdsValid', 'gcdsError']);
  }
}


export declare interface GcdsRadios extends Components.GcdsRadios {
  /**
   * Emitted when radios has been changed as a direct result of a user action (a radio option has been selected). Contains new value in event detail
   */
  gcdsInput: EventEmitter<CustomEvent<string>>;
  /**
   * Emitted when a radios option is checked (but not when unchecked). Contains new value in event detail
   */
  gcdsChange: EventEmitter<CustomEvent<string>>;
  /**
   * Emitted when radios has received focus
   */
  gcdsFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the radios has lost focus
   */
  gcdsBlur: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when radios has passed validation
   */
  gcdsValid: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when radios has a validation error
   */
  gcdsError: EventEmitter<CustomEvent<object>>;
}


@ProxyCmp({
  inputs: ['action', 'method', 'name', 'placeholder', 'searchId', 'suggested', 'value'],
  outputs: ['gcdsInput', 'gcdsChange', 'gcdsFocus', 'gcdsBlur', 'gcdsSubmit']
})
@Component({
  selector: 'gcds-search',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['action', 'method', 'name', 'placeholder', 'searchId', 'suggested', 'value'],
  outputs: ['gcdsInput', 'gcdsChange', 'gcdsFocus', 'gcdsBlur', 'gcdsSubmit'],
  standalone: false,
})
export class GcdsSearch {
  protected el: HTMLGcdsSearchElement;
    /**
   * Set the placeholder and label for the search input. Becomes "Search [placeholder]" @default 'Canada.ca'
   */
  set placeholder(_: Components.GcdsSearch['placeholder']) {};
    /**
   * Sets the action for the search form. Default will be canada.ca global search @default '/sr/srb.html'
   */
  set action(_: Components.GcdsSearch['action']) {};
    /**
   * Set the form method of the search form @default 'get'
   */
  set method(_: Components.GcdsSearch['method']) {};
    /**
   * Set the name of the search input @default 'q'
   */
  set name(_: Components.GcdsSearch['name']) {};
    /**
   * Set the id of the search input @default 'search'
   */
  set searchId(_: Components.GcdsSearch['searchId']) {};
    /**
   * Set the value of the search input
   */
  set value(_: Components.GcdsSearch['value']) {};
    /**
   * Set a list of predefined search terms
   */
  set suggested(_: Components.GcdsSearch['suggested']) {};
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, ['gcdsInput', 'gcdsChange', 'gcdsFocus', 'gcdsBlur', 'gcdsSubmit']);
  }
}


export declare interface GcdsSearch extends Components.GcdsSearch {
  /**
   * Emitted when the search element has received input.
   */
  gcdsInput: EventEmitter<CustomEvent<string>>;
  /**
   * Emitted when the search input value has changed.
   */
  gcdsChange: EventEmitter<CustomEvent<string>>;
  /**
   * Emitted when the search input has gained focus.
   */
  gcdsFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the search input has lost focus.
   */
  gcdsBlur: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the search form has submitted.
   */
  gcdsSubmit: EventEmitter<CustomEvent<string>>;
}


@ProxyCmp({
  inputs: ['autocomplete', 'autofocus', 'defaultValue', 'disabled', 'errorMessage', 'form', 'hideLabel', 'hint', 'label', 'name', 'required', 'selectId', 'validateOn', 'validator', 'validity', 'value'],
  methods: ['validate', 'checkValidity', 'getValidationMessage'],
  outputs: ['gcdsChange', 'gcdsInput', 'gcdsFocus', 'gcdsBlur', 'gcdsError', 'gcdsValid']
})
@Component({
  selector: 'gcds-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autocomplete', 'autofocus', 'defaultValue', 'disabled', 'errorMessage', 'form', 'hideLabel', 'hint', 'label', 'name', 'required', 'selectId', 'validateOn', 'validator', 'validity', 'value'],
  outputs: ['gcdsChange', 'gcdsInput', 'gcdsFocus', 'gcdsBlur', 'gcdsError', 'gcdsValid'],
  standalone: false,
})
export class GcdsSelect {
  protected el: HTMLGcdsSelectElement;
    /**
   * Id attribute for a select element.
   */
  set selectId(_: Components.GcdsSelect['selectId']) {};
    /**
   * Form field label.
   */
  set label(_: Components.GcdsSelect['label']) {};
    /**
   * Specifies if the label is hidden or not. @default false
   */
  set hideLabel(_: Components.GcdsSelect['hideLabel']) {};
    /**
   * Name attribute for select form element.
   */
  set name(_: Components.GcdsSelect['name']) {};
    /**
   * Specifies if a form field is required or not. @default false
   */
  set required(_: Components.GcdsSelect['required']) {};
    /**
   * Specifies if a select element is disabled or not. @default false
   */
  set disabled(_: Components.GcdsSelect['disabled']) {};
    /**
   * The default value is an optional value that gets displayed before the user selects an option.
   */
  set defaultValue(_: Components.GcdsSelect['defaultValue']) {};
    /**
   * If true, the select will be focused on component render
   */
  set autofocus(_: Components.GcdsSelect['autofocus']) {};
    /**
   * The ID of the form that the select field belongs to.
   */
  set form(_: Components.GcdsSelect['form']) {};
    /**
   * String to have autocomplete enabled.
   */
  set autocomplete(_: Components.GcdsSelect['autocomplete']) {};
    /**
   * Value for a select element.
   */
  set value(_: Components.GcdsSelect['value']) {};
    /**
   * Error message for an invalid select element.
   */
  set errorMessage(_: Components.GcdsSelect['errorMessage']) {};
    /**
   * Hint displayed below the label.
   */
  set hint(_: Components.GcdsSelect['hint']) {};
    /**
   * Read-only property of the select, returns a ValidityState object that represents the validity states this element is in. @readonly 
   */
  set validity(_: Components.GcdsSelect['validity']) {};
    /**
   * Array of validators
   */
  set validator(_: Components.GcdsSelect['validator']) {};
    /**
   * Set event to call validator @default 'blur'
   */
  set validateOn(_: Components.GcdsSelect['validateOn']) {};
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, ['gcdsChange', 'gcdsInput', 'gcdsFocus', 'gcdsBlur', 'gcdsError', 'gcdsValid']);
  }
}


export declare interface GcdsSelect extends Components.GcdsSelect {
  /**
   * Emitted when the select value has changed.
   */
  gcdsChange: EventEmitter<CustomEvent<string>>;
  /**
   * Emitted when the select has received input.
   */
  gcdsInput: EventEmitter<CustomEvent<string>>;
  /**
   * Emitted when the select has focus.
   */
  gcdsFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the select loses focus.
   */
  gcdsBlur: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the select has a validation error.
   */
  gcdsError: EventEmitter<CustomEvent<object>>;
  /**
   * Emitted when the select has a validation error.
   */
  gcdsValid: EventEmitter<CustomEvent<object>>;
}


@ProxyCmp({
  inputs: ['label'],
  methods: ['getNavSize', 'updateNavSize', 'updateNavItemQueue']
})
@Component({
  selector: 'gcds-side-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['label'],
  standalone: false,
})
export class GcdsSideNav {
  protected el: HTMLGcdsSideNavElement;
    /**
   * Label for navigation landmark
   */
  set label(_: Components.GcdsSideNav['label']) {};
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsSideNav extends Components.GcdsSideNav {}


@ProxyCmp({
  inputs: ['hasLink', 'type', 'variant']
})
@Component({
  selector: 'gcds-signature',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['hasLink', 'type', 'variant'],
  standalone: false,
})
export class GcdsSignature {
  protected el: HTMLGcdsSignatureElement;
    /**
   * The type of graphic to render @default 'signature'
   */
  set type(_: Components.GcdsSignature['type']) {};
    /**
   * The colour variant to render @default 'colour'
   */
  set variant(_: Components.GcdsSignature['variant']) {};
    /**
   * Has link to canada.ca. Only applies to signature @default false
   */
  set hasLink(_: Components.GcdsSignature['hasLink']) {};
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsSignature extends Components.GcdsSignature {}


@ProxyCmp({
  inputs: ['tag']
})
@Component({
  selector: 'gcds-sr-only',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['tag'],
  standalone: false,
})
export class GcdsSrOnly {
  protected el: HTMLGcdsSrOnlyElement;
    /**
   * Sets the appropriate HTML tag for the content. @default 'p'
   */
  set tag(_: Components.GcdsSrOnly['tag']) {};
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsSrOnly extends Components.GcdsSrOnly {}


@ProxyCmp({
  inputs: ['currentStep', 'tag', 'totalSteps']
})
@Component({
  selector: 'gcds-stepper',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['currentStep', 'tag', 'totalSteps'],
  standalone: false,
})
export class GcdsStepper {
  protected el: HTMLGcdsStepperElement;
    /**
   * Defines the current step.
   */
  set currentStep(_: Components.GcdsStepper['currentStep']) {};
    /**
   * Defines the total amount of steps.
   */
  set totalSteps(_: Components.GcdsStepper['totalSteps']) {};
    /**
   * Defines the heading tag to render @default 'h2'
   */
  set tag(_: Components.GcdsStepper['tag']) {};
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsStepper extends Components.GcdsStepper {}


@ProxyCmp({
  inputs: ['characterLimit', 'display', 'marginBottom', 'marginTop', 'size', 'textRole']
})
@Component({
  selector: 'gcds-text',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['characterLimit', 'display', 'marginBottom', 'marginTop', 'size', 'textRole'],
  standalone: false,
})
export class GcdsText {
  protected el: HTMLGcdsTextElement;
    /**
   * Sets the main style of the text. @default 'primary'
   */
  set textRole(_: Components.GcdsText['textRole']) {};
    /**
   * Sets the line length to a maximum amount of characters per line to ensure a comfortable, accessible reading length. @default true
   */
  set characterLimit(_: Components.GcdsText['characterLimit']) {};
    /**
   * Specifies the display behaviour of the text. @default 'block'
   */
  set display(_: Components.GcdsText['display']) {};
    /**
   * Adds margin above the text. @default '0'
   */
  set marginTop(_: Components.GcdsText['marginTop']) {};
    /**
   * Adds margin below the text. @default '300'
   */
  set marginBottom(_: Components.GcdsText['marginBottom']) {};
    /**
   * Sets the appropriate HTML tags for the selected size. @default 'body'
   */
  set size(_: Components.GcdsText['size']) {};
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsText extends Components.GcdsText {}


@ProxyCmp({
  inputs: ['autofocus', 'cols', 'disabled', 'errorMessage', 'hideLabel', 'hideLimit', 'hint', 'label', 'maxlength', 'minlength', 'name', 'required', 'rows', 'textareaId', 'validateOn', 'validator', 'validity', 'value'],
  methods: ['validate', 'checkValidity', 'getValidationMessage'],
  outputs: ['gcdsFocus', 'gcdsBlur', 'gcdsChange', 'gcdsInput', 'gcdsError', 'gcdsValid']
})
@Component({
  selector: 'gcds-textarea',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autofocus', 'cols', 'disabled', 'errorMessage', 'hideLabel', 'hideLimit', 'hint', 'label', 'maxlength', 'minlength', 'name', 'required', 'rows', 'textareaId', 'validateOn', 'validator', 'validity', 'value'],
  outputs: ['gcdsFocus', 'gcdsBlur', 'gcdsChange', 'gcdsInput', 'gcdsError', 'gcdsValid'],
  standalone: false,
})
export class GcdsTextarea {
  protected el: HTMLGcdsTextareaElement;
    /**
   * If true, the textarea will be focused on component render.
   */
  set autofocus(_: Components.GcdsTextarea['autofocus']) {};
    /**
   * If true, character limt counter will not be displayed under the textarea. @default false
   */
  set hideLimit(_: Components.GcdsTextarea['hideLimit']) {};
    /**
   * The maximum number of characters that the textarea field can accept.
   */
  set maxlength(_: Components.GcdsTextarea['maxlength']) {};
    /**
   * The minimum number of characters that the textarea field can accept.
   */
  set minlength(_: Components.GcdsTextarea['minlength']) {};
    /**
   * Defines width for textarea cols (the min-width for textarea's is 50%).
   */
  set cols(_: Components.GcdsTextarea['cols']) {};
    /**
   * Specifies if a textarea element is disabled or not. @default false
   */
  set disabled(_: Components.GcdsTextarea['disabled']) {};
    /**
   * Error message for an invalid textarea element.
   */
  set errorMessage(_: Components.GcdsTextarea['errorMessage']) {};
    /**
   * Specifies if the label is hidden or not. @default false
   */
  set hideLabel(_: Components.GcdsTextarea['hideLabel']) {};
    /**
   * Hint displayed below the label and above the textarea field.
   */
  set hint(_: Components.GcdsTextarea['hint']) {};
    /**
   * Form field label
   */
  set label(_: Components.GcdsTextarea['label']) {};
    /**
   * Name attribute for a textarea element.
   */
  set name(_: Components.GcdsTextarea['name']) {};
    /**
   * Specifies if a form field is required or not. @default false
   */
  set required(_: Components.GcdsTextarea['required']) {};
    /**
   * Default value for textarea rows. @default 5
   */
  set rows(_: Components.GcdsTextarea['rows']) {};
    /**
   * Id attribute for a textarea element.
   */
  set textareaId(_: Components.GcdsTextarea['textareaId']) {};
    /**
   * Default value for an input element.
   */
  set value(_: Components.GcdsTextarea['value']) {};
    /**
   * Array of validators
   */
  set validator(_: Components.GcdsTextarea['validator']) {};
    /**
   * Set event to call validator @default 'blur'
   */
  set validateOn(_: Components.GcdsTextarea['validateOn']) {};
    /**
   * Read-only property of the textarea, returns a ValidityState object that represents the validity states this element is in. @readonly 
   */
  set validity(_: Components.GcdsTextarea['validity']) {};
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, ['gcdsFocus', 'gcdsBlur', 'gcdsChange', 'gcdsInput', 'gcdsError', 'gcdsValid']);
  }
}


export declare interface GcdsTextarea extends Components.GcdsTextarea {
  /**
   * Emitted when the textarea has focus.
   */
  gcdsFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the textarea loses focus.
   */
  gcdsBlur: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the textarea has changed.
   */
  gcdsChange: EventEmitter<CustomEvent<string>>;
  /**
   * Emitted when the textarea has received input.
   */
  gcdsInput: EventEmitter<CustomEvent<string>>;
  /**
   * Emitted when the textarea has a validation error.
   */
  gcdsError: EventEmitter<CustomEvent<object>>;
  /**
   * Emitted when the textarea has a validation error.
   */
  gcdsValid: EventEmitter<CustomEvent<object>>;
}


@ProxyCmp({
  inputs: ['alignment', 'label'],
  methods: ['getNavSize', 'updateNavSize', 'updateNavItemQueue']
})
@Component({
  selector: 'gcds-top-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alignment', 'label'],
  standalone: false,
})
export class GcdsTopNav {
  protected el: HTMLGcdsTopNavElement;
    /**
   * Label for navigation landmark
   */
  set label(_: Components.GcdsTopNav['label']) {};
    /**
   * Nav alignment @default 'left'
   */
  set alignment(_: Components.GcdsTopNav['alignment']) {};
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsTopNav extends Components.GcdsTopNav {}


@ProxyCmp({
  inputs: ['home'],
  methods: ['closeAllMenus', 'toggleNav', 'updateNavSize', 'getNavSize', 'updateNavItemQueue']
})
@Component({
  selector: 'gcds-topic-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['home'],
  standalone: false,
})
export class GcdsTopicMenu {
  protected el: HTMLGcdsTopicMenuElement;
    /**
   * Sets the homepage styling @default false
   */
  set home(_: Components.GcdsTopicMenu['home']) {};
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsTopicMenu extends Components.GcdsTopicMenu {}


