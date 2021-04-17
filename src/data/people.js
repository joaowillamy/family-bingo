const type = {
    uncle: 'tio',
    aunt: 'tia',
    cousinF: 'primo',
    cousinM: 'prima',
    mother: "mae",
    father: "pai",
    friendF: 'amiga',
    friendM: 'amigo'
}

export function getMessage({name, familyType}) {
    const messages = {
        [type.uncle]: `Olá meu querido tio ${name}`,
        [type.aunt]: `Olá`,
        [type.cousinF]: `Olá`,
        [type.cousinM]: `Olá`,
        [type.mother]: `Olá`,
        [type.father]: `Olá`,
        [type.friendF]: `Olá`,
        [type.friendM]: `Olá`,
    }
    return messages[familyType]
}

export const people = {
    "maria": {
        name:"Maria Mãe",
        familyType: type.mother,
        bingo: [],
    },
    "margarida": {
        name:"Margarida Mãe",
        familyType: type.aunt,
        bingo: [],
    },
    "Miguel": {
        name:"Margarida Mãe",
        familyType: type.aunt,
        bingo: [],
    },
}