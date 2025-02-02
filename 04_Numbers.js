// // Interesting problems are start from Q.9 // //


// //  1.Highest Common Factor(HCF)

// function findHCF(a,b){
//     //Ensure a and b are Positive Number
//     a = Math.abs(a);
//     b = Math.abs(b);

//     while(b !== 0){
//         let temp = b;
//         b = a % b;
//         a = temp;
//     }
//      return a;
// }

// console.log(findHCF(72,120));


// 2.Lowest Common Multiple (LCM)

// function findHCF(a,b){
//         //Ensure a and b are Poitive Number
//         a = Math.abs(a);
//         b = Math.abs(b);
    
//         while(b !== 0){
//             let temp = b;
//             b = a % b;
//             a = temp;
//         }
//          return a;
//     }

//     function findLCM(a,b){
//         if(a === 0 || b === 0 ) return 0;
//         return Math.abs(a*b)/findHCF(a,b);
        
//     }
    
//     console.log(findLCM(72,120));

// 3. Greatest Common Divisor

// ? NOTE HCF and GCD are Same
// function findHCF(a,b){
//     //Ensure a and b are Positive Number
//     a = Math.abs(a);
//     b = Math.abs(b);

//     while(b !== 0){
//         let temp = b;
//         b = a % b;
//         a = temp;
//     }
//      return a;
// }

// console.log(findHCF(72,120));

// 4.Binary to Decimal to conversion

// function binaryToDecimal(binary) {
//     let decimal = 0;
//     let bits = binary.split('').reverse(); // Split the binary string and reverse it for easier calculation

//     for (let i = 0; i < bits.length; i++) {
//         decimal += parseInt(bits[i]) * Math.pow(2, i); // Multiply by 2^i and sum up
//     }

//     return decimal;
// }

// // Example usage
// console.log(binaryToDecimal("0001"));  // Output: 13
// console.log(binaryToDecimal("1010"));  // Output: 10
// console.log(binaryToDecimal("111111")); // Output: 63


// 5. Octal to Decimal conversion
// function octalToDecimal(octal) {
//     let decimal = 0;
//     let digits = octal.split('').reverse(); // Reverse the octal string for easier calculation

//     for (let i = 0; i < digits.length; i++) {
//         decimal += parseInt(digits[i]) * Math.pow(8, i); // Multiply by 8^i and sum up
//     }

//     return decimal;
// }

// // Example usage
// console.log(octalToDecimal("17"));     // Output: 15
// console.log(octalToDecimal("25"));     // Output: 21
// console.log(octalToDecimal("127"));    // Output: 87
// console.log(octalToDecimal("10"));     // Output: 8

// 6.Hexadecimal to Decimal conversion
// function hexToDecimal(hex) {
//     let decimal = 0;
//     let digits = hex.split('').reverse(); // Reverse the hexadecimal string for easier calculation

//     for (let i = 0; i < digits.length; i++) {
//         let value = parseInt(digits[i], 16); // Convert hex digit to decimal value
//         decimal += value * Math.pow(16, i); // Multiply by 16^i and sum up
//     }

//     return decimal;
// }

// // Example usage
// console.log(hexToDecimal("1A"));    // Output: 26
// console.log(hexToDecimal("F"));     // Output: 15
// console.log(hexToDecimal("10"));    // Output: 16
// console.log(hexToDecimal("7F"));    // Output: 127


// 7.Decimal to Binary conversion
// function decimalToBinary(decimal) {
//     let binary = '';

//     while (decimal > 0) {
//         binary = (decimal % 2) + binary; // Prepend remainder (0 or 1)
//         decimal = Math.floor(decimal / 2); // Update decimal by dividing by 2
//     }

//     return binary || '0'; // If the input was 0, return '0'
// }

// // Example usage
// console.log(decimalToBinary(13));   // Output: 1101
// console.log(decimalToBinary(10));   // Output: 1010
// console.log(decimalToBinary(63));   // Output: 111111
// console.log(decimalToBinary(0));    // Output: 0


// 8.Decimal to Octal Conversion

// function decimalToOctal(decimal) {
//     let octal = '';

//     while (decimal > 0) {
//         octal = (decimal % 8) + octal; // Prepend remainder (0-7)
//         decimal = Math.floor(decimal / 8); // Update decimal by dividing by 8
//     }

//     return octal || '0'; // If the input was 0, return '0'
// }

// // Example usage
// console.log(decimalToOctal(15));  // Output: 17
// console.log(decimalToOctal(21));  // Output: 25
// console.log(decimalToOctal(63));  // Output: 77
// console.log(decimalToOctal(8));   // Output: 10


// 9.Permutations in which n people can occupy r seats in a classroom
// function factorial(num) {
//     if (num === 0 || num === 1) {
//         return 1;
//     }
//     let result = 1;
//     for (let i = 2; i <= num; i++) {
//         result *= i;
//     }
//     return result;
// }

// function permutations(n, r) {
//     if (n < r) return 0;  // If n < r, the permutation is not possible
//     return factorial(n) / factorial(n - r);
// }

// // Example usage
// console.log(permutations(5, 3));  // Output: 60 (5P3)
// console.log(permutations(7, 2));  // Output: 42 (7P2)
// console.log(permutations(10, 5)); // Output: 30240 (10P5)
// console.log(permutations(3, 4));  // Output: 0 (3P4, impossible)


// 10.Maximum number of handshakes
// function maxHandshakes(n) {
//     if (n < 2) return 0; // No handshakes if there are fewer than 2 people
//     return (n * (n - 1)) / 2;
// }

// // Example usage
// console.log(maxHandshakes(5));  // Output: 10
// console.log(maxHandshakes(3));  // Output: 3
// console.log(maxHandshakes(7));  // Output: 21
// console.log(maxHandshakes(1));  // Output: 0
