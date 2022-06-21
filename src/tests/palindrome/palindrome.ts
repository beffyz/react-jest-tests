const isPalindrome = (x: string) => {
  const inputAsString = (x);

  return inputAsString === inputAsString.split('').reverse().join('');
};

export default isPalindrome;
