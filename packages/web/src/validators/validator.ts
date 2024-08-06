export interface Validator<A> {
  validate: (x: A) => any;
  errorMessage?: object;
}

export interface ValidatorEntry {
  name: string;
  options?: any;
}

export interface GcdsErrorInterface {
  id: string;
  message: string;
}

export const defaultValidator: Validator<any> = {
  validate: (_x: any) => true,
};

export function combineValidators<A>(
  v1: Validator<A>,
  v2: Validator<A>,
): Validator<A> {
  let combined: Validator<A>;

  combined = {
    validate: (x: A) => {
      const res1: boolean = v1.validate(x);
      const res2: boolean = v2.validate(x);

      if (!res1) {
        combined.errorMessage = v1.errorMessage;
      } else if (!res2) {
        combined.errorMessage = v2.errorMessage;
      }

      return res1 && res2;
    },
  };
  return combined;
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
