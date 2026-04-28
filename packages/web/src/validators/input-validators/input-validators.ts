import { ValidationContext, Validator } from '../validator';
import { isValidDate, isValidDay } from '../../utils/utils';
import { validationErrors } from '../../messages/validation-errors';

const emailPattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const requiredField: Validator<string> = {
  validate: (value: string) => {
    return {
      valid: value != null && value.trim() != '',
      reason: {
        en: validationErrors.required.en,
        fr: validationErrors.required.fr,
      },
    };
  },
};

export const requiredEmailField: Validator<string> = {
  validate: (value: string) => {
    return {
      valid:
        value != null &&
        value.trim() != '' &&
        (value.toLowerCase().match(emailPattern) ? true : false),
      reason: {
        en: validationErrors.requiredEmail.en,
        fr: validationErrors.requiredEmail.fr,
      },
    };
  },
};

export const requiredFileInput: Validator<FileList> = {
  validate: (value: FileList) => {
    return {
      valid: value.length > 0,
      reason: {
        en: validationErrors.requiredFile.en,
        fr: validationErrors.requiredFile.fr,
      },
    };
  },
};

export const requiredSelectField: Validator<string> = {
  validate: (value: string) => {
    return {
      valid: value != null && value.trim() != '',
      reason: {
        en: validationErrors.requiredSelect.en,
        fr: validationErrors.requiredSelect.fr,
      },
    };
  },
};

/*
 * Date input validators
 *
 * Re-exported from the centralized validation messages file to preserve
 * the existing public API. Prefer importing from
 * `../../messages/validation-errors` (`validationErrors.dateInput`) in new code.
 */
export const dateInputErrorMessage = validationErrors.dateInput;

export const requiredDateInput: Validator<string> = {
  validate: (date: string, context?: ValidationContext) => {
    if (isValidDate(date)) {
      return {
        valid: true,
        reason: {
          en: '',
          fr: '',
        },
      };
    }

    const splitDate = date.split('-');
    const dateObject = {
      day: splitDate[2],
      month: splitDate[1],
      year: splitDate[0],
    };

    // Backwards compatibility if params.format is not supplied
    const inferredFormat = splitDate.length === 3 ? 'full' : 'compact';

    const format =
      (context?.params?.format as 'full' | 'compact' | 'iso' | null) ??
      inferredFormat;

    return getDateInputError(dateObject, format);
  },
};

export const getDateInputError = (
  dateValues: {
    day: string | undefined;
    month: string | undefined;
    year: string | undefined;
  },
  format: 'full' | 'compact' | 'iso',
) => {
  const { day, month, year } = dateValues;

  const errorResponse = {
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
    errorResponse.reason.en = validationErrors.dateInput.en.all;
    errorResponse.reason.fr = validationErrors.dateInput.fr.all;

    // No day set
  } else if (!day && month && year && (format === 'full' || format === 'iso')) {
    errorResponse.errors.day = true;
    errorResponse.reason.en = validationErrors.dateInput.en.missingday;
    errorResponse.reason.fr = validationErrors.dateInput.fr.missingday;

    // No month set
  } else if (
    (day && !month && year) ||
    (!day && !month && year && format === 'compact')
  ) {
    errorResponse.errors.month = true;
    if (format === 'iso') {
      errorResponse.reason.en = validationErrors.dateInput.en.missingmonthinput;
      errorResponse.reason.fr = validationErrors.dateInput.fr.missingmonthinput;
    } else {
      errorResponse.reason.en = validationErrors.dateInput.en.missingmonth;
      errorResponse.reason.fr = validationErrors.dateInput.fr.missingmonth;
    }

    // No year set
  } else if (
    (day && month && !year) ||
    (!day && month && !year && format === 'compact')
  ) {
    errorResponse.errors.year = true;
    errorResponse.reason.en = validationErrors.dateInput.en.missingyear;
    errorResponse.reason.fr = validationErrors.dateInput.fr.missingyear;

    // No day and month set
  } else if (!day && !month && year) {
    errorResponse.errors.day = true;
    errorResponse.errors.month = true;
    if (format === 'iso') {
      errorResponse.reason.en =
        validationErrors.dateInput.en.missingmonthinputday;
      errorResponse.reason.fr =
        validationErrors.dateInput.fr.missingmonthinputday;
    } else {
      errorResponse.reason.en = validationErrors.dateInput.en.missingmonthday;
      errorResponse.reason.fr = validationErrors.dateInput.fr.missingmonthday;
    }

    // No day and year set
  } else if (!day && month && !year) {
    errorResponse.errors.day = true;
    errorResponse.errors.year = true;
    errorResponse.reason.en = validationErrors.dateInput.en.missingdayyear;
    errorResponse.reason.fr = validationErrors.dateInput.fr.missingdayyear;

    // No month and year set
  } else if (day && !month && !year) {
    errorResponse.errors.year = true;
    errorResponse.errors.month = true;

    if (format === 'iso') {
      errorResponse.reason.en =
        validationErrors.dateInput.en.missingmonthinputyear;
      errorResponse.reason.fr =
        validationErrors.dateInput.fr.missingmonthinputyear;
    } else {
      errorResponse.reason.en = validationErrors.dateInput.en.missingmonthyear;
      errorResponse.reason.fr = validationErrors.dateInput.fr.missingmonthyear;
    }

    // Year is formatted incorrectly
  } else if (year.toString().length != 4) {
    errorResponse.errors.year = true;
    errorResponse.reason.en = validationErrors.dateInput.en.invalidyearlength;
    errorResponse.reason.fr = validationErrors.dateInput.fr.invalidyearlength;

    // Year format
  } else if (Number(year) < 0 || Number(year) > 9999) {
    errorResponse.errors.year = true;
    errorResponse.reason.en = validationErrors.dateInput.en.invalidyear;
    errorResponse.reason.fr = validationErrors.dateInput.fr.invalidyear;

    // Invalid month
  } else if (Number(month) < 1 || Number(month) > 12) {
    errorResponse.errors.month = true;
    errorResponse.reason.en = validationErrors.dateInput.en.invalidmonth;
    errorResponse.reason.fr = validationErrors.dateInput.fr.invalidmonth;

    // Invalid day
  } else if (!isValidDay(`${year}-${month}-${day}`)) {
    errorResponse.errors.day = true;
    errorResponse.reason.en = validationErrors.dateInput.en.invalidday;
    errorResponse.reason.fr = validationErrors.dateInput.fr.invalidday;
  }

  return errorResponse;
};

export const requiredRadio: Validator<string> = {
  validate: (value: string) => {
    return {
      valid: value != null && value != '',
      reason: {
        en: validationErrors.requiredRadio.en,
        fr: validationErrors.requiredRadio.fr,
      },
    };
  },
};

export const requiredCheckboxGroup: Validator<Array<string>> = {
  validate: (value: Array<string>) => {
    return {
      valid: value.length > 0,
      reason: {
        en: validationErrors.requiredCheckboxGroup.en,
        fr: validationErrors.requiredCheckboxGroup.fr,
      },
    };
  },
};

export const requiredCheckboxSingle: Validator<Array<string>> = {
  validate: (value: Array<string>) => {
    return {
      valid: value.length > 0,
      reason: {
        en: validationErrors.requiredCheckboxSingle.en,
        fr: validationErrors.requiredCheckboxSingle.fr,
      },
    };
  },
};
