import { Validator } from '../validator';
import { isValidDate } from '../../utils/utils';

const emailPattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const requiredField: Validator<string> = {
  validate: (value: string) => value != null && value.trim() != '',
  errorMessage: {
    en: 'Enter information to continue.',
    fr: 'Saisissez des renseignements pour continuer.',
  },
};

export const requiredEmailField: Validator<string> = {
  validate: (value: string) =>
    value != null &&
    value.trim() != '' &&
    (value.toLowerCase().match(emailPattern) ? true : false),
  errorMessage: {
    en: 'Enter a valid email address to continue. Use a standard format. Example: name@address.ca.',
    fr: 'Saisissez votre adresse courriel pour continuer. Utilisez un format standard. Exemple: nom@adresse.ca.',
  },
};

export const requiredFileInput: Validator<FileList> = {
  validate: (value: FileList) => value.length > 0,
  errorMessage: {
    en: 'You must upload a file to continue.',
    fr: 'Vous devez téléverser un fichier pour continuer.',
  },
};

export const requiredSelectField: Validator<string> = {
  validate: (value: string) => value != null && value.trim() != '',
  errorMessage: {
    en: 'Choose an option to continue.',
    fr: 'Choisissez une option pour continuer.',
  },
};

/*
 * Date input validators
 */
export const dateInputErrorMessage = {
  en: {
    all: 'Enter the date.',
    missingmonth: 'Select the month.',
    missingyear: 'Enter the year.',
    missingday: 'Enter the day.',
    missingmonthday: 'Select the month and enter the day.',
    missingmonthyear: 'Select the month and enter the year.',
    missingdayyear: 'Enter the day and year.',
    invalidyearlength: 'Year must be 4 digits.',
    invalidyear: 'Enter a valid year.',
    invalidday: 'Enter a valid day.',
  },
  fr: {
    all: 'Saisissez la date.',
    missingmonth: 'Sélectionnez un mois.',
    missingyear: "Saisissez l'année.",
    missingday: 'Saisissez le jour.',
    missingmonthday: 'Saisissez le jour et sélectionnez un mois.',
    missingmonthyear: "Sélectionnez un mois et saisissez l'année.",
    missingdayyear: "Saisissez le jour et l'année.",
    invalidyearlength: "L'année doit inclure 4 chiffres.",
    invalidyear: 'Entrez une année valide.',
    invalidday: 'Saisissez un jour valide.',
  },
};

export const requiredDateInput: Validator<string> = {
  validate: (date: string) => {
    if (isValidDate(date)) {
      return { valid: true };
    }

    let splitDate = date.split('-');
    let dateObject = {
      day: splitDate[2],
      month: splitDate[1],
      year: splitDate[0],
    };

    let format = splitDate.length === 3 ? 'full' : 'compact';

    const error = getDateInputError(dateObject, format);

    return error;
  },
  errorMessage: dateInputErrorMessage,
};

const getDateInputError = (dateValues, format) => {
  const { day, month, year } = dateValues;

  let errorResponse = {
    valid: false,
    errors: {
      day: false,
      month: false,
      year: false,
    },
    reason: {
      en: '',
      fr: '',
    },
  };

  // No values set
  if (!day && !month && !year) {
    errorResponse.errors.day = true;
    errorResponse.errors.month = true;
    errorResponse.errors.year = true;
    errorResponse.reason.en = dateInputErrorMessage.en.all;
    errorResponse.reason.fr = dateInputErrorMessage.fr.all;

    // No day set
  } else if (!day && month && year) {
    errorResponse.errors.day = true;
    errorResponse.reason.en = dateInputErrorMessage.en.missingday;
    errorResponse.reason.fr = dateInputErrorMessage.fr.missingday;

    // No month set
  } else if (
    (day && !month && year) ||
    (!day && !month && year && format === 'compact')
  ) {
    errorResponse.errors.month = true;
    errorResponse.reason.en = dateInputErrorMessage.en.missingmonth;
    errorResponse.reason.fr = dateInputErrorMessage.fr.missingmonth;

    // No year set
  } else if (
    (day && month && !year) ||
    (!day && month && !year && format === 'compact')
  ) {
    errorResponse.errors.year = true;
    errorResponse.reason.en = dateInputErrorMessage.en.missingyear;
    errorResponse.reason.fr = dateInputErrorMessage.fr.missingyear;

    // No day and month set
  } else if (!day && !month && year) {
    errorResponse.errors.day = true;
    errorResponse.errors.month = true;
    errorResponse.reason.en = dateInputErrorMessage.en.missingmonthday;
    errorResponse.reason.fr = dateInputErrorMessage.fr.missingmonthday;

    // No day and year set
  } else if (!day && month && !year) {
    errorResponse.errors.day = true;
    errorResponse.errors.year = true;
    errorResponse.reason.en = dateInputErrorMessage.en.missingdayyear;
    errorResponse.reason.fr = dateInputErrorMessage.fr.missingdayyear;

    // No month and year set
  } else if (day && !month && !year) {
    errorResponse.errors.year = true;
    errorResponse.errors.month = true;
    errorResponse.reason.en = dateInputErrorMessage.en.missingmonthyear;
    errorResponse.reason.fr = dateInputErrorMessage.fr.missingmonthyear;

    // Year is formatted incorrectly
  } else if (year.length != 4) {
    errorResponse.errors.year = true;
    errorResponse.reason.en = dateInputErrorMessage.en.invalidyearlength;
    errorResponse.reason.fr = dateInputErrorMessage.fr.invalidyearlength;

    // Year format
  } else if (year < 0 || year > 9999) {
    errorResponse.errors.year = true;
    errorResponse.reason.en = dateInputErrorMessage.en.invalidyear;
    errorResponse.reason.fr = dateInputErrorMessage.fr.invalidyear;

    // Invalid day
  } else {
    errorResponse.errors.day = true;
    errorResponse.reason.en = dateInputErrorMessage.en.invalidday;
    errorResponse.reason.fr = dateInputErrorMessage.fr.invalidday;
  }

  return errorResponse;
};
