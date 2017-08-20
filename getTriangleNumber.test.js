const getTriangleNumber = require('./getTriangleNumber')

test('returns the correct triangle number', () => {
  expect(getTriangleNumber(1)).toBe(0)
  expect(getTriangleNumber(2)).toBe(1)
  expect(getTriangleNumber(3)).toBe(3)
  expect(getTriangleNumber(4)).toBe(6)
})

