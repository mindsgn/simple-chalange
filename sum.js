function sumOfEvenNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sum += arr[i];
    }
  }
  return sum;
}

const numbers = [5, 7, 2, 6, 8, 9, 1, 10, 11, 29, 50, 87, 11];
const result = sumOfEvenNumbers(numbers);
console.log(result);
