import { EventEmitter } from '@stencil/core';
import { ValidatorReturn } from '../validators';
import {
  format,
  logError,
  isValid,
  isValidDate,
  handleValidationResult,
  handleErrors,
  formatHTMLErrorMessage,
} from './utils';

import I18N from './i18n/i18n.js';
import {
  Email,
  Step,
  Url,
} from '../components/gcds-input/stories/gcds-input.stories';
import { type } from '../../../../utils/angular-output-target/dist/index';

describe('format', () => {
  it('returns Fallback Button Label', () => {
    expect(format(undefined)).toEqual('Fallback Button Label');
  });

  it('renders label with given string', () => {
    expect(format('Vanilla JS button')).toEqual(' Vanilla JS button');
  });
});

describe('logError', () => {
  it('creates error message with required attributes', () => {
    const errorSpy = jest.spyOn(console, 'error');

    logError('gcds-component', ['requiredAttr']);

    expect(errorSpy).toHaveBeenCalledWith(
      'gcds-component: Render error, please check required properties. (requiredAttr) | gcds-component: Erreur de rendu, veuillez vérifier les propriétés requises. (requiredAttr)',
    );
  });

  it('creates error message with excluded optional attributes', () => {
    const errorSpy = jest.spyOn(console, 'error');

    logError(
      'gcds-component',
      ['requiredAttr', 'optionalAttr'],
      ['optionalAttr'],
    );

    expect(errorSpy).toHaveBeenCalledWith(
      'gcds-component: Render error, please check required properties. (requiredAttr) | gcds-component: Erreur de rendu, veuillez vérifier les propriétés requises. (requiredAttr)',
    );
  });

  it('creates error message with no attributes', () => {
    const errorSpy = jest.spyOn(console, 'error');

    logError('gcds-component', [], []);

    expect(errorSpy).toHaveBeenCalledWith(
      'gcds-component: Render error, please check required properties. () | gcds-component: Erreur de rendu, veuillez vérifier les propriétés requises. ()',
    );
  });

  it('creates error message with same attributes in required and optional arrays', () => {
    const errorSpy = jest.spyOn(console, 'error');

    logError('gcds-component', ['sameAttr'], ['sameAttr']);

    expect(errorSpy).toHaveBeenCalledWith(
      'gcds-component: Render error, please check required properties. () | gcds-component: Erreur de rendu, veuillez vérifier les propriétés requises. ()',
    );
  });
});

describe('isValidDate', () => {
  it('returns true - full format', () => {
    expect(isValidDate('1991-03-03')).toEqual(true);
  });

  it('returns true - full format - forced format', () => {
    expect(isValidDate('1991-03-03', 'full')).toEqual(true);
  });

  it('returns true - full format - leap year', () => {
    expect(isValidDate('1992-02-29')).toEqual(true);
  });

  it('returns true - compact format', () => {
    expect(isValidDate('1991-03')).toEqual(true);
  });

  it('returns true - compact format - forced format', () => {
    expect(isValidDate('1991-03', 'compact')).toEqual(true);
  });

  it('returns false - full format - invalid month', () => {
    expect(isValidDate('1991-13-03')).toEqual(false);
  });

  it('returns false - full format - invalid day', () => {
    expect(isValidDate('1991-02-29')).toEqual(false);
  });

  it('returns false - compact format - invalid month', () => {
    expect(isValidDate('1991-1')).toEqual(false);
  });

  it('returns false - full format - invalid year', () => {
    expect(isValidDate('199-02-29')).toEqual(false);
  });

  it('returns false - compact format - invalid year', () => {
    expect(isValidDate('199-1')).toEqual(false);
  });

  it('returns false - full format - force compact', () => {
    expect(isValidDate('1991-03-03', 'compact')).toEqual(false);
  });

  it('returns false - compact format - force full', () => {
    expect(isValidDate('1991-03', 'full')).toEqual(false);
  });
});

describe('handleValidationResult', () => {
  it('gcds-input - invalid response', () => {
    const input = document.createElement('gcds-input');

    input.label = 'Test input';
    input.inputId = 'test';
    input.name = 'testinput';
    input.required = true;

    const validateResponse: ValidatorReturn = {
      valid: false,
      reason: {
        en: 'Enter information to continue.',
        fr: 'Saisissez des renseignements pour continuer.',
      },
    };

    const gcdsError: EventEmitter<void> = {
      emit: jest.fn(),
    };
    const errorSpy = jest.spyOn(gcdsError, 'emit');

    const gcdsValid: EventEmitter<void> = {
      emit: jest.fn(),
    };
    const validSpy = jest.spyOn(gcdsValid, 'emit');

    handleValidationResult(
      input,
      validateResponse,
      input.label,
      gcdsError,
      gcdsValid,
      'en',
    );
    expect(errorSpy).toHaveBeenCalled();
    expect(validSpy).toHaveBeenCalledTimes(0);
    expect(input.errorMessage).toEqual('Enter information to continue.');
  });
  it('gcds-input - valid response', () => {
    const input = document.createElement('gcds-input');

    input.label = 'Test input';
    input.inputId = 'test';
    input.name = 'testinput';
    input.required = true;

    const validateResponse: ValidatorReturn = {
      valid: true,
      reason: {
        en: 'Enter information to continue.',
        fr: 'Saisissez des renseignements pour continuer.',
      },
    };

    const gcdsError: EventEmitter<void> = {
      emit: jest.fn(),
    };
    const errorSpy = jest.spyOn(gcdsError, 'emit');

    const gcdsValid: EventEmitter<void> = {
      emit: jest.fn(),
    };
    const validSpy = jest.spyOn(gcdsValid, 'emit');

    handleValidationResult(
      input,
      validateResponse,
      input.label,
      gcdsError,
      gcdsValid,
      'en',
    );

    expect(errorSpy).toHaveBeenCalledTimes(0);
    expect(validSpy).toHaveBeenCalled();
    expect(input.errorMessage).toEqual('');
  });
  it('gcds-date-input - invalid response', () => {
    const input = document.createElement('gcds-date-input');

    input.legend = 'Test input';
    input.name = 'testinput';
    input.format = 'full';
    input.required = true;

    const validateResponse: ValidatorReturn = {
      valid: false,
      reason: {
        en: 'Enter information to continue.',
        fr: 'Saisissez des renseignements pour continuer.',
      },
    };

    const gcdsError: EventEmitter<void> = {
      emit: jest.fn(),
    };
    const errorSpy = jest.spyOn(gcdsError, 'emit');

    const gcdsValid: EventEmitter<void> = {
      emit: jest.fn(),
    };
    const validSpy = jest.spyOn(gcdsValid, 'emit');

    handleValidationResult(
      input,
      validateResponse,
      input.legend,
      gcdsError,
      gcdsValid,
      'en',
      { day: false, month: false, year: false },
    );
    expect(errorSpy).toHaveBeenCalled();
    expect(validSpy).toHaveBeenCalledTimes(0);
    expect(input.errorMessage).toEqual('Enter information to continue.');
  });
  it('gcds-date-input - valid response', () => {
    const input = document.createElement('gcds-date-input');

    input.legend = 'Test input';
    input.name = 'testinput';
    input.format = 'full';
    input.required = true;

    const validateResponse: ValidatorReturn = {
      valid: true,
      reason: {
        en: 'Enter information to continue.',
        fr: 'Saisissez des renseignements pour continuer.',
      },
    };

    const gcdsError: EventEmitter<void> = {
      emit: jest.fn(),
    };
    const errorSpy = jest.spyOn(gcdsError, 'emit');

    const gcdsValid: EventEmitter<void> = {
      emit: jest.fn(),
    };
    const validSpy = jest.spyOn(gcdsValid, 'emit');

    handleValidationResult(
      input,
      validateResponse,
      input.legend,
      gcdsError,
      gcdsValid,
      'en',
      { day: false, month: false, year: false },
    );
    expect(errorSpy).toHaveBeenCalledTimes(0);
    expect(validSpy).toHaveBeenCalled();
    expect(input.errorMessage).toEqual('');
  });
});
describe('hasErrors', () => {
  it('returns false', () => {
    expect(
      isValid(['property1', 'property2'], ['property1', 'property2']),
    ).toEqual(false);
  });
  it('returns true', () => {
    expect(isValid([], ['property1', 'property1'])).toEqual(true);
  });
});

describe('handleErrors', () => {
  it('valid string property', () => {
    expect(handleErrors([], 'property', 'value')).toEqual([]);
  });
  it('valid boolean property', () => {
    expect(handleErrors([], 'property', true)).toEqual([]);
  });
  it('valid object property', () => {
    expect(handleErrors([], 'property', { key: 'value' })).toEqual([]);
  });
  it('invalid property - empty', () => {
    expect(handleErrors([], 'property', '')).toEqual(['property']);
  });
  it('invalid property - null value', () => {
    expect(handleErrors([], 'property', null)).toEqual(['property']);
  });
  it('invalid property - just whitespace', () => {
    expect(handleErrors([], 'property', ' ')).toEqual(['property']);
  });
  it('valid string property - remove from errors', () => {
    expect(
      handleErrors(['property1', 'property2'], 'property1', 'value'),
    ).toEqual(['property2']);
  });

  describe('formatHTMLErrorMessage', () => {
    const Input = document.createElement('gcds-input');
    const EmailInput = Object.assign(document.createElement('gcds-input'), {
      type: 'email',
      value: 'invalid-email',
    });
    const UrlInput = Object.assign(document.createElement('gcds-input'), {
      type: 'url',
      value: 'invalid-url',
    });
    const MaxlengthInput = Object.assign(document.createElement('gcds-input'), {
      maxlength: 5,
      value: '2345678',
    });
    const MinlengthInput = Object.assign(document.createElement('gcds-input'), {
      minlength: 5,
      value: '234',
    });
    const MinInput = Object.assign(document.createElement('gcds-input'), {
      min: 5,
      type: 'number',
      value: '234',
    });
    const MaxInput = Object.assign(document.createElement('gcds-input'), {
      max: 5,
      type: 'number',
      value: '234',
    });
    const StepInput = Object.assign(document.createElement('gcds-input'), {
      step: 5,
      type: 'number',
      value: '7',
    });
    const results: Array<{
      error: string;
      element: HTMLGcdsInputElement;
      lang: string;
      res: string;
    }> = [
      {
        error: 'valueMissing',
        element: Input,
        lang: 'en',
        res: I18N['en'].valueMissing,
      },
      {
        error: 'valueMissing',
        element: Input,
        lang: 'fr',
        res: I18N['fr'].valueMissing,
      },
      {
        error: 'patternMismatch',
        element: Input,
        lang: 'en',
        res: I18N['en'].patternMismatch,
      },
      {
        error: 'patternMismatch',
        element: Input,
        lang: 'fr',
        res: I18N['fr'].patternMismatch,
      },
      {
        error: 'badInput',
        element: Input,
        lang: 'en',
        res: I18N['en'].badInput,
      },
      {
        error: 'badInput',
        element: Input,
        lang: 'fr',
        res: I18N['fr'].badInput,
      },
      {
        error: 'valueMissing',
        element: Input,
        lang: 'en',
        res: I18N['en'].valueMissing,
      },
      {
        error: 'valueMissing',
        element: Input,
        lang: 'fr',
        res: I18N['fr'].valueMissing,
      },
      {
        error: 'typeMismatch',
        element: EmailInput,
        lang: 'en',
        res: I18N['en'].typeMismatch.email,
      },
      {
        error: 'typeMismatch',
        element: EmailInput,
        lang: 'fr',
        res: I18N['fr'].typeMismatch.email,
      },
      {
        error: 'typeMismatch',
        element: UrlInput,
        lang: 'en',
        res: I18N['en'].typeMismatch.url,
      },
      {
        error: 'typeMismatch',
        element: UrlInput,
        lang: 'fr',
        res: I18N['fr'].typeMismatch.url,
      },
      {
        error: 'tooLong',
        element: MaxlengthInput,
        lang: 'en',
        res: I18N['en'].tooLong
          .replace('{max}', MaxlengthInput.maxlength)
          .replace('{current}', MaxlengthInput.value.length),
      },
      {
        error: 'tooLong',
        element: MaxlengthInput,
        lang: 'fr',
        res: I18N['fr'].tooLong
          .replace('{max}', MaxlengthInput.maxlength)
          .replace('{current}', MaxlengthInput.value.length),
      },
      {
        error: 'tooShort',
        element: MinlengthInput,
        lang: 'en',
        res: I18N['en'].tooShort
          .replace('{min}', MinlengthInput.minlength)
          .replace('{current}', MinlengthInput.value.length),
      },
      {
        error: 'tooShort',
        element: MinlengthInput,
        lang: 'fr',
        res: I18N['fr'].tooShort
          .replace('{min}', MinlengthInput.minlength)
          .replace('{current}', MinlengthInput.value.length),
      },
      {
        error: 'rangeUnderflow',
        element: MinInput,
        lang: 'en',
        res: I18N['en'].rangeUnderflow.replace('{min}', MinInput.min),
      },
      {
        error: 'rangeUnderflow',
        element: MinInput,
        lang: 'fr',
        res: I18N['fr'].rangeUnderflow.replace('{min}', MinInput.min),
      },
      {
        error: 'rangeOverflow',
        element: MaxInput,
        lang: 'en',
        res: I18N['en'].rangeOverflow.replace('{max}', MaxInput.max),
      },
      {
        error: 'rangeOverflow',
        element: MaxInput,
        lang: 'fr',
        res: I18N['fr'].rangeOverflow.replace('{max}', MaxInput.max),
      },
      {
        error: 'stepMismatch',
        element: StepInput,
        lang: 'en',
        res: I18N['en'].stepMismatch
          .replace(
            '{lower}',
            Math.floor(Number(StepInput.value) / Number(StepInput.step)) *
              Number(StepInput.step),
          )
          .replace(
            '{upper}',
            Math.floor(Number(StepInput.value) / Number(StepInput.step)) *
              Number(StepInput.step) +
              Number(StepInput.step),
          ),
      },
      {
        error: 'stepMismatch',
        element: StepInput,
        lang: 'fr',
        res: I18N['fr'].stepMismatch
          .replace(
            '{lower}',
            Math.floor(Number(StepInput.value) / Number(StepInput.step)) *
              Number(StepInput.step),
          )
          .replace(
            '{upper}',
            Math.floor(Number(StepInput.value) / Number(StepInput.step)) *
              Number(StepInput.step) +
              Number(StepInput.step),
          ),
      },
    ];
    results.forEach(i =>
      it(`Should return "${i.res}" for ${i.error}`, () => {
        expect(formatHTMLErrorMessage(i.error, i.lang, i.element)).toEqual(
          i.res,
        );
      }),
    );
  });
});
