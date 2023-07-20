import { requiredField, requiredFileInput } from "../input-validators";
import {Blob} from 'buffer';

interface MockFile {
  name: string;
  body: string;
  mimeType: string;
}

const createFileFromMockFile = (file: MockFile): File => {
const blob = new Blob([file.body], { type: file.mimeType }) as any;
blob['lastModifiedDate'] = new Date();
blob['name'] = file.name;
return blob as File;
};

const createMockFileList = (files: MockFile[]) => {
const fileList: FileList = {
  length: files.length,
  item(index: number): File {
    return fileList[index];
  }
};
files.forEach((file, index) => fileList[index] = createFileFromMockFile(file));

return fileList;
};

describe('Required input validator', () => {
  let results: Array<{value: string, res: boolean}> = [
    {value: "Text field value", res: true},
    {value: "", res: false},
    {value: " ", res: false},
  ];
  results.forEach(i => 
    it(`Should return ${i.res} for ${i.value}`, () => {
      expect(requiredField.validate(i.value)).toEqual(i.res);
    })
  );
});
describe('Required file input validator', () => {
  let results: Array<{value: FileList, res: boolean}> = [
    {value: createMockFileList([{ body: 'test', mimeType: 'text/plain', name: 'test1.txt' }, { body: 'test', mimeType: 'text/plain', name: 'test2.txt' }]), res: true},
    {value: createMockFileList([{ body: 'test', mimeType: 'text/plain', name: 'test1.txt' }]), res: true},
    {value: createMockFileList([]), res: false},
  ];
  results.forEach(i => 
    it(`Should return ${i.res} for ${i.value}`, () => {
      expect(requiredFileInput.validate(i.value)).toEqual(i.res);
    })
  );
});