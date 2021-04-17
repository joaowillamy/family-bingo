import { people } from "../data/people";
import { CreateFile } from "./createFile";

export const ROWS = 2;

export const bingoConfig = {
    b: { min: 1, max: 5},
    i: { min: 6, max: 10},
    n: { min: 11, max: 15},
    g: { min: 16, max: 20},
    o: { min: 21, max: 25}
}

export const newCompletPeople = Object.entries(people).reduce((acc, [code, person]) => ({
    ...acc,
    [code]: { ...person, bingo: getAllElements() }
}), {})

export async function generatePeopleBingo() {
    await CreateFile(newCompletPeople)
}

export function getAllElements() {
    return Object.values(bingoConfig).map(({min, max}) => getElement(min, max))
}

export function getElement(min, max) {
    if (!min || !max) throw new Error('should have min and max to get bingo element')
    const elements = [];
    let newElement;
    while (elements.length < ROWS) {
        newElement = getRandomIntInclusive(min, max)
        if(!elements.includes(newElement)) {
            elements.push(newElement);
        }
    }
    return elements.sort((a, b) => a - b)
}

export function getRandomIntInclusive(min, max) {
    if (!min || !max) throw new Error('should have min and max')

    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}