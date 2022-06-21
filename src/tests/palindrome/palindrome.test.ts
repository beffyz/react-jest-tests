import isPalindrome from './palindrome';

test('if is palindrome', () => {
  const response = isPalindrome('bob');

  expect(response).toBeTruthy();
});

test('if is not a palindrome', () => {
  const response = isPalindrome('michel');

  expect(response).not.toBeTruthy();
});

test('if sees an uppercased letter as not the same', () => {
  const response = isPalindrome('Bob');

  expect(response).not.toBeTruthy();
});
