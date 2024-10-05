function condenseArray(input) {
  while (input.length > 1) {
    let temp = [];

    for (let i = 0; i < input.length - 1; i++) {
      temp.push(input[i] + input[i + 1]);
    }
    input = temp;
  }
  console.log(input[0]);
}

condenseArray([2, 10, 3]);
