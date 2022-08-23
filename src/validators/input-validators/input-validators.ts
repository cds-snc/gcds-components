import { Validator } from "../validator";

export const requiredInput: Validator<string> = {
    validate: (value: string) => {
        return value != null && value.trim() != "" ? true : false;
    },
    errorMessage: { "en": "Error required",  "fr": "Error required french" }
}

export const requiredFileInput: Validator<string> = {
    validate: (id: string) => {
        const el = document.querySelector<HTMLFormElement>(`#${id}`);
        return el.value.length > 0 ? true : false;
    },
    errorMessage: { "en": "Error required",  "fr": "Error required french" }
}