// 9. Palindrome Number

//Given an integer x, return true if x is a palindrome, and false otherwise.

var isPalindrome = function(x) {
    if (x < 0) {
        return false; // Negative numbers are not palindromes
    }
    
    x = String(x);
    var length = x.length;
    
    for (var i = 0; i < length / 2; i++) {
        if (x[i] !== x[length - 1 - i]) {
            return false; 
        }
    }
    
    return true; 
};