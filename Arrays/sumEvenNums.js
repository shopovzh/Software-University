function sumEvenNums(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    let currentNum = Number(array[i]);
    if (currentNum % 2 === 0) {
      sum += currentNum;
    }
  }
  console.log(sum);
}

sumEvenNums(["1", "2", "3", "4", "5", "6"]);
