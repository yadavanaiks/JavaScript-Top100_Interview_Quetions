// 1.Find Largest element in an array
// const findLargestElement = (arr) => {
//   if (arr.length === 0) return null;
//   let max = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//       max = arr[i];
//     }c
//   }
//   return `The largest element is ${max}`;
// };

// console.log(arr.length([10, 30, 50, 20]));

// 2.Find Smallest Element in an Array

// const findSmallestElement = (arr) => {
//   if (arr.length === 0) return null;
//   let min = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//       max = arr[i];
//     }
//   }
//   return `The smallest element is ${min}`;
// };

// console.log(findSmallestElement([10, 30, 50, 20]));

//3.Find the Smallest and largest element in an array
// const findMinMaxArrow = (arr) => {
//   let min = arr[0]; // Initialize min with the first element
//   let max = arr[0]; // Initialize max with the first element
//   for (let i = 1; i < arr.length; i++) {
//     // Traditional for loop
//     if (arr[i] < min) {
//       min = arr[i]; // Update min if current element is smaller
//     }
//     if (arr[i] > max) {
//       max = arr[i]; // Update max if current element is larger
//     }
//   }
//   return ` The smallest element ${min}, The largestElment ${max} `; // Return both min and max
// };

// // Example Usage
// const result = findMinMaxArrow([10, 25, 14, 56, 78]);
// console.log(result); // Output: { min: 10, max: 78 }

// 4.Find Second Smallest Element in an Array
// ES6: Using traditional for loop
// function findSecondSmallest(arr) {
//   if (arr.length < 2) return null; // If array has fewer than 2 elements

//   let min = arr[0]; // Initialize min with the first element
//   let secondMin = Infinity; // Set secondMin to a very large number (Infinity)

//   for (let i = 1; i < arr.length; i++) {
//     // Traditional for loop
//     if (arr[i] < min) {
//       secondMin = min; // Update secondMin before changing min
//       min = arr[i]; // Update min if current element is smaller
//     } else if (arr[i] < secondMin && arr[i] !== min) {
//       secondMin = arr[i]; // Update secondMin if current element is smaller than secondMin but not equal to min
//     }
//   }

//   return secondMin === Infinity ? null : secondMin; // Return secondMin if valid, else return null
// }

// // Example Usage
// console.log(findSecondSmallest([10, 25, 20])); // Output: 14
