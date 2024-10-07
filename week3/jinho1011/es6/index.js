const arr = [-3, -2, -1, 0, 1, 2, 3];

const arr2 = arr.reduce((prevValue, currValue) => {
  console.log(prevValue, currValue);
  return prevValue + currValue;
});

const arr3 = arr.map((value, idx) => {
  console.log(value, idx);
  return value;
});
const arr4 = arr
  .filter((value) => {
    return value > 0;
  })
  .map((value, index) => value + 10);

console.log(arr2);
