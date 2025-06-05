import { format, logError, isValidDate, isValid, handleErrors } from './utils';

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

    logError('gcds-component', ['requiredAttr', 'optionalAttr'], ['optionalAttr']);

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
});
