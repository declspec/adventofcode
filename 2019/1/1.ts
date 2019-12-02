const readline = require('readline');

function calculateFuel(mass: number) {
    return Math.floor(mass / 3) - 2;
}

const reader = readline.createInterface({
    input: process.stdin,
    terminal: false
});

let total = 0;

reader.on('close', () => console.log(total));
reader.on('line', (data: string) => total += calculateFuel(parseInt(data, 10)));