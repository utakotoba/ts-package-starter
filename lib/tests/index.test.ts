import { describe, it, expect } from 'vitest'

import { sum } from '../src'

describe('simple check', () => {
  it('should add two numbers correctly', () => {
    expect(sum(1, 2)).toBe(3)
    expect(sum(7, 6)).toBe(13)
  })
})
