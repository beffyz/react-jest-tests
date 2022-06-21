import romanToInt from './romanToInt';

test('if returns V as 5', () => {
  const response = romanToInt('V');

  expect(response).toBe(5);
});

test('if is able to sum roman numbers', () => {
  const response = romanToInt('VV');

  expect(response).toBe(10);
});
