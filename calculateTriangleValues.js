const getTriangleNumber = require('./getTriangleNumber')

function calculateTriangleValues(lengthsObject) {
  let incLengths = lengthsObject.incSubrangesLengths
  let decLengths = lengthsObject.decSubrangesLengths

  let iTriangleNum = getTriangleNumber(incLengths.reduce((sum, value) => {
    return sum + value
  }))

  let dTriangleNum = getTriangleNumber(decLengths.reduce((sum, value) => {
    return sum + value
  }))
  return (iTriangleNum - dTriangleNum)
}

module.exports = calculateTriangleValues