import { format } from './utils';

describe('format', () => {
  it('returns Fallback Button Label', () => {
    expect(format(undefined)).toEqual('Fallback Button Label');
  });

  it('renders label with given string', () => {
    expect(format('Vanilla JS button')).toEqual(' Vanilla JS button');
  });
});
