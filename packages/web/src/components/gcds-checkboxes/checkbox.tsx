import { h } from '@stencil/core';

export type CheckboxObject = {
  id: string;
  label: string;
  value?: string;
  hint?: string;
  checked?: boolean | string;
};

/* Check if passed object matches required CheckboxObject type
 * @param obj - object to check
 */
export function isCheckboxObject(obj: CheckboxObject) {
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

/* Loop through the optionsArr and check if each option/checkbox is formatted correctly
 * @param optionsArr - array of objects to be checked
 */
export function validateOptionsArray(optionsArr) {
  let invalidOptionsArr = false;

  if (optionsArr && optionsArr.length >= 1) {
    invalidOptionsArr = optionsArr.some(
      checkbox => !isCheckboxObject(checkbox),
    );
  } else if (optionsArr && optionsArr.length == 0) {
    invalidOptionsArr = true;
  }

  return invalidOptionsArr;
}

/* Loop through manually assigned value to check if it is available in rendered checkboxes
 * @param optionsArr - array of checkbox objects to compare to
 * @param element - the checkboxes element
 */
export function cleanUpValues(optionsArr, element) {
  const availableValues = [];
  optionsArr.forEach(checkbox => {
    availableValues.push(checkbox.value ? checkbox.value : 'on');

    if (
      (checkbox.checked == 'true' || checkbox.checked === true) &&
      !(element.value as Array<string>).includes(checkbox.value || 'on')
    ) {
      element.value = [
        ...(element.value as Array<string>),
        checkbox.value ? checkbox.value : 'on',
      ];
    }
  });

  // Remove any values that are not available in the inputs
  (element.value as Array<string>)
    .filter(value => !availableValues.includes(value))
    .forEach(value => {
      element.value = (element.value as Array<string>).filter(
        item => item !== value,
      );
    });
}

export const renderCheckbox = (checkbox, element, emitEvent, handleInput) => {
  const {
    name,
    disabled,
    hasError,
    errorMessage,
    gcdsFocus,
    gcdsInput,
    gcdsChange,
    gcdsClick,
    gcdsBlur,
    required,
    hint,
    isGroup,
    lang,
    value,
    onBlurValidate,
  } = element;

  const attrsInput = {
    name: name,
    id: checkbox.id,
    disabled: disabled,
    required: checkbox.required,
    value: checkbox.value,
  };

  const labelAttrs = {
    'label': checkbox.label,
    'label-for': checkbox.id,
    lang,
  };

  if (!isGroup && required) {
    labelAttrs['required'] = required;
    attrsInput['required'] = required;
  }

  if (checkbox.hint) {
    const hintID = `hint-${checkbox.id}`;
    attrsInput['aria-describedby'] = `${hintID}${
      attrsInput['aria-describedby'] ? `${attrsInput['aria-describedby']}` : ''
    }`;
  }

  if (value.includes(checkbox.value)) {
    attrsInput['checked'] = true;
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
        type="checkbox"
        {...attrsInput}
        onBlur={isGroup ? () => gcdsBlur.emit() : onBlurValidate}
        onFocus={() => gcdsFocus.emit()}
        onChange={() => gcdsChange.emit()}
        onInput={e => handleInput(e, gcdsInput)}
        onClick={e =>
          !disabled ? emitEvent(e, gcdsClick) : e.stopImmediatePropagation()
        }
      />

      <gcds-label
        {...labelAttrs}
        onClick={e => e.stopPropagation()}
      ></gcds-label>

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
