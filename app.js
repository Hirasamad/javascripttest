// Question 1
function reverseArray(arr) {
    
   let left = 0;

  let right = arr.length - 1;                                    
    
    
    while (left < right) {

        
       [arr[left], arr[right] ]= [arr[right], arr[left]];
        
     
        left++;
        right--;
}
        return arr;
}

 let arrSmall = [1, 2, 3, 4, 5];
console.log("Original array:", arrSmall);
let reversedArrSmall = reverseArray(arrSmall);
console.log("Reversed array:", reversedArrSmall);


let arrLarge = [11, 22, 33, 44, 55, 66, 77, 88, 99];
console.log("Original array:", arrLarge);
let reversedArrLarge = reverseArray(arrLarge);
console.log("Reversed array:", reversedArrLarge);


// Question 2

function filterNegativeNumbers(arr){

    let result = [];
    for (let i=0; i<arr.length; i++ )
    { if(arr[i] >=0) {
        result.push(arr[i]);
    }

    }
    return result
}

// // Question 3

function countVowels(str) {
    
    const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
    
   
    let vowelCount = 0;
    
  
    for (let char of str) {
       
        if (vowels.has(char)) {
            vowelCount++;
        }
    }
    
    return vowelCount;
}

// Test cases
console.log(countVowels("Hello World")); 
console.log(countVowels("Why do you ask?"));
console.log(countVowels("The quick brown fox jumps over the lazy dog")); 
console.log(countVowels("")); 

// Question 4

function isPalindrome(str) {
    
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    
   
    let left = 0;
    let right = str.length - 1;
    
   
    while (left < right) {
        
        if (str[left] !== str[right]) {
            return false; 
        }
        
        left++;
        right--;
    }
    
    return true; 
}

// Test cases
console.log(isPalindrome("radar")); 
console.log(isPalindrome("level")); 
console.log(isPalindrome("Hello")); 
console.log(isPalindrome("A man, a plan, a canal, Panama")); 
console.log(isPalindrome("racecar!")); 
console.log(isPalindrome("12321"));
console.log(isPalindrome("hello world"));





// Question 5


function checkRange(num1, num2) {
  
    if ((num1 >= 50 && num1 <= 99) || (num2 >= 50 && num2 <= 99)) { 
        return true;
    } else {
        return false;
    }
}

console.log(checkRange(40, 60)); 
console.log(checkRange(30, 90)); 
console.log(checkRange(20, 30)); 
console.log(checkRange(80, 100)); 
console.log(checkRange(100, 120)); 


// Question 6

function getMinMappedValue(arr, mapFunc) {
   
    const mappedArray = arr.map(mapFunc);
    
    
    const minValue = Math.min(...mappedArray);
    
    return minValue;
}


const numbers = [1, 2, 3, 4, 5];


const squareMapFunc = (num) => num * num;


const minSquaredValue = getMinMappedValue(numbers, squareMapFunc);
console.log("Minimum squared value:", minSquaredValue); 

const absoluteMapFunc = (num) => Math.abs(num);


const minAbsoluteValue = getMinMappedValue(numbers, absoluteMapFunc);
console.log("Minimum absolute value:", minAbsoluteValue);

// Question 7

function generateUpdatedString(originalString) {
    
    if (originalString.length >= 3) {
        
        const lastThreeChars = originalString.slice(-3);
        
       
        const updatedString = lastThreeChars.repeat(4);
        
        return updatedString;
    } else {
       
        return "Original string length must be 3 or more.";
    }
}


console.log(generateUpdatedString("abcdef")); 
console.log(generateUpdatedString("ab"));     
console.log(generateUpdatedString("xyz"));    
console.log(generateUpdatedString("hello"));  



// Question 8

function angleType(angle) {
    if (angle > 0 && angle < 90) {
        return "Acute angle";
    } else if (angle === 90) {
        return "Right angle";
    } else if (angle > 90 && angle < 180) {
        return "Obtuse angle";
    } else if (angle === 180) {
        return "Straight angle";
    } else {
        return "Invalid angle. Please provide an angle between 0 and 180 degrees.";
    }
}

// Test cases
console.log(angleType(45));   
console.log(angleType(90));   
console.log(angleType(120));  
console.log(angleType(180));  
console.log(angleType(0));    
console.log(angleType(-45));  
console.log(angleType(200));  


// Question 9


function smallestRoundNumber(num) {
    
    let strNum = num.toString();
    
    
    let len = strNum.length;
  
   
    if (strNum[len - 1] === '0') {
      return num;
    }
  
   
    let powerOfTen = Math.pow(10, len - 1);
  
    
    let nextRoundNumber = Math.ceil(num / powerOfTen) * powerOfTen;
  
    return nextRoundNumber;
  }
  
 
  console.log(smallestRoundNumber(592)); 
  console.log(smallestRoundNumber(590)); 
  console.log(smallestRoundNumber(1234)); 
  console.log(smallestRoundNumber(100)); 
  console.log(smallestRoundNumber(999)); 


//   Question 10


function findIndexOfItem(array, item) {
    for (let i = 0; i < array.length; i++) {
      if (array[i] === item) {
        return i; 
      }
    }
    return -1; 
  }
  
  let arr = [10, 20, 30, 40, 50];
  let itemToFind = 30;
  let index = findIndexOfItem(arr, itemToFind);
  console.log(index); 
  itemToFind = 60;
  index = findIndexOfItem(arr, itemToFind);
  console.log(index); 














