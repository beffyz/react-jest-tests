import someFunction from './sum';

test('if it sums positive numbers', () => {
  const response = someFunction(6, 4);

  expect(response).toBe(10);
});

test('if it sums negative numbers', () => {
  const response = someFunction(-6, -100);

  expect(response).toBe(-106);
});

test('if it sums negative and positive numbers', () => {
  const response = someFunction(6, -57);

  expect(response).toBe(-51);
});
