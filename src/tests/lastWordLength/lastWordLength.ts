const lengthOfLastWord = (s: string) => {
  const lastWord = s.trim().split(' ').reverse();

  return lastWord[0].length;
};

export default lengthOfLastWord;
