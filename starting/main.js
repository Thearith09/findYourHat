const prompt = require('prompt-sync')({sigint: true});
const chalk = require('chalk');

class Field {
    constructor(field, randHeight, randWidth) {
        this._field = field;
        this._randHeight = randHeight;
        this._randWidth = randWidth;
    }

    print() {
        this._field.forEach((elements) => {
            console.log(elements.join``);
        });
    }

    get randHeight() {
        return this._randHeight;
    }

    get randWidth() {
        return this._randWidth;
    }

    static generateField(height, width) {
        let randomField = [];
        let randWidth = 0;
        let randHeight = 0;

        for (let h = 0; h < height; h++) {
            let subField = [];

            for (let w = 0; w < width; w++) {
                let random = Math.floor(Math.random() * width);
                randWidth = Math.floor(Math.random() * width);
                randHeight = Math.floor(Math.random() * height);
                random === 0 ? subField.push(hole) : subField.push(fieldCharacter);
            }
            randomField[h] = subField;
        }

        randomField[randHeight][randWidth] = pathCharacter;
        randomField[Math.floor(Math.random() * height)][Math.floor(Math.random() * width)] = hat;
        return { randomField, randWidth, randHeight };
    }
}

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

let { randomField: field, randHeight, randWidth } = Field.generateField(10, 8);
let myField = new Field(field, randHeight, randWidth);
myField.print();

let row = myField.randHeight;
let col = myField.randWidth;
let statement = '';

while (statement !== 'failed!' && statement !== 'succeeded!') {
    let direction = prompt(chalk.blue.bold('What way? '));
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
