// ===Complete the square sum function so that it squares each number passed into it and then sums the results together.===
// ===For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9.===

// function squareSum(numbers) {
//   var total = 0;

//   for (var i = 0; i < numbers.length; i++) {
//     total += numbers[i] * numbers[i];
//   }

//   return total;
// }

function squareSum(numbers) {
  return numbers.reduce((sum, n) => {
    return sum + n * n;
  }, 0);
}

const arr = [1, 2];
const arr1 = [-11, 17, 17, -10, 7, 17, -13, -9, -6];

squareSum(arr1);
