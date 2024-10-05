function reverseArray(rotations, array) {
  let newArray = [];

  for (let i = 0; i < rotations; i++) {
    let currentEl = array[i];
    newArray.push(currentEl);
  }
  console.log(newArray.reverse().join(" "));
}

reverseArray(3, [10, 20, 30, 40, 50]);
