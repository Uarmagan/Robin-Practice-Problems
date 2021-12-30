import { isPalindrome } from '../01-palindrome'
import { test, expect } from 'vitest'

test('racecar is a palindrome', () => {
  expect(isPalindrome('racecar')).toBe(true)
})

test('Robin is not a palindrome ', () => {
  expect(isPalindrome('robin')).toBe(false)
})

test('tattarrattat is not a palindrome ', () => {
  expect(isPalindrome('tattarrattat')).toBe(true)
})
