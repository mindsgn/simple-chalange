function sumOfEvenNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (typeof num !== "number") {
      throw new Error("Invalid input: The array must contain only integers.");
    }
    if (num % 2 === 0) {
      sum += num;
    }
  }
  return sum;
}

try {
  const numbers = [5, 7, 2, 6, 8, 9, 1, 10, 19, 29, 50, 87, 11];
  const result = sumOfEvenNumbers(numbers);
  console.log(result);
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
