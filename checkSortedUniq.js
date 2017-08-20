var _ = require('lodash');

const getTriangleNumber = require('./getTriangleNumber');

function checkSortedUniq(w){
  // if the window is sorted && unique, then it's the answer is the prev triangle number
  let uniqSortedWindow = _.uniq(w.slice().sort((a, b) => {return a - b}));
  let uniqReverseSortedWindow = _.uniq(w.slice().sort((a, b) => {return b - a}));

  if (uniqSortedWindow.join(',') === w.slice().join(',')) {
    return getTriangleNumber(w.length)
  }
  // if the window is reverse sorted, then it's answer is the -1 * the prev triangle number
  if (uniqReverseSortedWindow.join(',') === w.slice().join(',')){
    return (-1*getTriangleNumber(w.length))
  }
}

module.exports = checkSortedUniq;