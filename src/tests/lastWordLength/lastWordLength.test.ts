import lastWordLength from './lastWordLength';

test('if word has a valid value', () => {
  const response = lastWordLength('last word length');

  expect(response).toBeTruthy();
});

test('if counts length correctly', () => {
  const response = lastWordLength('last word length');

  expect(response).toBe(6);
});
