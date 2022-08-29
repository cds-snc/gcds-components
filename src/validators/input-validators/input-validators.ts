import { Validator } from "../validator";

export const requiredField: Validator<string> = {
    validate: (value: string) => {
        return value != null && value.trim() != "" ? true : false;
    },
    errorMessage: { "en": "Please complete the required field to continue.",  "fr": "Veuillez compléter les champs obligatoires afin de continuer." }
}

export const requiredFileInput: Validator<number> = {
    validate: (value: number) => {
        return value > 0 ? true : false;
    },
    errorMessage: { "en": "Please complete the required field to continue.",  "fr": "Veuillez compléter les champs obligatoires afin de continuer." }
}