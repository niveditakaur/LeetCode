var countCharacters = function (words, chars) {
  const countChars = new Map();
  let sumLength = 0;

  for (const char of chars) {
    countChars.set(char, (countChars.get(char) || 0) + 1);
  }

  const canFormWord = (word) => {
    const wordCount = new Map();
    for (const char of word) {
      wordCount.set(char, (wordCount.get(char) || 0) + 1);
    }

    for (const [char, count] of wordCount) {
      if (!countChars.has(char) || count > countChars.get(char)) {
        return false;
      }
    }

    return true;
  };

  for (const word of words) {
    if (canFormWord(word)) {
      sumLength += word.length;
    }
  }

  return sumLength;
};
