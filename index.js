var fs = require('fs');
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
    console.log('this is windows')
    console.log(windows)
    windows.forEach((w) => {
      console.log(w.getAnswer())
    })
  })

}


function getPrevTriangleNumber(n) {
  return ((n-1)*n)/2
}

function getAnswer(){
  let w = this;
  
  // if the window array is sorted, then it's the answer is the prev triangle number
  let sortedWindow = w.slice().sort((a, b) => {return a - b});
  let reverseSortedWindow = w.slice().sort((a, b) => {return b - a});

  if (sortedWindow.join(',') === w.join(',')) {
    return getPrevTriangleNumber(w.length)
  }
  // if the window is reverse sorted, then it's answer is the negative prev triangle number
  if (reverseSortedWindow.join(',') === w.join(',')){
    return (-1*getPrevTriangleNumber(w.length))
  }


  //w = current window array. should output answer
  //[188930, 194123, 201345]

  /*
    for (let i = 0; i < k; i++){
      let increasingCount = 0;
      let decreasingCount = 0;

      let val1 = w[i]
      let val2 = w[i+1]

      let currentlyIncreasing = null

      if (val2 > val1) {
        increasingCount += 1
        currentlyIncreasing = true;
      }

    }
  */
  console.log(increasingCount - decreasingCount);
}


function ensureFileArg() {
  if (process.argv.length < 3) {
    console.log('Error: You must enter a filename: Usage: node ' + process.argv[1] + ' FILENAME');
    process.exit(1);
  }
}

run();
