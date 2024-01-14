/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
var closeStrings = function(word1, word2) {
    if (word1.length !== word2.length) {
    return false;
  }

  const charCount1 = new Map();
  const charCount2 = new Map();

  // Count character occurrences in word1
  for (const char of word1) {
    charCount1.set(char, (charCount1.get(char) || 0) + 1);
  }

  // Count character occurrences in word2
  for (const char of word2) {
    charCount2.set(char, (charCount2.get(char) || 0) + 1);
  }

  // Check if the sets of characters are the same
  const chars1 = Array.from(charCount1.keys());
  const chars2 = Array.from(charCount2.keys());

  chars1.sort();
  chars2.sort();

  if (chars1.join('') !== chars2.join('')) {
    return false;
  }

  // Check if the counts of occurrences are the same
  const counts1 = Array.from(charCount1.values());
  const counts2 = Array.from(charCount2.values());

  counts1.sort((a, b) => a - b);
  counts2.sort((a, b) => a - b);

  return counts1.join('') === counts2.join('');
};