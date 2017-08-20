function findSubrangeLengths(w) {
  let iLengths = [];
  let dLengths = [];

  let currentIncLength = 1;
  let currentDecLength = 1;
  //find the lengths increasing and decreasing subranges
  for (let i = 1; i < w.length; i++){
    let current = w[i]
    let prev = w[i - 1]

    if (current > prev){
      //store the currentDecLength and reset to 0
      if (currentDecLength > 0) {
        dLengths.push(currentDecLength);
        currentDecLength = 0
      }
      currentIncLength++
    }

    if (current < prev) {
      //store the currentIncLength and reset to 0
      if (currentIncLength > 0) {
        iLengths.push(currentIncLength);
        currentIncLength = 0;
      }
      //increment currentDecLength
      currentDecLength++
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

  return {
    incSubrangesLengths: iLengths,
    decSubrangesLengths: dLengths
  }
}

module.exports = findSubrangeLengths;