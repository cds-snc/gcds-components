import { Validator } from "../validator";

export const requiredCheck: Validator<boolean> = {
    validate: (value: boolean) => {
        return value;
    },
    errorMessage: { "en": "You must check the box to continue.",  "fr": "Veuillez compléter les champs obligatoires afin de continuer." }
}