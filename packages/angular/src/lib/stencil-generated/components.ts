/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';

import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from '@cdssnc/gcds-components';


@ProxyCmp({
  inputs: ['alertRole', 'container', 'dismissHandler', 'heading', 'hideCloseBtn', 'hideRoleIcon', 'isFixed']
})
@Component({
  selector: 'gcds-alert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alertRole', 'container', 'dismissHandler', 'heading', 'hideCloseBtn', 'hideRoleIcon', 'isFixed'],
})
export class GcdsAlert {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['gcdsDismiss']);
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
})
export class GcdsBreadcrumbs {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsBreadcrumbs extends Components.GcdsBreadcrumbs {}


@ProxyCmp({
  inputs: ['href']
})
@Component({
  selector: 'gcds-breadcrumbs-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['href'],
})
export class GcdsBreadcrumbsItem {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsBreadcrumbsItem extends Components.GcdsBreadcrumbsItem {}


@ProxyCmp({
  inputs: ['blurHandler', 'buttonId', 'buttonRole', 'buttonStyle', 'clickHandler', 'disabled', 'download', 'focusHandler', 'href', 'name', 'rel', 'size', 'target', 'type'],
  methods: ['focusElement']
})
@Component({
  selector: 'gcds-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['blurHandler', 'buttonId', 'buttonRole', 'buttonStyle', 'clickHandler', 'disabled', 'download', 'focusHandler', 'href', 'name', 'rel', 'size', 'target', 'type'],
})
export class GcdsButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['gcdsFocus', 'gcdsBlur']);
  }
}


export declare interface GcdsButton extends Components.GcdsButton {
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
  inputs: ['blurHandler', 'checkboxId', 'checked', 'clickHandler', 'disabled', 'errorMessage', 'focusHandler', 'hint', 'label', 'name', 'required', 'validateOn', 'validator', 'value'],
  methods: ['validate']
})
@Component({
  selector: 'gcds-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['blurHandler', 'checkboxId', 'checked', 'clickHandler', 'disabled', 'errorMessage', 'focusHandler', 'hint', 'label', 'name', 'required', 'validateOn', 'validator', 'value'],
})
export class GcdsCheckbox {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['gcdsFocus', 'gcdsBlur', 'gcdsChange', 'gcdsError', 'gcdsValid']);
  }
}


export declare interface GcdsCheckbox extends Components.GcdsCheckbox {
  /**
   * Emitted when the checkbox has focus.
   */
  gcdsFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the checkbox loses focus.
   */
  gcdsBlur: EventEmitter<CustomEvent<void>>;
  /**
   * Update value based on user input.
   */
  gcdsChange: EventEmitter<CustomEvent<any>>;
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
  inputs: ['centered', 'container', 'tag']
})
@Component({
  selector: 'gcds-container',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['centered', 'container', 'tag'],
})
export class GcdsContainer {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsContainer extends Components.GcdsContainer {}


@ProxyCmp({
})
@Component({
  selector: 'gcds-date-modified',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: [],
})
export class GcdsDateModified {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsDateModified extends Components.GcdsDateModified {}


@ProxyCmp({
  inputs: ['detailsTitle', 'open']
})
@Component({
  selector: 'gcds-details',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['detailsTitle', 'open'],
})
export class GcdsDetails {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsDetails extends Components.GcdsDetails {}


@ProxyCmp({
  inputs: ['message', 'messageId']
})
@Component({
  selector: 'gcds-error-message',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['message', 'messageId'],
})
export class GcdsErrorMessage {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsErrorMessage extends Components.GcdsErrorMessage {}


@ProxyCmp({
  inputs: ['errorLinks', 'heading', 'listen', 'subHeading']
})
@Component({
  selector: 'gcds-error-summary',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['errorLinks', 'heading', 'listen', 'subHeading'],
})
export class GcdsErrorSummary {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsErrorSummary extends Components.GcdsErrorSummary {}


@ProxyCmp({
  inputs: ['disabled', 'errorMessage', 'fieldsetId', 'hint', 'legend', 'required', 'validateOn', 'validator'],
  methods: ['validate']
})
@Component({
  selector: 'gcds-fieldset',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['disabled', 'errorMessage', 'fieldsetId', 'hint', 'legend', 'required', 'validateOn', 'validator'],
})
export class GcdsFieldset {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['gcdsGroupError', 'gcdsGroupErrorClear', 'gcdsError', 'gcdsValid']);
  }
}


export declare interface GcdsFieldset extends Components.GcdsFieldset {
  /**
   * Emitted when the fieldset has a validation error.
   */
  gcdsGroupError: EventEmitter<CustomEvent<string>>;
  /**
   * Emitted when the fieldset has a validation error.
   */
  gcdsGroupErrorClear: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the fieldset has a validation error.
   */
  gcdsError: EventEmitter<CustomEvent<object>>;
  /**
   * Emitted when the fieldset has a validation error.
   */
  gcdsValid: EventEmitter<CustomEvent<object>>;
}


@ProxyCmp({
  inputs: ['accept', 'blurHandler', 'changeHandler', 'disabled', 'errorMessage', 'focusHandler', 'hint', 'label', 'multiple', 'required', 'uploaderId', 'validateOn', 'validator', 'value'],
  methods: ['validate']
})
@Component({
  selector: 'gcds-file-uploader',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['accept', 'blurHandler', 'changeHandler', 'disabled', 'errorMessage', 'focusHandler', 'hint', 'label', 'multiple', 'required', 'uploaderId', 'validateOn', 'validator', 'value'],
})
export class GcdsFileUploader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['gcdsFocus', 'gcdsBlur', 'gcdsFileUploaderChange', 'gcdsRemoveFile', 'gcdsError', 'gcdsValid']);
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
   * Update value based on user selection.
   */
  gcdsFileUploaderChange: EventEmitter<CustomEvent<any>>;
  /**
   * Remove file and update value.
   */
  gcdsRemoveFile: EventEmitter<CustomEvent<any>>;
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
  inputs: ['contextualHeading', 'contextualLinks', 'display', 'subLinks', 'wordmarkVariant']
})
@Component({
  selector: 'gcds-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['contextualHeading', 'contextualLinks', 'display', 'subLinks', 'wordmarkVariant'],
})
export class GcdsFooter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsFooter extends Components.GcdsFooter {}


@ProxyCmp({
  inputs: ['alignContent', 'alignItems', 'centered', 'columns', 'columnsDesktop', 'columnsTablet', 'container', 'display', 'gap', 'justifyContent', 'justifyItems', 'placeContent', 'placeItems', 'tag']
})
@Component({
  selector: 'gcds-grid',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alignContent', 'alignItems', 'centered', 'columns', 'columnsDesktop', 'columnsTablet', 'container', 'display', 'gap', 'justifyContent', 'justifyItems', 'placeContent', 'placeItems', 'tag'],
})
export class GcdsGrid {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsGrid extends Components.GcdsGrid {}


@ProxyCmp({
  inputs: ['langHref', 'signatureHasLink', 'signatureVariant', 'skipToHref']
})
@Component({
  selector: 'gcds-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['langHref', 'signatureHasLink', 'signatureVariant', 'skipToHref'],
})
export class GcdsHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsHeader extends Components.GcdsHeader {}


@ProxyCmp({
  inputs: ['hint', 'hintId']
})
@Component({
  selector: 'gcds-hint',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['hint', 'hintId'],
})
export class GcdsHint {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsHint extends Components.GcdsHint {}


@ProxyCmp({
  inputs: ['fixedWidth', 'iconStyle', 'label', 'marginLeft', 'marginRight', 'name', 'size']
})
@Component({
  selector: 'gcds-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['fixedWidth', 'iconStyle', 'label', 'marginLeft', 'marginRight', 'name', 'size'],
})
export class GcdsIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsIcon extends Components.GcdsIcon {}


@ProxyCmp({
  inputs: ['autocomplete', 'blurHandler', 'changeHandler', 'disabled', 'errorMessage', 'focusHandler', 'hideLabel', 'hint', 'inputId', 'label', 'required', 'size', 'type', 'validateOn', 'validator', 'value'],
  methods: ['validate']
})
@Component({
  selector: 'gcds-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['autocomplete', 'blurHandler', 'changeHandler', 'disabled', 'errorMessage', 'focusHandler', 'hideLabel', 'hint', 'inputId', 'label', 'required', 'size', 'type', 'validateOn', 'validator', 'value'],
})
export class GcdsInput {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['gcdsFocus', 'gcdsBlur', 'gcdsChange', 'gcdsError', 'gcdsValid']);
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
   * Update value based on user input.
   */
  gcdsChange: EventEmitter<CustomEvent<any>>;
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
})
export class GcdsLabel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsLabel extends Components.GcdsLabel {}


@ProxyCmp({
  inputs: ['href']
})
@Component({
  selector: 'gcds-lang-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['href'],
})
export class GcdsLangToggle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsLangToggle extends Components.GcdsLangToggle {}


@ProxyCmp({
  inputs: ['heading', 'open'],
  methods: ['focusTrigger', 'toggleNav']
})
@Component({
  selector: 'gcds-nav-group',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['heading', 'open'],
})
export class GcdsNavGroup {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['gcdsClick']);
  }
}


export declare interface GcdsNavGroup extends Components.GcdsNavGroup {
  /**
   * Emitted when the button has focus.
   */
  gcdsClick: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['current', 'href'],
  methods: ['focusLink']
})
@Component({
  selector: 'gcds-nav-link',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['current', 'href'],
})
export class GcdsNavLink {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsNavLink extends Components.GcdsNavLink {}


@ProxyCmp({
  inputs: ['currentPage', 'display', 'label', 'nextHref', 'nextLabel', 'pageChangeHandler', 'previousHref', 'previousLabel', 'totalPages', 'url']
})
@Component({
  selector: 'gcds-pagination',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['currentPage', 'display', 'label', 'nextHref', 'nextLabel', 'pageChangeHandler', 'previousHref', 'previousLabel', 'totalPages', 'url'],
})
export class GcdsPagination {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['gcdsPageChange']);
  }
}


export declare interface GcdsPagination extends Components.GcdsPagination {
  /**
   * Update value based on user input.
   */
  gcdsPageChange: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['bannerRole', 'container', 'isFixed']
})
@Component({
  selector: 'gcds-phase-banner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['bannerRole', 'container', 'isFixed'],
})
export class GcdsPhaseBanner {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsPhaseBanner extends Components.GcdsPhaseBanner {}


@ProxyCmp({
  inputs: ['blurHandler', 'checked', 'clickHandler', 'disabled', 'focusHandler', 'hint', 'label', 'name', 'radioId', 'required', 'value']
})
@Component({
  selector: 'gcds-radio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['blurHandler', 'checked', 'clickHandler', 'disabled', 'focusHandler', 'hint', 'label', 'name', 'radioId', 'required', 'value'],
})
export class GcdsRadio {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['gcdsRadioChange', 'gcdsFocus', 'gcdsBlur']);
  }
}


export declare interface GcdsRadio extends Components.GcdsRadio {
  /**
   * Emitted when the radio button is checked
   */
  gcdsRadioChange: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the radio has focus.
   */
  gcdsFocus: EventEmitter<CustomEvent<void>>;
  /**
   * Emitted when the radio loses focus.
   */
  gcdsBlur: EventEmitter<CustomEvent<void>>;
}


@ProxyCmp({
  inputs: ['blurHandler', 'changeHandler', 'defaultValue', 'disabled', 'errorMessage', 'focusHandler', 'hint', 'label', 'required', 'selectId', 'validateOn', 'validator', 'value'],
  methods: ['validate']
})
@Component({
  selector: 'gcds-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['blurHandler', 'changeHandler', 'defaultValue', 'disabled', 'errorMessage', 'focusHandler', 'hint', 'label', 'required', 'selectId', 'validateOn', 'validator', 'value'],
})
export class GcdsSelect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['gcdsSelectChange', 'gcdsFocus', 'gcdsBlur', 'gcdsError', 'gcdsValid']);
  }
}


export declare interface GcdsSelect extends Components.GcdsSelect {
  /**
   * Update value based on user selection.
   */
  gcdsSelectChange: EventEmitter<CustomEvent<any>>;
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
  inputs: ['label', 'position'],
  methods: ['getNavSize', 'updateNavSize', 'updateNavItemQueue']
})
@Component({
  selector: 'gcds-side-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['label', 'position'],
})
export class GcdsSideNav {
  protected el: HTMLElement;
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
})
export class GcdsSignature {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsSignature extends Components.GcdsSignature {}


@ProxyCmp({
  inputs: ['currentStep', 'totalSteps']
})
@Component({
  selector: 'gcds-stepper',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['currentStep', 'totalSteps'],
})
export class GcdsStepper {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsStepper extends Components.GcdsStepper {}


@ProxyCmp({
  inputs: ['blurHandler', 'changeHandler', 'characterCount', 'cols', 'disabled', 'errorMessage', 'focusHandler', 'hideLabel', 'hint', 'label', 'required', 'rows', 'textareaId', 'validateOn', 'validator', 'value'],
  methods: ['validate']
})
@Component({
  selector: 'gcds-textarea',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['blurHandler', 'changeHandler', 'characterCount', 'cols', 'disabled', 'errorMessage', 'focusHandler', 'hideLabel', 'hint', 'label', 'required', 'rows', 'textareaId', 'validateOn', 'validator', 'value'],
})
export class GcdsTextarea {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['gcdsFocus', 'gcdsBlur', 'gcdsChange', 'gcdsError', 'gcdsValid']);
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
   * Update value based on user input.
   */
  gcdsChange: EventEmitter<CustomEvent<any>>;
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
  inputs: ['alignment', 'label', 'position'],
  methods: ['getNavSize', 'updateNavSize', 'updateNavItemQueue']
})
@Component({
  selector: 'gcds-top-nav',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['alignment', 'label', 'position'],
})
export class GcdsTopNav {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsTopNav extends Components.GcdsTopNav {}


@ProxyCmp({
  inputs: ['container', 'isFixed']
})
@Component({
  selector: 'gcds-verify-banner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  // eslint-disable-next-line @angular-eslint/no-inputs-metadata-property
  inputs: ['container', 'isFixed'],
})
export class GcdsVerifyBanner {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsVerifyBanner extends Components.GcdsVerifyBanner {}


