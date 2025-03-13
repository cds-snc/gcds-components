import { h } from '@stencil/core';

export type CheckboxObject = {
  id: string;
  label: string;
  value?: string;
  hint?: string;
  checked?: boolean;
};

export function isCheckboxObject(obj: any): obj is CheckboxObject {
  if (typeof obj !== 'object' || obj === null) return false;

  const validKeys = ['id', 'label', 'value', 'hint', 'checked', 'required'];
  const objKeys = Object.keys(obj);

  // Check if all properties match the expected type
  const hasValidTypes =
    typeof obj.id === 'string' &&
    typeof obj.label === 'string' &&
    (obj.value === undefined || typeof obj.value === 'string') &&
    (obj.hint === undefined || typeof obj.hint === 'string') &&
    (obj.checked === undefined || typeof obj.checked === 'boolean');

  // Ensure no extra properties exist
  const hasOnlyValidKeys = objKeys.every(key => validKeys.includes(key));

  return hasValidTypes && hasOnlyValidKeys;
}

export const renderCheckbox = (checkbox, element, emitEvent) => {
  const attrsInput = {
    name: element.name,
    disabled: element.disabled,
    required: checkbox.required,
    value: checkbox.value,
    checked: checkbox.value === element.value && true,
  };

  if (checkbox.hint) {
    const hintID = checkbox.hint ? `hint-${checkbox.id} ` : '';
    attrsInput['aria-describedby'] = `${hintID}${
      attrsInput['aria-describedby'] ? `${attrsInput['aria-describedby']}` : ''
    }`;
  }

  if (element.hasError) {
    attrsInput['aria-invalid'] = 'true';
    attrsInput['aria-description'] = element.errorMessage;
  }

  return (
    <div
      class={`gcds-checkbox ${element.disabled ? 'gcds-checkbox--disabled' : ''} ${
        element.hasError ? 'gcds-checkbox--error' : ''
      }`}
    >
      <input
        id={checkbox.id}
        type="checkbox"
        {...attrsInput}
        onBlur={() => element.onBlur()}
        onFocus={() => element.gcdsFocus.emit()}
        onChange={e => element.handleInput(e, element.gcdsChange)}
        onInput={e => element.handleInput(e, element.gcdsInput)}
        onClick={e => emitEvent(e, element.gcdsClick)}
      />

      <gcds-label
        label={checkbox.label}
        label-for={checkbox.id}
        lang={element.lang}
      ></gcds-label>

      {checkbox.hint ? (
        <gcds-hint hint-id={checkbox.id}>
          {!element.isGroup && element.hint ? element.hint : checkbox.hint}
        </gcds-hint>
      ) : null}

      {!element.isGroup && element.errorMessage ? (
        <gcds-error-message messageId={checkbox.id}>
          {element.errorMessage}
        </gcds-error-message>
      ) : null}
    </div>
  );
};
