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

    //find the windows of k days
    //fakePrices = [1, 2, 3, 4, 5]
    //fakeWindow1 = [1, 2, 3]
    //fakeWindow2 = [2, 3, 4]
    //fakeWindow3 = [3, 4, 5]
    let windows = []
    for (let i = 0; i+k <= n; i++){
      windows.push(prices.slice(i,i+k))
    }
    console.log('this is windows')
    console.log(windows)
    windows.forEach((w) => {
      w.getAnswer()
    })
  })

}

function getAnswer(){
  //w = current window array. should output answer
  //[188930, 194123, 201345]

  /*
    for (let i = 0; i < n; i++){
      let increasingCount = 0;
      let decreasingCount = 0;

      let val1 = w[i]
      let val2 = w[i+1]

      let increasing? = null

      if (val2 > val1) {
        increasingCount += 1
        increasing = true;
      }

    }
  */
  let w = this;
  console.log(increasingCount - decreasingCount);
}


function ensureFileArg() {
  if (process.argv.length < 3) {
    console.log('Error: You must enter a filename: Usage: node ' + process.argv[1] + ' FILENAME');
    process.exit(1);
  }
}

run();
