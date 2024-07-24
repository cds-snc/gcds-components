import { format, logError } from './utils';

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