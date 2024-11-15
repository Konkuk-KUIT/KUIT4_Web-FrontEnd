const arr = [-3, -2, -1, 0, 1, 2, 3];

const arr1 = arr.map((value, index) => {
  return value * 2;
});

const arr2 = arr.filter((value) => {
  return value > 0;
});

const arr3 = arr.reduce((prevValue, currValue) => {
  console.log(prevValue, currValue);
  return prevValue + currValue;
});

console.log(arr1);
console.log(arr2);
console.log(arr3);