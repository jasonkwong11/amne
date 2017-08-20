const calculateTriangeValues = require('./calculateTriangeValues');

test('given an length object, returns the correct triange values', () => {
  let lengthsObject1 = { incSubrangesLengths: [ 3 ], decSubrangesLengths: [ 1 ] }

  let lengthsObject2 = { incSubrangesLengths: [ 2 ], decSubrangesLengths: [ 1, 1 ] }

  let lengthsObject3 = { incSubrangesLengths: [ 1 ], decSubrangesLengths: [ 2 ] }

  expect(calculateTriangeValues(lengthsObject1)).toBe(3)
  expect(calculateTriangeValues(lengthsObject2)).toBe(0)
  expect(calculateTriangeValues(lengthsObject3)).toBe(-1)
})

