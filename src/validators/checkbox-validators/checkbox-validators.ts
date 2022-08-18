import { Validator } from "../validator";

export const requiredCheck: Validator<string> = {
    validate: (value: string) => {
        return value != null && value == "true" ? true : false;
    },
    errorMessage: { "en": "Error required",  "fr": "Error required french" }
}