const findSubrangeLengths = require('./findSubrangeLengths');

test('returns the correct length object, given a window array', () => {
  let window1 = [188930, 194123, 201345];
  let window2 = [194123, 201345, 154243];
  let window3 = [201345, 154243, 154243];

  let lengthsObject1 = { incSubrangesLengths: [ 3 ], decSubrangesLengths: [ 1 ] }
  let lengthsObject2 = { incSubrangesLengths: [ 2 ], decSubrangesLengths: [ 1, 1 ] }
  let lengthsObject3 = { incSubrangesLengths: [ 1 ], decSubrangesLengths: [ 2 ] }

  expect(findSubrangeLengths(window1)).toEqual(lengthsObject1);
  expect(findSubrangeLengths(window2)).toEqual(lengthsObject2);
  expect(findSubrangeLengths(window3)).toEqual(lengthsObject3);
})
