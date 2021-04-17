import { getMessage, people } from "./people";

describe('people', () => {
    it('should getMessage return message', () => {
        const message = getMessage(people.maria)
        expect(message).toMatch(/olá/i)
    });
});