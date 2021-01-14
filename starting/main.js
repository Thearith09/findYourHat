const prompt = require('prompt-sync')({sigint: true});
const chalk = require('chalk');

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor(field) {
        this._field = field;
    }

    print() {
        this._field.forEach((elements) => {
            console.log(elements.join``);
        })
    }

    static generateField(height, width) {
        let randomField = [];
        for (let h = 0; h < height; h++) {
            let subField = [];
            for (let w = 0; w < width; w++) {
                let random = Math.floor(Math.random() * 3);
                if (h === 0 && w === 0) subField.push(pathCharacter);
                else if (h === (Math.floor(height / 2)) && w === (Math.floor(width / 2))) subField.push(hat);
                else if (random === 0) subField.push(hole);
                else subField.push(fieldCharacter);
            }
            randomField[h] = subField;
        }
        return randomField;
    }
}
let field = Field.generateField(10, 8);
let myField = new Field(field);
myField.print();
let row = 0;
let col = 0;
let statement = '';

while (statement !== 'failed!' && statement !== 'succeeded!') {
    let direction = prompt('Whay way? ');
    switch (direction.toLocaleLowerCase()) {
        case 'r':
            col++;
            if ((col < 0 || col >= field[row].length) || field[row][col] !== fieldCharacter && field[row][col] !== hat) {
                statement = 'failed!';
                break;
            } else if (field[row][col] === hat) {
                statement = 'succeeded!';
                break;
            } else {
                field[row][col] = pathCharacter;
                console.clear();
                myField.print();
                break;
            }
            
        case 'l':
            col--;
            if ((col < 0 || col >= field[row].length) || field[row][col] !== fieldCharacter && field[row][col] !== hat) {
                statement = 'failed!';
                break;
            } else if (field[row][col] === hat) {
                statement = 'succeeded!';
                break;
            } else {
                field[row][col] = pathCharacter;
                console.clear();
                myField.print();
                break;
            }
        case 'u':
            row--;
            if ((row < 0 || row >= field.length) || field[row][col] !== fieldCharacter && field[row][col] !== hat) {
                statement = 'failed!';
                break;
            } else if (field[row][col] === hat) {
                statement = 'succeeded!';
                break;
            } else {
                field[row][col] = pathCharacter;
                console.clear();
                myField.print();
                break;
            }
        case 'd':
            row++;
            if ((row < 0 || row >= field.length) || field[row][col] !== fieldCharacter && field[row][col] !== hat) {
                statement = 'failed!';
                break;
            } else if (field[row][col] === hat) {
                statement = 'succeeded!';
                break;
            } else {
                field[row][col] = pathCharacter;
                console.clear();
                myField.print();
                break;
            }
        default: console.log('Invalid direction!');
            break;
    }
}

statement === 'succeeded!' 
    ? 
    console.log(chalk.green.bold(`Concratulation! You ${statement}`)) 
    : 
    console.log(chalk.red.bold(`Sorry, please try again later. You ${statement}`));
