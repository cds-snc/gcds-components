import { Validator } from "../validator";

export const requiredInput: Validator<string> = {
    validate: (value: string) => {
        return value != null && value.trim() != "" ? true : false;
    },
    errorMessage: { "en": "Error required",  "fr": "Error required french" }
}