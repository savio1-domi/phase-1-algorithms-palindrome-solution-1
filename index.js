function reverse(word){
  // mom => mom
  // racecar => racecar
  const wordArr = word.split("")
  const reverseWordArr = wordArr.reverse()
  const reversedWord = reverseWordArr.join("")
  
  return reversedWord
}
function isPalindrome(word) {
  // Write your algorithm here
  //reverse the input string
  const reverseWord = reverse(word)

  // If the input is the same as the reversed input
  if (word === reverseWord){
    return true;
  }else{
    return false;
  }
}

/* 
  Add your pseudocode here
  if the reversed string is the same as the input
    return true
  else
    return false*/


/*
reverse the input string
/*
  Add written explanation of your solution here
  first: I will split the word and reverse it, saving it in a variable called reverseWordArr
  second: I will join reverseWordArr and save it in a variable called reversedWord
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