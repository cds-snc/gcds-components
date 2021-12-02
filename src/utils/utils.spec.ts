import { format } from './utils';

describe('format', () => {
  it('returns empty string for no names defined', () => {
    expect(format(undefined)).toEqual('');
  });

  it('formats just first names', () => {
    expect(format('Joseph')).toEqual('Joseph');
  });
});
