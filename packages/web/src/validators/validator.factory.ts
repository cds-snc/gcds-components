import {
  Validator,
  ValidatorEntry,
  defaultValidator,
  combineValidators,
} from './validator';
import {
  requiredField,
  requiredEmailField,
  requiredFileInput,
  requiredSelectField,
  requiredDateInput,
  requiredRadio,
  requiredCheckboxGroup,
  requiredCheckboxSingle,
} from './input-validators/input-validators';

export enum ValidatorsName {
  requiredField = 'requiredField',
  requiredEmailField = 'requiredEmailField',
  requiredCheck = 'requiredCheck',
  requiredFileInput = 'requiredFileInput',
  requiredSelectField = 'requiredSelectField',
  requiredDateInput = 'requiredDateInput',
  requiredRadio = 'requiredRadio',
  requiredCheckboxGroup = 'requiredCheckboxGroup',
  requiredCheckboxSingle = 'requiredCheckboxSingle',
}

export function getValidator<A>(
  list: Array<string | ValidatorEntry | Validator<A>>,
): Validator<A> {
  return (list || [])
    .map(v => {
      if (typeof v === 'string') {
        return validatorFactory(v, null);
      } else if (v && (v as any).name) {
        v = v as ValidatorEntry;
        return validatorFactory(v.name, v.options);
      } else {
        return v as Validator<A>;
      }
    })
    .reduce(combineValidators, defaultValidator);
}

export function validatorFactory(name: string, options: any): Validator<any> {
  options ? options : {};
  switch (name) {
    case ValidatorsName.requiredField:
      return requiredField;
    case ValidatorsName.requiredEmailField:
      return requiredEmailField;
    case ValidatorsName.requiredSelectField:
      return requiredSelectField;
    case ValidatorsName.requiredDateInput:
      return requiredDateInput;
    case ValidatorsName.requiredFileInput:
      return requiredFileInput;
    case ValidatorsName.requiredRadio:
      return requiredRadio;
    case ValidatorsName.requiredCheckboxGroup:
      return requiredCheckboxGroup;
    case ValidatorsName.requiredCheckboxSingle:
      return requiredCheckboxSingle;
    default:
      return defaultValidator;
  }
}
