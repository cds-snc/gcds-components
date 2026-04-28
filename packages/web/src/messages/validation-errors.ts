/**
 * Centralized validation error messages.
 *
 * Single source of truth for all validation error messages used by the
 * input validators. Each entry exposes both English (`en`) and French (`fr`)
 * copy so it can be consumed directly by the validator return shape.
 *
 * To add or update a validation message, edit it here and reference it from
 * the validators rather than hard-coding strings.
 */
export const validationErrors = {
  required: {
    en: 'Enter information to continue.',
    fr: 'Saisissez des renseignements pour continuer.',
  },
  requiredEmail: {
    en: 'Enter a valid email address to continue. Use a standard format. Example: name@address.ca.',
    fr: 'Saisissez votre adresse courriel pour continuer. Utilisez un format standard. Exemple: nom@adresse.ca.',
  },
  requiredFile: {
    en: 'You must upload a file to continue.',
    fr: 'Vous devez téléverser un fichier pour continuer.',
  },
  requiredSelect: {
    en: 'Choose an option to continue.',
    fr: 'Choisissez une option pour continuer.',
  },
  requiredRadio: {
    en: 'Choose an option to continue.',
    fr: 'Choisissez une option pour continuer.',
  },
  requiredCheckboxGroup: {
    en: 'Choose an option to continue.',
    fr: 'Choisissez une option pour continuer.',
  },
  requiredCheckboxSingle: {
    en: 'You must check the box to continue.',
    fr: 'Vous devez cocher la case pour continuer.',
  },
  dateInput: {
    en: {
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
    fr: {
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
