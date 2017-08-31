let w = [1, 2, 3, 4, 5]

function sortArray(arr) {
  return arr.slice().sort((a, b) => {return a - b})
}

//console.log(sortArray(arr).join(',') === arr.join(','))

let reverseArr = [7, 6, 5, 4, 3]


function reverseSortArray() {
  return arr.slice().sort((a, b) => {return b - a}) 
}


let sortedWindow = w.slice().sort((a, b) => {return a - b});
let reverseSortedWindow = w.slice().sort((a, b) => {return b - a});
/*
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

*/


let win = [1,2,3,1]
//{ incSubrangesLengths: [ 3 ], decSubrangesLengths: [ 1 ] }

let win1 = [188930, 194123, 201345]
//{ incSubrangesLengths: [ 3 ], decSubrangesLengths: [] }

let win2 = [194123, 201345, 154243]
//{ incSubrangesLengths: [ 2 ], decSubrangesLengths: [ 1 ] }
let win3 = [201345, 154243, 154243]
//{ incSubrangesLengths: [1], decSubrangesLengths: [ 1 ] }

function getPrevTriangleNumber(n) {
  return ((n-1)*n)/2
}
/*
Sorted: 
  if 1 element ==> 0
  if 2 elements ==> 1
  if 3 elements ==> 3
  if 4 elements ==> 6
  if 5 elements ==> 

*/
console.log(getPrevTriangleNumber(4))



