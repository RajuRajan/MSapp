const uniqueRandom = require('unique-random');

const random = uniqueRandom(1, 100000);
export function getUUID(){
    return random()
}