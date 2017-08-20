const fs = require('fs');

const findSubrangeLengths = require('./findSubrangeLengths');
const checkSortedUniq = require('./checkSortedUniq');
const calculateTriangeValues = require('./calculateTriangeValues')

const filename = process.argv[2];

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
      checkSortedUniq(w)
      let subranges = findSubrangeLengths(w)
      console.log(calculateTriangeValues(subranges));
    });
  });
}

function ensureFileArg() {
  if (process.argv.length < 3) {
    console.log('Error: You must enter a filename: Usage: node ' + process.argv[1] + ' FILENAME');
    process.exit(1);
  }
}

run();
