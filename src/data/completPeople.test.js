import completPeople from "./completPeople"

describe('completPeople', () => {
    it('should be uniques', () => {
        const uniques = new Set();
        const all = []

        Object.values(completPeople).forEach(({bingo}) => {
            const ticket = JSON.stringify(bingo)
            uniques.add(ticket)
            all.push(ticket)
        })

        expect(uniques.size).toEqual(all.length)
    });
});