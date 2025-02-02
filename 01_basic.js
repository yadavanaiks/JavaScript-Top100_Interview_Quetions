//1.  Positive Or Negative number

// function checkNumber(num) {
//     if (num > 0) {
//       return `${num} is a Positive Number.`;
//     } else if (num < 0) {
//       return `${num} is a Negative Number.`;
//     } else {
//       return `${num} is Zero.`;
//     }
//   }
  
//   // Example usage
//   console.log(checkNumber(10));  // Output: 10 is a Positive Number.
//   console.log(checkNumber(-5));  // Output: -5 is a Negative Number.
//   console.log(checkNumber(0));   // Output: 0 is Zero.
  


// 2.Even or Odd number
// function checkEvenOrOdd(num) {
//     if (num % 2 === 0) {
//       return `${num} is an Even Number.`;
//     } else {
//       return `${num} is an Odd Number.`;
//     }
//   }
  
//   // Example usage
//   console.log(checkEvenOrOdd(4));  // Output: 4 is an Even Number.
//   console.log(checkEvenOrOdd(7));  // Output: 7 is an Odd Number.
//   console.log(checkEvenOrOdd(0));  // Output: 0 is an Even Number.

// 3. Sum of First N Natural numbers

// function sumOfFirstNNumbers(N) {
//     if (N <= 0) {
//       return "Please enter a positive integer.";
//     }
//     const sum = (N * (N + 1)) / 2; // Formula for the sum of first N natural numbers
//     return `The sum of the first ${N} natural numbers is ${sum}.`;
//   }
  
  // Example usage
//   console.log(sumOfFirstNNumbers(8)); // Output: The sum of the first 10 natural numbers is 55.
//   console.log(sumOfFirstNNumbers(5));  // Output: The sum of the first 5 natural numbers is 15.
//   console.log(sumOfFirstNNumbers(-3)); // Output: Please enter a positive integer.


  
  
// 4. Sum of N natural numbers

//    FORMULA BASED 
//    function sumOfNNumbersFormula(N) {
//     if (N <= 0) {
//       return "Please enter a positive integer.";
//     }
//     const sum = (N * (N + 1)) / 2; // Formula for the sum of first N natural numbers
//     return `The sum of the first ${N} natural numbers is ${sum}.`;
//   }

//     ITERATIVE BASED 
//     function sumOfNNumbersIterative(N) {
//         if (N <= 0) {
//           return "Please enter a positive integer.";
//         }
//         let sum = 0;
//         for (let i = 1; i <= N; i++) {
//           sum += i;
//         }
//         return `The sum of the first ${N} natural numbers is ${sum}.`;
//       }
      


// 5. Sum of numbers in a given range

// function sumInRange(start, end) {
//     if (start > end) {
//       return "Invalid range. The start value must be less than or equal to the end value.";
//     }
  
//     let sum = 0;
//     for (let i = start; i <= end; i++) {
//       sum += i;
//     }
//     return `The sum of numbers from ${start} to ${end} is ${sum}.`;
//   }
  
//   // Example usage
//   console.log(sumInRange(1, 10)); // Output: The sum of numbers from 1 to 10 is 55.
//   console.log(sumInRange(5, 15)); // Output: The sum of numbers from 5 to 15 is 110.
//   console.log(sumInRange(10, 5)); // Output: Invalid range. The start value must be less than or equal to the end value.
  

// 6. Greatest of two numbers

// function greatestOfTwoNumbers(a, b) {
//     if (a > b) {
//       return `${a} is the greater number.`;
//     } else if (b > a) {
//       return `${b} is the greater number.`;
//     } else {
//       return `Both numbers are equal.`;
//     }
//   }
  
//   // Example usage
//   console.log(greatestOfTwoNumbers(10, 20)); // Output: 20 is the greater number.
//   console.log(greatestOfTwoNumbers(50, 25)); // Output: 50 is the greater number.
//   console.log(greatestOfTwoNumbers(30, 30)); // Output: Both numbers are equal.
  
  
// 7. Greatest of the Three numbers

// function greatestOfThreeNumbers(a, b, c) {
//     if (a >= b && a >= c) {
//       return `${a} is the greatest number.`;
//     } else if (b >= a && b >= c) {
//       return `${b} is the greatest number.`;
//     } else {
//       return `${c} is the greatest number.`;
//     }
//   }
  
//   // Example usage
//   console.log(greatestOfThreeNumbers(10, 20, 30)); // Output: 30 is the greatest number.
//   console.log(greatestOfThreeNumbers(50, 25, 40)); // Output: 50 is the greatest number.
//   console.log(greatestOfThreeNumbers(15, 15, 10)); // Output: 15 is the greatest number.
//   console.log(greatestOfThreeNumbers(25, 25, 25)); // Output: 25 is the greatest number.



// 8. Leap year or not

// function isLeapYear(year) {
//     if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
//       return `${year} is a Leap Year.`;
//     } else {
//       return `${year} is not a Leap Year.`;
//     }
//   }
  
//   // Example usage
//   console.log(isLeapYear(2020)); // Output: 2020 is a Leap Year.
//   console.log(isLeapYear(1900)); // Output: 1900 is not a Leap Year.
//   console.log(isLeapYear(2000)); // Output: 2000 is a Leap Year.
//   console.log(isLeapYear(2023)); // Output: 2023 is not a Leap Year.
  

// 9. Prime number

// function isPrime(num) {
//     if (num <= 1) {
//       return `${num} is not a prime number.`;
//     }
  
//     for (let i = 2; i <num; i++) {
//       if (num % i === 0) {
//         return `${num} is not a prime number.`;
//       }
//     }
    
//     return `${num} is a prime number.`;
//   }
  
//   // Example usage
//   console.log(isPrime(2));   // Output: 2 is a prime number.
//   console.log(isPrime(10));  // Output: 10 is not a prime number.
//   console.log(isPrime(17));  // Output: 17 is a prime number.
//   console.log(isPrime(25));  // Output: 25 is not a prime number.
  


// 10. Prime number within a given range

// function primesInRange(start, end) {
//     let primes = [];
  
//     for (let num = start; num <= end; num++) {
//       if (num <= 1) continue; // Skip numbers less than or equal to 1
//       let isPrime = true;
      
//       for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//           isPrime = false;
//           break;
//         }
//       }
  
//       if (isPrime) {
//         primes.push(num);
//       }
//     }
    
//     return `Prime numbers between ${start} and ${end} are: ${primes.join(', ')}`;
//   }
  
//   // Example usage
//   console.log(primesInRange(10, 50)); // Output: Prime numbers between 10 and 50 are: 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47
//   console.log(primesInRange(1, 20));  // Output: Prime numbers between 1 and 20 are: 2, 3, 5, 7, 11, 13, 17, 19
  


// 11.Sum of digits of a number

// function sumOfDigits(num) {
//     let sum = 0;

//     while (num > 0) {
//         let digit = num % 10; // Extract the last digit
//         sum += digit;         // Add the digit to the sum
//         num = Math.floor(num / 10); // Remove the last digit
//     }

//     return sum;
// }

// // Example usage
// let number = 123; // Change this number to test with other values
// console.log(`The sum of the digits of ${number} is: ${sumOfDigits(number)}`);

// 1.num % 10: Extracts the last digit of the number.
// 2.Add the extracted digit to the sum.
// 3.Math.floor(num / 10): Removes the last digit of the number.
// 4.Repeat the process until the number becomes 0.



// 12. Reverse of a number

// function reverseNumber(num) {
//   let reversed = 0;

//   while (num !== 0) {
//     // Get the last digit
//     const lastDigit = num % 10;

//     // Append the last digit to the reversed number
//     reversed = reversed * 10 + lastDigit;

//     // Remove the last digit from the original number
//     num = Math.floor(num / 10);
//   }

//   return reversed;
// }

// // Example usage:
// const number = 12345;
// const reversed = reverseNumber(number);
// console.log(reversed);  // Output: 54321


// 13. Palindrome number

// function isPalindromeNumber(num) {
//     let original = num;
//     let reversed = 0;
    
//     // Reverse the number
//     while (num > 0) {
//       reversed = reversed * 10 + num % 10;  // Append the last digit to the reversed number
//       num = Math.floor(num / 10);  // Remove the last digit
//     }
    
//     // Check if the original number is equal to the reversed number
//     if (original === reversed) {
//       return `${original} is a Palindrome number.`;
//     } else {
//       return `${original} is not a Palindrome number.`;
//     }
//   }
  
//   // Example usage
//   console.log(isPalindromeNumber(121));  // Output: 121 is a Palindrome number.
//   console.log(isPalindromeNumber(123));  // Output: 123 is not a Palindrome number.
//   console.log(isPalindromeNumber(202));  // Output: 202 is a Palindrome number.
  


// 14. Armstrong number
// function isArmstrongNumber(num) {
//   // Convert the number to a string to count the digits
//   const numStr = num.toString();
//   const numDigits = numStr.length;

//   let sum = 0;
//   let originalNum = num;

//   // Calculate the sum of each digit raised to the power of numDigits
//   while (num > 0) {
//     const lastDigit = num % 10;
//     sum += Math.pow(lastDigit, numDigits);  // Raising the digit to the power of numDigits
//     num = Math.floor(num / 10);  // Remove the last digit
//   }

//   // Check if the sum equals the original number
//   if (sum === originalNum) {
//     return `${originalNum} is an Armstrong Number`;
//   } else{
//     return `${originalNum} is not an Armstrong Number`;
//   }
// }

// // Example usage:
// const number = 1634;
// console.log(isArmstrongNumber(number));  // Output: true



// // 15. Armstrong number in a given range
// function armstrongNumbersInRange(start, end) {
//   let armstrongNumbers = [];

//   for (let num = start; num <= end; num++) {
//     let sum = 0;
//     let originalNum = num;
//     let numberOfDigits = num.toString().length; // Count the number of digits

//     // Calculate the sum of each digit raised to the power of the number of digits
//     let tempNum = num;  // Use a temporary variable to avoid modifying the original number
//     while (tempNum > 0) {
//       let digit = tempNum % 10;
//       sum += Math.pow(digit, numberOfDigits);
//       tempNum = Math.floor(tempNum / 10);
//     }

//     // Check if the sum equals the original number
//     if (sum === originalNum) {
//       armstrongNumbers.push(originalNum);
//     }
//   }

//   return `Armstrong numbers between ${start} and ${end} are: ${armstrongNumbers.join(', ')}`;
// }

// // Example usage
// console.log(armstrongNumbersInRange(1, 500));  // Output: Armstrong numbers between 1 and 500 are: 1, 153, 370, 371, 407
// console.log(armstrongNumbersInRange(100, 1000));  // Output: Armstrong numbers between 100 and 1000 are: 153, 370, 371, 407

  
// 16. Fibonacci Series upto nth term

// function fibonacciSeries(n) {
//     let fibSeries = [];
    
//     // First two Fibonacci numbers
//     let a = 0, b = 1;
  
//     for (let i = 0; i < n; i++) {
//       fibSeries.push(a);
//       let nextTerm = a + b;
//       a = b;
//       b = nextTerm;
//     }
  
//     return `Fibonacci series up to the ${n}th term: ${fibSeries.join(', ')}`;
//   }
  
//   // Example usage
//   console.log(fibonacciSeries(5));  // Output: Fibonacci series up to the 5th term: 0, 1, 1, 2, 3
//   console.log(fibonacciSeries(10)); // Output: Fibonacci series up to the 10th term: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34
  

// 17. Find the Nth Term of the Fibonacci Series

// function fibonacciNthTerm(n) {
//     if (n <= 0) {
//       return "Please enter a positive integer.";
//     }
    
//     let a = 0, b = 1;
  
//     // Handle the first two terms
//     if (n === 1) return a;
//     if (n === 2) return b;
  
//     // Calculate the Nth term
//     for (let i = 3; i <= n; i++) {
//       let nextTerm = a + b;
//       a = b;
//       b = nextTerm;
//     }
  
//     return `The ${n}th term of the Fibonacci series is ${b}.`;
//   }
  
//   // Example usage
//   console.log(fibonacciNthTerm(5));  // Output: The 5th term of the Fibonacci series is 3.
//   console.log(fibonacciNthTerm(10)); // Output: The 10th term of the Fibonacci series is 34.
  
// 18. Factorial of a number 

// function factorial(num) {
//     if (num < 0) {
//       return "Please enter a non-negative integer.";
//     }
    
//     let result = 1;
  
//     for (let i = 1; i <= num; i++) {
//       result *= i;
//     }
  
//     return `The factorial of ${num} is ${result}.`;
//   }
  
//   // Example usage
//   console.log(factorial(5));  // Output: The factorial of 5 is 120.
//   console.log(factorial(7));  // Output: The factorial of 7 is 5040.
//   console.log(factorial(0));  // Output: The factorial of 0 is 1.
//   console.log(factorial(-3)); // Output: Please enter a non-negative integer.
  

// 19. Power of a number

// function power(base, exponent) {
//     return Math.pow(base, exponent);
//   }
  
//   // Example usage
//   console.log(power(2, 3));  // Output: 8
//   console.log(power(5, 4));  // Output: 625
//   console.log(power(7, 0));  // Output: 1
//   console.log(power(10, -2)); // Output: 0.01
  
// 20. Factor of a number

// function factors(num) {
//     if (num <= 0) {
//       return "Please enter a positive integer.";
//     }
  
//     let factorsList = [];
    
//     // Loop to find all factors
//     for (let i = 1; i <= num; i++) {
//       if (num % i === 0) {
//         factorsList.push(i);
//       }
//     }
  
//     return `The factors of ${num} are: ${factorsList.join(', ')}`;
//   }
  
//   // Example usage
//   console.log(factors(12));   // Output: The factors of 12 are: 1, 2, 3, 4, 6, 12.
//   console.log(factors(25));   // Output: The factors of 25 are: 1, 5, 25.
//   console.log(factors(7));    // Output: The factors of 7 are: 1, 7.
//   console.log(factors(18));   // Output: The factors of 18 are: 1, 2, 3, 6, 9, 18.
  



// 21. Finding Prime Factors of a number

// function primeFactors(num) {
//     if (num <= 1) {
//       return "Please enter a number greater than 1.";
//     }
  
//     let factors = [];
  
//     // Check for number of 2's that divide num
//     while (num % 2 === 0) {
//       factors.push(2);
//       num = num / 2;
//     }
  
//     // Check for odd factors from 3 upwards
//     for (let i = 3; i <= Math.sqrt(num); i += 2) {
//       while (num % i === 0) {
//         factors.push(i);
//         num = num / i;
//       }
//     }
  
//     // If num is a prime number greater than 2
//     if (num > 2) {
//       factors.push(num);
//     }
  
//     return `The prime factors are: ${factors.join(', ')}`;
//   }
  
//   // Example usage
//   console.log(primeFactors(18));   // Output: The prime factors are: 2, 3, 3.
//   console.log(primeFactors(56));   // Output: The prime factors are: 2, 2, 2, 7.
//   console.log(primeFactors(97));   // Output: The prime factors are: 97.
//   console.log(primeFactors(100));  // Output: The prime factors are: 2, 2, 5, 5.
  


// 22. Strong number

// function isStrongNumber(num) {
//     let sum = 0;
//     let originalNum = num;
  
//     // Function to calculate the factorial of a number
//     function factorial(n) {
//       let result = 1;
//       for (let i = 1; i <= n; i++) {
//         result *= i;
//       }
//       return result;
//     }
  
//     // Sum the factorial of each digit of the number
//     while (num > 0) {
//       let digit = num % 10;
//       sum += factorial(digit);
//       num = Math.floor(num / 10);
//     }
  
//     // Check if the sum of factorials equals the original number
//     if (sum === originalNum) {
//       return `${originalNum} is a Strong number.`;
//     } else {
//       return `${originalNum} is not a Strong number.`;
//     }
//   }
  
//   // Example usage
//   console.log(isStrongNumber(145));  // Output: 145 is a Strong number.
//   console.log(isStrongNumber(123));  // Output: 123 is not a Strong number.
//   console.log(isStrongNumber(40585)); // Output: 40585 is a Strong number.
  


// 23. Perfect number

// function isPerfectNumber(num) {
//     if (num <= 1) {
//       return `${num} is not a Perfect number.`;
//     }
  
//     let sum = 0;
  
//     // Find all divisors of num and calculate their sum
//     for (let i = 1; i <= num / 2; i++) {
//       if (num % i === 0) {
//         sum += i;
//       }
//     }
  
//     // Check if the sum of divisors is equal to the number
//     if (sum === num) {
//       return `${num} is a Perfect number.`;
//     } else {
//       return `${num} is not a Perfect number.`;
//     }
//   }
  
//   // Example usage
//   console.log(isPerfectNumber(6));    // Output: 6 is a Perfect number.
//   console.log(isPerfectNumber(28));   // Output: 28 is a Perfect number.
//   console.log(isPerfectNumber(12));   // Output: 12 is not a Perfect number.
//   console.log(isPerfectNumber(496));  // Output: 496 is a Perfect number.
  


// 24. Perfect Square

// function isPerfectSquare(num) {
//     if (num < 0) {
//       return `${num} is not a Perfect Square.`;
//     }
  
//     let sqrt = Math.sqrt(num);
    
//     // Check if the square root is an integer
//     if (sqrt === Math.floor(sqrt)) {
//       return `${num} is a Perfect Square.`;
//     } else {
//       return `${num} is not a Perfect Square.`;
//     }
//   }
  
//   // Example usage
//   console.log(isPerfectSquare(16));   // Output: 16 is a Perfect Square.
//   console.log(isPerfectSquare(25));   // Output: 25 is a Perfect Square.
//   console.log(isPerfectSquare(12));   // Output: 12 is not a Perfect Square.
//   console.log(isPerfectSquare(7));    // Output: 7 is not a Perfect Square.
//   console.log(isPerfectSquare(-9));   // Output: -9 is not a Perfect Square
// 
// l.



// 25. Automorphic number

// function isAutomorphicNumber(num) {
//     let square = num * num;
//     let numLength = num.toString().length;
  
//     // Extract the last digits of the square number
//     let lastDigits = square % Math.pow(10, numLength);
  
//     // Check if the last digits are equal to the original number
//     if (lastDigits === num) {
//       return `${num} is an Automorphic number.`;
//     } else {
//       return `${num} is not an Automorphic number.`;
//     }
//   }
  
//   // Example usage
//   console.log(isAutomorphicNumber(5));   // Output: 5 is an Automorphic number.
//   console.log(isAutomorphicNumber(25));  // Output: 25 is an Automorphic number.
//   console.log(isAutomorphicNumber(12));  // Output: 12 is not an Automorphic number.
//   console.log(isAutomorphicNumber(76));  // Output: 76 is an Automorphic number.
  

// 26. Harshad number

// function isHarshadNumber(num) {
//     if (num <= 0) {
//       return `${num} is not a Harshad number.`;
//     }
  
//     let sumOfDigits = 0;
//     let originalNum = num;
  
//     // Calculate the sum of the digits of the number
//     while (num > 0) {
//       let digit = num % 10;
//       sumOfDigits += digit;
//       num = Math.floor(num / 10);
//     }
  
//     // Check if the number is divisible by the sum of its digits
//     if (originalNum % sumOfDigits === 0) {
//       return `${originalNum} is a Harshad number.`;
//     } else {
//       return `${originalNum} is not a Harshad number.`;
//     }
//   }
  
//   // Example usage
//   console.log(isHarshadNumber(18));  // Output: 18 is a Harshad number.
//   console.log(isHarshadNumber(19));  // Output: 19 is not a Harshad number.
//   console.log(isHarshadNumber(12));  // Output: 12 is a Harshad number.
//   console.log(isHarshadNumber(21));  // Output: 21 is a Harshad number.
  


// 27. Abundant number 

// function isAbundantNumber(num) {
//     if (num <= 0) {
//       return `${num} is not an Abundant number.`;
//     }
  
//     let sumOfDivisors = 0;
  
//     // Find all divisors of the number and calculate their sum
//     for (let i = 1; i <= num / 2; i++) {
//       if (num % i === 0) {
//         sumOfDivisors += i;
//       }
//     }
  
//     // Check if the sum of divisors is greater than the number itself
//     if (sumOfDivisors > num) {
//       return `${num} is an Abundant number.`;
//     } else {
//       return `${num} is not an Abundant number.`;
//     }
//   }
  
//   // Example usage
//   console.log(isAbundantNumber(12));   // Output: 12 is an Abundant number.
//   console.log(isAbundantNumber(18));   // Output: 18 is an Abundant number.
//   console.log(isAbundantNumber(28));   // Output: 28 is not an Abundant number.
//   console.log(isAbundantNumber(20));   // Output: 20 is an Abundant number.
  
// 28. Friendly pair

// function sumOfDivisors(num) {
//     let sum = 0;
//     for (let i = 1; i <= num / 2; i++) {
//       if (num % i === 0) {
//         sum += i;
//       }
//     }
//     return sum;
//   }
  
//   function areFriendlyPairs(num1, num2) {
//     // Check if the sum of divisors of num1 is equal to num2 and vice versa
//     if (sumOfDivisors(num1) === num2 && sumOfDivisors(num2) === num1) {
//       return `${num1} and ${num2} are Friendly Pairs (Amicable Pairs).`;
//     } else {
//       return `${num1} and ${num2} are not Friendly Pairs.`;
//     }
//   }
  
//   // Example usage
//   console.log(areFriendlyPairs(220, 284));  // Output: 220 and 284 are Friendly Pairs (Amicable Pairs).
//   console.log(areFriendlyPairs(1184, 1210)); // Output: 1184 and 1210 are Friendly Pairs (Amicable Pairs).
//   console.log(areFriendlyPairs(10, 20));   // Output: 10 and 20 are not Friendly Pairs.
  