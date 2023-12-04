import { splitWithLeadingPattern } from '../utils';

test('split leading zeros correctly', () => {
  expect(splitWithLeadingPattern('00123')).toMatchObject({
    leadingStr: '00',
    otherPart: '123',
  });
});

test('should not have any leading zeros', () => {
  expect(splitWithLeadingPattern('123')).toMatchObject({
    leadingStr: '',
    otherPart: '123',
  });
});

test('should return undefined for empty strings', () => {
  expect(splitWithLeadingPattern('')).toBe(undefined);
});
