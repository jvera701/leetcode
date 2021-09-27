function reach(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

function max(arr) {
    var f = arr[0];
    var pos = 0
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] > f) {
          f = arr[i];
          pos = i
  }
    return { a: f, b:  pos};
}

function findMaxSub(arr) {
  let i = 0;
  let j = 0;
  return { i: i, j: j };
}

/**
 * @param {number[]} target
 * @return {number}
 */
var minNumberOperations = function (target) {
  let number = 0;
  let arr = [];
  for (let i = 0; i < target.length; i++) arr.push(0);

    while (!reach(arr, target)) {
        let [i, j] = findMaxSub(arr)
        for (let k = i; k <= j; k++){
            arr[k]++
        }
  }

  return number;
};

console.log(minNumberOperations([1, 2, 3, 2, 1]));
console.log(minNumberOperations([3, 1, 1, 2]));
console.log(minNumberOperations([3, 1, 5, 4, 2]));
console.log(minNumberOperations([1, 1, 1, 1]));
