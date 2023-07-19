
function isPalindrome(str) {

    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, ''); // for replacing all alphanumeric letter such as (0-9) or special character with empty string
    
    // console.log(cleanStr);
    
    const splitPart = cleanStr.split('');
    const reversedPart = splitPart.reverse();
    const reversedStr = reversedPart.join('');
    return cleanStr === reversedStr;

}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
/* 

Input : isPalindrome("level"); 
Output: true
Input : isPalindrome("hello"); 
Output: false
Input : isPalindrome("A man, a plan, a canal: Panama"); 
Output: true

*/
