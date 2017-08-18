let arr = [1, 2, 3, 4, 5]

function sortArray(arr) {
  return arr.slice().sort((a, b) => {return a - b})
}

//console.log(sortArray(arr).join(',') === arr.join(','))

let reverseArr = [7, 6, 5, 4, 3]

function reverseSortArray() {
  return arr.slice().sort((a, b) => {return b - a}) 
}

function getPrevTriangleNumber(n) {
  return ((n-1)*n)/2
}

let window1 = [188930, 194123, 201345];
let window2 = [194123, 201345, 154243];
let w = [201345, 154243, 154243];

let sortedWindow = w.slice().sort((a, b) => {return a - b});
let reverseSortedWindow = w.slice().sort((a, b) => {return b - a});

if (sortedWindow.join(',') === w.join(',')) {
  console.log('sorted!!' + 'with lenght: ' + w.length)
  console.log(getPrevTriangleNumber(w.length))
  return
}
// if the window is reverse sorted, then it's answer is the
// negative triangle number
if (reverseSortedWindow.join(',') === w.join(',')){
  console.log(-1*getPrevTriangleNumber(w.length))
}
