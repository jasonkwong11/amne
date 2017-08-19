var fs = require('fs');
var _ = require('lodash');

var filename = process.argv[2];

function run() {
  let prices, n, k;
  ensureFileArg();
  
  // read the data from input.txt and assign to variables
  fs.readFile(filename, 'utf8', function(err, data) {
    if (err) throw err;
    let splitData = data.split("\n")
    // assign prices, n, and k
    prices = splitData[1].split(' ').map((p) => {return parseInt(p)})
    n = splitData[0].split(' ').map((p) => {return parseInt(p)})[0]
    k = splitData[0].split(' ').map((p) => {return parseInt(p)})[1]

    let windows = []
    for (let i = 0; i+k <= n; i++){
      windows.push(prices.slice(i,i+k))
    }
    windows.forEach((w) => {
      console.log(getAnswer(w));
    });
  });
}

function getPrevTriangleNumber(n) {
  return ((n-1)*n)/2
}

function getAnswer(w){

  // if the window is sorted && unique, then it's the answer is the prev triangle number
  let uniqSortedWindow = _.uniq(w.slice().sort((a, b) => {return a - b}));
  let uniqReverseSortedWindow = _.uniq(w.slice().sort((a, b) => {return b - a}));

  if (uniqSortedWindow.join(',') === w.slice().join(',')) {
    return getPrevTriangleNumber(w.length)
  }
  // if the window is reverse sorted, then it's answer is the -1 * the prev triangle number
  if (uniqReverseSortedWindow.join(',') === w.slice().join(',')){
    return (-1*getPrevTriangleNumber(w.length))
  }
  // w = [194123, 201345, 154243]
  // there is 1 increasing subrange and 1 decreasing, so the answer is 0. 
  let increasingCount = 0;
  let decreasingCount = 0;

  //console.log(increasingCount - decreasingCount);
}








let win = [1,2,3,1]

let win1 = [188930, 194123, 201345]
let win2 = [194123, 201345, 154243]
let win3 = [201345, 154243, 154243]
//should return increasingSubrangeLengths: [3, 2]
//should return decreasingSubrangeLengths: [1]

function findSubrangeLengths(w) {
  let iLengths = [];
  let dLengths = [];

  let currentIncLength = 0;
  let currentDecLength = 0;
  // Step 1: Find the lengths increasing and decreasing subranges
  for (let i = 1; i <= w.length; i++){
    let current = w[i]
    let prev = w[i - 1]

    if (current > prev){
      //store the currentDecLength(0 is ok) and reset to 0
      if (currentDecLength > 0) {
        dLengths.push(currentDecLength);
        currentDecLength = 0
      }
      currentIncLength = currentIncLength + 1
    }

    if (current < prev) {
      //store the currentIncLength and reset to 0
      if (currentIncLength > 0) {
        iLengths.push(currentIncLength);
        currentIncLength = 0;
      }
      //increment currentDecLength
      currentDecLength = currentDecLength + 1;
    }

    if (current == prev) {
      //store both currentInc and current Dec lengths and reset both to 0
      if (currentIncLength > 0) {
        iLengths.push(currentIncLength);
        currentIncLength = 0;
      }
      if (currentDecLength > 0) {
        dLengths.push(currentDecLength);
        currentDecLength = 0
      }
    }
  }

  if (currentIncLength > 0) {iLengths.push(currentIncLength)}
  if (currentDecLength > 0) {dLengths.push(currentDecLength)}

  console.log({
    incSubrangesLengths: iLengths,
    decSubrangesLengths: dLengths
  })
}

findSubrangeLengths(win)

function ensureFileArg() {
  if (process.argv.length < 3) {
    console.log('Error: You must enter a filename: Usage: node ' + process.argv[1] + ' FILENAME');
    process.exit(1);
  }
}
