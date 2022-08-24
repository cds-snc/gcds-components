import { Validator } from "../validator";

export const requiredCheck: Validator<string> = {
    validate: (value: string) => {
        return value != null && value == "true" ? true : false;
    },
    errorMessage: { "en": "Please complete the required field to continue.",  "fr": "Veuillez compléter les champs obligatoires afin de continuer." }
}