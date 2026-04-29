/**
 * Centralized validation error messages.
 *
 * Single source of truth for all validation error messages used 
 * across components 
 *
 * Messages are grouped by language (`en`, `fr`) at the top level. For
 * keys that expose multiple message variants (e.g. `typeMismatch`,
 * `dateInput`), the value is a nested object keyed by variant.
 *
 * To add or update a validation message, edit it here and reference it
 * from the validators / utilities rather than hard-coding strings.
 */
export const validationErrors = {
  en: {
    valueMissing: 'Enter information to continue.',
    typeMismatch: {
      email:
        'Enter a valid email address to continue. Use a standard format. Example: name@address.ca.',
      url: 'Enter a URL in the specified format to continue.',
    },
    patternMismatch: 'Use the specified format to continue.',
    tooLong:
      "Enter {max} characters or less to continue. You've entered {current} characters.",
    tooShort:
      "Enter at least {min} characters to continue. You've entered {current} characters.",
    rangeUnderflow: "Enter a number that's {min} or more to continue.",
    rangeOverflow: "Enter a number that's {max} or less to continue.",
    stepMismatch:
      'Enter a number from the specified options to continue. The closest numbers to what you entered are {lower} and {upper}. ',
    badInput: 'Enter a number to continue.',

    required: 'Enter information to continue.',
    requiredEmail:
      'Enter a valid email address to continue. Use a standard format. Example: name@address.ca.',
    requiredFile: 'You must upload a file to continue.',
    requiredSelect: 'Choose an option to continue.',
    requiredRadio: 'Choose an option to continue.',
    requiredCheckboxGroup: 'Choose an option to continue.',
    requiredCheckboxSingle: 'You must check the box to continue.',

    dateInput: {
      all: 'Enter the date.',
      missingmonthinput: 'Enter the month.',
      missingmonth: 'Select the month.',
      missingyear: 'Enter the year.',
      missingday: 'Enter the day.',
      missingmonthday: 'Select the month and enter the day.',
      missingmonthyear: 'Select the month and enter the year.',
      missingmonthinputday: 'Enter the month and day.',
      missingmonthinputyear: 'Enter the year and month.',
      missingdayyear: 'Enter the day and year.',
      invalidyearlength: 'Year must be 4 digits.',
      invalidyear: 'Enter a valid year.',
      invalidmonth: 'Enter a valid month.',
      invalidday: 'Enter a valid day.',
    },
  },
  fr: {
    valueMissing: 'Saisissez des renseignements pour continuer.',
    typeMismatch: {
      email:
        'Saisissez votre adresse courriel pour continuer. Utilisez un format standard. Exemple: nom@adresse.ca.',
      url: 'Entrez une adresse Web en utilisant le format spécifié pour continuer.',
    },
    patternMismatch: 'Utilisez le format spécifié pour continuer.',
    tooLong:
      'Entrez {max} caractères ou moins pour continuer. Vous en avez présentement {current}.',
    tooShort:
      'Entrez au moins {min} caractères pour continuer. Vous en avez présentement {current}.',
    rangeUnderflow:
      'Entrez un nombre plus grand ou égal à {min} pour continuer.',
    rangeOverflow:
      'Entrez un nombre plus petit ou égal à {max} pour continuer.',
    stepMismatch:
      'Entrez un nombre parmi les options spécifiées pour continuer. Les nombres les plus proches de votre entrée sont {lower} et {upper}.',
    badInput: 'Entrez un nombre pour continuer.',

    required: 'Saisissez des renseignements pour continuer.',
    requiredEmail:
      'Saisissez votre adresse courriel pour continuer. Utilisez un format standard. Exemple: nom@adresse.ca.',
    requiredFile: 'Vous devez téléverser un fichier pour continuer.',
    requiredSelect: 'Choisissez une option pour continuer.',
    requiredRadio: 'Choisissez une option pour continuer.',
    requiredCheckboxGroup: 'Choisissez une option pour continuer.',
    requiredCheckboxSingle: 'Vous devez cocher la case pour continuer.',

    dateInput: {
      all: 'Saisissez la date.',
      missingmonthinput: 'Saisissez le mois.',
      missingmonth: 'Sélectionnez un mois.',
      missingyear: "Saisissez l'année.",
      missingday: 'Saisissez le jour.',
      missingmonthday: 'Saisissez le jour et sélectionnez un mois.',
      missingmonthyear: "Sélectionnez un mois et saisissez l'année.",
      missingmonthinputday: 'Saisissez le mois et le jour.',
      missingmonthinputyear: "Saisissez l'année et le mois.",
      missingdayyear: "Saisissez le jour et l'année.",
      invalidyearlength: "L'année doit inclure 4 chiffres.",
      invalidyear: 'Entrez une année valide.',
      invalidmonth: 'Saisissez un mois valide.',
      invalidday: 'Saisissez un jour valide.',
    },
  },
} as const;

/**
 * Lookup mapping each form component to the validation error message keys
 * (top-level keys of `validationErrors.en` / `validationErrors.fr`) it can
 * surface. Useful for documentation, testing, and ensuring this file stays
 * in sync with the components that depend on it.
 */
export const componentValidationErrors = {
  'gcds-input': [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'tooLong',
    'tooShort',
    'rangeUnderflow',
    'rangeOverflow',
    'stepMismatch',
    'badInput',
    'required',
    'requiredEmail',
  ],
  'gcds-textarea': [
    'valueMissing',
    'patternMismatch',
    'tooLong',
    'tooShort',
    'required',
  ],
  'gcds-select': ['valueMissing', 'requiredSelect'],
  'gcds-file-uploader': ['valueMissing', 'requiredFile'],
  'gcds-radios': ['requiredRadio'],
  'gcds-checkboxes': ['requiredCheckboxGroup', 'requiredCheckboxSingle'],
  'gcds-date-input': ['rangeUnderflow', 'rangeOverflow', 'dateInput'],
} as const;
