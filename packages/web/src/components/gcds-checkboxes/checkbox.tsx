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
  const {
    name,
    disabled,
    hasError,
    errorMessage,
    value,
    onBlur,
    gcdsFocus,
    gcdsInput,
    gcdsClick,
    handleInput,
    required,
    hint,
    isGroup,
    lang,
  } = element;

  const attrsInput = {
    name: name,
    disabled: disabled,
    required: checkbox.required,
    value: checkbox.value,
    checked: checkbox.checked,
  };

  const labelAttrs = {
    'label': checkbox.label,
    'label-for': checkbox.id,
    lang,
  };

  if (!isGroup && required) {
    labelAttrs['required'] = required;
  }

  if (checkbox.hint) {
    const hintID = checkbox.hint ? `hint-${checkbox.id} ` : '';
    attrsInput['aria-describedby'] = `${hintID}${
      attrsInput['aria-describedby'] ? `${attrsInput['aria-describedby']}` : ''
    }`;
  }

  if (hasError) {
    attrsInput['aria-invalid'] = 'true';
    attrsInput['aria-description'] = errorMessage;
  }

  return (
    <div
      class={`gcds-checkbox ${disabled ? 'gcds-checkbox--disabled' : ''} ${
        hasError ? 'gcds-checkbox--error' : ''
      }`}
    >
      <input
        id={checkbox.id}
        type="checkbox"
        {...attrsInput}
        onBlur={() => onBlur()}
        onFocus={() => gcdsFocus.emit()}
        onInput={e => handleInput(e, gcdsInput)}
        onClick={e => emitEvent(e, gcdsClick)}
      />

      <gcds-label {...labelAttrs}></gcds-label>

      {checkbox.hint || (!isGroup && hint) ? (
        <gcds-hint hint-id={checkbox.id}>
          {!isGroup && hint ? hint : checkbox.hint}
        </gcds-hint>
      ) : null}

      {!isGroup && errorMessage ? (
        <gcds-error-message messageId={checkbox.id}>
          {errorMessage}
        </gcds-error-message>
      ) : null}
    </div>
  );
};
