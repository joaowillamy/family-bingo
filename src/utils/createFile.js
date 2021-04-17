const path = require('path')
var fs = require('fs');

const fsPromises = fs.promises;
const file = path.join(__dirname, '../data/completPeople.js');

export async function CreateFile(json) {
    let data = JSON.stringify(json)
    
    data = `module.exports = ${data}`

    try {
        await fsPromises.writeFile(file, data)
    } catch (error) {
        if (error) throw error;
    }
}