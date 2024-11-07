import { getQueryParams } from './addQueryParams';

describe('sahred/lib/helpers/addQueryParams', () => {
  test('test with one params', () => {
    const stringParams = getQueryParams({ q: '123' });
    expect(stringParams).toBe('q=123');
  });
  test('test with multiple params', () => {
    const stringParams = getQueryParams({ q: '123', order: 'asc' });
    expect(stringParams).toBe('q=123&order=asc');
  });
  test('test with undefined params', () => {
    const stringParams = getQueryParams({ q: '123', order: undefined });
    expect(stringParams).toBe('q=123');
  });
});
