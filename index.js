function isPalindrome(word) {
  // Write your algorithm here
  if (word.length <= 1) {
    // Strings that have length 1 or 0 are palindrome
    return true;
  }

  // Recursive case
  else if (word[0] == word[word.length - 1]) {
    // compare the first and last elements
    return isPalindrome(word.substring(1, word.length - 1));
  }

  return false;
}

/* 
  Add your pseudocode here
  check size of the string
  compare first and last character
  if first and last are same remove elements 
  compare elememts again 
   
*/

/*
  Add written explanation of your solution here
  line 3 to 5 is the condition when we have a string of size less than or equal to 1
  
  we then usse recursion from line 8 to 10 where we compare the first and last character
  if they are the same we call the function
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}
module.exports = isPalindrome;
