import {
  requiredField,
  requiredEmailField,
  requiredSelectField,
  requiredFileInput,
  requiredDateInput,
  requiredCheckboxGroup,
  requiredCheckboxSingle,
} from '../input-validators';
import { Blob } from 'buffer';
import { dateInputErrorMessage } from '../input-validators';
import { ValidatorReturn } from '../../validator';

interface MockFile {
  name: string;
  body: string;
  mimeType: string;
}

const createFileFromMockFile = (file: MockFile): File => {
  const blob = new Blob([file.body], { type: file.mimeType }) as unknown;
  blob['lastModifiedDate'] = new Date();
  blob['name'] = file.name;
  return blob as File;
};

const createMockFileList = (files: MockFile[]) => {
  const fileList: FileList = {
    length: files.length,
    item(index: number): File {
      return fileList[index];
    },
    [Symbol.iterator]: function (): IterableIterator<File> {
      throw new Error('Function not implemented.');
    },
  };
  files.forEach(
    (file, index) => (fileList[index] = createFileFromMockFile(file)),
  );

  return fileList;
};

describe('Required input validator', () => {
  const reason = {
    en: 'Enter information to continue.',
    fr: 'Saisissez des renseignements pour continuer.',
  };
  const results: Array<{ value: string; res: ValidatorReturn }> = [
    { value: 'Text field value', res: { valid: true, reason } },
    { value: '', res: { valid: false, reason } },
    { value: ' ', res: { valid: false, reason } },
  ];
  results.forEach(i =>
    it(`Should return ${i.res.valid} for ${i.value}`, () => {
      expect(requiredField.validate(i.value)).toEqual(i.res);
    }),
  );
});
describe('Required email validator', () => {
  const reason = {
    en: 'Enter a valid email address to continue. Use a standard format. Example: name@address.ca.',
    fr: 'Saisissez votre adresse courriel pour continuer. Utilisez un format standard. Exemple: nom@adresse.ca.',
  };
  const results: Array<{ value: string; res: ValidatorReturn }> = [
    { value: 'test@test.ca', res: { valid: true, reason } },
    { value: '', res: { valid: false, reason } },
    { value: ' ', res: { valid: false, reason } },
    { value: 'test@test', res: { valid: false, reason } },
  ];
  results.forEach(i =>
    it(`Should return ${i.res.valid} for ${i.value}`, () => {
      expect(requiredEmailField.validate(i.value)).toEqual(i.res);
    }),
  );
});
describe('Required select validator', () => {
  const reason = {
    en: 'Choose an option to continue.',
    fr: 'Choisissez une option pour continuer.',
  };
  const results: Array<{ value: string; res: ValidatorReturn }> = [
    { value: 'Chosen option', res: { valid: true, reason } },
    { value: '', res: { valid: false, reason } },
  ];
  results.forEach(i =>
    it(`Should return ${i.res.valid} for ${i.value}`, () => {
      expect(requiredSelectField.validate(i.value)).toEqual(i.res);
    }),
  );
});
describe('Required file input validator', () => {
  const reason = {
    en: 'You must upload a file to continue.',
    fr: 'Vous devez téléverser un fichier pour continuer.',
  };
  const results: Array<{ value: FileList; res: ValidatorReturn }> = [
    {
      value: createMockFileList([
        { body: 'test', mimeType: 'text/plain', name: 'test1.txt' },
        { body: 'test', mimeType: 'text/plain', name: 'test2.txt' },
      ]),
      res: { valid: true, reason },
    },
    {
      value: createMockFileList([
        { body: 'test', mimeType: 'text/plain', name: 'test1.txt' },
      ]),
      res: { valid: true, reason },
    },
    { value: createMockFileList([]), res: { valid: false, reason } },
  ];
  results.forEach(i =>
    it(`Should return ${i.res.valid} for ${i.value}`, () => {
      expect(requiredFileInput.validate(i.value)).toEqual(i.res);
    }),
  );
});

describe('Required checkbox group validator', () => {
  const results: Array<{ value: string[]; res: boolean }> = [
    { value: ['value1', 'value2'], res: true },
    { value: ['value1'], res: true },
    { value: [], res: false },
  ];
  results.forEach(i =>
    it(`Should return ${i.res} for ${i.value}`, () => {
      expect(requiredCheckboxGroup.validate(i.value)).toEqual(i.res);
    }),
  );
});

describe('Required checkbox single validator', () => {
  const results: Array<{ value: string[]; res: boolean }> = [
    { value: ['value1'], res: true },
    { value: [], res: false },
  ];
  results.forEach(i =>
    it(`Should return ${i.res} for ${i.value}`, () => {
      expect(requiredCheckboxSingle.validate(i.value)).toEqual(i.res);
    }),
  );
});

describe('Required date input validator', () => {
  const results: Array<{ value: string; res: ValidatorReturn }> = [
    { value: '1991-03-04', res: { valid: true, reason: { en: '', fr: '' } } },
    { value: '1992-02-29', res: { valid: true, reason: { en: '', fr: '' } } },
    { value: '1991-03', res: { valid: true, reason: { en: '', fr: '' } } },
    {
      value: '--',
      res: {
        valid: false,
        errors: { day: true, month: true, year: true },
        reason: {
          en: dateInputErrorMessage.en.all,
          fr: dateInputErrorMessage.fr.all,
        },
      },
    },
    {
      value: '-',
      res: {
        valid: false,
        errors: { day: true, month: true, year: true },
        reason: {
          en: dateInputErrorMessage.en.all,
          fr: dateInputErrorMessage.fr.all,
        },
      },
    },
    {
      value: '1991-03-',
      res: {
        valid: false,
        errors: { day: true, month: false, year: false },
        reason: {
          en: dateInputErrorMessage.en.missingday,
          fr: dateInputErrorMessage.fr.missingday,
        },
      },
    },
    {
      value: '1991--04',
      res: {
        valid: false,
        errors: { day: false, month: true, year: false },
        reason: {
          en: dateInputErrorMessage.en.missingmonth,
          fr: dateInputErrorMessage.fr.missingmonth,
        },
      },
    },
    {
      value: '1991-',
      res: {
        valid: false,
        errors: { day: false, month: true, year: false },
        reason: {
          en: dateInputErrorMessage.en.missingmonth,
          fr: dateInputErrorMessage.fr.missingmonth,
        },
      },
    },
    {
      value: '-03-04',
      res: {
        valid: false,
        errors: { day: false, month: false, year: true },
        reason: {
          en: dateInputErrorMessage.en.missingyear,
          fr: dateInputErrorMessage.fr.missingyear,
        },
      },
    },
    {
      value: '-03',
      res: {
        valid: false,
        errors: { day: false, month: false, year: true },
        reason: {
          en: dateInputErrorMessage.en.missingyear,
          fr: dateInputErrorMessage.fr.missingyear,
        },
      },
    },
    {
      value: '1991--',
      res: {
        valid: false,
        errors: { day: true, month: true, year: false },
        reason: {
          en: dateInputErrorMessage.en.missingmonthday,
          fr: dateInputErrorMessage.fr.missingmonthday,
        },
      },
    },
    {
      value: '-03-',
      res: {
        valid: false,
        errors: { day: true, month: false, year: true },
        reason: {
          en: dateInputErrorMessage.en.missingdayyear,
          fr: dateInputErrorMessage.fr.missingdayyear,
        },
      },
    },
    {
      value: '--04',
      res: {
        valid: false,
        errors: { day: false, month: true, year: true },
        reason: {
          en: dateInputErrorMessage.en.missingmonthyear,
          fr: dateInputErrorMessage.fr.missingmonthyear,
        },
      },
    },
    {
      value: '19991-03-04',
      res: {
        valid: false,
        errors: { day: false, month: false, year: true },
        reason: {
          en: dateInputErrorMessage.en.invalidyearlength,
          fr: dateInputErrorMessage.fr.invalidyearlength,
        },
      },
    },
    {
      value: '-991-03-04',
      res: {
        valid: false,
        errors: { day: false, month: false, year: true },
        reason: {
          en: dateInputErrorMessage.en.missingyear,
          fr: dateInputErrorMessage.fr.missingyear,
        },
      },
    },
    {
      value: '1991-35-04',
      res: {
        valid: false,
        errors: { day: true, month: false, year: false },
        reason: {
          en: dateInputErrorMessage.en.invalidday,
          fr: dateInputErrorMessage.fr.invalidday,
        },
      },
    },
    {
      value: '1991-03-34',
      res: {
        valid: false,
        errors: { day: true, month: false, year: false },
        reason: {
          en: dateInputErrorMessage.en.invalidday,
          fr: dateInputErrorMessage.fr.invalidday,
        },
      },
    },
  ];
  results.forEach(i =>
    it(`Should return ${i.res.valid} for ${i.value}`, () => {
      expect(requiredDateInput.validate(i.value)).toEqual(i.res);
    }),
  );
});
