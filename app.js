// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

const testStr = "This is a test";
// test the split() method to see if it returns an array
// console.log(testStr.split(" "))

const testReverse = "!olleH"
//reverse the str
// console.log(testReverse.split("").reverse().join(""))

function reverseWords(str) {
  let reversedArr = []
  //split into an array of str's
  let strArr = str.split(" ");
  //loop over each word, split-reverse-rejoin it then push to new arr
  for(let i=0; i<strArr.length; i++){
    // reversedArr.push(strArr[i].split("").reverse().join(""))
    strArr[i] = strArr[i].split("").reverse().join("")
  }
  // return reversedArr.join(" ")
  return strArr.join(" ")
}

console.log(reverseWords(testStr))
