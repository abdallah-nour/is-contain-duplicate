const containsDuplicate = (arr = []) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr.findLastIndex((v) => v === arr[i]) > i) return true;
  }
  return false;
};

const containsDuplicate2 = (arr = []) => {
  for (let i = 0; i < arr.length; i++) {
    const elm = arr[i];
    for (let j = i + 1; j < arr.length; j++) if (arr[j] === arr[i]) return true;
  }
  return false;
};

console.log('has double?', containsDuplicate2([2, 3, 4, 1]));
console.log('has double?', containsDuplicate2([2, 3, 4, 1, 5, 6, 7]));
console.log('has double?', containsDuplicate2([1, 5, -2, -4, 0]));

// const containsDuplicate3 = (arr = []) => {
//   const strArr = ',' + arr.join(',');
//   let j = 1;
//   for (let i = 0; i < arr.length; i++, j += 2) {
//     if (strArr.includes(',' + arr[i], j)) return true;
//   }
//   return false;
// };
