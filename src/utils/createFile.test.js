import { CreateFile } from "./createFile";
import { newCompletPeople } from "./bingo";

describe('CreateFile', () => {
    it('should delete and create file', async () => {
        await CreateFile(newCompletPeople)
        expect(require('../data/completPeople')).toMatchObject(newCompletPeople)
    });
});