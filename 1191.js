function sum(arr) {
  let s = 0
  for (const x of arr) {
    s += x
  }
  return s
}

function max(a, b) {
  if (a >= b) return a
  return b
}

function max_sub(arr) {
  var best_sum = 0
  var current = 0
  for (const x of arr) {
    current = max(0, x + current)
    best_sum = max(best_sum, current)
  }
  return best_sum
}

var kConcatenationMaxSum = function (arr, k) {
  let final_arr = []
  final_arr.push(...arr)
  if (k > 1) final_arr.push(...arr)

  return max(max_sub(final_arr), sum(arr) * k)
}

console.log(sum([-5, -2, 0, 0, 3, 9, -2, -5, 4]))
