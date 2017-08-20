const checkSortedUniq = require('./checkSortedUniq');

test('returns the triangle number if uniq && sorted', () => {
  expect(checkSortedUniq([1, 2, 3, 4, 5])).toBe(10)
})

test('returns the negative triangle number if uniq && reverse sorted', () => {
  expect(checkSortedUniq([5, 4, 3, 2, 1])).toBe(-10)
})

test('returns undefined if not unique, but sorted', () => {
  expect(checkSortedUniq([1, 2, 3, 3, 4])).toBe(undefined)
})

test('returns undefined if not sorted, but uniq', () => {
  expect(checkSortedUniq([3, 2, 4, 99]))
})