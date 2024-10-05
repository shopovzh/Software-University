function evenOddSubtraction(array) {
  let sumEven = 0;
  let sumOdd = 0;

  for (let i = 0; i < array.length; i++) {
    let currentNum = array[i];

    if (currentNum % 2 === 0) {
      sumEven += currentNum;
    } else {
      sumOdd += currentNum;
    }
  }
  let finalSum = sumEven - sumOdd;
  console.log(finalSum);
}

evenOddSubtraction([1, 2, 3, 4, 5, 6]);
