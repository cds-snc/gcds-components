import { Validator } from "../validator";

let emailPattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const requiredField: Validator<string> = {
  validate: (value: string) => {
    return value != null && value.trim() != "" ? true : false;
  },
  errorMessage: { "en": "Enter information to continue.",  "fr": "Veuillez compléter les champs obligatoires afin de continuer." }
}

export const requiredEmailField: Validator<string> = {
  validate: (value: string) => {
    return (value != null && value.trim() != "" && value.toLowerCase().match(emailPattern)) ? true : false;
  },
  errorMessage: { "en": "Enter a valid email address to continue. Use a standard format. Example: name@address.ca.",  "fr": "Veuillez compléter les champs obligatoires afin de continuer." }
}

export const requiredFileInput: Validator<number> = {
  validate: (value: number) => {
    return value > 0 ? true : false;
  },
  errorMessage: { "en": "Please complete the required field to continue.",  "fr": "Veuillez compléter les champs obligatoires afin de continuer." }
}