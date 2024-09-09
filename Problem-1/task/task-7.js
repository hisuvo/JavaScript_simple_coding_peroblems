function isPalindrome(str) {
    
    console.log(str.split('').reverse().join(''))
    return str === str.split('').reverse().join('');
  }
  

  const inputString = "racecar";
  const isPalin = isPalindrome(inputString);
  console.log(isPalin);