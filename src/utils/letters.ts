export const getMinimumLetters = (words: string[]): string[] => {
  const letterSet = new Set<string>();
  words.forEach((word) => {
    word.split('').forEach((letter) => {
      letterSet.add(letter);
    });
  });
  return Array.from(letterSet);
};
