/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

// missing number = n(n+1) / 2
function findMissingNumber(numbers: number[]) {
  const n = numbers.length
  const expectedNumber = (n * (n + 1)) / 2

  return expectedNumber - numbers.reduce((a, b) => a + b, 0)
}

console.log(findMissingNumber(numbers));
