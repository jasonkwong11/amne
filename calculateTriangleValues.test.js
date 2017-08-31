const calculateTriangleValues = require('./calculateTriangleValues');

test('given an length object, returns the correct triangle values', () => {
  let lengthsObject1 = { incSubrangesLengths: [ 3 ], decSubrangesLengths: [ 1 ] }

  let lengthsObject2 = { incSubrangesLengths: [ 2 ], decSubrangesLengths: [ 1, 1 ] }

  let lengthsObject3 = { incSubrangesLengths: [ 1 ], decSubrangesLengths: [ 2 ] }

  expect(calculateTriangleValues(lengthsObject1)).toBe(3)
  expect(calculateTriangleValues(lengthsObject2)).toBe(0)
  expect(calculateTriangleValues(lengthsObject3)).toBe(-1)
})

