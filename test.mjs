import { expect } from "chai"

import { getLongestPeak } from './index.mjs'

describe('Longest Peak', () => {
    describe('#getLongestPeak', () => {
        it('should return 3', () => {
            const result = getLongestPeak([1, 3, 2])

            expect(result).to.eq(3)
        })
    })
})