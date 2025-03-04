import { FunctionalComponent, EventEmitter, h } from '@stencil/core';

interface RadioProps {
  disabled: boolean;
  radio: RadioObject;
  hasError: boolean;
  lang: string;
  gcdsFocus: EventEmitter;
  onBlur: Function;
  onChange: Function;
  onInput: Function;
  attrsInput: Object;
}

export const Radio: FunctionalComponent<RadioProps> = ({
  radio,
  disabled,
  hasError,
  lang,
  gcdsFocus,
  onBlur,
  onChange,
  onInput,
  attrsInput,
}) => (
  <div
    class={`gcds-radio ${
      disabled ? 'gcds-radio--disabled' : ''
    } ${hasError ? 'gcds-radio--error' : ''}`}
  >
    <input
      id={radio.id}
      type="radio"
      {...attrsInput}
      onChange={e => onChange(e)}
      onInput={e => onInput(e)}
      onBlur={() => onBlur()}
      onFocus={() => gcdsFocus.emit()}
    />

    <gcds-label
      label={radio.label}
      label-for={radio.id}
      lang={lang}
    ></gcds-label>

    {radio.hint ? <gcds-hint hint-id={radio.id}>{radio.hint}</gcds-hint> : null}
  </div>
);

export type RadioObject = {
  id: string;
  label: string;
  value: string;
  hint?: string;
  checked?: boolean;
  required?: boolean;
};

export function isRadioObject(obj: any): obj is RadioObject {
  if (typeof obj !== 'object' || obj === null) return false;

  const validKeys = [
    'id',
    'label',
    'value',
    'hint',
    'checked',
    'required',
    'disabled',
  ];
  const objKeys = Object.keys(obj);

  // Check if all properties match the expected type
  const hasValidTypes =
    typeof obj.id === 'string' &&
    typeof obj.label === 'string' &&
    typeof obj.value === 'string' &&
    (obj.hint === undefined || typeof obj.hint === 'string') &&
    (obj.checked === undefined || typeof obj.checked === 'boolean') &&
    (obj.required === undefined || typeof obj.required === 'boolean');

  // Ensure no extra properties exist
  const hasOnlyValidKeys = objKeys.every(key => validKeys.includes(key));

  return hasValidTypes && hasOnlyValidKeys;
}
