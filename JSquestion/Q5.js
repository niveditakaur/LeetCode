//14. Longest Common Prefix

//Write a function to find the longest common prefix string amongst an array of strings.
//If there is no common prefix, return an empty string "".

var longestCommonPrefix = function(strs) {
    let result= strs[0];
    let length = strs.length;
    for(let i=0;i<length;i++)
    {
        while(strs[i].indexOf(result)!==0){
            result = result.substring(0, result.length-1);
            if(result=='0')
            {
                return '';
            }
        }

    }
    return result;

    
};