export type CheckboxObject = {
  id: string;
  label: string;
  value?: string;
  hint?: string;
  checked?: boolean;
  required?: boolean;
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
    (obj.checked === undefined || typeof obj.checked === 'boolean') &&
    (obj.required === undefined || typeof obj.required === 'boolean');

  // Ensure no extra properties exist
  const hasOnlyValidKeys = objKeys.every(key => validKeys.includes(key));

  return hasValidTypes && hasOnlyValidKeys;
}
