/* tslint:disable */
/* auto-generated angular directive proxies */
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, EventEmitter, NgZone } from '@angular/core';
import { ProxyCmp, proxyOutputs } from './angular-component-lib/utils';

import { Components } from 'gcds-components';




export declare interface GcdsAlert extends Components.GcdsAlert {
  /**
   * Events 
   */
  gcdsDismiss: EventEmitter<CustomEvent<void>>;

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['alertRole', 'dismissHandler', 'heading', 'hideCloseBtn', 'isFixed', 'maxContentWidth']
})
@Component({
  selector: 'gcds-alert',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['alertRole', 'dismissHandler', 'heading', 'hideCloseBtn', 'isFixed', 'maxContentWidth']
})
export class GcdsAlert {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['gcdsDismiss']);
  }
}


export declare interface GcdsBanner extends Components.GcdsBanner {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['bannerRole', 'isFixed', 'maxContentWidth']
})
@Component({
  selector: 'gcds-banner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['bannerRole', 'isFixed', 'maxContentWidth']
})
export class GcdsBanner {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
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
  defineCustomElementFn: undefined,
  inputs: ['blurHandler', 'buttonId', 'buttonRole', 'buttonSize', 'buttonStyle', 'buttonType', 'clickHandler', 'disabled', 'download', 'focusHandler', 'href', 'name', 'rel', 'target'],
  methods: ['focusElement']
})
@Component({
  selector: 'gcds-button',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['blurHandler', 'buttonId', 'buttonRole', 'buttonSize', 'buttonStyle', 'buttonType', 'clickHandler', 'disabled', 'download', 'focusHandler', 'href', 'name', 'rel', 'target']
})
export class GcdsButton {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['gcdsFocus', 'gcdsBlur']);
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

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['blurHandler', 'checkboxId', 'checked', 'clickHandler', 'disabled', 'errorMessage', 'focusHandler', 'hint', 'label', 'name', 'required', 'validateOn', 'validator', 'value'],
  methods: ['validate']
})
@Component({
  selector: 'gcds-checkbox',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['blurHandler', 'checkboxId', 'checked', 'clickHandler', 'disabled', 'errorMessage', 'focusHandler', 'hint', 'label', 'name', 'required', 'validateOn', 'validator', 'value']
})
export class GcdsCheckbox {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['gcdsFocus', 'gcdsBlur', 'gcdsChange']);
  }
}


export declare interface GcdsDetails extends Components.GcdsDetails {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['detailsTitle', 'open']
})
@Component({
  selector: 'gcds-details',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['detailsTitle', 'open']
})
export class GcdsDetails {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsErrorMessage extends Components.GcdsErrorMessage {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['message', 'messageId']
})
@Component({
  selector: 'gcds-error-message',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['message', 'messageId']
})
export class GcdsErrorMessage {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
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

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['disabled', 'errorMessage', 'fieldsetId', 'hint', 'legend', 'required', 'validateOn', 'validator'],
  methods: ['validate']
})
@Component({
  selector: 'gcds-fieldset',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['disabled', 'errorMessage', 'fieldsetId', 'hint', 'legend', 'required', 'validateOn', 'validator']
})
export class GcdsFieldset {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['gcdsGroupError', 'gcdsGroupErrorClear']);
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

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['accept', 'blurHandler', 'changeHandler', 'disabled', 'errorMessage', 'focusHandler', 'hint', 'label', 'multiple', 'required', 'uploaderId', 'validateOn', 'validator', 'value'],
  methods: ['validate']
})
@Component({
  selector: 'gcds-file-uploader',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['accept', 'blurHandler', 'changeHandler', 'disabled', 'errorMessage', 'focusHandler', 'hint', 'label', 'multiple', 'required', 'uploaderId', 'validateOn', 'validator', 'value']
})
export class GcdsFileUploader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['gcdsFocus', 'gcdsBlur', 'gcdsFileUploaderChange', 'gcdsRemoveFile']);
  }
}


export declare interface GcdsFooter extends Components.GcdsFooter {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['display', 'topHref', 'wordmarkVariant']
})
@Component({
  selector: 'gcds-footer',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['display', 'topHref', 'wordmarkVariant']
})
export class GcdsFooter {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsGrid extends Components.GcdsGrid {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['alignContent', 'alignItems', 'columns', 'columnsDesktop', 'columnsTablet', 'container', 'display', 'gap', 'justifyContent', 'justifyItems', 'placeContent', 'placeItems', 'tag']
})
@Component({
  selector: 'gcds-grid',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['alignContent', 'alignItems', 'columns', 'columnsDesktop', 'columnsTablet', 'container', 'display', 'gap', 'justifyContent', 'justifyItems', 'placeContent', 'placeItems', 'tag']
})
export class GcdsGrid {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsHeader extends Components.GcdsHeader {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['langHref', 'signatureHasLink', 'signatureVariant', 'skipToHref']
})
@Component({
  selector: 'gcds-header',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['langHref', 'signatureHasLink', 'signatureVariant', 'skipToHref']
})
export class GcdsHeader {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsHint extends Components.GcdsHint {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['hint', 'hintId']
})
@Component({
  selector: 'gcds-hint',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['hint', 'hintId']
})
export class GcdsHint {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsIcon extends Components.GcdsIcon {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['label', 'marginLeft', 'marginRight', 'name', 'size']
})
@Component({
  selector: 'gcds-icon',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['label', 'marginLeft', 'marginRight', 'name', 'size']
})
export class GcdsIcon {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
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

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['autocomplete', 'blurHandler', 'changeHandler', 'disabled', 'errorMessage', 'focusHandler', 'hideLabel', 'hint', 'inputId', 'label', 'required', 'size', 'type', 'validateOn', 'validator', 'value'],
  methods: ['validate']
})
@Component({
  selector: 'gcds-input',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['autocomplete', 'blurHandler', 'changeHandler', 'disabled', 'errorMessage', 'focusHandler', 'hideLabel', 'hint', 'inputId', 'label', 'required', 'size', 'type', 'validateOn', 'validator', 'value']
})
export class GcdsInput {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['gcdsFocus', 'gcdsBlur', 'gcdsChange']);
  }
}


export declare interface GcdsLabel extends Components.GcdsLabel {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['hideLabel', 'label', 'labelFor', 'required']
})
@Component({
  selector: 'gcds-label',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['hideLabel', 'label', 'labelFor', 'required']
})
export class GcdsLabel {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsLangToggle extends Components.GcdsLangToggle {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['href']
})
@Component({
  selector: 'gcds-lang-toggle',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['href']
})
export class GcdsLangToggle {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
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
  defineCustomElementFn: undefined,
  inputs: ['blurHandler', 'checked', 'clickHandler', 'disabled', 'focusHandler', 'hint', 'label', 'name', 'radioId', 'required', 'value']
})
@Component({
  selector: 'gcds-radio',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['blurHandler', 'checked', 'clickHandler', 'disabled', 'focusHandler', 'hint', 'label', 'name', 'radioId', 'required', 'value']
})
export class GcdsRadio {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['gcdsRadioChange', 'gcdsFocus', 'gcdsBlur']);
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

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['blurHandler', 'changeHandler', 'defaultValue', 'disabled', 'errorMessage', 'focusHandler', 'hint', 'label', 'required', 'selectId', 'validateOn', 'validator', 'value'],
  methods: ['validate']
})
@Component({
  selector: 'gcds-select',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['blurHandler', 'changeHandler', 'defaultValue', 'disabled', 'errorMessage', 'focusHandler', 'hint', 'label', 'required', 'selectId', 'validateOn', 'validator', 'value']
})
export class GcdsSelect {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['gcdsSelectChange', 'gcdsFocus', 'gcdsBlur']);
  }
}


export declare interface GcdsSignature extends Components.GcdsSignature {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['hasLink', 'type', 'variant']
})
@Component({
  selector: 'gcds-signature',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['hasLink', 'type', 'variant']
})
export class GcdsSignature {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsSiteMenu extends Components.GcdsSiteMenu {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['menuAlignment', 'menuDesktopLayout', 'menuMobileLayout', 'menuPosition']
})
@Component({
  selector: 'gcds-site-menu',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['menuAlignment', 'menuDesktopLayout', 'menuMobileLayout', 'menuPosition']
})
export class GcdsSiteMenu {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}


export declare interface GcdsStepper extends Components.GcdsStepper {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['currentStep', 'totalSteps']
})
@Component({
  selector: 'gcds-stepper',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['currentStep', 'totalSteps']
})
export class GcdsStepper {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
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

}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['blurHandler', 'changeHandler', 'characterCount', 'cols', 'disabled', 'errorMessage', 'focusHandler', 'hideLabel', 'hint', 'label', 'required', 'rows', 'textareaId', 'validateOn', 'validator', 'value'],
  methods: ['validate']
})
@Component({
  selector: 'gcds-textarea',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['blurHandler', 'changeHandler', 'characterCount', 'cols', 'disabled', 'errorMessage', 'focusHandler', 'hideLabel', 'hint', 'label', 'required', 'rows', 'textareaId', 'validateOn', 'validator', 'value']
})
export class GcdsTextarea {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
    proxyOutputs(this, this.el, ['gcdsFocus', 'gcdsBlur', 'gcdsChange']);
  }
}


export declare interface GcdsVerifyBanner extends Components.GcdsVerifyBanner {}

@ProxyCmp({
  defineCustomElementFn: undefined,
  inputs: ['maxContentWidth', 'positionFixed']
})
@Component({
  selector: 'gcds-verify-banner',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: '<ng-content></ng-content>',
  inputs: ['maxContentWidth', 'positionFixed']
})
export class GcdsVerifyBanner {
  protected el: HTMLElement;
  constructor(c: ChangeDetectorRef, r: ElementRef, protected z: NgZone) {
    c.detach();
    this.el = r.nativeElement;
  }
}
