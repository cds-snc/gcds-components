import { requiredCheck } from '../checkbox-validators';

describe('Required checkbox validator', () => {
  const results: Array<{ value: boolean; res: boolean }> = [
    { value: true, res: true },
    { value: false, res: false },
  ];
  results.forEach(i =>
    it(`Should return ${i.res} for ${i.value}`, () => {
      expect(requiredCheck.validate(i.value)).toEqual(i.res);
    }),
  );
});
