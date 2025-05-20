export interface ValidatorOld<A> {
  validate: (x: A) => any;
  errorMessage?: object;
}

export interface ValidatorReturn {
  valid: boolean;
  reason: {
    en: string;
    fr: string;
  };
  errors?: object;
}

export interface Validator<A> {
  validate: (x: A) => ValidatorReturn;
}

export interface ValidatorEntry {
  name: string;
  options?: unknown;
}

export interface GcdsErrorInterface {
  id: string;
  message: string;
}

export const defaultValidator: Validator<any> = {
  validate: () => {
    return {
      valid: true,
      reason: {
        en: '',
        fr: '',
      },
    };
  },
};

export function combineValidators<A>(
  v1: Validator<A> | ValidatorOld<A>,
  v2: Validator<A> | ValidatorOld<A>,
): Validator<A> {
  return {
    validate: (x: A) => {
      const res1 = v1.validate(x);
      const res2 = v2.validate(x);

      if (
        (typeof res1 === 'object' && !res1.valid) ||
        (typeof res1 === 'boolean' && !res1)
      ) {
        return typeof res1 === 'object'
          ? res1
          : { valid: res1, reason: (v1 as ValidatorOld<A>).errorMessage };
      } else if (
        (typeof res2 === 'object' && !res2.valid) ||
        (typeof res2 === 'boolean' && !res2)
      ) {
        return typeof res2 === 'object'
          ? res2
          : { valid: res2, reason: (v2 as ValidatorOld<A>).errorMessage };
      } else {
        return {
          valid: true,
          reason: {
            en: '',
            fr: '',
          },
        };
      }
    },
  };
}

export function requiredValidator(element, type, subtype?) {
  if (element.required) {
    switch (type) {
      // Components all validate the "value" property
      case 'input':
        switch (subtype) {
          case 'email':
            if (element.validator) {
              element.validator.unshift('requiredEmailField');
            } else {
              element.validator = ['requiredEmailField'];
            }
            break;
          default:
            if (element.validator) {
              element.validator.unshift('requiredField');
            } else {
              element.validator = ['requiredField'];
            }
            break;
        }
        break;
      case 'select':
        if (element.validator) {
          element.validator.unshift('requiredSelectField');
        } else {
          element.validator = ['requiredSelectField'];
        }
        break;
      case 'textarea':
        if (element.validator) {
          element.validator.unshift('requiredField');
        } else {
          element.validator = ['requiredField'];
        }
        break;
      case 'file':
        if (element.validator) {
          element.validator.unshift('requiredFileInput');
        } else {
          element.validator = ['requiredFileInput'];
        }
        break;
      case 'checkbox':
        if (element.validator) {
          element.validator.unshift('requiredCheck');
        } else {
          element.validator = ['requiredCheck'];
        }
        break;
      case 'fieldset':
        if (element.validator) {
          element.validator.unshift('requiredFieldset');
        } else {
          element.validator = ['requiredFieldset'];
        }
        break;
      case 'date-input':
        if (element.validator) {
          element.validator.unshift('requiredDateInput');
        } else {
          element.validator = ['requiredDateInput'];
        }
        break;
    }
  }
}

/*
Example of parameter validator

export function getLengthValidator(min: number, max: number): Validator<string> {
    // Create errorMessage object
    let errorMessage = {};
    if (min && max) {
        errorMessage["en"] = `You must enter between ${min} and ${max} characters`;
        errorMessage["fr"] = `French You must enter between ${min} and ${max} characters`;
    } else if (min) {
        errorMessage["en"] = `You must enter at least ${min} characters`;
        errorMessage["fr"] = `French You must enter at least ${min} characters`;
    } else if (max) {
        errorMessage["en"] = `You must enter less than ${max} characters`;
        errorMessage["fr"] = `French You must enter less than ${max} characters`;
    }
    return {
        validate: (value: string) => {
            value = value || '';
            if (min && max) {
                return min <= value.length && value.length <= max;
            }
            if (min) {
                return min <= value.length;
            }
            if (max) {
                return value.length <= max;
            }
            return true;
        },
        errorMessage
    };
}
*/
