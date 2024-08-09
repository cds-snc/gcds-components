import {
  requiredField,
  requiredFileInput,
  requiredDateInput,
} from '../input-validators';
import { Blob } from 'buffer';
import { dateInputErrorMessage } from '../input-validators';

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
  const results: Array<{ value: string; res: boolean }> = [
    { value: 'Text field value', res: true },
    { value: '', res: false },
    { value: ' ', res: false },
  ];
  results.forEach(i =>
    it(`Should return ${i.res} for ${i.value}`, () => {
      expect(requiredField.validate(i.value)).toEqual(i.res);
    }),
  );
});
describe('Required file input validator', () => {
  const results: Array<{ value: FileList; res: boolean }> = [
    {
      value: createMockFileList([
        { body: 'test', mimeType: 'text/plain', name: 'test1.txt' },
        { body: 'test', mimeType: 'text/plain', name: 'test2.txt' },
      ]),
      res: true,
    },
    {
      value: createMockFileList([
        { body: 'test', mimeType: 'text/plain', name: 'test1.txt' },
      ]),
      res: true,
    },
    { value: createMockFileList([]), res: false },
  ];
  results.forEach(i =>
    it(`Should return ${i.res} for ${i.value}`, () => {
      expect(requiredFileInput.validate(i.value)).toEqual(i.res);
    }),
  );
});

describe('Required date input validator', () => {
  const results: Array<{ value: string; res: object }> = [
    { value: '1991-03-04', res: { valid: true } },
    { value: '1992-02-29', res: { valid: true } },
    { value: '1991-03', res: { valid: true } },
    {
      value: '--',
      res: {
        valid: false,
        errors: { day: true, month: true, year: true },
        reason: { en: dateInputErrorMessage.en.all, fr: dateInputErrorMessage.fr.all },
      },
    },
    {
      value: '-',
      res: {
        valid: false,
        errors: { day: true, month: true, year: true },
        reason: { en: dateInputErrorMessage.en.all, fr: dateInputErrorMessage.fr.all },
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
    it(`Should return ${i.res['valid']} for ${i.value}`, () => {
      expect(requiredDateInput.validate(i.value)).toEqual(i.res);
    }),
  );
});
