import { Validator, ValidatorEntry, defaultValidator, combineValidators } from './validator'
import { requiredField, requiredFileInput } from './input-validators/input-validators';
import { requiredCheck } from './checkbox-validators/checkbox-validators';
import { requiredFieldset } from './fieldset-validators/fieldset-validators';

export enum ValidatorsName {
    requiredField = "requiredField",
    requiredCheck = "requiredCheck",
    requiredFieldset = "requiredFieldset",
    requiredFileInput = "requiredFileInput",
}

export function getValidator<A>(list: Array<string | ValidatorEntry | Validator<A>>): Validator<A> {
    return(list || []).map(v => {
        if (typeof v === 'string') {
            return validatorFactory(v, null);
        } else if (v && (v as any).name) {
            v = v as ValidatorEntry;
            return validatorFactory(v.name, v.options);
        } else {
            return v as Validator<A>;
        }
    }).reduce(combineValidators, defaultValidator)
}

export function validatorFactory(name: string, options: any): Validator<any> {
    options ? options : {};
    switch (name) {
        case (ValidatorsName.requiredField):
            return requiredField;
        case (ValidatorsName.requiredCheck):
            return requiredCheck;
        case (ValidatorsName.requiredFieldset):
            return requiredFieldset;
        case (ValidatorsName.requiredFileInput):
            return requiredFileInput;
        /*
        Formatting for parameter validator
        
        case (ValidatorsName.length):
            return getLengthValidator(options.min, options.max);
        */
        default:
            return defaultValidator;
    }
}