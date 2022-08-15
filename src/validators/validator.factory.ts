import { requiredInput } from './input-validators/input-validators';
import { Validator, ValidatorEntry, defaultValidator, combineValidators, FruitValidator, getLengthValidator } from './validator'

export enum ValidatorsName {
    fruit = "fruit",
    length = "length",
    requiredInput = "requiredInput",
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
        case (ValidatorsName.requiredInput):
            return requiredInput;
        case (ValidatorsName.fruit):
            return FruitValidator;
        case (ValidatorsName.length):
            return getLengthValidator(options.min, options.max);
        default:
            return defaultValidator;
    }
}