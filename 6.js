var convert = function (s, numRows) {
  var matrix = [];
  for (let i = 0; i < numRows; i++) matrix.push([]);

  var down = true;
  var k = 0;
  for (let i = 0; i < s.length; i++) {
    if (k >= numRows) {
      down = false;
      k = numRows - 2;
    }
    if (k === 0) {
      down = true;
    }
    matrix[k].push(s[i]);

    if (down) {
      k++;
    } else {
      k--;
    }
  }

  var answer = "";
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      answer += matrix[i][j];
    }
  }
  return answer;
};

console.log(convert("PAYPALISHIRING", 3));
console.log(convert("PAYPALISHIRING", 4));
console.log(convert("A", 1));
