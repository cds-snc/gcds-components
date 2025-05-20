import { ValidatorReturn } from '../../validator';
import { requiredCheck } from '../checkbox-validators';

describe('Required checkbox validator', () => {
  const reason = {
    en: 'You must check the box to continue.',
    fr: 'Vous devez cocher la case pour continuer.',
  };
  const results: Array<{ value: boolean; res: ValidatorReturn }> = [
    { value: true, res: { valid: true, reason } },
    { value: false, res: { valid: true, reason } },
  ];
  results.forEach(i =>
    it(`Should return ${i.res.valid} for ${i.value}`, () => {
      expect(requiredCheck.validate(i.value)).toEqual(i.res);
    }),
  );
});
