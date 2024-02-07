/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const charCount = new Map();
    
    // Initialize charCount map with characters and their counts from string t
    for (const char of t) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    
    let left = 0;
    let right = 0;
    let requiredChars = t.length; 
    let minLen = Infinity;
    let minWindowStart = 0;
    
    // Sliding window
    while (right < s.length) {
        if (charCount.has(s[right]) && charCount.get(s[right]) > 0) {
            requiredChars--;
        }
        
        charCount.set(s[right], (charCount.get(s[right]) || 0) - 1);
        right++;
        
        while (requiredChars === 0) {
            if (right - left < minLen) {
                minLen = right - left;
                minWindowStart = left;
            }
            
            charCount.set(s[left], (charCount.get(s[left]) || 0) + 1);
            
            if (charCount.get(s[left]) > 0) {
                requiredChars++;
            }
            
            left++;
        }
    }
    
    return minLen === Infinity ? "" : s.substring(minWindowStart, minWindowStart + minLen);
};