/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { defineContainer, defineStencilSSRComponent, type StencilVueComponent } from '@stencil/vue-output-target/runtime';

import type { JSX } from '@cdssnc/gcds-components/dist/components';

import { defineCustomElement as defineGcdsAlert } from '@cdssnc/gcds-components/dist/components/gcds-alert.js';
import { defineCustomElement as defineGcdsBreadcrumbs } from '@cdssnc/gcds-components/dist/components/gcds-breadcrumbs.js';
import { defineCustomElement as defineGcdsBreadcrumbsItem } from '@cdssnc/gcds-components/dist/components/gcds-breadcrumbs-item.js';
import { defineCustomElement as defineGcdsButton } from '@cdssnc/gcds-components/dist/components/gcds-button.js';
import { defineCustomElement as defineGcdsCard } from '@cdssnc/gcds-components/dist/components/gcds-card.js';
import { defineCustomElement as defineGcdsCheckboxes } from '@cdssnc/gcds-components/dist/components/gcds-checkboxes.js';
import { defineCustomElement as defineGcdsContainer } from '@cdssnc/gcds-components/dist/components/gcds-container.js';
import { defineCustomElement as defineGcdsDateInput } from '@cdssnc/gcds-components/dist/components/gcds-date-input.js';
import { defineCustomElement as defineGcdsDateModified } from '@cdssnc/gcds-components/dist/components/gcds-date-modified.js';
import { defineCustomElement as defineGcdsDetails } from '@cdssnc/gcds-components/dist/components/gcds-details.js';
import { defineCustomElement as defineGcdsErrorMessage } from '@cdssnc/gcds-components/dist/components/gcds-error-message.js';
import { defineCustomElement as defineGcdsErrorSummary } from '@cdssnc/gcds-components/dist/components/gcds-error-summary.js';
import { defineCustomElement as defineGcdsFieldset } from '@cdssnc/gcds-components/dist/components/gcds-fieldset.js';
import { defineCustomElement as defineGcdsFileUploader } from '@cdssnc/gcds-components/dist/components/gcds-file-uploader.js';
import { defineCustomElement as defineGcdsFooter } from '@cdssnc/gcds-components/dist/components/gcds-footer.js';
import { defineCustomElement as defineGcdsGrid } from '@cdssnc/gcds-components/dist/components/gcds-grid.js';
import { defineCustomElement as defineGcdsGridCol } from '@cdssnc/gcds-components/dist/components/gcds-grid-col.js';
import { defineCustomElement as defineGcdsHeader } from '@cdssnc/gcds-components/dist/components/gcds-header.js';
import { defineCustomElement as defineGcdsHeading } from '@cdssnc/gcds-components/dist/components/gcds-heading.js';
import { defineCustomElement as defineGcdsHint } from '@cdssnc/gcds-components/dist/components/gcds-hint.js';
import { defineCustomElement as defineGcdsIcon } from '@cdssnc/gcds-components/dist/components/gcds-icon.js';
import { defineCustomElement as defineGcdsInput } from '@cdssnc/gcds-components/dist/components/gcds-input.js';
import { defineCustomElement as defineGcdsLabel } from '@cdssnc/gcds-components/dist/components/gcds-label.js';
import { defineCustomElement as defineGcdsLangToggle } from '@cdssnc/gcds-components/dist/components/gcds-lang-toggle.js';
import { defineCustomElement as defineGcdsLink } from '@cdssnc/gcds-components/dist/components/gcds-link.js';
import { defineCustomElement as defineGcdsNavGroup } from '@cdssnc/gcds-components/dist/components/gcds-nav-group.js';
import { defineCustomElement as defineGcdsNavLink } from '@cdssnc/gcds-components/dist/components/gcds-nav-link.js';
import { defineCustomElement as defineGcdsNotice } from '@cdssnc/gcds-components/dist/components/gcds-notice.js';
import { defineCustomElement as defineGcdsPagination } from '@cdssnc/gcds-components/dist/components/gcds-pagination.js';
import { defineCustomElement as defineGcdsPhaseBanner } from '@cdssnc/gcds-components/dist/components/gcds-phase-banner.js';
import { defineCustomElement as defineGcdsRadios } from '@cdssnc/gcds-components/dist/components/gcds-radios.js';
import { defineCustomElement as defineGcdsSearch } from '@cdssnc/gcds-components/dist/components/gcds-search.js';
import { defineCustomElement as defineGcdsSelect } from '@cdssnc/gcds-components/dist/components/gcds-select.js';
import { defineCustomElement as defineGcdsSideNav } from '@cdssnc/gcds-components/dist/components/gcds-side-nav.js';
import { defineCustomElement as defineGcdsSignature } from '@cdssnc/gcds-components/dist/components/gcds-signature.js';
import { defineCustomElement as defineGcdsSrOnly } from '@cdssnc/gcds-components/dist/components/gcds-sr-only.js';
import { defineCustomElement as defineGcdsStepper } from '@cdssnc/gcds-components/dist/components/gcds-stepper.js';
import { defineCustomElement as defineGcdsText } from '@cdssnc/gcds-components/dist/components/gcds-text.js';
import { defineCustomElement as defineGcdsTextarea } from '@cdssnc/gcds-components/dist/components/gcds-textarea.js';
import { defineCustomElement as defineGcdsTopNav } from '@cdssnc/gcds-components/dist/components/gcds-top-nav.js';
import { defineCustomElement as defineGcdsTopicMenu } from '@cdssnc/gcds-components/dist/components/gcds-topic-menu.js';
import { defineCustomElement as defineGcdsVerifyBanner } from '@cdssnc/gcds-components/dist/components/gcds-verify-banner.js';


export const GcdsAlert: StencilVueComponent<JSX.GcdsAlert> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.GcdsAlert>('gcds-alert', defineGcdsAlert, [
  'alertRole',
  'container',
  'heading',
  'hideCloseBtn',
  'hideRoleIcon',
  'isFixed',
  'gcdsDismiss'
], [
  'gcdsDismiss'
]) : defineStencilSSRComponent<JSX.GcdsAlert>({
  tagName: 'gcds-alert',
  hydrateModule: import('@cdssnc/gcds-components/hydrate'),
  props: {
    'alertRole': [String, "alert-role"],
    'container': [String, "container"],
    'heading': [String, "heading"],
    'hideCloseBtn': [Boolean, "hide-close-btn"],
    'hideRoleIcon': [Boolean, "hide-role-icon"],
    'isFixed': [Boolean, "is-fixed"],
    'onGcdsDismiss': [Function]
  }
});


export const GcdsBreadcrumbs: StencilVueComponent<JSX.GcdsBreadcrumbs> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.GcdsBreadcrumbs>('gcds-breadcrumbs', defineGcdsBreadcrumbs, [
  'hideCanadaLink'
]) : defineStencilSSRComponent<JSX.GcdsBreadcrumbs>({
  tagName: 'gcds-breadcrumbs',
  hydrateModule: import('@cdssnc/gcds-components/hydrate'),
  props: {
    'hideCanadaLink': [Boolean, "hide-canada-link"]
  }
});


export const GcdsBreadcrumbsItem: StencilVueComponent<JSX.GcdsBreadcrumbsItem> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.GcdsBreadcrumbsItem>('gcds-breadcrumbs-item', defineGcdsBreadcrumbsItem, [
  'href'
]) : defineStencilSSRComponent<JSX.GcdsBreadcrumbsItem>({
  tagName: 'gcds-breadcrumbs-item',
  hydrateModule: import('@cdssnc/gcds-components/hydrate'),
  props: {
    'href': [String, "href"]
  }
});


export const GcdsButton: StencilVueComponent<JSX.GcdsButton> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.GcdsButton>('gcds-button', defineGcdsButton, [
  'type',
  'buttonRole',
  'size',
  'buttonId',
  'name',
  'disabled',
  'value',
  'href',
  'rel',
  'target',
  'download',
  'gcdsClick',
  'gcdsFocus',
  'gcdsBlur'
], [
  'gcdsClick',
  'gcdsFocus',
  'gcdsBlur'
]) : defineStencilSSRComponent<JSX.GcdsButton>({
  tagName: 'gcds-button',
  hydrateModule: import('@cdssnc/gcds-components/hydrate'),
  props: {
    'type': [String, "type"],
    'buttonRole': [String, "button-role"],
    'size': [String, "size"],
    'buttonId': [String, "button-id"],
    'name': [String, "name"],
    'disabled': [Boolean, "disabled"],
    'value': [String, "value"],
    'href': [String, "href"],
    'rel': [String, "rel"],
    'target': [String, "target"],
    'download': [String, "download"],
    'onGcdsClick': [Function],
    'onGcdsFocus': [Function],
    'onGcdsBlur': [Function]
  }
});


export const GcdsCard: StencilVueComponent<JSX.GcdsCard> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.GcdsCard>('gcds-card', defineGcdsCard, [
  'cardTitle',
  'href',
  'cardTitleTag',
  'description',
  'badge',
  'imgSrc',
  'imgAlt',
  'gcdsFocus',
  'gcdsBlur',
  'gcdsClick'
], [
  'gcdsFocus',
  'gcdsBlur',
  'gcdsClick'
]) : defineStencilSSRComponent<JSX.GcdsCard>({
  tagName: 'gcds-card',
  hydrateModule: import('@cdssnc/gcds-components/hydrate'),
  props: {
    'cardTitle': [String, "card-title"],
    'href': [String, "href"],
    'cardTitleTag': [String, "card-title-tag"],
    'description': [String, "description"],
    'badge': [String, "badge"],
    'imgSrc': [String, "img-src"],
    'imgAlt': [String, "img-alt"],
    'onGcdsFocus': [Function],
    'onGcdsBlur': [Function],
    'onGcdsClick': [Function]
  }
});


export const GcdsCheckboxes: StencilVueComponent<JSX.GcdsCheckboxes> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.GcdsCheckboxes>('gcds-checkboxes', defineGcdsCheckboxes, [
  'name',
  'legend',
  'options',
  'required',
  'disabled',
  'value',
  'errorMessage',
  'hint',
  'validator',
  'validateOn',
  'gcdsClick',
  'gcdsFocus',
  'gcdsBlur',
  'gcdsInput',
  'gcdsChange',
  'gcdsError',
  'gcdsValid'
], [
  'gcdsClick',
  'gcdsFocus',
  'gcdsBlur',
  'gcdsInput',
  'gcdsChange',
  'gcdsError',
  'gcdsValid'
]) : defineStencilSSRComponent<JSX.GcdsCheckboxes>({
  tagName: 'gcds-checkboxes',
  hydrateModule: import('@cdssnc/gcds-components/hydrate'),
  props: {
    'name': [String, "name"],
    'legend': [String, "legend"],
    'options': [String, "options"],
    'required': [Boolean, "required"],
    'disabled': [Boolean, "disabled"],
    'value': [String, "value"],
    'errorMessage': [String, "error-message"],
    'hint': [String, "hint"],
    'validateOn': [String, "validate-on"],
    'onGcdsClick': [Function],
    'onGcdsFocus': [Function],
    'onGcdsBlur': [Function],
    'onGcdsInput': [Function],
    'onGcdsChange': [Function],
    'onGcdsError': [Function],
    'onGcdsValid': [Function]
  }
});


export const GcdsContainer: StencilVueComponent<JSX.GcdsContainer> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.GcdsContainer>('gcds-container', defineGcdsContainer, [
  'border',
  'centered',
  'mainContainer',
  'margin',
  'padding',
  'size',
  'tag'
]) : defineStencilSSRComponent<JSX.GcdsContainer>({
  tagName: 'gcds-container',
  hydrateModule: import('@cdssnc/gcds-components/hydrate'),
  props: {
    'border': [Boolean, "border"],
    'centered': [Boolean, "centered"],
    'mainContainer': [Boolean, "main-container"],
    'margin': [String, "margin"],
    'padding': [String, "padding"],
    'size': [String, "size"],
    'tag': [String, "tag"]
  }
});


export const GcdsDateInput: StencilVueComponent<JSX.GcdsDateInput, JSX.GcdsDateInput["value"]> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.GcdsDateInput, JSX.GcdsDateInput["value"]>('gcds-date-input', defineGcdsDateInput, [
  'name',
  'legend',
  'format',
  'value',
  'required',
  'hint',
  'errorMessage',
  'disabled',
  'validator',
  'validateOn',
  'gcdsFocus',
  'gcdsBlur',
  'gcdsInput',
  'gcdsChange',
  'gcdsError',
  'gcdsValid'
], [
  'gcdsFocus',
  'gcdsBlur',
  'gcdsInput',
  'gcdsChange',
  'gcdsError',
  'gcdsValid'
],
'value', 'gcdsChange') : defineStencilSSRComponent<JSX.GcdsDateInput, JSX.GcdsDateInput["value"]>({
  tagName: 'gcds-date-input',
  hydrateModule: import('@cdssnc/gcds-components/hydrate'),
  props: {
    'name': [String, "name"],
    'legend': [String, "legend"],
    'format': [String, "format"],
    'value': [String, "value"],
    'required': [Boolean, "required"],
    'hint': [String, "hint"],
    'errorMessage': [String, "error-message"],
    'disabled': [Boolean, "disabled"],
    'validateOn': [String, "validate-on"],
    'onGcdsFocus': [Function],
    'onGcdsBlur': [Function],
    'onGcdsInput': [Function],
    'onGcdsChange': [Function],
    'onGcdsError': [Function],
    'onGcdsValid': [Function]
  }
});


export const GcdsDateModified: StencilVueComponent<JSX.GcdsDateModified> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.GcdsDateModified>('gcds-date-modified', defineGcdsDateModified, [
  'type'
]) : defineStencilSSRComponent<JSX.GcdsDateModified>({
  tagName: 'gcds-date-modified',
  hydrateModule: import('@cdssnc/gcds-components/hydrate'),
  props: {
    'type': [String, "type"]
  }
});


export const GcdsDetails: StencilVueComponent<JSX.GcdsDetails> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.GcdsDetails>('gcds-details', defineGcdsDetails, [
  'detailsTitle',
  'open',
  'gcdsFocus',
  'gcdsBlur',
  'gcdsClick'
], [
  'gcdsFocus',
  'gcdsBlur',
  'gcdsClick'
]) : defineStencilSSRComponent<JSX.GcdsDetails>({
  tagName: 'gcds-details',
  hydrateModule: import('@cdssnc/gcds-components/hydrate'),
  props: {
    'detailsTitle': [String, "details-title"],
    'open': [Boolean, "open"],
    'onGcdsFocus': [Function],
    'onGcdsBlur': [Function],
    'onGcdsClick': [Function]
  }
});


export const GcdsErrorMessage: StencilVueComponent<JSX.GcdsErrorMessage> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.GcdsErrorMessage>('gcds-error-message', defineGcdsErrorMessage, [
  'messageId'
]) : defineStencilSSRComponent<JSX.GcdsErrorMessage>({
  tagName: 'gcds-error-message',
  hydrateModule: import('@cdssnc/gcds-components/hydrate'),
  props: {
    'messageId': [String, "message-id"]
  }
});


export const GcdsErrorSummary: StencilVueComponent<JSX.GcdsErrorSummary> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.GcdsErrorSummary>('gcds-error-summary', defineGcdsErrorSummary, [
  'heading',
  'listen',
  'errorLinks'
]) : defineStencilSSRComponent<JSX.GcdsErrorSummary>({
  tagName: 'gcds-error-summary',
  hydrateModule: import('@cdssnc/gcds-components/hydrate'),
  props: {
    'heading': [String, "heading"],
    'listen': [Boolean, "listen"],
    'errorLinks': [String, "error-links"]
  }
});


export const GcdsFieldset: StencilVueComponent<JSX.GcdsFieldset> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.GcdsFieldset>('gcds-fieldset', defineGcdsFieldset, [
  'hint',
  'legend',
  'legendSize'
]) : defineStencilSSRComponent<JSX.GcdsFieldset>({
  tagName: 'gcds-fieldset',
  hydrateModule: import('@cdssnc/gcds-components/hydrate'),
  props: {
    'hint': [String, "hint"],
    'legend': [String, "legend"],
    'legendSize': [String, "legend-size"]
  }
});


export const GcdsFileUploader: StencilVueComponent<JSX.GcdsFileUploader, JSX.GcdsFileUploader["value"]> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.GcdsFileUploader, JSX.GcdsFileUploader["value"]>('gcds-file-uploader', defineGcdsFileUploader, [
  'uploaderId',
  'name',
  'label',
  'required',
  'disabled',
  'value',
  'accept',
  'multiple',
  'files',
  'errorMessage',
  'hint',
  'validator',
  'validateOn',
  'gcdsFocus',
  'gcdsBlur',
  'gcdsChange',
  'gcdsInput',
  'gcdsRemoveFile',
  'gcdsError',
  'gcdsValid'
], [
  'gcdsFocus',
  'gcdsBlur',
  'gcdsChange',
  'gcdsInput',
  'gcdsRemoveFile',
  'gcdsError',
  'gcdsValid'
],
'value', 'gcdsChange') : defineStencilSSRComponent<JSX.GcdsFileUploader, JSX.GcdsFileUploader["value"]>({
  tagName: 'gcds-file-uploader',
  hydrateModule: import('@cdssnc/gcds-components/hydrate'),
  props: {
    'uploaderId': [String, "uploader-id"],
    'name': [String, "name"],
    'label': [String, "label"],
    'required': [Boolean, "required"],
    'disabled': [Boolean, "disabled"],
    'accept': [String, "accept"],
    'multiple': [Boolean, "multiple"],
    'errorMessage': [String, "error-message"],
    'hint': [String, "hint"],
    'validateOn': [String, "validate-on"],
    'onGcdsFocus': [Function],
    'onGcdsBlur': [Function],
    'onGcdsChange': [Function],
    'onGcdsInput': [Function],
    'onGcdsRemoveFile': [Function],
    'onGcdsError': [Function],
    'onGcdsValid': [Function]
  }
});


export const GcdsFooter: StencilVueComponent<JSX.GcdsFooter> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.GcdsFooter>('gcds-footer', defineGcdsFooter, [
  'display',
  'wordmarkVariant',
  'contextualHeading',
  'contextualLinks',
  'subLinks'
]) : defineStencilSSRComponent<JSX.GcdsFooter>({
  tagName: 'gcds-footer',
  hydrateModule: import('@cdssnc/gcds-components/hydrate'),
  props: {
    'display': [String, "display"],
    'wordmarkVariant': [String, "wordmark-variant"],
    'contextualHeading': [String, "contextual-heading"],
    'contextualLinks': [String, "contextual-links"],
    'subLinks': [String, "sub-links"]
  }
});


export const GcdsGrid: StencilVueComponent<JSX.GcdsGrid> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.GcdsGrid>('gcds-grid', defineGcdsGrid, [
  'columns',
  'columnsTablet',
  'columnsDesktop',
  'container',
  'centered',
  'display',
  'equalRowHeight',
  'gap',
  'gapTablet',
  'gapDesktop',
  'tag',
  'alignContent',
  'justifyContent',
  'placeContent',
  'alignItems',
  'justifyItems',
  'placeItems'
]) : defineStencilSSRComponent<JSX.GcdsGrid>({
  tagName: 'gcds-grid',
  hydrateModule: import('@cdssnc/gcds-components/hydrate'),
  props: {
    'columns': [String, "columns"],
    'columnsTablet': [String, "columns-tablet"],
    'columnsDesktop': [String, "columns-desktop"],
    'container': [String, "container"],
    'centered': [Boolean, "centered"],
    'display': [String, "display"],
    'equalRowHeight': [Boolean, "equal-row-height"],
    'gap': [String, "gap"],
    'gapTablet': [String, "gap-tablet"],
    'gapDesktop': [String, "gap-desktop"],
    'tag': [String, "tag"],
    'alignContent': [String, "align-content"],
    'justifyContent': [String, "justify-content"],
    'placeContent': [String, "place-content"],
    'alignItems': [String, "align-items"],
    'justifyItems': [String, "justify-items"],
    'placeItems': [String, "place-items"]
  }
});


export const GcdsGridCol: StencilVueComponent<JSX.GcdsGridCol> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.GcdsGridCol>('gcds-grid-col', defineGcdsGridCol, [
  'tag',
  'tablet',
  'desktop'
]) : defineStencilSSRComponent<JSX.GcdsGridCol>({
  tagName: 'gcds-grid-col',
  hydrateModule: import('@cdssnc/gcds-components/hydrate'),
  props: {
    'tag': [String, "tag"],
    'tablet': [Number, "tablet"],
    'desktop': [Number, "desktop"]
  }
});


export const GcdsHeader: StencilVueComponent<JSX.GcdsHeader> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.GcdsHeader>('gcds-header', defineGcdsHeader, [
  'langHref',
  'signatureVariant',
  'signatureHasLink',
  'skipToHref'
]) : defineStencilSSRComponent<JSX.GcdsHeader>({
  tagName: 'gcds-header',
  hydrateModule: import('@cdssnc/gcds-components/hydrate'),
  props: {
    'langHref': [String, "lang-href"],
    'signatureVariant': [String, "signature-variant"],
    'signatureHasLink': [Boolean, "signature-has-link"],
    'skipToHref': [String, "skip-to-href"]
  }
});


export const GcdsHeading: StencilVueComponent<JSX.GcdsHeading> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.GcdsHeading>('gcds-heading', defineGcdsHeading, [
  'tag',
  'characterLimit',
  'marginTop',
  'marginBottom'
]) : defineStencilSSRComponent<JSX.GcdsHeading>({
  tagName: 'gcds-heading',
  hydrateModule: import('@cdssnc/gcds-components/hydrate'),
  props: {
    'tag': [String, "tag"],
    'characterLimit': [Boolean, "character-limit"],
    'marginTop': [String, "margin-top"],
    'marginBottom': [String, "margin-bottom"]
  }
});


export const GcdsHint: StencilVueComponent<JSX.GcdsHint> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.GcdsHint>('gcds-hint', defineGcdsHint, [
  'hintId'
]) : defineStencilSSRComponent<JSX.GcdsHint>({
  tagName: 'gcds-hint',
  hydrateModule: import('@cdssnc/gcds-components/hydrate'),
  props: {
    'hintId': [String, "hint-id"]
  }
});


export const GcdsIcon: StencilVueComponent<JSX.GcdsIcon> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.GcdsIcon>('gcds-icon', defineGcdsIcon, [
  'label',
  'marginLeft',
  'marginRight',
  'name',
  'size'
]) : defineStencilSSRComponent<JSX.GcdsIcon>({
  tagName: 'gcds-icon',
  hydrateModule: import('@cdssnc/gcds-components/hydrate'),
  props: {
    'label': [String, "label"],
    'marginLeft': [String, "margin-left"],
    'marginRight': [String, "margin-right"],
    'name': [String, "name"],
    'size': [String, "size"]
  }
});


export const GcdsInput: StencilVueComponent<JSX.GcdsInput, JSX.GcdsInput["value"]> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.GcdsInput, JSX.GcdsInput["value"]>('gcds-input', defineGcdsInput, [
  'disabled',
  'errorMessage',
  'hideLabel',
  'hint',
  'inputId',
  'name',
  'label',
  'required',
  'size',
  'type',
  'value',
  'autocomplete',
  'validator',
  'validateOn',
  'gcdsFocus',
  'gcdsBlur',
  'gcdsInput',
  'gcdsChange',
  'gcdsError',
  'gcdsValid'
], [
  'gcdsFocus',
  'gcdsBlur',
  'gcdsInput',
  'gcdsChange',
  'gcdsError',
  'gcdsValid'
],
'value', 'gcdsChange') : defineStencilSSRComponent<JSX.GcdsInput, JSX.GcdsInput["value"]>({
  tagName: 'gcds-input',
  hydrateModule: import('@cdssnc/gcds-components/hydrate'),
  props: {
    'disabled': [Boolean, "disabled"],
    'errorMessage': [String, "error-message"],
    'hideLabel': [Boolean, "hide-label"],
    'hint': [String, "hint"],
    'inputId': [String, "input-id"],
    'name': [String, "name"],
    'label': [String, "label"],
    'required': [Boolean, "required"],
    'size': [Number, "size"],
    'type': [String, "type"],
    'value': [String, "value"],
    'autocomplete': [String, "autocomplete"],
    'validateOn': [String, "validate-on"],
    'onGcdsFocus': [Function],
    'onGcdsBlur': [Function],
    'onGcdsInput': [Function],
    'onGcdsChange': [Function],
    'onGcdsError': [Function],
    'onGcdsValid': [Function]
  }
});


export const GcdsLabel: StencilVueComponent<JSX.GcdsLabel> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.GcdsLabel>('gcds-label', defineGcdsLabel, [
  'hideLabel',
  'label',
  'labelFor',
  'required'
]) : defineStencilSSRComponent<JSX.GcdsLabel>({
  tagName: 'gcds-label',
  hydrateModule: import('@cdssnc/gcds-components/hydrate'),
  props: {
    'hideLabel': [Boolean, "hide-label"],
    'label': [String, "label"],
    'labelFor': [String, "label-for"],
    'required': [Boolean, "required"]
  }
});


export const GcdsLangToggle: StencilVueComponent<JSX.GcdsLangToggle> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.GcdsLangToggle>('gcds-lang-toggle', defineGcdsLangToggle, [
  'href'
]) : defineStencilSSRComponent<JSX.GcdsLangToggle>({
  tagName: 'gcds-lang-toggle',
  hydrateModule: import('@cdssnc/gcds-components/hydrate'),
  props: {
    'href': [String, "href"]
  }
});


export const GcdsLink: StencilVueComponent<JSX.GcdsLink> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.GcdsLink>('gcds-link', defineGcdsLink, [
  'variant',
  'size',
  'display',
  'href',
  'rel',
  'target',
  'external',
  'download',
  'type',
  'gcdsFocus',
  'gcdsBlur',
  'gcdsClick'
], [
  'gcdsFocus',
  'gcdsBlur',
  'gcdsClick'
]) : defineStencilSSRComponent<JSX.GcdsLink>({
  tagName: 'gcds-link',
  hydrateModule: import('@cdssnc/gcds-components/hydrate'),
  props: {
    'variant': [String, "variant"],
    'size': [String, "size"],
    'display': [String, "display"],
    'href': [String, "href"],
    'rel': [String, "rel"],
    'target': [String, "target"],
    'external': [Boolean, "external"],
    'download': [String, "download"],
    'type': [String, "type"],
    'onGcdsFocus': [Function],
    'onGcdsBlur': [Function],
    'onGcdsClick': [Function]
  }
});


export const GcdsNavGroup: StencilVueComponent<JSX.GcdsNavGroup> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.GcdsNavGroup>('gcds-nav-group', defineGcdsNavGroup, [
  'closeTrigger',
  'menuLabel',
  'openTrigger',
  'open',
  'gcdsClick',
  'gcdsFocus',
  'gcdsBlur'
], [
  'gcdsClick',
  'gcdsFocus',
  'gcdsBlur'
]) : defineStencilSSRComponent<JSX.GcdsNavGroup>({
  tagName: 'gcds-nav-group',
  hydrateModule: import('@cdssnc/gcds-components/hydrate'),
  props: {
    'closeTrigger': [String, "close-trigger"],
    'menuLabel': [String, "menu-label"],
    'openTrigger': [String, "open-trigger"],
    'open': [Boolean, "open"],
    'onGcdsClick': [Function],
    'onGcdsFocus': [Function],
    'onGcdsBlur': [Function]
  }
});


export const GcdsNavLink: StencilVueComponent<JSX.GcdsNavLink> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.GcdsNavLink>('gcds-nav-link', defineGcdsNavLink, [
  'href',
  'current',
  'gcdsClick',
  'gcdsFocus',
  'gcdsBlur'
], [
  'gcdsClick',
  'gcdsFocus',
  'gcdsBlur'
]) : defineStencilSSRComponent<JSX.GcdsNavLink>({
  tagName: 'gcds-nav-link',
  hydrateModule: import('@cdssnc/gcds-components/hydrate'),
  props: {
    'href': [String, "href"],
    'current': [Boolean, "current"],
    'onGcdsClick': [Function],
    'onGcdsFocus': [Function],
    'onGcdsBlur': [Function]
  }
});


export const GcdsNotice: StencilVueComponent<JSX.GcdsNotice> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.GcdsNotice>('gcds-notice', defineGcdsNotice, [
  'type',
  'noticeTitle',
  'noticeTitleTag'
]) : defineStencilSSRComponent<JSX.GcdsNotice>({
  tagName: 'gcds-notice',
  hydrateModule: import('@cdssnc/gcds-components/hydrate'),
  props: {
    'type': [String, "type"],
    'noticeTitle': [String, "notice-title"],
    'noticeTitleTag': [String, "notice-title-tag"]
  }
});


export const GcdsPagination: StencilVueComponent<JSX.GcdsPagination> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.GcdsPagination>('gcds-pagination', defineGcdsPagination, [
  'display',
  'label',
  'previousHref',
  'previousLabel',
  'nextHref',
  'nextLabel',
  'totalPages',
  'currentPage',
  'url',
  'gcdsFocus',
  'gcdsBlur',
  'gcdsClick'
], [
  'gcdsFocus',
  'gcdsBlur',
  'gcdsClick'
]) : defineStencilSSRComponent<JSX.GcdsPagination>({
  tagName: 'gcds-pagination',
  hydrateModule: import('@cdssnc/gcds-components/hydrate'),
  props: {
    'display': [String, "display"],
    'label': [String, "label"],
    'previousHref': [String, "previous-href"],
    'previousLabel': [String, "previous-label"],
    'nextHref': [String, "next-href"],
    'nextLabel': [String, "next-label"],
    'totalPages': [Number, "total-pages"],
    'currentPage': [Number, "current-page"],
    'url': [String, "url"],
    'onGcdsFocus': [Function],
    'onGcdsBlur': [Function],
    'onGcdsClick': [Function]
  }
});


export const GcdsPhaseBanner: StencilVueComponent<JSX.GcdsPhaseBanner> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.GcdsPhaseBanner>('gcds-phase-banner', defineGcdsPhaseBanner, [
  'bannerRole',
  'container',
  'isFixed'
]) : defineStencilSSRComponent<JSX.GcdsPhaseBanner>({
  tagName: 'gcds-phase-banner',
  hydrateModule: import('@cdssnc/gcds-components/hydrate'),
  props: {
    'bannerRole': [String, "banner-role"],
    'container': [String, "container"],
    'isFixed': [Boolean, "is-fixed"]
  }
});


export const GcdsRadios: StencilVueComponent<JSX.GcdsRadios> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.GcdsRadios>('gcds-radios', defineGcdsRadios, [
  'options',
  'name',
  'legend',
  'required',
  'hint',
  'errorMessage',
  'disabled',
  'value',
  'validator',
  'validateOn',
  'gcdsInput',
  'gcdsChange',
  'gcdsFocus',
  'gcdsBlur',
  'gcdsValid',
  'gcdsError'
], [
  'gcdsInput',
  'gcdsChange',
  'gcdsFocus',
  'gcdsBlur',
  'gcdsValid',
  'gcdsError'
]) : defineStencilSSRComponent<JSX.GcdsRadios>({
  tagName: 'gcds-radios',
  hydrateModule: import('@cdssnc/gcds-components/hydrate'),
  props: {
    'options': [String, "options"],
    'name': [String, "name"],
    'legend': [String, "legend"],
    'required': [Boolean, "required"],
    'hint': [String, "hint"],
    'errorMessage': [String, "error-message"],
    'disabled': [Boolean, "disabled"],
    'value': [String, "value"],
    'validateOn': [String, "validate-on"],
    'onGcdsInput': [Function],
    'onGcdsChange': [Function],
    'onGcdsFocus': [Function],
    'onGcdsBlur': [Function],
    'onGcdsValid': [Function],
    'onGcdsError': [Function]
  }
});


export const GcdsSearch: StencilVueComponent<JSX.GcdsSearch> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.GcdsSearch>('gcds-search', defineGcdsSearch, [
  'placeholder',
  'action',
  'method',
  'name',
  'searchId',
  'value',
  'suggested',
  'gcdsInput',
  'gcdsChange',
  'gcdsFocus',
  'gcdsBlur',
  'gcdsSubmit'
], [
  'gcdsInput',
  'gcdsChange',
  'gcdsFocus',
  'gcdsBlur',
  'gcdsSubmit'
]) : defineStencilSSRComponent<JSX.GcdsSearch>({
  tagName: 'gcds-search',
  hydrateModule: import('@cdssnc/gcds-components/hydrate'),
  props: {
    'placeholder': [String, "placeholder"],
    'action': [String, "action"],
    'method': [String, "method"],
    'name': [String, "name"],
    'searchId': [String, "search-id"],
    'value': [String, "value"],
    'onGcdsInput': [Function],
    'onGcdsChange': [Function],
    'onGcdsFocus': [Function],
    'onGcdsBlur': [Function],
    'onGcdsSubmit': [Function]
  }
});


export const GcdsSelect: StencilVueComponent<JSX.GcdsSelect, JSX.GcdsSelect["value"]> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.GcdsSelect, JSX.GcdsSelect["value"]>('gcds-select', defineGcdsSelect, [
  'selectId',
  'label',
  'name',
  'required',
  'disabled',
  'defaultValue',
  'value',
  'errorMessage',
  'hint',
  'validator',
  'validateOn',
  'gcdsChange',
  'gcdsInput',
  'gcdsFocus',
  'gcdsBlur',
  'gcdsError',
  'gcdsValid'
], [
  'gcdsChange',
  'gcdsInput',
  'gcdsFocus',
  'gcdsBlur',
  'gcdsError',
  'gcdsValid'
],
'value', 'gcdsChange') : defineStencilSSRComponent<JSX.GcdsSelect, JSX.GcdsSelect["value"]>({
  tagName: 'gcds-select',
  hydrateModule: import('@cdssnc/gcds-components/hydrate'),
  props: {
    'selectId': [String, "select-id"],
    'label': [String, "label"],
    'name': [String, "name"],
    'required': [Boolean, "required"],
    'disabled': [Boolean, "disabled"],
    'defaultValue': [String, "default-value"],
    'value': [String, "value"],
    'errorMessage': [String, "error-message"],
    'hint': [String, "hint"],
    'validateOn': [String, "validate-on"],
    'onGcdsChange': [Function],
    'onGcdsInput': [Function],
    'onGcdsFocus': [Function],
    'onGcdsBlur': [Function],
    'onGcdsError': [Function],
    'onGcdsValid': [Function]
  }
});


export const GcdsSideNav: StencilVueComponent<JSX.GcdsSideNav> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.GcdsSideNav>('gcds-side-nav', defineGcdsSideNav, [
  'label'
]) : defineStencilSSRComponent<JSX.GcdsSideNav>({
  tagName: 'gcds-side-nav',
  hydrateModule: import('@cdssnc/gcds-components/hydrate'),
  props: {
    'label': [String, "label"]
  }
});


export const GcdsSignature: StencilVueComponent<JSX.GcdsSignature> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.GcdsSignature>('gcds-signature', defineGcdsSignature, [
  'type',
  'variant',
  'hasLink'
]) : defineStencilSSRComponent<JSX.GcdsSignature>({
  tagName: 'gcds-signature',
  hydrateModule: import('@cdssnc/gcds-components/hydrate'),
  props: {
    'type': [String, "type"],
    'variant': [String, "variant"],
    'hasLink': [Boolean, "has-link"]
  }
});


export const GcdsSrOnly: StencilVueComponent<JSX.GcdsSrOnly> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.GcdsSrOnly>('gcds-sr-only', defineGcdsSrOnly, [
  'tag'
]) : defineStencilSSRComponent<JSX.GcdsSrOnly>({
  tagName: 'gcds-sr-only',
  hydrateModule: import('@cdssnc/gcds-components/hydrate'),
  props: {
    'tag': [String, "tag"]
  }
});


export const GcdsStepper: StencilVueComponent<JSX.GcdsStepper> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.GcdsStepper>('gcds-stepper', defineGcdsStepper, [
  'currentStep',
  'totalSteps',
  'tag'
]) : defineStencilSSRComponent<JSX.GcdsStepper>({
  tagName: 'gcds-stepper',
  hydrateModule: import('@cdssnc/gcds-components/hydrate'),
  props: {
    'currentStep': [Number, "current-step"],
    'totalSteps': [Number, "total-steps"],
    'tag': [String, "tag"]
  }
});


export const GcdsText: StencilVueComponent<JSX.GcdsText> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.GcdsText>('gcds-text', defineGcdsText, [
  'textRole',
  'characterLimit',
  'display',
  'marginTop',
  'marginBottom',
  'size'
]) : defineStencilSSRComponent<JSX.GcdsText>({
  tagName: 'gcds-text',
  hydrateModule: import('@cdssnc/gcds-components/hydrate'),
  props: {
    'textRole': [String, "text-role"],
    'characterLimit': [Boolean, "character-limit"],
    'display': [String, "display"],
    'marginTop': [String, "margin-top"],
    'marginBottom': [String, "margin-bottom"],
    'size': [String, "size"]
  }
});


export const GcdsTextarea: StencilVueComponent<JSX.GcdsTextarea, JSX.GcdsTextarea["value"]> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.GcdsTextarea, JSX.GcdsTextarea["value"]>('gcds-textarea', defineGcdsTextarea, [
  'characterCount',
  'cols',
  'disabled',
  'errorMessage',
  'hideLabel',
  'hint',
  'label',
  'name',
  'required',
  'rows',
  'textareaId',
  'value',
  'validator',
  'validateOn',
  'gcdsFocus',
  'gcdsBlur',
  'gcdsChange',
  'gcdsInput',
  'gcdsError',
  'gcdsValid'
], [
  'gcdsFocus',
  'gcdsBlur',
  'gcdsChange',
  'gcdsInput',
  'gcdsError',
  'gcdsValid'
],
'value', 'gcdsChange') : defineStencilSSRComponent<JSX.GcdsTextarea, JSX.GcdsTextarea["value"]>({
  tagName: 'gcds-textarea',
  hydrateModule: import('@cdssnc/gcds-components/hydrate'),
  props: {
    'characterCount': [Number, "character-count"],
    'cols': [Number, "cols"],
    'disabled': [Boolean, "disabled"],
    'errorMessage': [String, "error-message"],
    'hideLabel': [Boolean, "hide-label"],
    'hint': [String, "hint"],
    'label': [String, "label"],
    'name': [String, "name"],
    'required': [Boolean, "required"],
    'rows': [Number, "rows"],
    'textareaId': [String, "textarea-id"],
    'value': [String, "value"],
    'validateOn': [String, "validate-on"],
    'onGcdsFocus': [Function],
    'onGcdsBlur': [Function],
    'onGcdsChange': [Function],
    'onGcdsInput': [Function],
    'onGcdsError': [Function],
    'onGcdsValid': [Function]
  }
});


export const GcdsTopNav: StencilVueComponent<JSX.GcdsTopNav> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.GcdsTopNav>('gcds-top-nav', defineGcdsTopNav, [
  'label',
  'alignment'
]) : defineStencilSSRComponent<JSX.GcdsTopNav>({
  tagName: 'gcds-top-nav',
  hydrateModule: import('@cdssnc/gcds-components/hydrate'),
  props: {
    'label': [String, "label"],
    'alignment': [String, "alignment"]
  }
});


export const GcdsTopicMenu: StencilVueComponent<JSX.GcdsTopicMenu> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.GcdsTopicMenu>('gcds-topic-menu', defineGcdsTopicMenu, [
  'home'
]) : defineStencilSSRComponent<JSX.GcdsTopicMenu>({
  tagName: 'gcds-topic-menu',
  hydrateModule: import('@cdssnc/gcds-components/hydrate'),
  props: {
    'home': [Boolean, "home"]
  }
});


export const GcdsVerifyBanner: StencilVueComponent<JSX.GcdsVerifyBanner> = /*@__PURE__*/ globalThis.window ? defineContainer<JSX.GcdsVerifyBanner>('gcds-verify-banner', defineGcdsVerifyBanner, [
  'container',
  'isFixed'
]) : defineStencilSSRComponent<JSX.GcdsVerifyBanner>({
  tagName: 'gcds-verify-banner',
  hydrateModule: import('@cdssnc/gcds-components/hydrate'),
  props: {
    'container': [String, "container"],
    'isFixed': [Boolean, "is-fixed"]
  }
});

