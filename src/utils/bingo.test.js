import { getRandomIntInclusive, getAllElements, getElement, bingoConfig, ROWS, generatePeopleBingo} from'./bingo';

describe('utils/bingo', () => {
    it('.getRandomIntInclusive()', () => {
        Object.values(bingoConfig).forEach(({ min, max }) => {
            expect(getRandomIntInclusive(min, max)).toBeGreaterThanOrEqual(min)
            expect(getRandomIntInclusive(min, max)).toBeLessThanOrEqual(max)
        })
    });

    it('.getAllElements()', () => {
        const allElements = getAllElements()
        expect(allElements).toHaveLength(5)
        expect(allElements[0]).toHaveLength(ROWS)
        expect(allElements[1]).toHaveLength(ROWS)
        expect(allElements[2]).toHaveLength(ROWS)
        expect(allElements[3]).toHaveLength(ROWS)
        expect(allElements[4]).toHaveLength(ROWS)
    });

    it('.getElement()', () => {
        Object.values(bingoConfig).forEach(({ min, max }) => {
            const element = getElement(min, max)

            element.forEach(el => {
                expect(el).toBeGreaterThanOrEqual(min)
                expect(el).toBeLessThanOrEqual(max)
            })
        })
    });

    it('.generatePeopleBingo()', async () => {
        await generatePeopleBingo();
    });
});